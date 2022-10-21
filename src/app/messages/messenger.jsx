import React from 'react';
import '../../index.css';
import SockJsClient from "react-stomp";
import Fetch from "json-fetch";
import {TalkBox} from "react-talk";

class Messenger extends React.Component {

    constructor(props) {
        super(props);
        // randomUserId is used to emulate a unique user id for this demo usage
        this.randomUserName = 'gggg';//UsernameGenerator.generateUsername("-");
        this.randomUserId = '1112222';//randomstring.generate();
        this.sendURL = "/message";
        this.state = {
            clientConnected: false,
            messages: []
        };

    }

    onMessageReceive = (msg, topic) => {
        //alert(JSON.stringify(msg) + " @ " +  JSON.stringify(this.state.messages)+" @ " + JSON.stringify(topic));
        this.setState(prevState => ({
            messages: [...prevState.messages, msg]
        }));
    }

    sendMessage = (msg, selfMsg) => {
        try {
            var send_message = {
                "user": selfMsg.author,
                "message": selfMsg.message
            }
            this.clientRef.sendMessage("/app/message", JSON.stringify(send_message));
            return true;
        } catch (e) {
            return false;
        }
    }

    componentWillMount() {
        console.log("call history");
        Fetch("http://localhost:8900/history", {
            method: "GET"
        }).then((response) => {
            this.setState({messages: response.body});
        });
    }

    render() {
        const wsSourceUrl = "http://localhost:8900/chatting";
        return (
            <div>
                <TalkBox topic="/topic/public" currentUserId={this.randomUserId}
                         currentUser={this.randomUserName} messages={this.state.messages}
                         onSendMessage={this.sendMessage} connected={this.state.clientConnected}/>

                <SockJsClient url={wsSourceUrl} topics={["/topic/public"]}
                              onMessage={this.onMessageReceive} ref={(client) => {
                    this.clientRef = client
                }}
                              onConnect={() => {
                                  this.setState({clientConnected: true})
                              }}
                              onDisconnect={() => {
                                  this.setState({clientConnected: false})
                              }}
                              debug={false} style={[{width: '100%', height: '100%'}]}/>
            </div>
        );
    }
}

export default Messenger;
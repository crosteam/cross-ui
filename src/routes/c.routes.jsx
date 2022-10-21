import {Route, Routes} from "react-router-dom";
import App from "../App";
import Messenger from "../app/messages/messenger";
import React from "react";
import Profile from "../app/resume/profile";
import Wizard from "../app/wizard/wizard";
import Heading from "../app/wizard/heading";
import Work from "../app/wizard/work";
import Education from "../app/wizard/education";
import Skills from "../app/wizard/skills";
import Summary from "../app/wizard/summary";
import Finalize from "../app/wizard/finalize";

function CRoutes() {
    return (

        <Routes>
            <Route exact path="/" element={<App/>}>
                <Route path="/" element={<Profile/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/messages" element={<Messenger/>}/>
            </Route>
            <Route exact path="/wizard" element={<Wizard/>}>
                <Route  exact path="/wizard" element={<Heading/>}/>
                <Route  exact path="/wizard/heading" element={<Heading/>}/>
                <Route  exact path="/wizard/work" element={<Work/>}/>
                <Route  exact path="/wizard/education" element={<Education/>}/>
                <Route  exact path="/wizard/skills" element={<Skills/>}/>
                <Route  exact path="/wizard/summary" element={<Summary/>}/>
                <Route  exact path="/wizard/finalize" element={<Finalize/>}/>

            </Route>
        </Routes>

    );
}

export default CRoutes;
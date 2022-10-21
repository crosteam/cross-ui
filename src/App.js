import Footer from "./components/footer";
import Header from "./components/header";
import {Outlet} from "react-router-dom";
import React from "react";

function App() {


    return (
        <div className="bg-gray-100 static">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );

}

export default App;
import Steeper from "./steeper";
import Footer from "../../components/footer";
import {Outlet, useNavigate} from "react-router-dom";
import {WizardContext} from "../../hooks/cv.context";
import {useEffect, useState} from "react";
import Buttons from "./buttons";
import {active, passive, steeps} from "./steeps";

function Wizard(){

    const [steep, setSteep] = useState(0);

    const navigate = useNavigate() ;

    const currentSteep = () => {
        console.log('fun current steep is: ' , steep , ' content' ,  steeps[steep]);

        steeps.forEach((current , index, arr ) => {
            current[1] = passive ;
            if(steep === index){
                console.log('got it');
                current[1] = active ;
            }
        })

    }

    useEffect(() => {
        console.log('effect');
        currentSteep()
    });

    const nextSteep = () => {
        if(steep < 5) {
            setSteep(steep + 1 ) ;
            navigate('/wizard/'+ steeps[steep + 1][2]);
            console.log('next steep is: ' , steep , ' content' ,  steeps[steep]);
        }
    }

    const backSteep = () => {
        if(steep > 0){
            setSteep(steep -1  ) ;
            navigate('/wizard/'+ steeps[steep - 1][2]);
            console.log('back steep is: ' , steep , ' content' ,  steeps[steep]);
        }

    }
    const handleChange = (e) => {
        console.log('A value was changed: ' + e.target.value);
    }

    const handleNext = (e) => {
        console.log('current steep is: ' , steep , ' content' ,  steeps[steep]);
        nextSteep();
        e.preventDefault();
    }

    const handleBack = (e) => {
        console.log('current steep is: ' , steep , ' content' ,  steeps[steep]);
        backSteep();
        e.preventDefault();
    }
    currentSteep();
    return (
        <WizardContext.Provider value={{handleBack, handleNext , handleChange}}>
            <nav
                className="navbar navbar-expand-lg shadow-md py-2 bg-white relative
                            flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                <Steeper></Steeper>
            </div>
            </nav>
            <Outlet></Outlet>
            <Buttons back ={steep > 0 ? steeps[steep - 1][0]:''} next = {steep < 5 ?steeps[steep + 1][0]:''}></Buttons>
            <Footer></Footer>
        </WizardContext.Provider>
    ) ;
}
export default Wizard ;
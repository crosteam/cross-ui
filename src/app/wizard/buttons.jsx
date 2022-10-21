import {useContext} from "react";
import {WizardContext} from "../../hooks/cv.context";

function Buttons(props :{back: any , next: any}){

   const {handleBack, handleNext} =  useContext(WizardContext)
    return(

        <div className="space-y-1 my-16 mx-[150px]">
            <button type="button" onClick={handleBack}
                    className="inline-block px-6 py-2.5 bg-gray-200
                                    text-white font-medium text-xs leading-tight
                                    uppercase rounded shadow-md hover:bg-gray-700
                                    hover:shadow-lg focus:bg-gray-300 focus:shadow-lg
                                    focus:outline-none focus:ring-0 active:bg-gray-400
                                    active:shadow-lg transition duration-150 ease-in-out">Back : {props.back}
            </button>
            <button type="button" onClick={handleNext}
                    className="inline-block px-6 py-2.5 bg-blue-600 float-right
                                    text-white font-medium text-xs leading-tight
                                    uppercase rounded shadow-md hover:bg-blue-700
                                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                                    focus:outline-none focus:ring-0 active:bg-blue-800
                                    active:shadow-lg transition duration-150 ease-in-out">Next step : {props.next}
            </button>
        </div>
    );
}

export default Buttons ;
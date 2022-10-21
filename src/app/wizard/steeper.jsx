import {steeps} from "./steeps";

function Steeper() {

    let uisteeps = []
    for (let i = 0; i < steeps.length; i++) {

        uisteeps.push(
            < li className={steeps[i][1]} key={i}>
                <div className="stepper-head">
                    <span className="stepper-head-icon"> {i+1} </span>
                    <span className="stepper-head-text"> {steeps[i][0]} </span>
                </div>
                <div className="stepper-content">
                    {steeps[i][0]}
                </div>
            </li>
        )
    }
    return (
        <ul className="stepper" data-mdb-stepper="stepper">
             { uisteeps}
        </ul>
    );
}

export default Steeper;




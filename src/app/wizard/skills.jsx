import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons/faSquarePlus";
import Ratings from "../../components/basic/ratings";
import TextInput from "../../components/basic/text.input";
import {useState} from "react";



function Skills() {

    const [skills, setSkills] = useState([]);
    const addSkill = () =>  {
        setSkills([skills.length,  ...skills]);
        console.log(skills.length);
    }

    return (<>
        <div className="flex flex-grow flex-col justify-center my-16 mx-[150px] min-h-full">
            <p className="text-4xl text-blue-700 mb-4">What skills would you like to highlight?</p>
            <div className="flex grid-cols-3 cardStyle lg:max-w-5xl">
                <button  onClick={() => addSkill()}  className="flex cursor-pointer transition duration-300 ease active:bg-blue-300 w-fit">
                    <FontAwesomeIcon icon={faSquarePlus} className="mr-2 w-6 h-6 text-blue-700 hover:text-blue-400"/>
                    <p className="text-blue-500 font-semibold text-sm align-center w-max hover:text-blue-400">Add you skills here</p>
                 </button>
                <ul className="flex-block min-w-max" id="skills">
                    {skills.map(skill => {
                        return <li className="grid grid-cols-5 gap-4 ex" key={skill}>
                            <div className="pt-8 pl-12"><Ratings/></div>
                            <div className="col-span-4"><TextInput/></div>
                        </li>;
                    })}
                </ul>
            </div>
        </div>

    </>);
}

export default Skills;
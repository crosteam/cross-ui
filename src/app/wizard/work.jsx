import {useContext} from "react";
import {WizardContext} from "../../hooks/cv.context";
import TextInput from "../../components/basic/text.input";
import DatePicker from "../../components/basic/date.picker";

function Work() {
    const {handleChange} = useContext(WizardContext);
    return (
        <>
            <div className="flex flex-grow flex-col justify-center my-16 mx-[150px]">
                <p className="text-4xl text-blue-700 mb-4">Tell us about your most recent job</p>
                <p className="text-2xl text-gray-700 mb-20">We’ll start there and work backward.</p>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-5xl">
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput label="Job Title" onChange={handleChange} id="job"
                                       placeholder="ex: Marketing Manager"/>
                            <TextInput label="Employer" onChange={handleChange} id="employer"
                                       placeholder="ex: Space X"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput label="City" onChange={handleChange} id="city" placeholder="ex: Casablanca"/>
                            <TextInput label="Country" onChange={handleChange} id="country" placeholder="ex: Morocco"/>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <DatePicker label="Start Date" id="start" placeholder="ex: 12/12/2021"/>
                            <DatePicker label="End Date" id="end" placeholder="ex: 12/12/2022"/>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input appearance-none h-4 w-4
                                    border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                                    checked:border-blue-600 focus:outline-none transition duration-200
                                    mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2
                                    cursor-pointer"
                                type="checkbox" value="" id="flexCheckChecked"/>
                            <label className="form-check-label inline-block text-gray-800"
                                   htmlFor="flexCheckChecked">
                                I currently work here
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Work;
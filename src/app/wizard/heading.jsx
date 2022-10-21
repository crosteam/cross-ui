import {useContext} from "react";
import {WizardContext} from "../../hooks/cv.context";
import MailInput from "../../components/basic/mail.input";
import TextInput from "../../components/basic/text.input";

function Heading() {
    const {handleChange} =  useContext(WizardContext);
    return (
        <>
            <div className="flex flex-grow flex-col space-y-1 justify-center my-16 mx-[150px]">
                <h1 className="text-4xl text-blue-700 mb-16">What’s the best way for employers to contact you?</h1>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-5xl">
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput label="First Name" onChange={handleChange} id="firstname" placeholder="ex: Jhon"/>
                            <TextInput label="Last Name" onChange={handleChange} id="lastname" placeholder="ex: Doe"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput label="Profession Name" onChange={handleChange} id="profession" placeholder="ex: Software engineer"/>
                            <TextInput label="Company Name" onChange={handleChange} id="company" placeholder="ex: Microsoft"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <MailInput label="Email Address" onChange={handleChange} id="mail" placeholder="ex: jhon.doe@crossteam.io"/>
                            <TextInput label="Phone Number" onChange={handleChange} id="phone" placeholder="ex: 098765432"/>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Heading ;
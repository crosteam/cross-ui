import {AnimatePresence, motion} from "framer-motion";
import About from "./about";
import Education from "./education";
import Experiences from "./experiences";
import Projects from "./projects";
import SettingMain from "./setting.main";
import Skills from "./skills";

function Settings() {
    return (
        <AnimatePresence>
            <motion.div layout className="p-7 relative">
                <SettingMain/>
                <About/>
                <Skills/>
                <Education/>
                <Projects/>
                <Experiences/>
            </motion.div>
        </AnimatePresence>
    );
}

export default Settings;
  
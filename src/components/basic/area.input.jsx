import {useCallback, useEffect, useState} from "react";

function AreaInput(props :{rec:any}) {

    const [value , setValue ] = useState('');

    const  handleChange = (e) =>  {
        setValue(e.target.value);
        console.log("area value : ", e.target.value);
    }
    const handleExternal =  (rec) => {
        console.log("external handle :", rec  );
        setValue(value.concat(' ').concat(rec));
    }
    useEffect(() => handleExternal(props.rec), [props.rec])



    return <div className="mb-3 xl:w-96">
        <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
        >Example textarea</label
        >
        <textarea
            className="
            form-control
            block
            w-[700px]
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlTextarea1"
            rows="15"
            value={value}
            onChange={(e) => handleChange(e)}
            placeholder="Your message"
        ></textarea>
    </div>;
}
export default AreaInput;
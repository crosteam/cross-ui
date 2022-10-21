import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import Datepicker from "tw-elements/dist/src/js/mdb/datepicker";

function DatePicker(props: { id: any, placeholder: any, label: any }) {

    const [startDate, setStartDate] = useState(new Date());

    return (<div className="form-group mb-6">
        <label htmlFor={props.id} className="form-label inline-block mb-2 text-gray-700">{props.label}</label>
        <div className="datepicker relative" data-mdb-toggle-button="false">
            <input selected={startDate} onChange={(date) => setStartDate(date)}
                   className="form-control
                                      block w-full px-3  py-1.5 text-base
                                      font-normal text-gray-700
                                      bg-white bg-clip-padding
                                      border border-solid border-gray-300
                                      rounded transition ease-in-out m-0
                                      focus:text-gray-700 focus:bg-white focus:border-blue-600
                                      focus:outline-none"
                   data-mdb-toggle="datepicker"
                   placeholder={props.placeholder}/>
            <div className="datepicker-toggle-button" data-mdb-toggle="datepicker">
                <FontAwesomeIcon icon={faCalendar} className="datepicker-toggle-icon"/>
            </div>
        </div>
    </div>);
}

export default DatePicker;
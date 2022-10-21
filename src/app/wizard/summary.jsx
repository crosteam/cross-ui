import AreaInput from "../../components/basic/area.input";
import SearchInput from "../../components/basic/search.input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {Recommandation} from "../../data/recommandation";
import {useEffect} from "react";

function Summary() {
    let record = 'zz';
     const addRec = (index ) => {
        record = Recommandation[index];
        console.log('rec added : ', [record]);
     }

     useEffect(() => addRec() , [record])

    return (<>
        <div className="grid grid-cols-2 w-auto">
            <div className="bg-gray-100 shadow flex-col py-10 pl-12 flex flex-grow">
                <SearchInput/>
                <div className="grid grid-cols-6 w-auto">
                    <div className="m-7 h-auto col-span-2">
                        <div className="border-b border-gray-300 px-3 py-3">
                            Related results
                        </div>
                        <ul className="text-blue-700">
                            <li className="m-2"><span><FontAwesomeIcon className="mr-2" icon={faSearch}/>Area District Sales Manager</span>
                            </li>
                            <li className="m-2"><span><FontAwesomeIcon className="mr-2" icon={faSearch}/>Retail Sales Associate</span>
                            </li>
                            <li className="m-2"><span><FontAwesomeIcon className="mr-2" icon={faSearch}/>Retail Customer Sales Associate</span>
                            </li>
                            <li className="m-2"><span><FontAwesomeIcon className="mr-2" icon={faSearch}/>Registered Nurse</span>
                            </li>
                            <li className="m-2"><span><FontAwesomeIcon className="mr-2" icon={faSearch}/>Charge Registered Nurse</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-4 block rounded-lg shadow-lg m-7 h-[23rem] bg-white text-center">
                        <div className="border-b border-gray-300 px-3 py-3">
                            Showing result for
                        </div>
                        <ul className="overflow-auto h-[20rem] text-left font-mono antialiased">
                            {
                                Recommandation.map((rec, index) => {
                                    return (<li key={index} className="border rounded  border-gray-300 flex">
                                            <span onClick={() => addRec(index)} className="text-xs inline-block h-12 leading-9 ml-3 mt-3 py-1
                                                    px-2.5  text-center whitespace-nowrap align-baseline
                                                    font-bold bg-blue-400 active:bg-blue-600 text-white rounded cursor-pointer">Add</span>
                                            <p className="m-2">{rec}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>

            </div>
            <div className="flex flex-grow  bg-white shadow-sm flex-col py-10 px-20 min-h-full">
                <p className="text-4xl text-blue-700 mb-4">Briefly tell us about your background</p>
                <AreaInput rec={ record } />
            </div>

        </div>
    </>);
}

export default Summary;
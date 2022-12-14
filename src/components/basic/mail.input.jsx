function MailInput(props: { onChange: any, id: any, placeholder: any , label:any}) {
    return <div className="form-group mb-6">
        <label htmlFor={props.id} className="form-label inline-block mb-2 text-gray-700">{props.label}</label>
        <input type="email" onChange={props.onChange} className="form-control block
                                    w-full
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               id={props.id}
               placeholder={props.placeholder}/>
    </div>;
}

export default MailInput ;
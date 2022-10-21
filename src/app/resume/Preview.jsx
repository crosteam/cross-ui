import PageButtons from "./page.buttons";

function Preview(props: { ref: React.MutableRefObject<undefined>, scale: number, templateSwitch: any }) {
    return <div className="block rounded-lg shadow-lg mt-8 mr-8 bg-white">
        <div className="py-3 px-6 border-b border-gray-300">
            <span className="text-xl  text-blue-600">Preview</span>
            <span><PageButtons/></span>
        </div>
        <main className="flex m-auto md:w-auto w-fit flex-col-reverse justify-center items-center">
            <div
                className="m-auto md:w-fit md:h-fit md:left-[10.5rem] md:right-0 md:bottom-0 md:flex md:top-0 ">
                <section
                    ref={props.ref}
                    className="bg-white md:rounded-md transition-all  p-8 h-[840px] w-[524px] md:w-[524px] md:h-[840px] "
                    style={{
                        transform: `scale(${props.scale})`,
                    }}
                >
                    {props.templateSwitch}
                </section>
            </div>
        </main>
    </div>;
}

export default Preview;
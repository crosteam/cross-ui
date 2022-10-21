export default function ErrorPage(props: { error: any }) {
    console.error(props.error);

    return (
        <div id="error-page" className="container flex align-baseline justify-center">
            <div className="flex flex-grow cardStyle
                        m-12 pb-32 pt-24 text-center max-w-3xl
                        text-red-600 hover:bg-gray-200">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{props.error.statusText || props.error.message || props.error}</i>
                </p>
            </div>
        </div>
    );
}
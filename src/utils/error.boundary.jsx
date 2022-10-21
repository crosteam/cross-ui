import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        errorMessage: '',
    };

    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() };
    }

    componentDidCatch(error, info) {
        this.logErrorToServices(error.toString(), info.componentStack);
    }

    // A fake logging service.
    logErrorToServices = console.log;

    render() {
        if (this.state.errorMessage) {
            return <div className="container flex align-baseline justify-center">
                <div className="flex flex-grow cardStyle
                        m-12 pb-32 pt-24 text-center max-w-3xl
                        text-red-600 hover:bg-gray-200">
                <p>{this.state.errorMessage}</p></div></div>;
        }
        return this.props.children;
    }
}


export default ErrorBoundary
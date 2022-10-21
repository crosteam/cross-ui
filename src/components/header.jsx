import TopMenu from "./top.menu";

function Header() {
    return (
        <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <a href="http://localhost:3000">
                    <span className="text-2xl font-extrabold text-blue-600">C</span>
                    <span className="text-2xl font-extrabold text-blue-400">r</span>
                    <span className="text-2xl font-extrabold text-blue-200">o</span>
                    <span className="text-2xl font-extrabold text-green-200">s</span>
                    <span className="text-2xl font-extrabold text-green-400">s</span>
                    <span className="text-2xl font-extrabold text-green-600">t</span>
                    <span className="text-2xl font-extrabold text-red-600">e</span>
                    <span className="text-2xl font-extrabold text-red-400">a</span>
                    <span className="text-2xl font-extrabold text-red-200">m</span>
                </a>
                <div className="flex items-center space-x-1">
                    <TopMenu></TopMenu>
                    <div className="inline-flex md:hidden">
                        <button className="flex-none px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/>
                            </svg>
                            <span className="sr-only">Open Menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
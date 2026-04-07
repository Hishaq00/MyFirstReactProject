import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        < nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md" >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                        E
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-200">
                        Event
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200">
                        Sign In
                    </Link>
                    <Link to="/register" className="text-sm font-medium bg-white text-neutral-950 px-5 py-2.5 rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                        Get Started Free
                    </Link>
                </div>
            </div>
        </nav >

    );

}
export default Navbar;
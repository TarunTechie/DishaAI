import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <img src="/images/logo.png" alt="Disha AI logo"/>
            <div className="nav-links space-x-6 font-header"> {/* Added space-x-4 class */}
            <div className="nav-links">
                <a href="#home">HOME</a>
                <a href="#genesis">Genesis of DISHA AI</a>
                <a href="#differentiator">DISHA AI Differentiator</a>
                <a href="#reach">Reach Us</a>
            </div>
            <button
                className="SEP cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                SEP
            </button>
            <Link to="/login">
                <button
                    className="LOGIN cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    LOGIN
                </button>
            </Link>
        </div>
        </div>
    );
}

export default Header;

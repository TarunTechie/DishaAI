import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [rev,setRev]=useState('hidden')
    function reveal()
    {
        if(rev=='hidden')
            {
                setRev('grid')
            }
        if(rev=='grid')
            {
                setRev('hidden')
            }
    }
    return (
    <div className="header">
            <div className='flex justify-between'>
            <img src="/icons/menu.svg" className='w-10  lg:hidden' onClick={reveal}/>
            <img src="/images/logo.png" className="headerimg"alt="Disha AI logo"/>
            </div>
    <div className={`${rev} font-header transition-all md:flex`}>

            <div className="nav-links">
                <a href="#home">HOME</a>
                <a href="#genesis">Genesis of DISHA AI</a>
                <a href="#differentiator">DISHA AI Differentiator</a>
                <a href="#reach">Reach Us</a>
            </div>
            <div className='nav-btn'>
            <button>SEP</button>
            <Link to="/login"><button>LOGIN</button></Link>
            </div>

    </div>
    </div>
    );
}

export default Header;

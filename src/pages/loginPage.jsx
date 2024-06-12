import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginPage()
{
    const [show,setShow]=useState('password')
    const [eye,setEye]=useState('eye')
    function passwd()
    {
        if(show=="password")
        {
            setShow("text")
            setEye("eyeoff")
        }
        else
        {
            setShow("password")
            setEye("eye")
        }
    }
    return(
        <div className="grid justify-center items-center bg-blue-200 h-screen w-screen">
            <Link to="/"><img src="/images/logo.png"className="mx-auto"/></Link>
            <div className="grid p-10 justify-center items-center gap-2 h-fit w-fit bg-[#212121] border-8 border-orange-800 rounded-xl">
                <h1 className="font-chalk text-white text-center text-6xl p-2">LOGIN</h1>
                <div className="grid gap-4 m-6">
                <input type="text" className="login" placeholder="Username/Email"/>
                <span className="flex login">
                <input type={show} className="bg-transparent focus:outline-none" placeholder="Password"/>
                <button onClick={passwd}><img src={`/icons/${eye}.svg`}/></button>
                </span>
                <button className="relative py-2 px-8 text-black text-base font-chalk font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                LOGIN</button>
                </div>
            </div>
        </div>
    )
}
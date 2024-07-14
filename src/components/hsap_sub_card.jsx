import { useEffect, useRef, useState } from "react";
export default function Hsap_sub_card({ icon, name, dec, color }) {
    const cardRef=useRef()
    useEffect(()=>{
        const observer=new IntersectionObserver((entires)=>{
            entires.forEach((entry)=>{
                if(entry.isIntersecting)
               {
                entry.target.classList.add('animate-slideInFloat')
            }
            })
        })
        observer.observe(cardRef.current)
    },[])
    return (
        <div ref={cardRef} className={`grid scale-0  ${color} backdrop-blur justify-center p-8 sm:w-full md:w-1/3 border-2  border-white rounded-xl text-white my-5 shadow-lg shadow-black/50 `}>
            <img src={icon} className="mx-auto w-36 h-36 rounded-2xl border-b-2 " alt={name} />
            <h1 className="font-heading font-extrabold text-2xl text-center mt-4 p-4 bg-black/5">{name}</h1>
            <p className="font-semibold text-center sm:text-left px-4 bg-black/5 pb-4">{dec}</p>
        </div>
    );
}

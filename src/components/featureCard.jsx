import { useEffect, useState } from "react"

export default function FeatureCard({heading,des})
{
    const[points,setPoints]=useState([])
    useEffect(()=>{
        if(typeof(des)=='string')
        {
            setPoints(des.split(';'))
        }
    },[])
    return(
        <div className="mx-auto my-10 w-1/4  rounded-lg fcard text-white">
            <div className="h-full w-full p-8 rounded-xl font-semibold bg-white/10 backdrop-blur">
            <h1 className="font-heading text-2xl underline underline-offset-2 text-center">{heading}</h1>
            <ul className="list-disc">
                {points.map((p)=>(<li>{p}</li>))}
            </ul>
            </div>
        </div>
    )
}
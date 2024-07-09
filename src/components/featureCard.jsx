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
        <div className="mx-auto my-10 w-1/4 bg-blue-500 p-8 rounded-lg shadow-md shadow-black">
            <h1 className="font-chalk">{heading}</h1>
            <ul className="list-disc">
                {points.map((p)=>(<li>{p}</li>))}
            </ul>
        </div>
    )
}
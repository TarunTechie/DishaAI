import {useEffect,useRef} from "react"
export default function AppreciationsCard({text,name})
{
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
          entry.target.classList.add('animate')
      })
    })
  observer.observe(myRef.current)
  },[])
  const myRef=useRef()
    return(
      <div className="w-fit m-8" ref={myRef}>
      <div className="relative bg-white/10 border-blue-950 border-2 p-4 rounded-lg shadow-xl shadow-[#00000038] max-w-xs backdrop-blur">
        <div className="flex relative">
        <img src="/icons/round-quotes.svg" className="w-6 -top-3 absolute"></img>
        <blockquote className="font-bold p-2 italic">{text}</blockquote>
        </div>
        <h1 className="text-right text-xl pt-4 font-header">{`- ${name}`}</h1>
        <div className="absolute bottom-0 left-1/2 translate-y-full translate-x-24 border-t-8 border-t-black border-x-8 border-x-transparent "></div>
      </div>
      </div>
    )
}
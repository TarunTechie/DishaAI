export default function Hsap_card({icon,name,dec,color})
{
    return(
        <div className={`grid ${color} backdrop-blur justify-center p-8 w-1/3 border-2 border-white rounded-xl text-white my-5 shadow-lg shadow-black/50`}>
            <img src={icon} className={`mx-auto w-36 h-36 rounded-2xl`}/>
            <h1 className="font-heading font-extrabold text-2xl text-center">{name}</h1>
            <p className="font-semibold text-center">
            {dec}
            </p>
        </div>
    )
}
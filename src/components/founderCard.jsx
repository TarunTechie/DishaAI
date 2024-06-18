export default function FounderCard()
{
    return(
        <div className="grid  m-10 items-center shadow-md shadow-black/40 bg-[url('/images/card.jpg')] bg-cover rounded-ss-xl rounded-ee-xl xl:w-1/6">
                <div className="grid justify-center bg-gradient-to-r from-blue-500 rounded-ss-xl">
                    <img src="/test.png" className="w-44 rounded-full h-44 mt-8 shadow-lg shadow-black border-4 border-white" />
                </div>
            <div className="text-white bg-black/10 backdrop-blur p-4 text-center border-2 border-blue-500 rounded-ee-xl shadow-inner shadow-black">
                <h1 className="text-center font-bold text-2xl underline underline-offset-4">Prahalad Karnam</h1>
                <h1>Co-Founder & Director</h1>
                <h1 className="pt-4 text-xl">21+ years of <br/>Global Experience</h1>
            </div>
        </div>
    )
}
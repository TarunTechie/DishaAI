export default function Footer()
{
    return(
            <div className="flex w-screen bg-blue-200  p-4 justify-between">
                <div className="grid gap-4">
                    <h1 className="font-foot underline underline-offset-4 text-3xl text-center">CONTACT US</h1>
                <span className="flex gap-2">
                    <img src="/icons/mail.svg" className="bg-blue-900 rounded-full p-2 w-10 h-10"/><h1 className="font-sans text-xl font-bold">syam@dishaai.com</h1>
                </span>
                <span className="flex gap-2">
                    <img src="/icons/phone.svg" className="bg-blue-900 rounded-full p-2 w-10 h-10"/><h1 className="font-sans text-xl font-bold">+917330751516</h1>
                </span>
                </div>
                <div>
                <h1 className="font-foot underline underline-offset-4 text-center text-3xl">SOCIAL MEDIA</h1>
                <div className="flex">
                <img src="/icons/facebook.svg" className="social hover:bg-[#5293ff]"/>
                <img src="/icons/instagram.svg" className="social hover:bg-[#d300c5]"/>
                <img src="/icons/x.svg" className="social"/>
                <img src="/icons/linkedin.svg" className="social hover:bg-[#0a66c2]"/>
                </div>
                <div>
                </div>
                </div>
            </div>
    )
}

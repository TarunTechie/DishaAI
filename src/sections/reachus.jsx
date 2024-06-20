export default function ReachUs()
{
    return(
        <div className="flex justify-center">
        <div className="reach-container">
                <h1 className="text-4xl text-white font-chalk text-center">REACH US</h1>
            <div className="reach p-4">
                <input placeholder="Name" type="text" className="input"/>
                <input placeholder="Email" id="mail" type="email" className="input"/>
                <textarea placeholder="Your Message" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
                <div className="button-container">
                <div className="send-button">Send</div>
            </div>
        </div>
        </div>
        </div>
    )
}
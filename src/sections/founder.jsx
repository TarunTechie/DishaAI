import FounderCard from "../components/founderCard"
export default function Founder()
{
    return(
        <div>
            <h1 className="text-center text-5xl font-heading underline underline-offset-8">OUR TEAM</h1>
        <div className="grid justify-center bg-white md:flex">
            <FounderCard/>
            <FounderCard/>
        </div>
        </div>
    )
}
import FeatureCard from "../components/featureCard"
export default function Features()
{
    return(
        <div className="w-full bg-[#ffffff]">
        <div className="flex justify-between ">
            <FeatureCard
            heading={"HSAP"}
            des={"Continuous Assessment Program;Unique way of assessing students interests based on decades of research & IVY league experience; Captures Students Experiences,Observations and Interests in aseamless manner on a Regular basis using Al and NLP"}
            />
            <img src="/images/center.png" className="w-96 mx-auto rounded-full"/>
            <FeatureCard
            heading={"GENVIQ"}
            des={"Complementary Learning beyond thecurriculum (per NEP 2020); Address immediate needs to improve competence and skillsets. e.g. Public Speaking, Programming, Arts, Math etc; Continuous 4-5 year Programs to sustain, develop and mould students per their strengths and interests;Best-in-class - Program, Resources,Faculty, Delivery, and Tier 4 accessible pricing"}
            />
        </div>
        <div className="grid w-full">
        <a href="https://www.freepik.com/free-vector/learning-concept-illustration_14230944.htm#fromView=search&page=1&position=1&uuid=7da82f7b-1257-4245-828e-0668737b4208" className="mx-auto">Image by storyset on Freepik</a>
        <FeatureCard
            heading={"SES"}
            des={"A Holistic School wide Integrated System in alignment with the new NEP 2020;Contains all systems needed for the complete functioning of a School; Advanced Management system with use of AI and NLP"}
        />
        </div>
        </div>
    )
}
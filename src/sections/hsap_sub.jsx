import Hsap_sub_card from "../components/hsap_sub_card.jsx"

export default function Hsap_sub() {
    return (
        <div className="w-screen overflow-hidden bg-white bg-opacity-40 pb-28">
            <div className="flex flex-wrap items-stretch text-wrap justify-center gap-10 w-screen" >
                <Hsap_sub_card
                    icon={"/images/Student.png"}
                    name={"Student"}
                    color={'bg-[#001f54]'}
                    dec={"DISHA's - AI based Student Assessment Report (SAR) will help to build and guide an alignment between what students 'Love to do' and what they 'Want to Achieve'. It assures them that they can build successful careers, based on their passion, irrespective of how unconventional it could be."}
                />
                <Hsap_sub_card
                    icon={"/images/parents.svg"}
                    name={"Parent"}
                    color={'bg-[#f0706d]'}
                    dec={"Most of the parents are already DECIDED on their children's career irrespective of their strengths and interests. Our AI system helps to give clarity on what their children strengths and Interests are. It gives information about suitable careers along with the list of subjects, activities and skills which the students can pursue. Parents are urged to explore their children along the recommendations and support them in achieving their aspirations."}
                />
                <Hsap_sub_card
                    icon={"/images/School.png"}
                    name={"School"}
                    color={'bg-[#b19cd9]'}
                    dec={"NEP helps schools to take a giant leap forward by re-configuring the academic delivery. The pedagogical and curricular restructuring will enable schools to support and guide students per their interests and strengths, identified by SAR. Schools can set up the required resources, infrastructure, and support systems to not only enable students & teachers but also create a niche and a brand in the academic circles. This promotes the school branding and attracts more students, government grants and accreditations."}
                />
                <Hsap_sub_card
                    icon={"/images/Teacher.png"}
                    name={"Teacher"}
                    color={'bg-[#708090]'}
                    dec={"A key focus area of NEP is transforming the 'quality of teaching', where teachers will be empowered to lead the change. SAR identifies a list of subjects where the students need to explore beyond their curriculum and subjects where they need more support. Teachers have a unique opportunity to nurture the students according to the above suggestions, and improve the overall academic performance of the students. This ultimately improves the Teachers performance in the school and among the peers."}
                />
            </div>
        </div>
    );
}

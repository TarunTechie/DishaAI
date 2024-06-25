import ReviewCard from "../components/review_card"
export default function Review()
{
    return(
        <div className="grid h-screen w-full bg-white">
        <h1 className="section">Appreciations</h1>
        <div className="grid grid-cols-3 mx-auto">
            <ReviewCard
            name={'Pradyumna'}
            text={`I like how in-depth it was. Not just, "what are you interested in?" but how your personality and personal preferences play into a career fit.`}
            />
            <ReviewCard
            name={'Tanav'}
            text={`I was in cross direction towards my career choices. Thank god DISHAAI guided me the right career which suits my characteristics.`}
            />
            <ReviewCard
            name={'Anshuman'}
            text={`This is a great tool! It is extremely accurate as well. The assessment report has given me a great chance to align my parents and teachers in one go.`}
            />
            <ReviewCard
            name={'Nitai'}
            text={`What an amazing tool to help you understand yourself and get an idea of your potential that you're suited for!.`}
            />
            <ReviewCard
            name={'Sahana'}
            text={`I really felt happy how the counselor cleared all my doubts with patience and interest. The CAR helped me understand my strengths and gave a detailed insight on right career paths.`}
            />
        </div>
        </div>
    )
}
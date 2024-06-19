export default function FounderCard() {
    return (
      <div className="w-full md:w-1/3 lg:w-1/5 h-96  m-4 relative founder perspective  rounded-xl">
        <div className="founderf absolute inset-0 grid  rounded-lg bg-[url('/images/card.jpg')] bg-cover">
          <div className="grid justify-center bg-gradient-to-r from-blue-500 rounded-lg">
            <img src="/test.png" className="w-44 h-44 rounded-full mt-8 shadow-lg shadow-black border-4 border-white" />
          </div>
          <div className="text-white bg-white/40 backdrop-blur p-4 text-center rounded-lg shadow-inner shadow-black">
            <h1 className="text-center font-bold text-lg md:text-xl lg:text-2xl underline underline-offset-4">Name</h1>
            <h2 className="text-sm md:text-base lg:text-lg">Co-Founder & Director</h2>
            <p className="pt-2 md:pt-4 text-sm md:text-base lg:text-xl">21+ years of <br />Global Experience</p>
          </div>
        </div>
        <div className="founderb absolute inset-0 rounded-xl bg-[url('/images/card.jpg')] bg-cover">
          <p className="bg-white/25 backdrop-blur p-8 h-96 md:p-6 lg:p-8 text-xs md:text-sm lg:text-base rounded-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, hic praesentium velit optio tempora porro expedita fugit laborum sed blanditiis autem fugiat, at iusto! Aspernatur quos debitis nesciunt maxime.
          </p>
        </div>
      </div>
    );
  }
  
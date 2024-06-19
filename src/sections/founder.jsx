import FounderCard from "../components/founderCard";

export default function Founder() {
  return (
    <div className="min-h-screen bg-white/50 backdrop-blur py-8">
      <h1 className="text-center text-3xl md:text-5xl font-heading underline underline-offset-8 mb-8">
        OUR TEAM
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <FounderCard />
        <FounderCard />
      </div>
    </div>
  );
}

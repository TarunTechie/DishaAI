import FounderCard from "../components/founderCard";

export default function Founder() {
  return (
    <div className="min-h-screen bg-white/50 backdrop-blur py-8">
      <h1 className="section">
        OUR TEAM
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <FounderCard 
        image={"/images/pralad.jpg"}
        name={"Prahalad Karnam"}
        exp={21}
        abt={"Columbia Business School ,Strategic Leadership - Harvard Business School Strategy & Operations Consulting Global Leader, CPG Industry Leader"}
        occ={"Leader as Coach - Columbia Business School (Mentor Board) People Strategist, Managed Global Change rollouts. Setup and Ran Multi-M$ global business units, Visiting Professor - IIMs and other reputed Universities Strategic Advisor and Mentor to Entrepreneurs"}
        />
        <FounderCard 
        image={"/images/syam.jpg"}
        name={"Syam Ivaturi"}
        exp={15}
        abt={"Business Analytics Professional,"}
        occ={"Visiting Professor – REVA and other Universities Coach and Mentor to Indian & US Insurance ProfessionalsCorporate Member – NASSCOM Lifetime Corporate Member - AIMS"}
        />
      </div>
    </div>
  );
}

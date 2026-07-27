import { notFound } from "next/navigation";
import "../v1/v1.css";
import "../v2/v2.css";
import "../v3/v3.css";
import "../v4/v4.css";

const version = process.env.PORTFOLIO_VERSION ?? "v1";

async function getVersion() {
  switch (version) {
    case "v1": {
      const [
        { default: V1Navbar },
        { default: V1Hero },
        { default: V1About },
        { default: V1Skills },
        { default: V1Projects },
        { default: V1Contact },
        { default: V1Footer },
      ] = await Promise.all([
        import("../v1/components/V1Navbar"),
        import("../v1/components/V1Hero"),
        import("../v1/components/V1About"),
        import("../v1/components/V1Skills"),
        import("../v1/components/V1Projects"),
        import("../v1/components/V1Contact"),
        import("../v1/components/V1Footer"),
      ]);
      return (
        <div className="bg-gray-950 text-white min-h-screen">
          <V1Navbar />
          <main>
            <V1Hero />
            <V1About />
            <V1Skills />
            <V1Projects />
            <V1Contact />
          </main>
          <V1Footer />
        </div>
      );
    }
    case "v2": {
      const [
        { default: V2Navbar },
        { default: V2Hero },
        { default: V2About },
        { default: V2Skills },
        { default: V2Projects },
        { default: V2Contact },
        { default: V2Footer },
      ] = await Promise.all([
        import("../v2/components/V2Navbar"),
        import("../v2/components/V2Hero"),
        import("../v2/components/V2About"),
        import("../v2/components/V2Skills"),
        import("../v2/components/V2Projects"),
        import("../v2/components/V2Contact"),
        import("../v2/components/V2Footer"),
      ]);
      return (
        <div className="bg-[#0a0612] text-white min-h-screen relative overflow-x-hidden">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <V2Navbar />
          <main>
            <V2Hero />
            <V2About />
            <V2Skills />
            <V2Projects />
            <V2Contact />
          </main>
          <V2Footer />
        </div>
      );
    }
    case "v3": {
      const [
        { default: V3Navbar },
        { default: V3Hero },
        { default: V3About },
        { default: V3Skills },
        { default: V3Projects },
        { default: V3Contact },
        { default: V3Footer },
      ] = await Promise.all([
        import("../v3/components/V3Navbar"),
        import("../v3/components/V3Hero"),
        import("../v3/components/V3About"),
        import("../v3/components/V3Skills"),
        import("../v3/components/V3Projects"),
        import("../v3/components/V3Contact"),
        import("../v3/components/V3Footer"),
      ]);
      return (
        <div className="bg-[#080b14] text-white min-h-screen">
          <V3Navbar />
          <main>
            <V3Hero />
            <V3About />
            <V3Skills />
            <V3Projects />
            <V3Contact />
          </main>
          <V3Footer />
        </div>
      );
    }
    case "v4": {
      const [
        { default: GamingNavbar },
        { default: GamingHero },
        { default: GamingAbout },
        { default: GamingSkills },
        { default: GamingProjects },
        { default: GamingContact },
        { default: GamingFooter },
      ] = await Promise.all([
        import("../v4/components/GamingNavbar"),
        import("../v4/components/GamingHero"),
        import("../v4/components/GamingAbout"),
        import("../v4/components/GamingSkills"),
        import("../v4/components/GamingProjects"),
        import("../v4/components/GamingContact"),
        import("../v4/components/GamingFooter"),
      ]);
      return (
        <div className="scanlines bg-black text-green-300 min-h-screen">
          <GamingNavbar />
          <main>
            <GamingHero />
            <GamingAbout />
            <GamingSkills />
            <GamingProjects />
            <GamingContact />
          </main>
          <GamingFooter />
        </div>
      );
    }
    default:
      return notFound();
  }
}

export default async function VersionRenderer() {
  return <>{await getVersion()}</>;
}

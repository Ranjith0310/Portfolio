import GamingNavbar from "./components/GamingNavbar";
import GamingHero from "./components/GamingHero";
import GamingAbout from "./components/GamingAbout";
import GamingSkills from "./components/GamingSkills";
import GamingProjects from "./components/GamingProjects";
import GamingContact from "./components/GamingContact";
import GamingFooter from "./components/GamingFooter";

export default function BetaPage() {
  return (
    <>
      <GamingNavbar />
      <main>
        <GamingHero />
        <GamingAbout />
        <GamingSkills />
        <GamingProjects />
        <GamingContact />
      </main>
      <GamingFooter />
    </>
  );
}

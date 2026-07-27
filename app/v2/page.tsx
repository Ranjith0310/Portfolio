import V2Navbar from "./components/V2Navbar";
import V2Hero from "./components/V2Hero";
import V2About from "./components/V2About";
import V2Skills from "./components/V2Skills";
import V2Projects from "./components/V2Projects";
import V2Contact from "./components/V2Contact";
import V2Footer from "./components/V2Footer";

export default function V2Page() {
  return (
    <>
      <V2Navbar />
      <main>
        <V2Hero />
        <V2About />
        <V2Skills />
        <V2Projects />
        <V2Contact />
      </main>
      <V2Footer />
    </>
  );
}

import V1Navbar from "./components/V1Navbar";
import V1Hero from "./components/V1Hero";
import V1About from "./components/V1About";
import V1Skills from "./components/V1Skills";
import V1Projects from "./components/V1Projects";
import V1Contact from "./components/V1Contact";
import V1Footer from "./components/V1Footer";

export default function V1Page() {
  return (
    <>
      <V1Navbar />
      <main>
        <V1Hero />
        <V1About />
        <V1Skills />
        <V1Projects />
        <V1Contact />
      </main>
      <V1Footer />
    </>
  );
}

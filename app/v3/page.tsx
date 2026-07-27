import V3Navbar from "./components/V3Navbar";
import V3Hero from "./components/V3Hero";
import V3About from "./components/V3About";
import V3Skills from "./components/V3Skills";
import V3Projects from "./components/V3Projects";
import V3Contact from "./components/V3Contact";
import V3Footer from "./components/V3Footer";

export default function V3Page() {
  return (
    <>
      <V3Navbar />
      <main>
        <V3Hero />
        <V3About />
        <V3Skills />
        <V3Projects />
        <V3Contact />
      </main>
      <V3Footer />
    </>
  );
}

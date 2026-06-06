import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
// import { Projects } from "@/sections/Projects";
// import { Experience } from "@/sections/Experience";
// import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

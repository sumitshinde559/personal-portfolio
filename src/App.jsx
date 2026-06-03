import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Projects />
        <Experience />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;

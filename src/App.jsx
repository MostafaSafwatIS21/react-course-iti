import "./App.css";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="m-auto">
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
}

export default App;

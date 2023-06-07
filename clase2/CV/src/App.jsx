import "./App.css";
import { CV } from "./CV/CV";
import Hero from "./components/Hero";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Languages from "./components/languages/Language"; // Asegúrate de utilizar el nombre correcto del componente

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <div>
        <h1>Education</h1>
        {education.map((item, index) => (
          <Education
            key={index}
            name={item.name}
            date={item.date}
            where={item.where}
          />
        ))}
      </div>
      <div>
        <h1>Experience</h1>
        {experience.map((item, index) => (
          <Experience
            key={index}
            name={item.name}
            date={item.date}
            where={item.where}
            description={item.description}
          />
        ))}
      </div>
      <div>
        <h1>Languages</h1>
        {languages.map((item, index) => (
          <Languages
            key={index}
            name={item.name}
            wrlevel={item.wrlevel}
            splevel={item.splevel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

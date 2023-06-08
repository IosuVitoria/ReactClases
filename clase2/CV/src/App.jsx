import "./App.css";
import { CV } from "./CV/CV";
import Hero from "./components/Hero";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Languages from "./components/languages/Language"; // Asegúrate de utilizar el nombre correcto del componente
import Habilities from "./components/habilities/Habilities";
import Volunteer from "./components/volunteer/Volunteer";


const { hero, education, experience, languages, habilities, volunteer } = CV;
console.log(CV)
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
        <h1>Habilities</h1>
        <Habilities habilities={habilities} />
      </div>
      <div>
        <h1>Volunteer</h1>
        {volunteer.map((volunteer, index) =>
        <Volunteer 
        key={index}
        name={volunteer.name} 
        where = {volunteer.where} 
        description = {volunteer.description}/>
        )}
      </div>
     
    </div>

  );
}

export default App;

import "./App.css";
import Accordion from "./Accordion";

const sections = [
  { title: "Section 1", content: "This is the content for section 1." },
  { title: "Section 2", content: "This is the content for section 2." },
  { title: "Section 3", content: "This is the content for section 3." },
];

function App() {
  return (
    <div className="App">
      <Accordion sections={sections} />
    </div>
  );
}

export default App;

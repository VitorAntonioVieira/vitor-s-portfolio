import "./App.css";
import 'react-material-symbols/rounded';
import Navigation from "./components/navigation";
import Scroller from "./components/scroller";
import Section from "./components/section";
import About from "./components/about";

function App() {
  return (
    <>
      <Navigation />

      <Scroller>
        <Section className="text-white flex items-center justify-center px-[20vw]">
          <h1 className="font-inter font-semibold text-5xl">
            Muito prazer, me chamo{" "}
            <span className="text-gradient font-black">Vitor</span>.
            <br />
            Eu tiro suas <span className="font-light italic">ideias</span> do
            papel!
          </h1>
        </Section>
        <Section className="text-white flex items-center justify-center">
          <About />
        </Section>
        <Section className="text-white flex items-center justify-center">
          <p>HortaConnect</p>
        </Section>
        <Section className="text-white flex items-center justify-center">
          <p>SEN-Eye</p>
        </Section>
        <Section className="text-white flex items-center justify-center">
          <p>SeniorCare</p>
        </Section>
        <Section className="text-white flex items-center justify-center">
          <p>MagSmile</p>
        </Section>
      </Scroller>
    </>
  );
}

export default App;

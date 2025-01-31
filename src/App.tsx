import "./App.css";
// import Body from "./components/background";
import Navigation from "./components/navigation";
import Scroller from "./components/scroller";
import Section from "./components/section";

function App() {
  return (
    <>
      <Navigation />

      <Scroller>
        <Section className="text-white flex items-center justify-center">
          <h1 className="font-inter font-semibold text-5xl">
            Muito prazer, me chamo{" "}
            <span className="text-gradient font-black">Vitor</span>.
            <br />
            Eu tiro suas <span className="font-light italic">ideias</span> do
            papel!
          </h1>
        </Section>
        <Section className="text-white flex items-center justify-center">
          <p>Hello, World 2!</p>
        </Section>
        <Section className="text-white flex items-center justify-center">
          <p>Hello, World 2!</p>
        </Section>
      </Scroller>
    </>
  );
}

export default App;

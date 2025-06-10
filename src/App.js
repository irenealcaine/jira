import "./styles.css";
import Card from "./Components/Card/card";
import jiras from "./data/jiras";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {jiras.map((jira) => (
          <Card
            com={jira.Com}
            index={jira.nº}
            accepted={jira.Aceptada}
            deployed={jira.Subida}
            family={jira.Familia}
          />
        ))}
      </div>
    </div>
  );
}

import "./App.css";
import Video from "./pages/Video.js";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={300}
          messages={237}
          shares={15}
          name="Thamyrs_Ebac"
          description="Gatinho pulando"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video 
          likes={300}
          messages={237}
          shares={15}
          name="Pedro"
          description="Gatinho perdido"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;

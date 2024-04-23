import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="w-full bg-center bg-cover" style={{
        backgroundImage: 'url("/image/landingBG.png")'
      }}>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section>
        <h1>Landing</h1>
      </section>
    </div>
  );
}

export default App;

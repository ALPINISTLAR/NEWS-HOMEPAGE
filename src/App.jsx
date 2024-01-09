import Grid from './components/Grid';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <main className="max-content relative flex flex-col justify-center overflow-x-hidden px-3 pb-4">
    <Navbar />
    <Grid />
    </main>
    </>
    );
  }

  export default App;
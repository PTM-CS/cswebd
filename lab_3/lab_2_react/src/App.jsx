import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
      <Header />
      {/*контейнер з обмеженням ширини та відступами */}
      <main className="max-w-3xl mx-auto w-full p-6 space-y-6 flex-grow">
        <About />
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
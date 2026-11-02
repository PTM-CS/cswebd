import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="max-w-3xl mx-auto w-full p-6 space-y-6 flex-grow">
        <About />
        <Education />
        <Experience />
        <Reviews />
      </main>
      
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
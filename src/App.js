import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;

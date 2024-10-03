import Heading from './components/Heading';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="relative">
      <div className="relative bg-gradient-to-b from-gray-900 to-indigo-800 h-screen flex flex-col justify-center items-center">
        <Navbar></Navbar>
        <Heading />

        <svg
        className="absolute bottom-0 left-0 right-0 w-full h-auto"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#111827"
          fillOpacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,106.7C672,85,768,107,864,138.7C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      </div>

      <section id='features' className="bg-gray-900 pb-20">
        <div className="container mx-auto text-center">
          <Features />
        </div>
      </section>

      <section id='team' className='flex flex-col bg-gray-900 items-start pb-32'>
        <div className='container mx-auto'>
        <Team />
        </div>
      </section>


      <section id='projects' className='flex flex-col bg-gray-900 items-start'>
        <div className='container mx-auto'>
        </div>
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;

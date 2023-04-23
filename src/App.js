import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Experience from './component/Experience/Experience';
// import Services from './component/Services/Services';
import Portfolio from './component/Portfolio/Portfolio';
// import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App"> 
    <ToastContainer />
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

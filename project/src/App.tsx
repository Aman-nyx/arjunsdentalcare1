import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Emergency24 from './components/Emergency24';
import About from './components/About';
import Doctors from './components/Doctors';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Header />
      <Navigation />
      <Hero />
      <Emergency24 />
      <About />
      <Doctors />
      <Treatments />
      <Gallery />
      <Appointment />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
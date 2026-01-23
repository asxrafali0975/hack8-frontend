// src/App.jsx
import Navbar from './Navbar';
import Hero from './Hero';
import SearchBar from './SearchBar';
import FeaturedHackathons from './FeaturedHackathons';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import PhotoPage from './PhotoPage';
import EventSchedule from './EventSchedule';
import IntroSection from './IntroSection';

function DefaultPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <IntroSection/>
      <EventSchedule/>
      <PhotoPage/>

    
      <Footer/>
  
    </div>
  );
}

export default DefaultPage;
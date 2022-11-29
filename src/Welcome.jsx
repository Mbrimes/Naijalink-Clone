import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import OurServices from './pages/OurServices';
import News from './pages/News';
import NaijaLink from './pages/NaijaLink';
import BusinessIntelligence from './pages/BusinessIntelligence';
import MarketEntry from './pages/MarketEntry';
import MeetingsEvents from './pages/MeetingsEvents';
import Implementation from './pages/Implementation';
import Disclaimer from './pages/Disclaimer';
import GDPR from './pages/GDPR';
import Credits from './pages/Credits';


function Welcome(){
  return(
    <> 
    <Router>
    <Routes>
    <Route exact path="/" element={<NaijaLink/>} />
    <Route path="/OurServices" element={<OurServices/>} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/News" element={<News/>} />
    <Route path="/BusinessIntelligence" element={<BusinessIntelligence/>} />
    <Route path="/MarketEntry" element={<MarketEntry/>} />
    <Route path="/MeetingsEvents" element={<MeetingsEvents/>} />
    <Route path="/Implementation" element={<Implementation/>} />
    <Route path="/Disclaimer" element={<Disclaimer />} />
    <Route path="/GDPR" element={<GDPR />} />
    <Route path="/Credits" element={<Credits />} />
    </Routes>
    </Router>
    </>
    )
};
export default Welcome;
import React from 'react'; 
import { Link } from 'react-router-dom';
import '../build/css/Naija.css';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png';
import MeetBack from '../images/MeetBack.jpg';
import meeting from '../images/meeting.png';
import mission from '../images/mission.png';
import megaphone from '../images/megaphone.png';
import network from '../images/network.png';



const MeetingsEvents = () => {
	return (
		<>
		<div class="nav" style={{backgroundImage:`url(${MeetBack})`}}>
			<nav class="navbar">
					<div class="logo">
						<img src={logo} alt="logo" />
					</div>
					<ul class="nav-links">

						<input type="checkbox" id="checkbox_toggle" />
						<label for="checkbox_toggle" class="hamburger">&#9776;</label>

						<div class="menu">
							<li><Link to="/">WELCOME</Link></li>
							<li class="services">
								<Link to="/OurServices">OUR SERVICES</Link>

								<ul class="dropdown">
									<li><Link to="/BusinessIntelligence">Business Intelligence</Link></li>
									<li><Link to="/MarketEntry">Market Entry & Growth Strategy</Link></li>
									<li><Link to="/MeetingsEvents">Meetings, Events & PR</Link></li>
									<li><Link to="/Implementation">Implementation</Link></li>
								</ul>
							</li>
							<li><Link to="/AboutUs">ABOUT US</Link></li>
							<li><Link to="/Contact">CONTACT</Link></li>
							<li><Link to="/News">NEWS</Link></li>

						</div>
					</ul>
				</nav>
				<ul class="co">
					<li><a href="https://ng.linkedin.com/company/naijalink?trk=ppro_cprof" target="_blank" rel="noreferrer"><img src={ind} alt="Linkedln logo" /></a></li>
					<li><a href="info@naijalink.eu" target="_blank" rel="noreferrer"><img src={mess} alt="message logo" /></a></li>
					<li><a href="https://twitter.com/naijalinkLTD" target="_blank" rel="noreferrer"><img src={twi} alt="twitter logo" /></a></li>
				</ul>
		
		<div class="Bus">
		<h1>Meetings, Events & PR</h1></div></div>
		<div class="bux">
			<h2>REACH THE RIGHT AUDIENCE</h2>
			<p>Whether you would like to meet with key clients, partners and decision makers, or promote your company, we will take the hassle away so you can focus on your core business activities</p>
			 <div class="flx">
			 <div>
			 <img src={meeting} alt="meeting img" />
			 	<h4>Tailored Meeting Itineraries</h4>
			 	<p>Visitors to Nigeria want to be safe and effective. We set up a meeting itinerary with decision makers, and also take care of all the logistics, protocol & safety so you have all
			 	 the time & comfort to focus on your business</p>
			 </div>
			 <div>
			 <img src={mission} alt="mission img" />
				<h4>Trade Missions</h4>
			 	<p>We're your best partner for the organization of trade missions. With our dedicated support you can ensure the best B2B meetings, networking events as well as logistics. We take
			 	 all the stress away and deliver interesting and effective visits for both small and (very) large groups of companies.</p>
			 </div>
			 <div>
			 <img src={megaphone} alt="megaphone img" />
				<h4>PR & Marketing</h4>
				<p>In support of your other activities, we can advise on or arrange professional PR and marketing around your product or services. We help ensure you message reaches the right ears,
					and through the right channel.</p>
			 </div>
			 <div>
			 <img src={network} alt="network img" />
				<h4>Networking Events</h4>
			 	<p>Whether you would like to launch your company in the market, thank your clients, or organize a seminar: we will take your worry away by arranging venue, guests, speakers and 
			 	all other ingredients for a successful event.</p>
			 </div>
			 </div>
		</div>

			<footer>
				<div class="nes">
					<Link to="/BusinessIntelligence">Business Intelligence</Link>
					<Link to="/MarketEntry">Market Entry & Growth Strategy</Link>
					<Link to="/MeetingsEvents">Meetings, Events & PR</Link>
					<Link to="/Implementation">Implementation</Link>
				</div>

				<div class="nest">
					<p>Naijalink Limited</p>
					<a href="https://goo.gl/maps/qwMrMnGFVPw" target="_blank" rel="noreferrer">​2-4 Moseley Road Ikoyi, Lagos, Nigeria.</a>
					<a href="tel:2348106328606" target="_blank" rel="noreferrer">+234 810 632 8606 | +234 908 200 3225</a>
					<a href="info@naijalink.eu" target="_blank" rel="noreferrer">​Send a mail</a>
	  			</div>

				<div class="nestz">
					<Link to="/GDPR">GDPR & Privacy Policy</Link>
					<Link to="/Disclaimer">Disclaimer</Link>
					<Link to="/Credits">Credits</Link>
					<p>Naijalink &copy; 2021</p>
					<div class="fot">
						<a href="https://ng.linkedin.com/company/naijalink?trk=ppro_cprof" target="_blank" rel="noreferrer"><img src={ind} alt="Linkedln logo" /></a>
						<a href="info@naijalink.eu" target="_blank" rel="noreferrer"><img src={mess} alt="message logo" /></a>
					</div>
				</div>
			</footer>
		</>
	)
};

export default MeetingsEvents;
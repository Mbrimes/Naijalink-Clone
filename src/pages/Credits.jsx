import React from 'react'
import { Link } from 'react-router-dom';
import '../build/css/Naija.css';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png'; 

const Credits = () => {
	return (
		<>
			<div class="nav" style={{ height: '0px' }}>
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
			</div>
			<h1 style={{marginTop:"10em"}}>Author: Djakpo Abraham</h1>
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
export default Credits;
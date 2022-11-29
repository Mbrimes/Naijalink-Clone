import React from 'react'
import { Link } from 'react-router-dom';
import '../build/css/Naija.css';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png';
import contactme from '../images/contactme.jpg'
import visitor from '../images/visitor.png';
import email from '../images/email.png';
import phonec from '../images/phonec.png';

const Contact = () => {
	return (
		<>
			<div class="nav" style={{ backgroundImage: `url(${contactme})` }}>
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
				<h1>Contact Us</h1></div>
			</div>

			<div class="cas">
				<div><a href="info@naijalink.eu" target="_blank" rel="noreferrer">​<img src={email} alt=""/>info@naijalink.eu</a></div>
				<div><a href="tel:+2348106328606" target="_blank" rel="noreferrer">​<img src={phonec} alt=""/>+2348106328606</a></div>
				<div><a href="https://goo.gl/maps/qwMrMnGFVPw" target="_blank" rel="noreferrer">​<img src={visitor} alt=""/>2-4 Moseley Road Ikoyi, Lagos, Nigeria</a></div>
			</div>
			<div class="map"><iframe title= "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.520463432347!2d3.4445587000000004!3d6.455541500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ebf6df7bbb%3A0xc6544dafb6ba8d81!2s2%2F4%20Moseley%20Rd%2C%20Ikoyi%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1668443920121!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>


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
export default Contact;
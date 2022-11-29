import React from 'react'; 
import { Link } from 'react-router-dom';
import '../build/css/Naija.css';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png';
import Implemenback from '../images/Implemenback.jpg';
import building from '../images/building.png';
import employees from '../images/employees.png';
import circuit from '../images/circuit.png';
import support from '../images/support.png';


const Implentation = ()=>{
	return (
		<>
		<div class="nav" style={{ backgroundImage: `url(${Implemenback})` }}>
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
					<h1>Implementation</h1></div>
					</div>
			<div class="bux">
				<h2>ESTABLISH YOUR BUSINESS IN NIGERIA</h2>
				<p>When you have taken the decision to have a local presence in Nigeria, it will pay off to have a trusted liaison and advisor on board.
				 Working with us means immediate cost savings as well as achieving the desired outcome efficiently and professionally.</p>
				<div class="flx">
				<div>
				<img src={building} alt="building img" />
					<h4>Local Entity Setup</h4>
					<p>We advise on the best local structure, and support you with the legal incorporation, identification of suitable accountants, setting up bank accounts, identification
					 of office space and all other practical support required.</p>
				</div>
				<div>
					<img src={employees} alt="employees img" />
					<h4>Recruitment of Key Personnel</h4>
					<p>Whether you need an expatriate or experienced local team (or a mix of both): We can streamline the entire recruitment process including advice on salary structures. 
					Through our partners we can also offer payroll services if you have not yet set up a local entity</p>
				</div>
				<div>
					<img src={circuit} alt="circuit img" />
					<h4>Representation & Liaison Services</h4>
					<p>Appointing agents / distributors is one of the most popular models to enter the Nigerian market space. We can liaise with your agent to give you objective feedback
					 on performance and suggestions for improvement - and the work with you and the agent to implement such changes.</p>
				</div>
				<div>
				<img src={support} alt="support img" />
					<h4>Day to Day Support</h4>
					<p>Let's be simple about this; we will be able to support you. Everyday, all day. What do you need us to do?</p>
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

export default Implentation;
import React from 'react'; 
import { Link } from 'react-router-dom';
import '../build/css/Naija.css';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png';
import MarketBack from '../images/MarketBack.jpg';
import connection from '../images/connection.png';
import brainstorm from '../images/brainstorm.png';
import planning from '../images/planning.png';
import legalpaper from '../images/legalpaper.png';


const MarketEntry = () => {
	return (
		<>
			<div class="nav" style={{ backgroundImage: `url(${MarketBack})`}}>
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
		<h1>Market Entry & Growth Strategy</h1></div>
		</div>
		<div class="bux">
			<h2>CREATE YOUR PATH TO SUCCESS</h2>
			<p>Nigeria is an exciting, challenging, diverse and unique country. Doing business here needs a thorough strategy taking into account the market conditions.
			 We will work with you to design your plans and strategy, using our local insights, detailed market information and input from sector experts and specialists.</p>
			 <div class="flx">
			 <div>
					<img src={connection} alt="connection img" />
			 	<h4>Country & Market Entry Strategy</h4>
			 	<p>No country is the same, and a strategy that may have worked for another country even in Africa - may be inadequate for Nigeria. We will shape your market
			 	entry road map based on facts and local insights.</p>
			 </div>
			 <div>
					<img src={brainstorm} alt="brainstorm img" />
			 	<h4>Strategic Sound Boarding</h4>
			 	<p>Nigeria is a constantly developing country and challenges may come up unexceptedly. We will support you in such cases with local insights and advice, often
			 	based on consultations with business leaders and/or government.</p>
			 </div>
			 <div>
					<img src={planning} alt="planning img" />
			 	<h4>Business & Financial Plans</h4>
			 	<p>A crucial step towards success business plan. We will help you gain insights into the costs, risks and returns of doing business with Nigeria, to enable you 
			 	enter the market stronger.</p>
			 </div>
			 <div>
					<img src={legalpaper} alt="legalpaper img" />
			 	<h4>Legal Assessment</h4>
			 	<p>We will examine the legal framework, regulatory requirements and limitations, as well as the options you have to establish locally or export, and then will 
			 	design a strategy that ensures full compliance and effectiveness.</p>
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

export default MarketEntry;
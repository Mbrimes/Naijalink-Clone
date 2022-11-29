import React from 'react'; 
import { Link } from 'react-router-dom';
import '../build/css/Naija.css'; 
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png';
import BusinessBack from '../images/BusinessBack.jpg';
import research from '../images/research.png';
import cautionsign from '../images/cautionsign.png';
import investment from '../images/investment.png';
import collaboration from '../images/collaboration.png';


const BusinessIntelligence = ()=>{
	return(
		<>
			<div class="nav" style={{ backgroundImage: `url(${BusinessBack})` }}>
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
				<h1>Business Intelligence</h1></div>
			</div>
			<div class="bux">
				<h2>AN INTELLIGENT APPROACH</h2>
				<p>Knowledge is everything. In the case of Nigeria, it can be difficult to find reliable and accurate information, and even identify who you can work or partner with.
				 We make such insights available, creating the transparency required to take the next steps in your market entry or business development in Nigeria.</p>
				<div class="flx">
				<div>
				    <img src={research} alt = "research img"/>
					<h4>Market & Sector Research</h4>
					<p>Intelligence is key to a successful market entry and business expansion. Information is not readily available, however. Moreover, the country is huge and diverse,
					 and every area or sector comes with its own characteristics. We will gather the information you need.</p>
				</div>
				<div>
					<img src={collaboration} alt="collaboration img"/>
					<h4>Identification of Partners & Importers</h4>
					<p>If your partner or importer is not effective, you will miss out on all the opportunities. We will shortlist, assess and introduce companies in Nigeria who have 
					the capacity to be successful</p>
				</div>
				<div>
					<img src={investment} alt="investment img"/>
					<h4>Investment Preparation & Feasibility Studies</h4>
					<p>Companies who have grown beyond mere trading with Nigeria can expect our expert support in the sound preparation of their investment plans.
					 For each client we will assemble a local - international team with relevant expertise in e.g. finance, commercial, legal and a particular business sector.</p>
				</div>
				<div>
					<img src={cautionsign} alt="cautionsign img"/>
					<h4>Risk Assessment & Due Diligence</h4>
					<p>We will identify risks that can negatively impact your business in Nigeria, and will develop mitigating strategies together with you. The full scene of due diligence services is also on the table. </p>
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
export default BusinessIntelligence;
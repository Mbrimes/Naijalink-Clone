import React from 'react'; 
import { Outlet, Link } from 'react-router-dom';
import '../build/css/Naija.css';
import logo from '../images/logo.png';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import africa from '../images/africa.png';
import nigeria from '../images/nigeria.png';
import link from '../images/link.png';
import solution from '../images/solution.png'; 
import meet from '../images/meet.png';
import planning from '../images/planning.png';
import target from '../images/target.png';
import nd from '../images/nd.jpg';
import back from '../images/back.jpg';
import rd from '../images/rd.jpg'; 

const NaijaLink = () =>{
	return(
		<>
		<section class="nzi" style={{backgroundImage:`url(${back})`}}>
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
	

	<section class="hero"> 
			<h1>MAKE YOUR MOVE</h1>
			<p>Professional and Reliable Market Entry and Advisory Services in Nigeria</p>
			<div class="our">
				<p><Link to="/OurServices">OUR SERVICES</Link></p>
				<p><Link to="/Contact">CONTACT US</Link></p>
			</div> 
	</section> 
</section>

<section class="sec" style={{backgroundImage:`url(${nd})`}}> 
		<h2>We Understand What You Need</h2>
		<p>Whether you are exploring trading with Nigeria, planning on expanding your business, promoting your company to a targeted audience, or setting up an entity in Nigeria - NaijaLink is your trusted advisor and service provider.</p>
		<div class="gri">
			<div>
				<img src={africa} alt="" />
				<p>Africa is the new frontier for business, and Nigeria possibly even more so. It has the largest economy and population on the continent, and offers business opportunities in every sector.</p>
			</div>
			<div>
				<img src={nigeria} alt="" />
				<p>However, doing business in Nigeria can be complex and challenging. Our services create transparency, thereby reducing the time, risks and costs associated with entering the market.</p>
			</div>
			<div>
				<img src={link} alt="" />
				<p>We will link you with Nigeria's opportunities and help you create a strong business presence in the country.At NaijaLink, we are committed to your success.</p>
			</div>
		</div> 
</section>

<section class="sec2">
	<h3>Our Services</h3>
	<p class="nig">Nigeria is not the easiest country to do business in, yet the rewards can be substantial for those companies that get it right. There is no easy template for success, but we have developed a suite of services to support you each step of the way. All our services are bespoke, tailored to the particular requirements of our esteemed clients.</p>
	<p class="lea">Learn more about our services and company by watching this interview with our MD Thessa Bagu on TVC Communications:<a href="https://www.youtube.com/watch?v=ZbNmN_Zx84E&feature=youtu.be"> https://www.youtube.com/watch?v=ZbNmN_Zx84E&feature=youtu.be</a></p>

	<div class="stup">
	<div class="sol">
		<img src={solution} alt="" />
		<div class="hou">
		<h4><Link to="/BusinessIntelligence">Business Intelligence</Link></h4>
		<p>Market & sector research <br/>
		   Identification of partners & importers<br/>
		   Investment preparation & feasibility studies<br/>
		   Risk assessment & due dilligence
		</p></div>
	</div>
	<div class="sol">
		<img src={planning} alt="" />
		<div class="hou">
		<h4><Link to="/MarketEntry">Market Entry & Growth Strategy</Link></h4>
		<p>Country & market entry strategy<br/>
		   Strategic sound boarding<br/>
		   Business & financial plans<br/>
		   Legal assessment
		</p></div>
	</div>
	<div class="sol">
		<img src={meet} alt="" />
		<div class="hou">
		<h4><Link to="/MeetingsEvents">Meetings, Events and PR</Link></h4>
		<p>
			Tailored meeting itineraries<br/>
			Trade missions<br/>
			PR & Marketing<br/>
			Networking events<br/>
		</p></div>
	</div>
	<div class="sol">
		<img src={target} alt="" />
		<div class="hou">
		<h4><Link to="/Implementation">Implementation</Link></h4>
		<p>Local entity set up<br/>
			Recruitment of key personnel<br/>
			Representation & liaison services<br/>
			Day to day support
		</p></div>
	</div>
	</div>
 </section>

<section class="abo" style={{backgroundImage:`url(${rd})`}}> 
		<h2>About Us</h2>
		<p>Naijalink Ltd was founded in 2009 with the mission to link international companies with reputable companies and qualified opportunities in Nigeria,
		 thereby creating value for our clients as well in Nigeria. We link you with Naija, the 'new' Nigeria: young,
		 dynamic and incredibly entrepreneurial. Supported by our knowledge, experience and extensive network, 
		 our clients will gain access to real and promising business opportunities.
		<span>The company is owned and run by the Dutch consultant/ investor/ economist <i><a href="https://www.linkedin.com/in/thessabagu"> Thessa Bagu </a></i>
		 who has lived in Nigeria since 2006. She is supported by an ever-expanding team of <strong> skilled and motivated </strong> young professionals.</span>
		<b>Learn more about our services and company by watching this interview with our MD Thessa Bagu on 
		TVC Communications:<a href="https://Naijalink.eu/"> https://www.youtube.com/watch?v=ZbNmN_Zx84E&feature=youtu.be</a></b></p>

		<div class="ore">LEARN MORE</div> 
</section>

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

			<Outlet />
		</>  
		);
} 

export default NaijaLink; 
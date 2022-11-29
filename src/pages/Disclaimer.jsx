import React from 'react'
import { Link } from 'react-router-dom';
import '../build/css/Naija.css';
import ind from '../images/ind.png'
import mess from '../images/mess.png';
import twi from '../images/twi.png';
import logo from '../images/logo.png';



const Disclaimer = () => {
	return (
		<>
	<div class="nav" style={{height:'0px'}}>
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
 
			<div class="sss">
			<p>The information contained in this website is for general information purposes only.
			 The information is provided by Naijalink and while we endeavour to keep the information up to date and correct,
			  we make no representations or warranties of any kind, express or implied, about the completeness, accuracy,
			   reliability, suitability or availability with respect to the website or the information, products, services,
			    or related graphics contained on the website for any purpose.
			     Any reliance you place on such information is therefore strictly at your own risk.</p>
			<p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage,
			 or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
			<p>Through this website you are able to link to other websites which are not under the control of Naijalink.
			We have no control over the nature, content and availability of those sites.
			 The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
			<p>Every effort is made to keep the website up and running smoothly. However, Naijalink takes no responsibility for,
			 and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
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
export default Disclaimer;
import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer =()=>{
	return(
		<footer>
			<div className='container-fluid'>
				<div className='row justify-content-center'>
					<div className='col-md-3'>
						<div className="wrapfooter">
							<ul>
								<li><Link to='/about-us'>About us</Link></li>
								<li><Link to='/contact'>Contact us</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
					<div className='menu'>
						<ul className="nav">
							<li className="nav-item">
								<a href="#" className="nav-link"><i className="fab fa-facebook"></i></a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link"><i className="fab fa-instagram"></i></a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link"><i className="fab fa-youtube"></i></a>
							</li>		
						</ul>
	            	</div>
				</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;


/*
<footer>
		<div className="container-fluid">
			<div className="container">
				<div className="row">
					
					<div className="col-xl-4">
						<div className="wrapfooter">
							<p>Contact:</p>
							<ul>
								<li>Phone:+36703567042</li>
								<li>Location: Budapest Hungary</li>
							</ul>
						</div>
					</div>

					<div className="col-xl-5">
						<div className="wrapfooter">
						<h6>© Untitled. All rights reserved. Design  Guest</h6>
					</div>
					</div>
					
					
				
				
				</div>
			</div>
		</div>
	</footer>*/
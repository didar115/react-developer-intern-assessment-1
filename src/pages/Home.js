import React from "react";

function Home() {
    return (
			<section className="container">
				<header>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about-us">About</a>
						</li>
						<li>
							<a href="#services">Services & Package</a>
						</li>
						<li>
							<a href="#gallery">Gallery</a>
						</li>
						<li>
							<a href="#package">Package</a>
						</li>
						<li>
							<a href="#faq">FAQ</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</header>

				<div className="middle-card">
					<div>
						<h1>A picture is worth a thosand words</h1>
						<div className="middle-description">
							<p>
								It clearly and beautiful capture your emotions-the joy,the
								laughter, the tears,you name it.Our pride is in offering the
								best shoots as we help you tell your story in photos.
							</p>
							<button className="custom-btn">View Gallery</button>
						</div>
					</div>
				</div>
			</section>
		);
    
}

export default Home;

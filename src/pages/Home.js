import React, { Component } from "react";
class Home extends Component {
	render() {
        return (
            <div>
			 <section class="container">

                <header>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about-us">About</a></li>
                        <li><a href="#services">Services & Package</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#package">Package</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </header>
               


              
                <div className="middle-card">
                    <div>
                        <h1>A picture is worth a thosand words</h1>
                        <div class="middle-description">
                            <p>
                                It clearly and beautiful capture your emotions-the joy,the
                                laughter, the tears,you name it.Our pride is in offering the best
                                shoots as we help you tell your story in photos.
                            </p>
                            <button class="custom-btn">View Gallery</button>
                        </div>
                    </div>
                </div>

        </section>
		



		
        <section id="about-us">
            <div className="about-us">

                    <div className="img-flex">
                            
                            <div className="top-img">
                                <img src="./asset/card_component_crop.jpg" alt="" />
                            </div>

                            
                            <div class="middle-img">
                                <img src="./asset/card_component_crop.jpg" alt="" />
                            </div>

                          
                            <div className="bottom-img">
                                <img src="./asset/card_component_crop.jpg" alt="" />
                            </div>
                    </div>



                  
                    <div>
                            <h1 className="bottom-heading">About Us</h1>
                            <p className="bottom-paragraph">
                                Lorem ipsum,sometimes referred to as 'lipsum',is the placeholder
                                text used indesign when used in design when creating content.It
                                helps designers plan out where the content will sit
                            </p>
                    </div>
                
		    </div>

                </section>
                </div>
		);
	}
}
export default Home;

import React from "react";

function AboutUS() {
    
    return (
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
                            Lorem ipsum,sometimes referred to as 'lipsum',is the placeholder text
                            used indesign when used in design when creating content.It helps
                            designers plan out where the content will sit
                        </p>
                    </div>
	        </div>
        </section>

    );
}

export default AboutUS;



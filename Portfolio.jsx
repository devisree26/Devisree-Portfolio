// Portfolio.js

import React from 'react';
import './Portfolio.css'; // Assuming you save the CSS code in a file named Portfolio.css

const Portfolio = () => {
  return (
    <div>
      <nav>
        {/* Your navigation content goes here */}
      </nav>
      
      <section className="landing">
        <div className="container">
          {/* Landing section content goes here */}
        </div>
      </section>
      
      <section className="about">
        <div className="container">
          {/* About section content goes here */}
        </div>
      </section>
      
      <section className="recent-work">
        <div className="container">
          {/* Recent work section content goes here */}
        </div>
      </section>
      
      <section className="contact">
        <div className="over">
          <div className="container">
            {/* Contact section content goes here */}
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          {/* Footer content goes here */}
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;

import React from 'react';

const Banner = () => {
  return (
    <div className='banner_bg'>
      <div className='container banner_wrapper'>

        <div className='banner_content'>
          <h3>Hello there 👋</h3>
          <h1>I'm <span>A. Arthi</span></h1>
          <strong>Frontend Developer & UI Designer</strong>
          <p>
            I design and develop responsive, user-friendly web interfaces that help businesses grow and users stay engaged.
            Let's build something amazing together!
          </p>
          <a href="#contact" className="talk_btn">Let's Talk</a>
        </div>

        <div className='banner_img'>
          <img src="/assets/banner/2.jpg" alt="Arthi A" />
        </div>

      </div>
    </div>
  );
};

export default Banner;

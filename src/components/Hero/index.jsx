// src/components/HeroSection.jsx
import React from 'react';
import './index.css'; 


const HeroSection = ({ HeroImg, HeroHeading, HeroText, buttonHeading }) => {
  return (
    <div className="container-fluid px-0 hero-bg " >
      <div className="container col-xxl-8 px-4 py-2">
        <div
          className="row flex-column-reverse flex-lg-row-reverse align-items-center justify-content-center g-5 py-5"
          style={{ paddingBottom: '0px' }}
        >
          {HeroImg && (
            <div className="col-10 col-sm-8 col-lg-6 hero-fade-in" >
              <img
                src={HeroImg}
                alt="Hero"
                className="d-block mx-lg-auto img-fluid"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
          )}
          <div className="col-lg-6 hero-fade-in">
            <h1 className="display-5 fw-bold mb-3">{HeroHeading}</h1>
            <p className="lead">{HeroText}</p>
            {buttonHeading && (
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-lg px-5 me-md-2 custom-button"
                >
                  {buttonHeading}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

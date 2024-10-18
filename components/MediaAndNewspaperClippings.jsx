import React, { useState, useEffect } from 'react';
import '../components/css/MediaAndNewspaperClippings.css';

function MediaAndNewspaperClippings() {
  const [activeButtonLeft, setactiveButtonLeft] = useState('ActiveTenders');
  const [activeButtonRight, setactiveButtonRight] = useState('OfficeOrders');
  const [showActiveTendersL, setshowActiveTendersL] = useState(true);
  const [showOfficeOrdersR, setshowOfficeOrdersR] = useState(true);

  const handleButtonClick = (section, type) => {
    if (section === 'left') {
      setshowActiveTendersL(type === 'ActiveTenders');
      setactiveButtonLeft(type);
    } else {
      setshowOfficeOrdersR(type === 'OfficeOrders');
      setactiveButtonRight(type);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container1" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('left', 'ActiveTenders')}
            className={`button ${activeButtonLeft === 'ActiveTenders' ? 'active' : ''}`}
          >
            Social Media
          </button>
        </div>
        <div className="content-container">
          {showActiveTendersL && (
            <div className="content">
              <div className="twitter-feed">
                <a
                  className="twitter-timeline"
                  // href="https://twitter.com/seva_bsptcl"
                  href="https://twitter.com/narendramodi"
                  data-width="1000"
                  data-height="600"
                  data-theme="light"
                >
                  {/* Loading tweets... */}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="separator"></div>

      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('right', 'OfficeOrders')}
            className={`button ${activeButtonRight === 'OfficeOrders' ? 'active' : ''}`}
          >
            In the News
          </button>
        </div>
        <div className="content-container">
          {showOfficeOrdersR && (
            <div className="content">
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>
                    Regarding National Apprenticeship Training Scheme (NATS) at BSPTCL vide OO no 52 dated 19.01.2024
                  </h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className="verticalSeparator">|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MediaAndNewspaperClippings;

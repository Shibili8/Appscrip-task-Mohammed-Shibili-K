import React, { useState } from "react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="footer-container">
      {/* ---------- TOP SECTION ---------- */}
      <div className="footer-top">
        <div className="footer-subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h3>CALL US</h3>
          <p>
            +44 221 133 5360 • customercare@mettamuse.com
          </p>

          <h3>CURRENCY</h3>
          <div className="currency-info">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="US Flag"
              className="currency-flag"
            />
            <span>USD</span>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* ---------- COLLAPSIBLE LINKS ---------- */}
      <div className="footer-links">
        <div className="footer-col">
          <div
            className="footer-col-header"
            
          >
            <h4>mettà muse</h4>
            <span>{activeSection === "about" ? "−" : "+"}</span>
          </div>
          
            <div className="footer-col-content">
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
          
        </div>
          
        <div className="footer-col">
          <div
            className="footer-col-header"
            >
            <h4>QUICK LINKS</h4>
            <span>{activeSection === "quick" ? "−" : "+"}</span>
          </div>
          
            <div className="footer-col-content">
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          
        </div>
          
        <div className="footer-col">
          <div className="footer-col-header">
            <h4>FOLLOW US</h4>
            <span>{activeSection === "follow" ? "−" : "+"}</span>
          </div>
          <div className="footer-col-content">
            <div className="social-icons">
              <img
                src="https://res.cloudinary.com/da4a06plx/image/upload/v1761985236/Insta_byfhbf.png"
                alt="Instagram"
              />
              <img
                src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/a_akfwyp.png"
                alt="LinkedIn"
              />
            </div>
          </div>
          <div className="footer-payments">
        <h4>mettà muse ACCEPTS</h4>
        <div className="payment-icons">
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136188_sl335p.png"
            alt="Google Pay"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136190_cbay5c.png"
            alt="Mastercard"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136192_qctyeq.png"
            alt="PayPal"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136193_hptfna.png"
            alt="Amex"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136194_hqbjey.png"
            alt="Apple Pay"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136195_ukp5jt.png"
            alt="Visa"
          />
        </div>
      </div>
        </div>
        
      </div>

      <div className="footer-links-mobile">
        <div className="footer-col">
          <div
            className="footer-col-header"
            onClick={() => toggleSection("about")}
          >
            <h4>mettà muse</h4>
            <span>{activeSection === "about" ? "−" : "+"}</span>
          </div>
          {activeSection === "about" && (
            <div className="footer-col-content">
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
          )}
        </div>
          <hr className="footer-divider" />
        <div className="footer-col">
          <div
            className="footer-col-header"
            onClick={() => toggleSection("quick")}
          >
            <h4>QUICK LINKS</h4>
            <span>{activeSection === "quick" ? "−" : "+"}</span>
          </div>
          {activeSection === "quick" && (
            <div className="footer-col-content">
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          )}
        </div>
          <hr className="footer-divider" />
        <div className="footer-col">
          <div
            className="footer-col-header"
            onClick={() => toggleSection("follow")}
          >
            <h4>FOLLOW US</h4>
            <span>{activeSection === "follow" ? "−" : "+"}</span>
          </div>
          {activeSection === "follow" && (
            <div className="footer-col-content">
              <div className="social-icons">
                <img
                  src="https://res.cloudinary.com/da4a06plx/image/upload/v1761985236/Insta_byfhbf.png"
                  alt="Instagram"
                  

                />
                <img
                  src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/a_akfwyp.png"
                  alt="LinkedIn"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <hr className="footer-divider large-device-hr" />

      {/* ---------- PAYMENT SECTION ---------- */}
      <div className="footer-payments-mobile">
        <h4>mettà muse ACCEPTS</h4>
        <div className="payment-icons">
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136188_sl335p.png"
            alt="Google Pay"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136190_cbay5c.png"
            alt="Mastercard"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136192_qctyeq.png"
            alt="PayPal"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136193_hptfna.png"
            alt="Amex"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136194_hqbjey.png"
            alt="Apple Pay"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761984921/Group_136195_ukp5jt.png"
            alt="Visa"
          />
        </div>
      </div>

      {/* ---------- BOTTOM COPYRIGHT ---------- */}
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

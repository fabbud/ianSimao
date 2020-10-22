import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="site-footer">
      <h6 className="titulo-footer">Entre em contato</h6>
      <ul className="footer-text">
        <li>
          <div className="icon-limit">
            <FontAwesomeIcon
              className="footer-contact-icons"
              icon={['far', 'envelope']}
            />
          </div>
          <a className="link" href="mailto:CDCLivro@gmail.com">
          CDCLivro@gmail.com
          </a>
        </li>
        <li>
            <a
              className="social-links"
              href="https://www.instagram.com/como.desaparecer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="instagram-footer"
                icon={['fab', 'instagram']}
              />
              Siga no Instagram!
            </a>
          </li>
      </ul>
        <div className="copyright-div">
          <p className="copyright-text"> &copy; 2020 IAN<span className="simao">SIMÃO</span></p>
        </div>
    </footer>
  );
}

export default Footer;

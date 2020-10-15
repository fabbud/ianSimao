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
          <a className="link" href="mailto:email@livro.com">
            email@livro.com
          </a>
        </li>
        <li>
          <div className="icon-limit">
            <FontAwesomeIcon
              className="footer-contact-icons"
              icon={['fas', 'phone']}
            />
          </div>
          <a className="link" href="tel:+55 21 XXXXX-XXXX">
            +55 21 XXXXX-XXXX
          </a>
        </li>
      </ul>

      <div className="social-icons-div">
        <ul className="social-icons">
          <li>
            <a
              className="social-links"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="facebook-footer"
                icon={['fab', 'facebook']}
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="twitter-footer"
                icon={['fab', 'twitter']}
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="instagram-footer"
                icon={['fab', 'instagram']}
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="linkedin-footer"
                icon={['fab', 'linkedin-in']}
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="youtube-footer"
                icon={['fab', 'youtube']}
              />
            </a>
          </li>
        </ul>
        <div className="copyright-div">
          <p className="copyright-text"> &copy; 2020 IAN SIMÃO</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

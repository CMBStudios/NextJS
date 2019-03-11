import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = ({ }) =>{
    return(
        <footer className="footer is-hidden-mobile">
      <div className="container">
        <div className="columns">

          <div className="column is-one-third">
              <nav className="panel">
                <p className="panel-heading">About us</p>

                <div className="panel-block">
                  <p>The Academist is an educational resource center providing information for international students looking to go abroad to furter their studies.</p>
                  <p>Our Mission: to be a reliable host where students (future leaders) are empowered with adequate information that helps shape their academic careers outstandingly.</p>

                </div>
              </nav>
          </div>

          <div className="column">
              <nav className="panel">
                <p className="panel-heading">Company</p>

                <div className="panel-block">
                  <ul>
                    <li><a href="">About us</a></li>
                  </ul>
                </div>

              </nav>
          </div>

          <div className="column">
              <nav className="panel">
                <p className="panel-heading">Learn</p>

                <div className="panel-block">
                  <ul>
                    <li><a href="/forum">Forum</a></li>
                    <li><a href="/blog">Blog</a></li>
                  </ul>
                </div>
                
              </nav>
          </div>

          <div className="column">
              <nav className="panel">
                <p className="panel-heading">Legal</p>

                <div className="panel-block">
                  <ul>
                  <li><a href="/disclaimer">Disclaimer</a></li>
                    <li><a href="/terms-of-use">Terms of use</a></li>
                    <li><a href="/privacy-policy">Privacy policy</a></li>
                    <li><a href="/referral-terms">Referral terms</a></li>
                  </ul>
                </div>
                
              </nav>
          </div>

          <div className="column is-one-quarter">
              <nav className="panel">
                <p className="panel-heading">Keep in touch</p>

                <div className="panel-block">
                  <a href=""><span className="icon is-medium"><i className="fab fa-facebook-f"></i></span></a>
                  <a href=""><span className="icon is-medium"><i className="fab fa-twitter"></i></span></a>
                  <a href=""><span className="icon is-medium"><i className="fab fa-instagram"></i></span></a>
                  <a href=""><span className="icon is-medium"><i className="far fa-envelope"></i></span></a>


                </div>
              </nav>
          </div>

        </div>
      </div>
    </footer>

    )
}

export default Footer;
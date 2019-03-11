import Layout from "../components/Layout";
import '../main.css'

const Disclaimer = (props)=>{
    return(
        <Layout title="Disclaimer" {...props}>
        <section className="section legal">
        <div className="container">
            <h3 className="title">Legal</h3>

            <div className="tabs">
                <ul>
                  <li><a href="/terms-of-use">Terms of use</a></li>
                  <li><a href="/privacy-policy">Privacy policy</a></li>
                  <li><a>Referral terms</a></li>
                  <li className="is-active"><a href="/disclaimer">Disclaimer</a></li>
                </ul>
            </div>

            <div className="tab-content content">

              <h4>Disclaimer for The Academist</h4>

              <p>For more information or questions about our site’s disclaimer, please feel free to contact us by email at info@theacademist.com</p>
              <p>Disclaimers for theacademist.com</p>
              <p>All data on this website is published in good faith and for general information purpose only. theacademist.com and not 
                    warranty on the completeness, reliability, and accuracy of this information. Any action you take upon the information you find 
                    on this website (theacademist.com), is strictly at your risk. theacademist.com will not be liable for any losses and damages 
                    in connection with the use of our website.</p>
              <p>From The Academist, you can visit other websites through hyperlinks. While we do our best to provide only quality links to 
                    ethical websites that are relevant to your interests, we do not control their nature or content. The links are not an implication 
                    of our recommendation for their content which is privy to their terms. The links may connect to websites whose owners and 
                    content may change without notice without our opportunity to change their ‘bad’ links.</p>
              <p>You should also be aware that when leaving our website, other websites have different privacy policies and terms which are 
                    not in our control. Please beware of their Privacy Policies and their “Terms and Conditions” before engaging in any business 
                    or providing any data.</p>
              <p>Consent</p>
              <p>In using our website, you at this moment consent to our disclaimer terms and agree to them.</p>
              <p>Update</p>
              <p>If we make updates, amendments or changes to the disclaimer, those changes will be posted here promptly.</p>

            </div>
        </div>
    </section>

        </Layout>
    );
}

export default Disclaimer;
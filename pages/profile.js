import Layout from "../components/Layout";
import { getUserProfile, authInitialProps } from "../lib/auth";
import {getUserCall} from '../calls/user';
import {getReferralsCall} from '../calls/misc';
import {connect} from 'react-redux';
import '../main.css'

class Profile extends React.Component {
  state = {
    user: "Loading profile..."
  };

  componentDidMount  = async() => {
    this.props.getUser(this.props.auth.user.user_id, this.props.auth.user.token);
    this.props.getReferrals('https://www.theacademist.com/api/v1/user/referral/{user_id}', this.props.auth.user.user_id, this.props.auth.user.token);
    console.log(this.props.user)
    console.log(this.props.auth.user.token)
    console.log(this.props.auth.user.user_id)
  }

  render() {
    //const {firstName, lastName, image, referralCode, referralToken} = this.props.user
    return (
      <Layout title="Profile" {...this.props}>
      <section className="section profile">
      <div className="container">

        <div className="columns customer-info is-mobile is-vcentered">

            <div className="column customer-image is-2-tablet is-3-mobile">
            {this.props.user?
              <img className="profile-pic-large" src={this.props.user.image}/>
            :
              null
            }
            </div>

            <div className="column customer-data">
              <div className="content">
                <h3>{this.props.user? <React.Fragment>{this.props.user.firstName} {this.props.user.lastName}</React.Fragment>: <React.Fragment>Loading</React.Fragment>}</h3>
                <p>Various school systems have...</p>
              </div>
            </div>
        </div>

        <a className="long-rounded button yellow">
          Invite friends to The Academist and get a chance to win $5,000
        </a>

        <div className="tabs is-normal">
          <ul>
            <li><a>Saved Scholarships</a></li>
            <li className="is-active"><a>Referrals</a></li>
          </ul>
        </div>

        <div className="content referal">

            <a className="long-rounded button grey">
              Referral T&C "Referral Program Terms & Conditions"
            </a>

            <h3>Your referral link</h3>

            <div className="long-rounded yellow">

              <div className="long-rounded grey">
                <span>{this.props.user? <React.Fragment>https://www.theacademist.com/register?ref={this.props.user.referralCode}</React.Fragment>: <React.Fragment>Loading</React.Fragment>}</span>
                <a className="button yellowBtn is-pulled-right">Copy</a>
              </div>

              <div className="social">
                <a><img src="static/images/share1.png" /></a>
                <a><img src="static/images/share2.png" /></a>
                <a><img src="static/images/share3.png" /></a>
                <a><img src="static/images/share4.png" /></a>
                <a><img src="static/images/share5.png" /></a>
              </div>

            </div>

            <h3>Claim Reward</h3>

            <div className="columns claim is-multiline is-mobile is-centered">

                <div className="column available is-11-mobile yellow-block">
                    <div>
                      
    <p className="amount">{this.props.user? <React.Fragment>{this.props.user.referralToken}</React.Fragment>:<React.Fragment>Loading</React.Fragment>}</p> 
                      <p className="amount-text">Available points</p>
                    </div>
                </div>

                <div className="column is-11-mobile blue-block">
                    <div>
                      <span>Use</span>
                      <p className="amount">3<span className='amount-text'>pts</span></p>
                      <p className='amount-text'>Scholarship search</p> 
                    </div>
                </div>

                <div className="column is-5-mobile blue-block">
                    <div>
                      <span>Use</span>
                      <p className="amount">10<span className='amount-text'>pts</span></p>
                      <p className='amount-text'>Enter draw for $1,000</p> 
                    </div>
                </div>

                <div className="column is-5-mobile blue-block">
                  <div>
                      <span>Use</span>
                      <p className="amount">25<span className='amount-text'>pts</span></p>
                      <p className='amount-text'>Enter draw for $5,000</p> 
                    </div>
                  </div>
                </div>
            </div>

            <div className="has-text-centered total-referrals"> 
                <span className="">
                  {this.props.referrals? <React.Fragment>{this.props.referrals.count}</React.Fragment>:<React.Fragment>Loading</React.Fragment>} referrals
                  </span>
                </div>
            </div>

          {this.props.referrals?
          <React.Fragment>
            {this.props.referrals.count > 0?
            <React.Fragment>
            {this.props.referrals.rows.map((referral)=>
            <div className="long-rounded grey referral columns is-mobile">
              <div className="column"><span className="name">{referral.firstName} {referral.lastName}</span></div>
              <div className="column has-text-right"><span className="pts">1</span></div>
            </div>
            )}
            </React.Fragment>
            :
            <div className="long-rounded grey referral columns is-mobile">
              <div className="column"><span className="name">No Referrals Yet!</span></div>
            </div>
            }
            </React.Fragment>
            :
            <div className="long-rounded grey referral columns is-mobile">
              <div className="column"><span className="name">Loading...</span></div>
            </div>
          }
        <div className="columns is-mobile is-centered">
          <div className="column is-7-tablet is-5-desktop is-3-fullwidth is-12-mobile">


              <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <a className="pagination-previous">&lsaquo;</a>
                <a className="pagination-next">&rsaquo;</a>
                <ul className="pagination-list">
                  <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                  <li><a className="pagination-link is-current" aria-label="Page 2" aria-current="page">2</a></li>
                  <li><a className="pagination-link " aria-label="Goto page 3">3</a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a className="pagination-link" aria-label="Goto page 100">100</a></li>
                </ul>
              </nav>


          </div>
        </div>

      
    </section>
      </Layout>
    );
    }
}

Profile.getInitialProps = authInitialProps(true);
function mapper(state) {
  return {
      user: state.user.data,
      referrals: state.referral.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () =>
  {
    dispatch(
      clearErrorCall()
    )
  },
  getUser: (userId, token) => {
      dispatch(
        getUserCall(userId, token)
      );
    },
  getReferrals: (url, userId, token) => {
      dispatch(
        getReferralsCall(url, userId, token)
      );
    },
  }
};
export default connect(mapper, mapDispatchToProps)(Profile);

import { loginUser } from "../lib/auth";
import Router from "next/router";
import {loginUserCall, facebookLoginUserCall, googleLoginUserCall, clearErrorCall, getUserCall} from '../calls/user';
import {connect} from 'react-redux';
//import '../bulma.css';
//import '../style.css'

class LoginForm extends React.Component {
  state = {
    email: "apaingha@gmail.com",
    password: "123456",
    error: "",
    isLoading: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { email, password } = this.state;

    event.preventDefault();
    this.setState({ error: "", isLoading: true });
    loginUser(email, password)
      .then(()=>{
        this.props.fetchData('/api/login', email, password, true)
      })
      .then(() => {
        Router.push("/profile");
      })
      .catch(this.showError);
  };

  showError = err => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: false });
  };

  render() {
    const { email, password, error, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Sending" : "Submit"}
        </button>
        {error && <div>{error}</div>}
      </form>
    );
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
    /*facebookLogin: (url, email, userId, accessToken, e) => {
      dispatch(
        facebookLoginUserCall(url, email, userId, accessToken, e)
      );
    },
    googleLogin: (url, email, e) => {
      dispatch(
        googleLoginUserCall(url, email, e)
      );
    }, */
      fetchData: (url, email, password, e) => 
      {
        if (url && email && password) {
          dispatch(
            loginUserCall(url, email, password, e)
          );
        }
      }
  };
};
export default connect(null, mapDispatchToProps)(LoginForm);

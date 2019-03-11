import Link from "next/link";
import { logoutUser } from "../lib/auth";

const Nav = ({loggedIn, pathname, auth}) =>{
  //console.log(auth.user.lastName)
    return(
        <header>

        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">

          <div className="navbar-brand">

            <a className="logo navbar-item space-between-8" href="/">
              <img className="is-hidden-mobile" src="static/images/logo-desktop.jpg" />
              <img className="is-hidden-tablet" src="static/images/logo-mobile.PNG" />
            </a>
        
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
        
          <div className="navbar-menu" id="navMenu">
            
            <div className="navbar-start">
                  {pathname == "home"?
                  <a href="/" className="navbar-item space-between-3 is-active">Home</a>
                  : <a href="/" className="navbar-item space-between-3">Home</a>
                  }
                  {pathname == "blog"? <a href="/blog" className="navbar-item space-between-3 is-active">Blog</a>
                    : <a href="/blog" className="navbar-item space-between-3">Blog</a>  
                  }
                  {pathname == "forum"?
                  <a href="/forum" className="navbar-item space-between-3 is-active">Forum</a>
                  : <a href="/forum" className="navbar-item space-between-3">Forum</a>
                  }
            </div>
            <div className="navbar-end">
            {!loggedIn?
                  <React.Fragment>
                  <a className="navbar-item no-account">Sign up</a>
                  <a className="navbar-item no-account">Login</a>
                  </React.Fragment>
                  :
                  <React.Fragment>
                  <div className="navbar-item account has-dropdown is-hoverable">
                      <a className="navbar-link is-arrowless button">
                        <span className="avatar"></span>
                        <span className="name"></span>
                      </a>

                      <div className="navbar-dropdown is-boxed">
                        <a href="/profile" className="navbar-item">My Profile</a>
                        <a className="navbar-item">Buy Coin</a>
                        <a onClick={logoutUser} className="navbar-item">Log out</a>
                      </div>
                      
                  </div>   
                  </React.Fragment>
                  }              
            </div>
          
          </div>

          <div className="getstarted is-hidden-desktop">
                <a className="button">Get started</a>
          </div>

        </nav>
    </header>

    )
}

export default Nav;
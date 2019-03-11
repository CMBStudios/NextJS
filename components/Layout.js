import Link from "next/link";
import { logoutUser } from "../lib/auth";
import Nav from './nav'
import Footer from './footer'
import Head from 'next/head';

const Layout = ({ title, children, auth, activeLink }) => {
  const { user = {} } = auth || {};
  /*let active;
  if(auth.user.type){
    active = true;
  }
  else{
    active = false;
  }*/
  //console.log(user)

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
    <Nav auth={auth} pathname={activeLink} loggedIn={true} user={user}/>
      {children}

    <Footer />
    </React.Fragment>
  );
};

export default Layout;

import Router from 'next/router';
import { trackPageView } from '../helpers';
import React from 'react';
import App, { Container } from 'next/app';
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class CustomApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
    componentDidMount(){
        Router.onRouteChangeComplete = url => {
          console.log(url)
          trackPageView(url);
        }
      }
  render() {
    
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
        <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(CustomApp);

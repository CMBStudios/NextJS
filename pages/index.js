import Layout from "../components/Layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";
//import '../font-awesome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import '../main.css'
import COUNTRIES from '../helpers/gpa-countries';
import fetch from "isomorphic-unfetch";
import TextTruncate from 'react-text-truncate';
import Select, { components } from 'react-select';

const { Option } = components;
const SelectContainer = ({ children, ...props }) => {
  return (
      <components.SelectContainer {...props}>
        {children}
      </components.SelectContainer>
  );
};

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
  <span className="align-flag">
      <img src={props.data.icon} className="dropdownIcon"/>
      &nbsp;
      <span className="aligntext">{children}</span>
    </span>
  </components.SingleValue>
);
const IconOption = (props) => (
  
    <Option {...props}>
    <span className="align-flag">
      <img src={props.data.icon} className="dropdownIcon"/>
      &nbsp;
      <span className="aligntext">{props.data.label}</span>
    </span>
    </Option>
  
);

export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
      anim1: [
        {
          id: 1,
          class: "",
          backgroundColor: "",
          done: false
        },
        {
          id: 2,
          class: "",
          backgroundColor: "",
          done: false
        },
        {
          id: 3,
          class: "",
          backgroundColor: "",
          done: false
        },
        {
          id: 4,
          class: "",
          backgroundColor: "",
          done: false
        },
        {
          id: 5,
          class: "",
          backgroundColor: "",
          done: false
        },
        {
          id: 6,
          class: "",
          backgroundColor: "",
          done: false
        },
      ]
    }
  }
  render(){
    const {posts} = this.props
  return (
    <Layout title="Home" activeLink="home" {...this.props}>
     <section className="hero home">
      <div className="hero-body">
        
        <img className="is-hidden-tablet" src="static/images/home-mobile-header-bg.PNG" style={{width: "100%"}} />
        

        <div className="container">

                <div className="columns">
                  <div className="column is-offset-1-desktop is-offset-2-widescreen is-7-tablet">
                    <div>

                        <h3 className="title is-3">
                            Find international student scholarship to the U.S and Canada here!
                        </h3>

                        <div>
                            <ul className="progressbar">
                              <li className="active"><span className="circle"></span></li>
                              <li><span className="circle"></span></li>
                              <li><span className="circle"></span></li>
                              <li><span className="circle"></span></li>
                              <li><span className="circle"></span></li>
                              <li><span className="circle"></span></li>
                              <li><span className="circle"></span></li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                    
                    <div className="column is-offset-1-desktop is-offset-2-widescreen is-6-tablet is-6-desktop">

                        <div className="contain">
                            <div className="card-stack">
                              <ul className="card-list">
                                <input type="text" style={{backgroundColor: "#D9DCDE"}} className="cardInput" placeholder="" name="text" id="text" />

                                <input type="text" style={{backgroundColor: "#E9ECED"}} className="cardInput" placeholder="" name="text" id="text" />

                                <Select
                                      className="country-home"
                                      classNamePrefix="home-country-select"
                                      placeholder="Country of scholarship..."
                                      isClearable={true}
                                      isSearchable={true}
                                      onChange={(e)=>console.log(e.id)}
                                      name="countries"
                                      components={{ Option: IconOption, SingleValue, SelectContainer }}
                                      options={COUNTRIES}
                                    />                      
                              </ul>
                              <div className="learn-more">
                                    <span className="icon has-text-info push-away">
                                    <FontAwesomeIcon className="far" icon={faPlayCircle} size="2x" color="#000000"/>
                                    </span>
                                    <span>Learn more</span>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="column with-button is-4-desktop is-4-tablet">
                      <a className="button yellowBtn nextBtn">Next step</a> 
                    </div>
                
                </div>

        </div>
      </div>
    </section>


    <section className="section section-tabs">
        <div className="tabs is-toggle is-toggle-rounded is-centered is-hidden-mobile">
          <ul>

            <li>
              <a href="/scholarship"><span>Search Scholarship</span></a>
            </li>

            <li>
              <a href="/gpa-calculator"><span>GPA Calculator</span></a>
            </li>

            <li>
              <a href="/schools"><span>Search School</span></a>
            </li>

          </ul>
        </div>

        <div className="container">

          <div className="columns reverse-mobile">
              
              <div className="column">
                  <div className="columns tabs-content">
                  
                      <div className="column is-offset-1">

                          <div className="contain">
                              <div className="card-stack">
                                <ul className="card-list">
                                  <input type="text" style={{backgroundColor: "#D9DCDE"}} className="cardInput" placeholder="" name="text" id="text" />

                                  <input type="text" style={{backgroundColor: "#E9ECED"}} className="cardInput" placeholder="" name="text" id="text" />

                                  <Select
                                      className="country-home"
                                      classNamePrefix="home-country-select"
                                      placeholder="Choose GPA Country"
                                      isClearable={true}
                                      isSearchable={true}
                                      onChange={console.log('change')}
                                      name="countries"
                                      components={{ Option: IconOption, SingleValue, SelectContainer }}
                                      options={COUNTRIES}
                                    />                      
                                </ul>
                              </div>
                          </div>
                      </div>

                      <div className="column with-button is-2-desktop is-2-tablet">
                        <a className="button yellowBtn nextBtn">Next step</a> 
                      </div>
                  
                  </div>

              </div>
              
              <div className="column">
                  <div className="content">
                      <h3>GPA Calculator</h3>
                      <p>
                          Do you know your result equivalent in the US standard? 
                          If not, this tool helps students, high school or otherwise evaluate their results.
                      </p>

                      <ul className="custom-list">
                        <li>Choose your country & level of education</li>
                        <li>Input results for conversion into U.S. standard</li>
                        <li>Search school or scholarship</li>
                      </ul>
                  </div>
              </div>

          </div>
        </div>
    </section>


    <section className="section section-text-grid">
      <div className="container is-fluid">

            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-two-thirds-mobile">
                <div>
                  <p className="heading">5,000</p>
                  <p className="title">Available Scholarships in North America</p>
                </div>
              </div>

              <div className="column is-half-mobile">
                <div>
                  <p className="heading">35</p>
                  <p className="title">Countries supported</p>
                </div>
              </div>

              <div className="column is-half-mobile">
                <div>
                  <p className="heading">5M+</p>
                  <p className="title">Customers served</p>
                </div>
              </div>
            </div>
          
      </div>
    </section>


    <section className="section section-slider is-medium">
      <div className="container">

        <div className="content">
            <h3>Trending topics among students</h3>
        </div>
        
        <div className="columns images is-mobile">
        {posts.rows.map((post, id)=>
            <div className="column">
              <a><img src={post.featuredImage} />
              <TextTruncate
                    line={1}
                    containerClassName="image-text"
                    element="div"
                    truncateText="…"
                    text={post.topic}
                    /></a>
            </div>
       )}
        </div>
        
      </div>
    </section>


    <section className="section section-topics container is-hidden-mobile">

        <div className="columns is-vcentered is-centered">
            <div className="column">
                <div className="content">
                    <h4>How it works?</h4>
                    <h3>Searching for scholarship?</h3>

                    <ul className="custom-list">
                      <li>Ensure you know your GPA in the U.S. or Canada standard </li>
                      <li>Enter all the criteria fitting your search, such as aspired level of study, amount, major, desired country of scholarship etc</li>
                      <li>You have an option to save displayed result and make other searches</li>
                      <li>Remember don't forget to share with friends</li>
                    </ul>

                    <a className="button yellowBtn">Get started</a>
                </div>
            </div>

            <div className="column with-image">
                <div>
                    <img src="static/images/home_1.gif" />
                </div>
            </div>
        </div>


        <div className="columns is-vcentered is-centered">

            <div className="column with-image">
                <div>
                    <img src="static/images/home_2.gif" />
                </div>
            </div>

            <div className="column">
                <div className="content">
                    <h4>How it works?</h4>
                    <h3>GPA Calculator</h3>

                    <ul className="custom-list">
                      <li>To use this tool, you need a copy of your high school  or college transcript</li>
                      <li>Choose the country and level attained</li>
                      <li>Input all your grades</li>
                      <li>Convert and use the converted GPA to search either scholarships or schools that fits your profile</li>
                    </ul>

                    <a className="button yellowBtn">Get started</a>
                </div>
            </div>
        </div>

        <div className="columns is-vcentered is-centered">
            <div className="column">
                <div className="content">
                    <h4>How it works?</h4>
                    <h3>Search School</h3>

                    <ul className="custom-list">
                      <li>You can search school either</li>
                      <li>By GPA, which helps you to know what school will accept it, simply enter your converted GPA and find</li>
                      Or <br/>
                      <li>By major, which helps you find a best fit school that offers your desired program, both at undergraduate and graduate level</li>
                    </ul>

                    <a className="button yellowBtn">Get started</a>
                </div>
            </div>

            <div className="column with-image">
                <div>
                    <img src="static/images/home_3.gif" />
                </div>
            </div>
        </div>          
    </section>


    <section className="section section-getstarted">
      <div className="container">

        <div className="content">
            <h3 className="title is-3">Get started in a few seconds</h3>
            <p>The Academist supports a variety of students in finding a scholarship</p>
        </div>

        <div className="columns">

            <div className="column">
              <img src="static/images/bigicon1.png" />
              <span>Enter search criteria</span>
            </div>

            <div className="column is-hidden-mobile">
              <hr/>
            </div>

            <div className="column">
              <img src="static/images/bigicon2.png" />
              <span>Find & filter scholarship results</span>
            </div>

            <div className="column is-hidden-mobile">
              <hr/>
            </div>

            <div className="column">
              <img src="static/images/bigicon3.png" />
              <span>Apply</span>
            </div>
        </div>

      </div>
    </section>


    <section className="section section-appdownload is-hidden-mobile">
      <div className="container">

        <div className="content">
            <h3>From the poorest grade to the best, and from need to merit - 
                The Academist finds all the scholarships for everyone</h3>
            <p>Meet students around the world and participate in trending discussions in the chat forum, all in the app</p>
            <div>
              <a href=""><img src="static/images/appstore.png" /></a>
              <a href=""><img src="static/images/googleplay.png" /></a>
            </div>
        </div>

      </div>
    </section>

    </Layout>
  );
  }
}

Index.getInitialProps = async({query}) => {
  let posts;

    try {
      const response = await fetch(
        `https://theacademist-new.herokuapp.com/api/blog`
      );
      posts = await response.json();
      console.log(posts)
    } catch (err) {
      console.log(err);
      posts = [];
    }

    return { posts };
  authInitialProps();
}


import Layout from '../components/Layout'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import COUNTRIES from '../helpers/gpa-countries';
import { faPlusCircle, faCalculator, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { authInitialProps, getClientSideToken, getServerSideToken } from "../lib/auth";
import fetch from 'isomorphic-unfetch';
import Modal from '../components/modal'
import Select, { components } from 'react-select';
import '../main.css'

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


const GPAS = [
    { label: '2.0', value: '2.0' },
    { label: '2.1', value: '2.1' },
    { label: '2.2', value: '2.2' },
    { label: '2.3', value: '2.3' },
    { label: '2.4', value: '2.4' },
    { label: '2.5', value: '2.5' },
    { label: '2.6', value: '2.6' },
    { label: '2.7', value: '2.7' },
    { label: '2.8', value: '2.8' },
    { label: '2.9', value: '2.9' },
    { label: '3.0', value: '3.0' },
    { label: '3.1', value: '3.1' },
    { label: '3.2', value: '3.2' },
    { label: '3.3', value: '3.3' },
    { label: '3.4', value: '3.4' },
    { label: '3.5', value: '3.5' },
    { label: '3.6', value: '3.6' },
    { label: '3.7', value: '3.7' },
    { label: '3.8', value: '3.8' },
    { label: '3.9', value: '3.9' },
    { label: '4.0', value: '4.0' }
];

const AMOUNTS = [
	{ label: '$0 - $5,000', value: '$0 - $5,000' },
	{ label: '$5,000 - above', value: '$5,000 above' },
	{ label: 'Full Tuition', value: 'Full tuition' },
	{ label: 'Variable', value: 'Variable' },
];
const LEVELS = [
	{ label: 'Graduate', value: 'Graduate' },
    { label: 'Undergraduate', value: 'Undergraduate' }
];
const COUNTRIES_ = [
	{ label: 'US', value: 'US' },
	{ label: 'Canada', value: 'Canada' }
];
const CRITERIAS = [
	{ label: 'Merit', value: 'Merit' },
    { label: 'Need', value: 'Need' },
    { label: 'Other', value: 'Other' }
];


 export default class Scholarship extends React.Component{   
    constructor(props){
        super(props)
        this.state = {
            country: '',
            gpa: 0,
            level: '',
            criteria: '',
            major: '',
            applicantCountry: '',
            amount: '',
            offset: 0,
            results: [],
            resultCount: 0,
            isloading: false,
            showConfirm: false,
            confirm: false
        }
    }
    viewDetails(id){
        console.log(id)
    }
    handleChildClick = () => {
      // You can access the prop you pass to the children
      // if you want to do some magic stuff
      this.setState({showConfirm: false})
   }
    confirmSearch = () => {
    // You can access the prop you pass to the children
    // if you want to do some magic stuff
    this.setState({confirm: true},()=>{
      //use a promise here
      const {applicantCountry, resultCount, amount, gpa, criteria, level, country, isloading, results, error, major} = this.props;
        const {offset} = this.state;
        
      if(this.state.confirm){
        fetch(`/api/scholarship?offset=${offset}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          mode: 'cors',
          body: JSON.stringify({applicantCountry, major, country, gpa, criteria, level, amount})
      })
      .then(            
          response => response.json()                        
      )
      .then(
          data => {
              if(data.length != 0){
              this.setState({isloading: false, results: data.rows, resultCount: data.count, confirm: false, showConfirm: false}, ()=>{
                  
              })
          }
             
      }
      )
      }
    })
 }
    componentDidMount = async() =>{
      const { user = {} } = this.props.auth || {};
      //console.log(this.props.auth)
        const {applicantCountry, resultCount, amount, gpa, criteria, level, country, isloading, results, error, major} = this.props;
        const {offset} = this.state;
        if(this.props.search_state){
            if(this.props.country){
                this.setState({country: this.props.country},()=>{
                
                })
            }
            if(this.props.amount){
                this.setState({amount: this.props.amount},()=>{
                
                })
            }
            if(this.props.gpa){
                this.setState({gpa: this.props.gpa},()=>{
                
                })
            }
            if(this.props.criteria){
                this.setState({criteria: this.props.criteria},()=>{
                
                })
            }
            if(this.props.major){
                this.setState({major: this.props.major},()=>{
                
                })
            }
            if(this.props.applicantCountry){
                this.setState({applicantCountry: this.props.applicantCountry},()=>{
                
                })
            }
            if(this.props.level){
                this.setState({level: this.props.level},()=>{
                
                })
            }
            this.setState({showConfirm: true},()=>{
              
            })
            //console.log(JSON.stringify({applicantCountry, major, country, gpa, criteria, level, amount}))
            
         
          }
    }
    search(){
        const {applicantCountry, major, country, gpa, criteria, level, amount, offset} = this.state;
        fetch(`/api/scholarship?offset=${offset}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({applicantCountry, major, country, gpa, criteria, level, amount})
        })
        .then(            
            response => response.json()                        
        )
        .then(
            data => {
                if(data.length != 0){
                this.setState({isloading: false, results: data.rows, resultCount: data.count}, ()=>{
                    
                })
    
                console.log(data)
            }
               
        }
        )
        .catch(e => console.log(e)
        )
    }
    render(){
    let countries = COUNTRIES;
    let resultBlock;
    const {resultCount, results} = this.state;
    if(this.props.search_state){
        resultBlock = (
            results.map((result, id)=>
                <div key={id} className="search-result long-rounded">

            <div className="columns">

                <div className="column is-8">
                  <h5 className="result-name">{result.name}</h5>

                  <div className="short-info">
                    <div>Amount: {result.amount? <React.Fragment>{result.amount}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Criteria: {result.criteria? <React.Fragment>{result.criteria}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                  </div>

                  <div className="full-info">
                    <div>Amount: {result.amount? <React.Fragment>{result.amount}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Criteria: {result.criteria? <React.Fragment>{result.criteria}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Major: {result.major? <React.Fragment>{result.major}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Level: {result.level? <React.Fragment>{result.level}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>GPA: {result.gpa? <React.Fragment>{result.gpa}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Applicant Country: {result.applicantCountry? <React.Fragment>{result.applicantCountry}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Country: {result.country? <React.Fragment>{result.country}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Deadline: {result.deadline? <React.Fragment>{result.deadline}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div className='institution'>Institution: {result.institution? <React.Fragment>{result.institution}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div className='comment'>Comment: {result.comment? <React.Fragment>{result.comment}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div className='description'>Description: {result.description? <React.Fragment>{result.description}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                  </div>
                </div>
            </div>

            <div className="columns is-mobile">

                <div className="column is-5">
                  <a className="more" onClick={this.viewDetails.bind(this, id)}>View details</a>
                </div>

                <div className="column is-7 has-text-right">
                  <div className="visit-school">
                    <a className="share">
                      <span className="icon">
                      <i class="fas fa-share-alt"></i>
                      </span>
                    </a>
                    <a className="star">
                      <span className="icon">
                      <i class="far fa-star"></i>
                      </span>
                    </a>
                    <a className="button yellowBtn nextBtn">Apply</a>
                  </div>
                </div>
            </div>
          </div>

            )
        )
    }
    return(
        <Layout title="Scholarship Search" {...this.props}>
        <section className="section search-block scholarship-search">
        <div className="container is-clipped">

          <div className="columns is-centered">


            <div className="column">

                  <h1 className="title">Tell us more about your scholarship requirement</h1>

                  <div className="columns is-centered">

                  <div class="column is-narrow">
                          <div class="content">
                            <div class="long-rounded grey">
                                <div class="columns is-mobile" style={{width: "fit-content"}}>
                                  <div class="column">
                                    <p>Scholarship Country?</p>
                                  </div>
                                  <div class="column" style={{width: "fit-content"}}>
                                  <Select
                                      className="country"
                                      classNamePrefix="country-select"
                                      placeholder="Select Country"
                                      isClearable={true}
                                      isSearchable={true}
                                      onChange={this.handleCountryChange}
                                      name="countries"
                                      components={{ Option: IconOption, SingleValue, SelectContainer }}
                                      options={countries}
                                    />
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        

                        <div className="column is-narrow">
                          <div className="content has-text-centered">
                            <a className="button yellowBtn nextBtn">Next step</a>
                          </div>
                        </div>

                  </div>
            </div>


          </div>
        </div>
    </section>


    <section className="section search-results-block scholarship-search">
        <div className="container content">

          <div className="columns search-headings is-mobile">

                <div className="column is-narrow is-left">
                  <h3>Results</h3>
                </div>

                <div className="column has-text-centered">
                  <div><span className="total-found">{resultCount? <React.Fragment>{resultCount}</React.Fragment>: <React.Fragment>0</React.Fragment>} Schools Found</span></div>

                </div>

                <div className="column is-narrow is-right">

                      <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                          <button className="button grey is-rounded" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Sort by</span>
                            <span className="icon is-small">
                              <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                          </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                          <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                GPA
                              </a>
                              <a href="#" className="dropdown-item">
                                Level
                              </a>
                              <a href="#" className="dropdown-item">
                                GMAT
                              </a>
                              <a href="#" className="dropdown-item">
                                GRE
                              </a>
                              <a href="#" className="dropdown-item">
                                TOEFL
                              </a>
                              <a href="#" className="dropdown-item">
                                IELTS
                              </a>
                              <a href="#" className="dropdown-item">
                                CITY
                              </a>
                              <a href="#" className="dropdown-item">
                                STATE
                              </a>

                            </div>
                        </div>
                      </div>

                </div>
          </div>

          {resultBlock}

          <div className="search-result long-rounded active">

            <div className="columns">

                <div className="column is-8">
                  <h5 className="result-name">Julius R. and Patricia A. Krevans Fellowship</h5>

                  <div className="short-info">
                    <div>Amount: $10.000</div>
                    <div>Criterial: Merit</div>
                  </div>

                  <div className="full-info">
                    <div>Amount: $10.000</div>
                    <div>Criterial: Merit</div>
                    <div>Major: N/A</div>
                    <div>Level: Graduate</div>
                    <div>GPA: N/A</div>
                    <div>Applicant country: N/A</div>
                    <div>Country: US</div>
                    <div>Deadline: N/A</div>
                    <div className='institution'>Institution: University of California San Fransisco</div>
                    <div className='comment'>Comment: N/A</div>
                    <div className='description'>Description: The Academist is an educational resource center providing information
                          for international students looking to go abroad to further their studies.</div>
                  </div>
                </div>
            </div>

            <div className="columns is-mobile">

                <div className="column is-5">
                  <a className="more">Hide details</a>
                </div>

                <div className="column is-7 has-text-right">
                  <div className="visit-school">
                    <a className="share">
                      <span className="icon">
                      <i class="fas fa-share-alt"></i>
                      </span>
                    </a>
                    <a className="star">
                      <span className="icon">
                      <i class="far fa-star"></i>
                      </span>
                    </a>
                    <a className="button yellowBtn nextBtn">Apply</a>
                  </div>
                </div>
            </div>

          </div>

          <Modal showResult={this.confirmSearch} onClick={this.handleChildClick} activate={this.state.showConfirm} content="You will be charged 0.5 coin for this search" />
        </div>
        
    </section>
    </Layout>
)
}
 }

 Scholarship.getInitialProps = ({query}) => {
  authInitialProps();
    let country, gpa, applicantCountry, level, criteria, major, amount, search_state;
    if(query.search){
        search_state = query.search;
    }
    if(query.country){
      country = query.country;
    }
    if(query.gpa){
      gpa = query.gpa;
    }
    if(query.applicantCountry){
      applicantCountry = query.applicantCountry;
    }
    if(query.level){
      level = query.level;
    }
    if(query.criteria){
        criteria = query.criteria;
      }
    if(query.major){
        major = query.major;
      }
    if(query.amount){
        amount = query.amount;
      }
    return {country, gpa, applicantCountry, level, criteria, major, amount, search_state}
    
  }
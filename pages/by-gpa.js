import Layout from "../components/Layout";
import '../main.css'

const LEVELS = [
	{ label: 'Graduate', value: 'Graduate' },
    { label: 'Undergraduate', value: 'Undergraduate' }
];
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

export default class ByGpa extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            results: [],
            resultCount: 0,
            isloading: false,
            level: 'Undergraduate',
            state: 'All',
            gpa: '3.8',
            offset: 0
        }
    }
    searchNow = () =>{
      const {gpa, state, level, isloading, results, offset} = this.state
        fetch(`/api/gpa`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({gpa, state, level, offset})
        })
        .then(            
            response => response.json()                        
        )
        .then(
            data => {
                if(data.length != 0){
                this.setState({isloading: false, results: [...this.state.results, ...data.rows], resultCount: data.count}, ()=>{
                    console.log(this.state.results)
                })
            }
               
        }
        )
    }
    componentDidMount = async() =>{
      console.log("MOunted")
      this.searchNow()
    }
    render(){
      const {results, resultCount} = this.state;
        return(
        <Layout title="School Search By GPA" {...this.props}>
        <section className="section search-block">
        <div className="container">

          <div className="columns is-centered">


            <div className="column">

                  <h1 className="title">Find your best school match</h1>

                  <div className="columns is-centered">

                        <div className="column is-narrow">
                          <div className="content">
                            <div className="long-rounded grey" style={{width: "fit-content"}}>
                                <div className="columns is-mobile">
                                  <div className="column is-narrow">
                                    <p>Search by</p>
                                  </div>
                                  <div className="column">
                                    <input className="input" type="text" placeholder="GPA" />
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>

                        <div className="column is-narrow">
                          <div className="content has-text-centered">
                            <a className="button yellowBtn nextBtn">Next</a>
                          </div>
                        </div>

                  </div>
            </div>


          </div>
        </div>
    </section>


    <section className="section search-results-block">
        <div className="container content">

          <div className="columns search-headings is-mobile">

                <div className="column is-narrow is-left">
                  <h3>Results</h3>
                </div>

                <div className="column has-text-centered">
                  <div><span className="total-found">{this.state.resultCount} Schools Found</span></div>

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

                            </div>
                        </div>
                      </div>

                </div>
          </div>
          {results? 
          <React.Fragment>
          {results.length > 0?
          <React.Fragment>
          {results.map((result, id)=>
          <div key={id} className="search-result long-rounded active">

            <div className="columns">

                <div className="column is-8">
                  <h5 className="result-name">{result.name? <React.Fragment>{result.name}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</h5>

                  <div className="short-info">
          <div>GPA: {result.gpa? <React.Fragment>{result.gpa}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Level: {result.level? <React.Fragment>{result.level}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                  </div>

                  <div className="full-info">
                    <div>GPA: {result.gpa? <React.Fragment>{result.gpa.toFixed(2)}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>Level: {result.level? <React.Fragment>{result.level}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>GMAT: {result.gmat? <React.Fragment>{result.gmat}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>GRE: {result.gre? <React.Fragment>{result.gre}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>TOEFL: {result.toefl? <React.Fragment>{result.toefl}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>IELTS: {result.ielts? <React.Fragment>{result.ielts}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>CITY: {result.city? <React.Fragment>{result.city}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                    <div>STATE: {result.state? <React.Fragment>{result.state}</React.Fragment>: <React.Fragment>N/A</React.Fragment>}</div>
                  </div>
                </div>
            </div>

            <div className="columns is-mobile">

                <div className="column is-5">
                  <a className="more">View details</a>
                </div>

                <div className="column is-7 has-text-right">
                  <div className="visit-school">
                    <a className="share">
                      <span className="icon">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </a>
                    <a className="button yellowBtn nextBtn">Visit school</a>
                  </div>
                </div>
            </div>
          </div>
          )}
          </React.Fragment>
          :
          <React.Fragment>
          <div className="search-result long-rounded">

            <div className="columns">

                <div className="column is-8">
                  <h5 className="result-name">No Result Found!</h5>

                  
                </div>
            </div>

            <div className="columns is-mobile">

                

                <div className="column is-7 has-text-right">
                  
                </div>
            </div>
          </div>
            </React.Fragment>
          }
            </React.Fragment>
            :
            <React.Fragment>
          <div className="search-result long-rounded">

            <div className="columns">

                <div className="column is-8">
                  <h5 className="result-name">No Result! (Search to see Schools)</h5>

                  
                </div>
            </div>

            <div className="columns is-mobile">

                

                <div className="column is-7 has-text-right">
                  
                </div>
            </div>
          </div>
            </React.Fragment>
          }

          <div className="search-result long-rounded active">

            <div className="columns">

                <div className="column is-8">
                  <h5 className="result-name">Julius R. and Patricia A. Krevans Fellowship</h5>

                  <div className="short-info">
                    <div>GPA: 500</div>
                    <div>Level: Graduate</div>
                  </div>

                  <div className="full-info">
                    <div>GPA: 500</div>
                    <div>Level: Graduate</div>
                    <div>GMAT: 500</div>
                    <div>GRE: N/A</div>
                    <div>TOEFL: 90</div>
                    <div>IELTS: N/A</div>
                    <div>CITY: N/A</div>
                    <div>STATE: N/A</div>
                  </div>
                </div>
            </div>

            <div className="columns is-mobile">

                <div className="column is-5">
                  <a className="less">Hide details</a>
                </div>

                <div className="column is-7 has-text-right">
                  <div className="visit-school">
                    <a className="share">
                      <span className="icon">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </a>
                    <a className="button yellowBtn nextBtn">Visit school</a>
                  </div>
                </div>
            </div>
          </div>


        </div>
    </section>
    </Layout>
        );
    }
}
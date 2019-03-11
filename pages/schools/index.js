import Layout from "../../components/Layout";
import '../../main.css'

const Schools = (props)=> {
    return(
        <Layout title="School Search" {...props}>
        <section className="section find-best-school">
        <div className="container">
          <div className="columns is-centered">

            <div className="column">
              <div className="content has-text-centered">

                  <h3>Find your best school match</h3>

                  <h1>How do you want to find your school?</h1>

                  <div>
                    <a href="/by-gpa"><img src="static/images/search_by_gpa.png" /></a>
                    <span className="search-by-gpa">Search by GPA</span>
                  </div>

                  <div>
                    <a href="/by-major"><img src="static/images/search_by_major.png" /></a>
                    <span className="search-by-major">Search by Major</span>
                  </div>

              </div>
            </div>
          </div>
        </div>

    </section>
    </Layout>
    );
}

export default Schools;
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import TextTruncate from 'react-text-truncate';
import '../main.css'

export default class Blog extends React.Component{
    static async getInitialProps({ req, res, query }) {
        let posts;
    
        try {
          const response = await fetch(
            `https://theacademist-new.herokuapp.com/api/blog`
          );
          posts = await response.json();
        } catch (err) {
          console.log(err);
          posts = [];
        }
    
        return { posts };
      }
    render(){
        const {posts} = this.props
        return(
            <Layout title="Blog" activeLink="blog" {...this.props}>
            <section className="section knowledge">
        <div className="container content ">
          <div className="columns is-centered">

            <div className="column">

              <h1 className="title has-text-centered">Our Blog</h1>

              {posts.rows.map((post, id)=>
              <div key={id} className="columns knowledge-block">

                <div className="column">
                <img className="knowledge-image" src={post.featuredImage} />
                </div>
                
                <div className="column is-two-thirds">
                    <a href=""><TextTruncate
                    line={3}
                    element="h3"
                    truncateText="…"
                    text={post.topic}
                    /></a>

                    <TextTruncate
                    line={3}
                    element='p'
                    truncateText="…"
                    text={`${post.content}`.replace(/<[^>]+>/g, '')}
                    />

                    <div className="columns">

                        <div className="column with-circle">
                            <div>
                              <h5>The Academist</h5>
                              <p>November 23, 2019</p>
                            </div>
                        </div>

                        <div className="column is-narrow is-right">
                            <div className="social">
                                <a><img src="static/images/share1.png" /></a>
                                <a><img src="static/images/share2.png" /></a>
                                <a><img src="static/images/share3.png" /></a>
                                <a><img src="static/images/share4.png" /></a>
                                <a><img src="static/images/share5.png" /></a>
                            </div>                      
                        </div>
                    </div>
                </div>            
              </div>
              )}
            </div>
          </div>
        </div>

        <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
          <ul className="pagination-list">
            <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
            <li><a className="pagination-link" aria-label="Goto page 2">2</a></li>
            <li><a className="pagination-link is-current" aria-label="Page 3" aria-current="page">3</a></li>
            <li><a className="pagination-link" aria-label="Goto page 4">4</a></li>
          </ul>
        </nav>


    </section>

            </Layout>
        );
    }
}
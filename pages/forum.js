import Layout from "../components/Layout";
import '../main.css'

export default class Forum extends React.Component{
    static async getInitialProps({}) {
        console.log("gip async")
    }
    render(){
        return(
            <Layout title="Forum" activeLink="forum" {...this.props}>
            <div>
                Forum
            </div>
            </Layout>
        );
    }
}
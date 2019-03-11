import Layout from "../components/Layout";
import '../main.css'

export default class AboutUs extends React.Component{
    static async getInitialProps({}) {
        console.log("gip async")
    }
    render(){
        return(
            <Layout title="About Us" activeLink="" {...this.props}>
            <div>
                About Us
            </div>
            </Layout>
        );
    }
}
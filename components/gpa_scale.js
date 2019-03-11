import React, {Component} from 'react';

export default class GpaScale extends Component{
    constructor(props){
        super(props)
        this.state = {
            gpaCountry: 'United States',
            gpaOption: '',
        }
    }
    /*componentDidMount(){
        this.setState({gpaCountry: this.props.gpaCountry });
        this.setState({gpaOption: this.props.gpaOption });
    } */
    componentWillReceiveProps(nextProps){
        if(nextProps.gpaCountry != this.props.gpaCountry){
          //Perform some operation
          this.setState({gpaCountry: nextProps.gpaCountry });
        }
        if(nextProps.gpaOption != this.props.gpaOption){
            //Perform some operation
            this.setState({gpaOption: nextProps.gpaOption });
          }
      }

    render(){
        let country = this.state.gpaCountry;
        let option = this.state.gpaOption;
        let scaleBlock;
        if (country == "Nigeria" && option == "Waec"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A1</td>
                <td>1 - 1.99</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>B2</td>
                <td>2 - 2.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B3</td>
                <td>3 - 3.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C4</td>
                <td>4 - 4.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C5</td>
                <td>5 - 5.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C6</td>
                <td>6 - 6.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D7</td>
                <td>7 - 7.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>E8</td>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F9</td>
                <td>9</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Nigeria" && option == "University"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>70 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>60 - 60.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 50.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>45 - 49.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>E</td>
                <td>40 - 44.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 39.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "United States"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>90 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>80 - 89.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>70 - 79.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>60 - 69.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 59.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Benin"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A+</td>
                <td>16 - 20</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>A</td>
                <td>15 - 15.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>14 - 14.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>13 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>12 - 12.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>B-</td>
                <td>11 - 11.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>10 - 10.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>9 - 9.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C-</td>
                <td>8 - 8.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>D</td>
                <td>7 - 7.99</td>
                <td>D</td>
                </tr><tr>
                <td>F</td>
                <td>0 - 6.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Botswana"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>80 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>70 - 79.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>C</td>
                <td>60 - 69.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>50 - 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>E</td>
                <td>40 - 49.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 39.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Burkina Faso"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Algeria"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>15 - 20</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>13 - 14.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 12.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10 - 10.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>0 - 9.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Angola"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>16 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>13 - 15.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10 - 12.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>1 - 9.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Cameroon" && option == "French System"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>15 - 20</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>13 - 14.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>12 - 12.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10 - 10.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>0 - 9.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Cameroon" && option == "University of Buea"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>80 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>70 - 79.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>60 - 69.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>55 - 59.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 54.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D+</td>
                <td>45 - 49.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Cameroon" && option == "Gce A Level"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>C</td>
                </tr>
                <tr>
                <td>E</td>
                <td>C</td>
                </tr>
                <tr>
                <td>F</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Central African Republic"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Chad"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Congo"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>16 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>14 - 15.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Cote dIvoire"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Democratic Republic of Congo"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>90 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>80 - 89.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>70 - 79.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>60 - 69.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>50 - 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>0 - 49.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Egypt" && option == "University Scale A"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>90 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>80 - 89.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B</td>
                <td>65 - 79.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 64.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>35 - 49.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 34.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Egypt" && option == "University Scale B"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>85 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>80 - 84.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B</td>
                <td>65 - 79.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 64.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>30 - 49.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 29.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Egypt" && option == "University Scale C"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>85 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>80 - 84.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>75 - 79.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>70 - 74.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>B-</td>
                <td>65 - 69.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>60 - 64.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>55 - 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>30 - 54.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 29.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Eritrea" ){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>75 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>65 - 74.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 64.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>40 - 49.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 39.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Ethiopia" && option == "University"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Ethiopia" && option == "Secondary Certificate"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>90 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>80 - 89.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>60 - 79.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>50 - 59.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>E</td>
                <td>0 - 49.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Gabon" ){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Ghana" && option == "Waec"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A1</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>B2</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B3</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C4</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C5</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C6</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D7</td>
                <td>D</td>
                </tr>
                <tr>
                <td>E8</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F9</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Ghana" && option == "University"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>80 - 100</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>75 - 79.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>65 - 74.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>60 - 64.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>D</td>
                <td>50- 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 49.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Guinea"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Kenya" && option == "Most Common"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>70 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>65 - 69.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>60 - 64.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>50 - 59.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>40 - 44.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 39.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Kenya" && option == "University"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>70 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>60 - 69.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 59.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>40 - 49.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>E</td>
                <td>0 - 39.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Kenya" && option == "Certificate of Secondary School Education"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>80 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>75 - 79.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>70 - 74.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>65 - 69.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>B-</td>
                <td>60 - 64.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>55 - 59.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>50 - 54.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C-</td>
                <td>45 - 49.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>D+</td>
                <td>40 - 44.99</td>
                <td>D+</td>
                </tr>
                <tr>
                <td>D</td>
                <td>35 - 39.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>D-</td>
                <td>30 - 34.99</td>
                <td>D-</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0 - 29.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Kenya" && option == "Secondary Level"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>12</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>11 - 11.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>10 - 10.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B</td>
                <td>9 - 9.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B-</td>
                <td>8 - 8.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>7 - 7.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>6 - 6.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C-</td>
                <td>5 - 5.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>D+</td>
                <td>4 - 4.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>E</td>
                <td>1 - 1.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Liberia" && option == "Most Common"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>90 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>80 - 89.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>70 - 79.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>60 - 69.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 59.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Liberia" && option == "Wassce"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A1</td>
                <td>1 - 1.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B2</td>
                <td>2 - 2.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B3</td>    
                <td>3 - 3.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C4</td>    
                <td>4 - 4.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C5</td>
                <td>5 - 5.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C6</td>
                <td>6 - 6.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C7</td>
                <td>7 - 7.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>E8</td>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>F9</td>
                <td>9</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Madagascar"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Mali"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Mauritania"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Morocco"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>15 - 20</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>13 - 14.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 12.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10 - 10.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Mozambique"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>15 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 14.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10 - 11.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>0 - 9.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Namibia" && option == "University"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>80 - 100</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>70 - 79.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>C</td>
                <td>60 - 69.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>50 - 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>F</td>
                <td>0- 49.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Namibia" && option == "IGCSE"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A*</td>
                <td>90 - 100</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>A</td>
                <td>80 - 89.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>70 - 79.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>C</td>
                <td>60 - 69.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>50 - 59.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>E</td>
                <td>40 - 49.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>F</td>
                <td>30 - 39.99</td>
                <td>D+</td>
                </tr>
                <tr>
                <td>G</td>
                <td>20 - 29.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>U</td>
                <td>0- 19.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Niger"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Senegal"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "South Africa"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>75 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>70 - 74.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>60 - 69.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>50 - 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>0 - 49.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Swaziland"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>D</td>
                <td>C</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Togo"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>16 - 20</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>14 - 15.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>8 - 9.99</td>
                <td>D</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Tunisia"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>14 - 20</td>
                <td>A</td>
                </tr>
                <tr>
                <td>12 - 13.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>11 - 11.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10.5 - 10.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>10.1 - 10.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>10 - 10.09</td>
                <td>C</td>
                </tr>
                <tr>
                <td>9 - 9.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>8 - 8.99</td>
                <td>D</td>
                </tr>
                <tr>
                <td>0 - 7.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Zimbabwe"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C</td>
                <td>C</td>
                </tr>
                <tr>
                <td>D</td>
                <td>D</td>
                </tr>
                <tr>
                <td>E</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Rwanda" && option == "Scale 1"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>10.5 - 11</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>9.5 - 10.49</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>8.5 - 9.49</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>7.5 - 8.49</td>
                <td>B</td>
                </tr>
                <tr>
                <td>B-</td>
                <td>6.5 - 7.49</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>5.5 - 6.49</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>4.5 - 5.49</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C-</td>
                <td>3.5 - 4.49</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>D</td>
                <td>1.5 - 3.49</td>
                <td>D</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Rwanda" && option == "Scale 2"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A</td>
                <td>85 - 100</td>
                <td>A</td>
                </tr>
                <tr>
                <td>A-</td>
                <td>80 - 84.99</td>
                <td>A-</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>75 - 79.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>70 - 74.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>B-</td>
                <td>65 - 69.99</td>
                <td>B-</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>60 - 64.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>55 - 59.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>C-</td>
                <td>50 - 54.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>D</td>
                <td>40 - 49.99</td>
                <td>D</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Zambia" && option == "Scale 1"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>A+</td>
                <td>86 - 100</td>
                <td>A+</td>
                </tr>
                <tr>
                <td>A</td>
                <td>76 - 85.99</td>
                <td>A</td>
                </tr>
                <tr>
                <td>B+</td>
                <td>66 - 75.99</td>
                <td>B+</td>
                </tr>
                <tr>
                <td>B</td>
                <td>56 - 65.99</td>
                <td>B</td>
                </tr>
                <tr>
                <td>C+</td>
                <td>46 - 55.99</td>
                <td>C+</td>
                </tr>
                <tr>
                <td>C</td>
                <td>36 - 39.99</td>
                <td>C</td>
                </tr>
                <tr>
                <td>CP</td>
                <td>30 - 35.99</td>
                <td>C-</td>
                </tr>
                <tr>
                <td>D+</td>
                <td>0 - 29.99</td>
                <td>F</td>
                </tr>
                <tr>
                <td>D</td>
                <td>0 - 29.99</td>
                <td>F</td>
                </tr>
                <tr>
                <td>E</td>
                <td>0 - 29.99</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        else if (country == "Zambia" && option == "Secondary"){
            scaleBlock = (
                <React.Fragment>
                <tr>
                <td>1 - 2</td>
                <td>A</td>
                </tr>
                <tr>
                <td>3 - 4</td>
                <td>B</td>
                </tr>
                <tr>
                <td>5 - 6</td>
                <td>C</td>
                </tr>
                <tr>
                <td>7 - 8</td>
                <td>D</td>
                </tr>
                <tr>
                <td>9</td>
                <td>F</td>
                </tr>
                </React.Fragment>
            )
        }
        return(
        <table className="table guideHere">
        <thead>
        <tr>
        { country == "Burkina Faso" || (country == "Angola") || (country == "Algeria") || (country == "Zambia" && option == "Secondary") || (country == "Zimbabwe") || (country == "Tunisia") || (country == "Togo") || (country == "Swaziland") || (country == "South Africa") || (country == "Senegal") || (country == "Niger") || (country == "Mozambique") || (country == "Morocco") || (country == "Mauritania") || (country == "Mali") || (country == "Madagascar") || (country == "Liberia" && option == "Most Common") || (country == "Guinea") || (country == "Ghana" && option == "Waec") || country == "Gabon" || (country == "Ethiopia" && option == "University") || (country == "Democratic Republic of Congo") || (country == "Cote dIvoire") || country == "Chad" || country == "Congo" || (country == "Central African Republic") || (country == "Cameroon" && option == "French System") || (country == "Cameroon" && option == "Gce A Level")?
        null
        :
        <th>Grade</th>
        }
        <th>Scale</th>
        <th>US Grade</th>
        </tr>
        </thead>
        <tbody>
            {scaleBlock}
        </tbody>
        </table>
        );
    }
}
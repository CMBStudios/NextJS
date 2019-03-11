import React, {Component} from 'react';
import Layout from '../components/Layout';
import COUNTRIES from '../helpers/gpa-countries';
import { authInitialProps } from "../lib/auth";
import _ from 'lodash';
import { withToastManager } from 'react-toast-notifications';
import {NIGERIA_OPTIONS, GHANA_OPTIONS, EGYPT_OPTIONS, KENYA_OPTIONS, LIBERIA_OPTIONS, NAMIBIA_OPTIONS, ETHIOPIA_OPTIONS, RWANDA_OPTIONS, ZAMBIA_OPTIONS, CAMEROON_OPTIONS} from '../helpers/countries-options';
import '../main.css'
import '../progress.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCalculator } from '@fortawesome/free-solid-svg-icons'
import GpaScale from '../components/gpa_scale';
import Joyride from 'react-joyride';
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

export default class GpaCalculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countryQuery: 0,
            gradeQuery: 0,
            country: '',
            isHidden: true,
            countryOptions: [],
            result: '',
            value: 1,
            gpa: [],
            pureGrade: [],
            currentCourse: [],
            credit: [],
            resultOverview: null,
            percentage: 0,
            option: '',
            rowNumber: 6,
            clearingRows: false,
            rows: [{
              id: 1,
            },
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 4,
            },
            {
              id: 5,
            },
            {
              id: 6,
              }],
              steps: [
                {
                  target: '.countryHere',
                  title: 'Step 1',
                  disableBeacon: true,
                  content: 'Pick your Country to begin GPA conversion to US GPA scale',
                },
                {
                  target: '.gradeHere',
                  title: 'Step 2',
                  disableBeacon: true,
                  content: 'Pick the grade school. If grayed out then no grade scale needed',
                },
                {
                  target: '.courseHere',
                  title: 'Step 3',
                  disableBeacon: true,
                  content: 'Tell us what courses we should convert',
                },
                {
                  target: '.guideHere',
                  title: 'Step 4',
                  disableBeacon: true,
                  content: 'This will guide you through the conversion process',
                },
                {
                  target: '.progressHere',
                  title: 'Last Step',
                  disableBeacon: true,
                  content: 'Viola! your US GPA here',
                }
              ],
              run: false
        }
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.addRow = this.addRow.bind(this);
    }
    
    componentDidMount(){
      if(this.props.country){
        this.setState({country: this.props.country},()=>{
          console.log(this.state.country)
        })
      }
      if(this.props.grade){
        this.setState({option: this.props.grade},()=>{
          console.log(this.state.option)
        })
      }
      if(this.props.countryArray){
        this.setState({countryQuery: this.props.countryArray},()=>{
          console.log(this.state.countryQuery)
        })
      }
      if(this.props.gradeArray){
        this.setState({gradeQuery: this.props.gradeArray},()=>{
          console.log(this.state.gradeQuery)
        })
      }
    }
    addRow(){
        let {rows, rowNumber} = this.state;
        let addNum = rowNumber + 1;
        let updates = {
          id: `${addNum}`
        }
        let updatedRow = _.concat(rows, updates);
        this.setState({rows: updatedRow, rowNumber: addNum})
      }
      handleOptionChange(option){
          this.setState({ option: option.value })
      }
     
      removeRow(e){
        const {rows} = this.state;
        const edited = rows.filter(stuff => stuff.id !== e)
        const rowNumberUpdate = this.state.rowNumber - 1
        this.setState({rows: edited, rowNumber: rowNumberUpdate}, ()=>{
          //callback to recalculate gpa after removing row
          let newCredit = _.remove(this.state.credit, function(n) {
            return n.id !== e;
          });
          let newCourse = _.remove(this.state.currentCourse, function(n) {
            return n.id !== e;
          });
          let newGrade = _.remove(this.state.pureGrade, function(n) {
            return n.id !== e;
          });
          let newGpa = _.remove(this.state.gpa, function(n) {
            return n.id !== e;
          });
          this.setState({pureGrade: newGrade, credit: newCredit, currentCourse: newCourse, gpa: newGpa},()=>{
            
              this.calcGpa()
              
          })

        })
      }
      
      calcGpa(){
        let gpa = this.state.gpa;//array us grades, convert to numerical values
        let credit = this.state.credit;
        //console.log(gpa);
        //console.log(credit);//take 1
        let creditMapped = _.map(credit, 'credit');
        this.setState({mappedCredit: creditMapped})
        //console.log("Credit Array")
        //console.log(creditMapped);
        let mapped = _.map(gpa, (n)=>{
          if (n.grade == "A+"){
            return {
              "id": n.id,
              "gradeNo": 4.0
            }
          }
          else if (n.grade == "A"){
            return {
              "id": n.id,
              "gradeNo": 4.0
            }
          }
          else if (n.grade == "A-"){
            return {
              "id": n.id,
              "gradeNo": 4.0
            }
          }
          else if (n.grade == "B+"){
            return {
              "id": n.id,
              "gradeNo": 3.3
            }
          }
          else if (n.grade == "B"){
            return {
              "id": n.id,
              "gradeNo": 3.0
            }
          }
          else if (n.grade == "B-"){
            return {
              "id": n.id,
              "gradeNo": 2.7
            }
          }
          else if (n.grade == "C+"){
            return {
              "id": n.id,
              "gradeNo": 2.3
            }
          }
          else if (n.grade == "C"){
            return {
              "id": n.id,
              "gradeNo": 2.0
            }
          }
          else if (n.grade == "C-"){
            return {
              "id": n.id,
              "gradeNo": 1.7
            }
          }
          else if (n.grade == "D"){
            return {
              "id": n.id,
              "gradeNo": 1.0
            }
          }
          else if (n.grade == "F"){
            return {
              "id": n.id,
              "gradeNo": 0
            }
          }
        });
        //console.log(mapped);//take 2
        let gradeMapped = _.map(mapped, 'gradeNo');
        this.setState({mappedGrade: gradeMapped}) //this is the us gpa here
        //console.log("Gpa Array")
        //console.log(gradeMapped);
        let products =  _.zipWith(gradeMapped, creditMapped, function(a, b){ 
        return a * b;
        });
        //console.log(products);
        let addedCredit = _.reduce(creditMapped, function(sum, n) {
          return parseInt(sum) + parseInt(n); //issue here
        }, 0);
        let addedWeight = _.reduce(products, function(sum, n) {
          return sum + n;
        }, 0);
        //console.log(addedWeight);
        //console.log(addedCredit);
        let finalWeightedGpa = addedWeight / addedCredit;
        //console.log(finalWeightedGpa.toFixed(2));
        let twoDpGpa = finalWeightedGpa.toFixed(2);
        this.setState({result: twoDpGpa}, ()=> {
          //console.log(userGpa);
          if (isNaN(twoDpGpa)){
            toastManager.add(<strong>An error occured, check your inputted grades</strong>, {
              appearance: 'error',
              autoDismiss: true,
            })
          }
          if(twoDpGpa >= 3.8 && twoDpGpa <= 4.0){
            this.setState({percentage: 100})
          }
          else if(twoDpGpa >= 3.5 && twoDpGpa <= 3.8){
            this.setState({percentage: 90})
          }
          else if(twoDpGpa >= 3.2 && twoDpGpa <= 3.5){
            this.setState({percentage: 80})
          }
          else if(twoDpGpa >= 2.9 && twoDpGpa <= 3.2){
            this.setState({percentage: 70})
          }
          else if(twoDpGpa >= 2.6 && twoDpGpa <= 2.9){
            this.setState({percentage: 60})
          }
          else if(twoDpGpa >= 2.3 && twoDpGpa <= 2.6){
            this.setState({percentage: 50})
          }
          else if(twoDpGpa >= 2.0 && twoDpGpa <= 2.3){
            this.setState({percentage: 40})
          }
          else if(twoDpGpa >= 1.7 && twoDpGpa <= 2.0){
            this.setState({percentage: 30})
          }
          else if(twoDpGpa >= 1.4 && twoDpGpa <= 1.7){
            this.setState({percentage: 20})
          }
          else if(twoDpGpa >= 1.1 && twoDpGpa <= 1.4){
            this.setState({percentage: 10})
          }
          else{
            this.setState({percentage: 0})
          }
        })
       let editArray3 = _.map(this.state.rows, 'id');
       let gpaArray = _.map(this.state.gpa, 'grade');
       let creditArray = _.map(this.state.credit, 'credit');
       let countryGradeArray = _.map(this.state.pureGrade, 'countryGrade');
       let courseArray = _.map(this.state.currentCourse, 'course');
       let twoDpgrade = _.map(gradeMapped, (a)=> {
        return a.toFixed(2);
       })
       //console.log(courseArray);
       //console.log(countryGradeArray)
       //console.log(gradeMapped)
       //console.log(editArray3)
       let result = _.zipWith(editArray3, gpaArray, twoDpgrade, creditArray, countryGradeArray, courseArray, function(a, b, c, d, e, f) {
        return {
          "id": a,
          "usGrade": b,
          "gpa": c,
          "credit": d,
          "countryGrade": e,
          "course": f
        };
      });
      this.setState({resultOverview: result})
      }
      handleCountryChange (country) {
        let {countryOptions} = this.state;
		this.setState({ country: country.value }, ()=>{
      let emmpiedStuff = [];
      this.setState({resultOverview: emmpiedStuff, credit: emmpiedStuff, gpa: emmpiedStuff}, ()=> {
        this.inputCourse.value = "";
        this.inputCredit.value = "";
        this.inputGpa.value = "";
        //empty right here
        if(this.state.result){
        //this.refreshPage()
        console.log("Refresh Page")
        }
      })
            if (country.value == "Egypt"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(EGYPT_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Nigeria"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(NIGERIA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                    })
                })
                })
            }
            else if (country.value == "Ghana"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(GHANA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Ethiopia"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(ETHIOPIA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Kenya"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(KENYA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Liberia"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(LIBERIA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Namibia"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(NAMIBIA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Rwanda"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(RWANDA_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Cameroon"){
                this.setState({isHidden: false}, ()=>{
                    let emptyArray = []
                    this.setState({countryOptions: emptyArray}, ()=> {
                    let work = _.merge(CAMEROON_OPTIONS, this.state.countryOptions)
                    this.setState({countryOptions: work}, ()=>{
                        //console.log(this.state.countryOptions)
                    })
                })
                })
            }
            else if (country.value == "Zambia"){
              this.setState({isHidden: false}, ()=>{
                  let emptyArray = []
                  this.setState({countryOptions: emptyArray}, ()=> {
                  let work = _.merge(ZAMBIA_OPTIONS, this.state.countryOptions)
                  this.setState({countryOptions: work}, ()=>{
                      //console.log(this.state.countryOptions)
                  })
              })
              })
          }
            else{
              let emptyArray = []
              this.setState({isHidden: true, countryOptions: emptyArray})
            }
        });
    }
    handleCredit(e){
        //console.log(e.target.value);
        //console.log(e.target.name);
        let currentCredit = this.state.credit;
        let creditObj = {
          "id": e.target.name,
          "credit": e.target.value
        }
        //add id so you can find the exact credit on edit
        if (_.some(currentCredit, ["id", e.target.name])){
          //if id is there remove then add new value
          let newCredit = _.remove(currentCredit, function(n) {
            return n.id != e.target.name;
          });
          let yourCredit = _.concat(newCredit, creditObj);
        this.setState({credit: yourCredit});
  
        }
        else{
        let newCredit = _.concat(currentCredit, creditObj);
        this.setState({credit: newCredit});
        }
      }
      handleChange(e){
        //console.log(e.target.value);
        //console.log(e.target.name);
        let country = this.state.country;
        let type = this.state.option;
        let uppercaseGrade = e.target.value
        let grade = uppercaseGrade.toUpperCase();
        let countryGrade = _.concat(this.state.pureGrade, grade);
        let currentGrade = this.state.pureGrade;
        let currentGradeObj = {
          "id": e.target.name,
          "countryGrade": grade
        }
        if (_.some(currentGrade, ["id", e.target.name])){
          //if id is there remove then add new value
          let newGrades = _.remove(currentGrade, function(n) {
            return n.id != e.target.name;
          });
          let yourGrades = _.concat(newGrades, currentGradeObj);
        this.setState({pureGrade: yourGrades});
  
        }
        else{
        let yourGrades = _.concat(currentGrade, currentGradeObj);
        this.setState({pureGrade: yourGrades});
      }
        //console.log(country);
        //console.log(type);
        let result = (country, type, grade) => {
          switch(country) {
            case "Nigeria":
                if (type == "Waec"){
                  
                  if ((grade == "A1") || grade == "a1" || ((1.99 >= grade) && (grade >= 1))){
                      return "A+"
                  }
                  if ((grade == "B2") || grade == "b2" || ((2.99 >= grade) && (grade >= 2))){
                      return "A"
                  }
                  if ((grade == "B3") || grade == "b3" || ((3.99 >= grade) && (grade >= 3))){
                      return "B"
                  }
                  if ((grade == "C4") || grade == "c4" || ((4.99 >= grade) && (grade >= 4))){
                      return "B"
                  }
                  if ((grade == "C5") || grade == "c5" || ((5.99 >= grade) && (grade >= 5))){
                      return "C"
                  }
                  if ((grade == "C6") || grade == "c6" || ((6.99 >= grade) && (grade >= 6))){
                      return "C"
                  }
                  if ((grade == "D7") || grade == "d7" || ((7.99 >= grade) && (grade >= 7))){
                      return "D"
                  }
                  if ((grade == "E8") || grade == "e8" || ((8.99 >= grade) && (grade >= 8))){
                      return "D"
                  }
                  if ((grade == "F9") || grade == "f9" || (grade == 9)){
                      return "F"
                  }
                  else{
                      return null
                    }
                }
                if (type == "University"){
                  
                    if ((grade == "A") || grade == "a" || ((100 >= grade) && (grade >= 70))){
                      return "A"
                    }
                    if ((grade == "B") || grade == "b" || ((69.99 >= grade) && (grade >= 60))){
                      return "B+"
                    }
                    if ((grade == "C") || grade == "c" || ((59.99 >= grade) && (grade >= 50))){
                      return "B"
                    }
                    if ((grade == "D") || grade == "d" || ((49.99 >= grade) && (grade >= 45))){
                      return "C+"
                    }
                    if ((grade == "E") || grade == "e" || ((44.99 >= grade) && (grade >= 40))){
                      return "C"
                    }
                    if ((grade == "F") || grade == "f" || ((39.99 >= grade) && (grade >= 0))){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                
                break;
            case "Ghana":
                if (type == "University"){
                  
                    if ((grade == "A") || grade == "a" || ((100 >= grade) && (grade >= 80))){
                      return "A+"
                    }
                    if ((grade == "A-") || grade == "a-" || ((79.99 >= grade) && (grade >= 75))){
                      return "A"
                    }
                    if ((grade == "B") || grade == "b" || ((74.99 >= grade) && (grade >= 65))){
                      return "B"
                    }
                    if ((grade == "C") || grade == "c" || ((64.99 >= grade) && (grade >= 60))){
                      return "B-"
                    }
                    if ((grade == "D") || grade == "d" || ((59.99 >= grade) && (grade >= 50))){
                      return "C"
                    }
                    if ((grade == "F") || grade == "f" || ((49.99 >= grade) && (grade >= 0))){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Waec"){
                  if (grade == "A1" || grade == "a1"){
                      return "A+"
                  }
                  else if (grade == "B2" || grade == "b2"){
                      return "A"
                  }
                  else if (grade == "B3" || grade == "b3"){
                      return "B"
                  }
                  else if (grade == "C4" || grade == "c4"){
                      return "B"
                  }
                  else if (grade == "C5" || grade == "c5"){
                      return "C"
                  }
                  else if (grade == "C6" || grade == "c6"){
                      return "C"
                  }
                  else if (grade == "D7" || grade == "d7"){
                      return "D"
                  }
                  else if (grade == "E8" || grade == "e8"){
                      return "D"
                  }
                  else if (grade == "F9" || grade == "f9"){
                      return "F"
                  }
                  else{
                      return null
                    }
                }
                break;
                case "Algeria":
                if ((20 >= grade) && (grade >= 15)) {
                  return "A+"
                }
                else if ((14.99 >= grade) && (grade >= 13)){
                  return "A"
                }
                else if ((12.99 >= grade) && (grade >= 12)){
                  return "B+"
                }
                else if ((11.99 >= grade) && (grade >= 11)){
                  return "B"
                }
                else if ((10.99 >= grade) && (grade >= 10)){
                  return "C"
                }
                else if ((9.99 >= grade) && (grade >= 0)){
                  return "F"
                }
                else{
                  return null
                }
              
            break;
            case "Benin":
                
                    if ((grade == "A+") || grade == "a+" || ((20 >= grade) && (grade >= 16))){
                      return "A+"
                    }
                    if ((grade == "A") || grade == "a" || ((15.99 >= grade) && (grade >= 15))){
                      return "A"
                    }
                    if ((grade == "A-") || grade == "a-" || ((14.99 >= grade) && (grade >= 14))){
                      return "A-"
                    }
                    if ((grade == "B+") || grade == "b+" || ((13.99 >= grade) && (grade >= 13))){
                      return "B+"
                    }
                    if ((grade == "B-") || grade == "b-" || ((11.99 >= grade) && (grade >= 11))){
                      return "B-"
                    }
                    if ((grade == "B") || grade == "b" || ((12.99 >= grade) && (grade >= 12))){
                      return "B"
                    }
                    if ((grade == "C+") || grade == "c+" || ((10.99 >= grade) && (grade >= 10))){
                      return "C+"
                    }
                    if ((grade == "C") || grade == "c" || ((9.99 >= grade) && (grade >= 9))){
                      return "C"
                    }
                    if ((grade == "C-") || grade == "c-" || ((8.99 >= grade) && (grade >= 8))){
                      return "C-"
                    }
                    if ((grade == "D") || grade == "d" || ((7.99 >= grade) && (grade >= 7))){
                      return "D"
                    }
                    if ((grade == "F") || grade == "f" || ((6.99 >= grade) && (grade >= 0))){
                      return "F"
                    }
                    else{
                      return null
                    }
                
            case "Botswana":
                
                    if (((100 >= grade) && (grade >= 80)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    if (((79.99 >= grade) && (grade >= 70)) || grade == "B" || grade == "b") {
                      return "A-"
                    }
                    if (((69.99 >= grade) && (grade >= 60)) || grade == "C" || grade == "c") {
                      return "B"
                    }
                    if (((59.99 >= grade) && (grade >= 50)) || grade == "D" || grade == "d") {
                      return "C"
                    }
                    if (((49.99 >= grade) && (grade >= 40)) || grade == "E" || grade == "e") {
                      return "D"
                    }
                    if (((39.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Swaziland":
                if (grade == "A" || grade == "a"){
                      return "A"
                }
                else if (grade == "B" || grade == "b"){
                      return "A-"
                }
                else if (grade == "C" || grade == "c"){
                      return "B"
                }
                else if (grade == "D" || grade == "d"){
                      return "C"
                }
                else{
                      return null
                    }
                break;
            case "Zimbabwe":
                if(grade == "A" || grade == "a"){
                      return "A"
                }
                else if (grade == "B" || grade == "b"){
                      return "B"
                }
                else if (grade == "C" || grade == "c"){
                      return "C"
                }
                else if (grade == "D" || grade == "d"){
                      return "D"
                }
                else if (grade == "E" || grade == "e"){
                      return "F"
                }
                else{
                      return null
                    }
                break;
            case "Angola":
                
                    if ((20 >= grade) && (grade >= 16)){
                      return "A"
                    }
                    else if ((15 >= grade) && (grade >= 13)){
                      return "B"
                    }
                    else if ((12 >= grade) && (grade >= 10)){
                      return "C"
                    }
                    else if ((9 >= grade) && (grade >= 1)){
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Burkina Faso":
                    if ((20 >= grade) && (grade >= 14)){
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)){
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                break;
            case "Central African Republic":
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)){
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                break;
            case "Chad":
                
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else {
                      return null
                    }
                break;
            case "Cote dIvoire":
  
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                  else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                  }
                  else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                  }
                    else{
                      return null
                    }
                break;
            case "Gabon":
                
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Guinea":
                
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Madagascar":
                
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Mali":
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Mauritania":
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Niger":
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Tunisia":
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Democratic Republic Of Congo":
                
                    if ((100 >= grade) && (grade >= 90)) {
                      return "A"
                    }
                    else if ((89 >= grade) && (grade >= 80)) {
                      return "A-"
                    }
                    else if ((79 >= grade) && (grade >= 70)) {
                      return "B"
                    }
                    else if ((69 >= grade) && (grade >= 60)) {
                      return "B-"
                    }
                    else if ((59 >= grade) && (grade >= 50)) {
                      return "C"
                    }
                    else if ((49 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Congo":
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)) {
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)) {
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)) {
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)) {
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)) {
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Egypt":
                if (type == "University Scale A"){
  
                    if (((100 >= grade) && (grade >= 90)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((89.99 >= grade) && (grade >= 80)) || grade == "A-" || grade == "a-") {
                      return "A-"
                    }
                    else if (((79.99 >= grade) && (grade >= 65)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((64.99 >= grade) && (grade >= 50)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((49.99 >= grade) && (grade >= 35)) || grade == "D" || grade == "d") {
                      return "D"
                    }
                    else if (((34.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "University Scale B"){
  
                    if (((100 >= grade) && (grade >= 85)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((84.99 >= grade) && (grade >= 80)) || grade == "A-" || grade == "a-") {
                      return "A-"
                    }
                    else if (((79.99 >= grade) && (grade >= 65)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((64.99 >= grade) && (grade >= 50)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((49.99 >= grade) && (grade >= 30)) || grade == "D" || grade == "d") {
                      return "D"
                    }
                    else if (((29.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "University Scale C"){
  
                    if (((100 >= grade) && (grade >= 85)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((84.99 >= grade) && (grade >= 80)) || grade == "A-" || grade == "a-") {
                      return "A-"
                    }
                    else if (((79.99 >= grade) && (grade >= 75)) || grade == "B+" || grade == "b+") {
                      return "B+"
                    }
                    else if (((74.99 >= grade) && (grade >= 70)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((69.99 >= grade) && (grade >= 65)) || grade == "B-" || grade == "b-") {
                      return "B-"
                    }
                    else if (((64.99 >= grade) && (grade >= 60)) || grade == "C+" || grade == "c+") {
                      return "C+"
                    }
                    else if (((59.99 >= grade) && (grade >= 55)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((54.99 >= grade) && (grade >= 30)) || grade == "D" || grade == "d") {
                      return "D"
                    }
                    else if (((29.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                break;
            case "Eritrea":
  
                    if (((100 >= grade) && (grade >= 75)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((74.99 >= grade) && (grade >= 65)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((64.99 >= grade) && (grade >= 50)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((49.99 >= grade) && (grade >= 40)) || grade == "D" || grade == "d") {
                      return "D"
                    }
                    else if (((39.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Ethiopia":
                if (type == "University"){
                  if(grade == "A" || grade == "a") {
                      return "A"
                  }
                  else if (grade == "B+" || grade == "b+"){
                      return "B+"
                  }
                  else if (grade == "B" || grade == "b"){
                      return "B"
                  }
                  else if (grade == "C+" || grade == "c+"){
                      return "C+"
                  }
                  else if (grade == "C" || grade == "c"){
                      return "C"
                  }
                  else if (grade == "D" || grade == "d"){
                      return "D"
                  }
                  else if (grade == "F" || grade == "f"){
                      return "F"
                  }
                  else{
                      return null
                    }
                }
            if (type == "Secondary Certificate"){
  
                    if (((100 >= grade) && (grade >= 90)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((89.99 >= grade) && (grade >= 80)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((79.99 >= grade) && (grade >= 60)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((59.99 >= grade) && (grade >= 50)) || grade == "D" || grade == "d") {
                      return "D"
                    }
                    else if (((49.99 >= grade) && (grade >= 0)) || grade == "E" || grade == "e") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                break;
            case "Kenya":
                if (type == "University"){
  
                    if (((100 >= grade) && (grade >= 70)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((69 >= grade) && (grade >= 60)) || grade == "B" || grade == "b") {
                      return "A-"
                    }
                    else if (((59 >= grade) && (grade >= 50)) || grade == "C" || grade == "c") {
                      return "B"
                    }
                    else if (((49 >= grade) && (grade >= 40)) || grade == "D" || grade == "d") {
                      return "C"
                    }
                    else if (((39 >= grade) && (grade >= 0)) || grade == "E" || grade == "e") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Certificate of Secondary School Education"){
                  
                    if (((100 >= grade) && (grade >= 80)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((79.99 >= grade) && (grade >= 75)) || grade == "A-" || grade == "a-") {
                      return "A-"
                    }
                    else if (((74.99 >= grade) && (grade >= 70)) || grade == "B+" || grade == "b+") {
                      return "B+"
                    }
                    else if (((69.99 >= grade) && (grade >= 65)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((64.99 >= grade) && (grade >= 60)) || grade == "B-" || grade == "b-") {
                      return "B-"
                    }
                    else if (((59.99 >= grade) && (grade >= 55)) || grade == "C+" || grade == "c+") {
                      return "C+"
                    }
                    else if (((54.99 >= grade) && (grade >= 50)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((49.99 >= grade) && (grade >= 45)) || grade == "C-" || grade == "c-") {
                      return "C-"
                    }
                    else if (((44.99 >= grade) && (grade >= 40)) || grade == "D+" || grade == "d+") {
                      return "D+"
                    }
                    else if (((39.99 >= grade) && (grade >= 35)) || grade == "D" || grade == "d") {
                      return "D"
                    }
                    else if (((34.99 >= grade) && (grade >= 30)) || grade == "D-" || grade == "d-") {
                      return "D-"
                    }
                    else if (((29.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Most Common"){
                  
                    if (((100 >= grade) && (grade >= 70)) || grade == "A" || grade == "a") {
                      return "A"
                    }
                    else if (((69.99 >= grade) && (grade >= 65)) || grade == "A-" || grade == "a-") {
                      return "A-"
                    }
                    else if (((64.99 >= grade) && (grade >= 60)) || grade == "B+" || grade == "b+") {
                      return "B+"
                    }
                    else if (((59.99 >= grade) && (grade >= 50)) || grade == "B" || grade == "b") {
                      return "B"
                    }
                    else if (((49.99 >= grade) && (grade >= 45)) || grade == "C+" || grade == "c+") {
                      return "C+"
                    }
                    else if (((44.99 >= grade) && (grade >= 40)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((39.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f") {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Secondary Level"){
  
                    if ((grade == 12) || grade == "A" || grade == "a") {
                      return "A+"
                    }
                    else if (((11.99 >= grade) && (grade >= 11)) || grade == "A-" || grade == "a-") {
                      return "A"
                    }
                    else if (((10.99 >= grade) && (grade >= 10)) || grade == "B+" || grade == "b+") {
                      return "A-"
                    }
                    else if (((9.99 >= grade) && (grade >= 9)) || grade == "B" || grade == "b") {
                      return "B+"
                    }
                    else if (((8.99 >= grade) && (grade >= 8)) || grade == "B-" || grade == "b-") {
                      return "B"
                    }
                    else if (((7.99 >= grade) && (grade >= 7)) || grade == "C+" || grade == "c+") {
                      return "C+"
                    }
                    else if (((6.99 >= grade) && (grade >= 6)) || grade == "C" || grade == "c") {
                      return "C"
                    }
                    else if (((5.99 >= grade) && (grade >= 2)) || grade == "C-" || grade == "c-") {
                      return "D"
                    }
                    else if (((1.99 >= grade) && (grade >= 1)) || grade == "D+" || grade == "d+") {
                      return "F"
                    }
                    else {
                      return null
                    }
                }
                break;
            case "Liberia":
                if (type == "Most Common"){
                  
                    if ((100 >= grade) && (grade >= 90)) {
                      return "A"
                    }
                    else if ((89 >= grade) && (grade >= 80)) {
                      return "B"
                    }
                    else if ((79 >= grade) && (grade >= 70)) {
                      return "C"
                    }
                    else if ((69 >= grade) && (grade >= 60)){
                      return "D"
                    }
                    else if ((59 >= grade) && (grade >= 0)) {
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Wassce"){
                  
                    if (((1.99 >= grade) && (grade >= 1)) || (grade == "A1") || grade == "a1") {
                      return "A"
                    }
                    else if (((2.99 >= grade) && (grade >= 2)) || (grade == "B2") || grade == "b2") {
                      return "A"
                    }
                    else if (((3.99 >= grade) && (grade >= 3)) || (grade == "B3") || grade == "b3") {
                      return "B"
                    }
                    else if (((4.99 >= grade) && (grade >= 4)) || (grade == "C4") || grade == "c4"){
                      return "B"
                    }
                    else if (((5.99 >= grade) && (grade >= 5)) || (grade == "C5") || grade == "c5"){
                      return "C"
                    }
                    else if (((6.99 >= grade) && (grade >= 6)) || (grade == "C6") || grade == "c6") {
                      return "C"
                    }
                    else if (((7.99 >= grade) && (grade >= 7)) || (grade == "C7") || grade == "c7") {
                      return "D"
                    }
                    else if (((8.99 >= grade) && (grade >= 8)) || (grade == "E8") || grade == "e8"){
                      return "D"
                    }
                    else if ((grade == 9) || (grade == "F9") || grade == "f9"){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                break;
            case "Morocco":
                
                    if ((20 >= grade) && (grade >= 14)) {
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)){
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)) {
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10.5)){
                      return "B-"
                    }
                    else if ((10.49 >= grade) && (grade >= 10.1)){
                      return "C+"
                    }
                    else if ((10.09 >= grade) && (grade >= 10)){
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 9)){
                      return "C-"
                    }
                    else if ((8.99 >= grade) && (grade >= 8)){
                      return "D"
                    }
                    else if ((7.99 >= grade) && (grade >= 0)){
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Mozambique":
                
                    if ((20 >= grade) && (grade >= 15)){
                      return "A"
                    }
                    else if ((14.99 >= grade) && (grade >= 12)){
                      return "B"
                    }
                    else if ((11 >= grade) && (grade >= 10)){
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 0)){
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Namibia":
                if (type == "IGCSE"){
                  
                    if (((100 >= grade) && (grade >= 90)) || grade == "A*" || grade == "a*"){
                      return "A+"
                    }
                    else if (((89.99 >= grade) && (grade >= 80)) || grade == "A" || grade == "a"){
                      return "A"
                    }
                    else if (((79.99 >= grade) && (grade >= 70)) || grade == "B" || grade == "b"){
                      return "A-"
                    }
                    else if (((69.99 >= grade) && (grade >= 60)) || grade == "C" || grade == "c"){
                      return "B"
                    }
                    else if (((59.99 >= grade) && (grade >= 50)) || grade == "D" || grade == "d"){
                      return "C+"
                    }
                    else if (((49.99 >= grade) && (grade >= 40)) || grade == "E" || grade == "e"){
                      return "C"
                    }
                    else if (((39.99 >= grade) && (grade >= 30)) || grade == "F" || grade == "f"){
                      return "D+"
                    }
                    else if (((29.99 >= grade) && (grade >= 20)) || grade == "G" || grade == "g"){
                      return "D"
                    }
                    else if (((19.99 >= grade) && (grade >= 0)) || grade == "U" || grade == "u"){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "University"){
                  
                    if (((100 >= grade) && (grade >= 80)) || grade == "A" || grade == "a"){
                      return "A+"
                    }
                    else if (((79.99 >= grade) && (grade >= 70)) || grade == "B" || grade == "b"){
                      return "A"
                    }
                    else if (((69.99 >= grade) && (grade >= 60)) || grade == "C" || grade == "c"){
                      return "B"
                    }
                    else if (((59.99 >= grade) && (grade >= 50)) || grade == "D" || grade == "d"){
                      return "C"
                    }
                    else if (((49.99 >= grade) && (grade >= 0)) || grade == "F" || grade == "f"){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                break;
            case "Rwanda":
                if (type == "Scale 1"){
                
                    if (((11 >= grade) && (grade >= 10.5)) || grade == "A" || grade == "a"){
                      return "A"
                    }
                    else if (((10.49 >= grade) && (grade >= 9.5)) || grade == "A-" || grade == "a-"){
                      return "A-"
                    }
                    else if (((9.49 >= grade) && (grade >= 8.5)) || grade == "B+" || grade == "b+"){
                      return "B+"
                    }
                    else if (((8.49 >= grade) && (grade >= 7.5)) || grade == "B" || grade == "b"){
                      return "B"
                    }
                    else if (((7.49 >= grade) && (grade >= 6.5)) || grade == "B-" || grade == "b-"){
                      return "B-"
                    }
                    else if (((6.49 >= grade) && (grade >= 5.5)) || grade == "C+" || grade == "c+"){
                      return "C+"
                    }
                    else if (((5.49 >= grade) && (grade >= 4.5)) || grade == "C" || grade == "c"){
                      return "C"
                    }
                    else if (((4.49 >= grade) && (grade >= 3.5)) || grade == "C-" || grade == "c-"){
                      return "C-"
                    }
                    else if (((3.49 >= grade) && (grade >= 1.5)) || grade == "D" || grade == "d"){
                      return "D"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Scale 2"){
                  
                    if (((100 >= grade) && (grade >= 85)) || grade == "A" || grade == "a"){
                      return "A"
                    }
                    else if (((84.99 >= grade) && (grade >= 80)) || grade == "A-" || grade == "a-"){
                      return "A-"
                    }
                    else if (((79.99 >= grade) && (grade >= 75)) || grade == "B+" || grade == "b+"){
                      return "B+"
                    }
                    else if (((74.99 >= grade) && (grade >= 70)) || grade == "B" || grade == "b"){
                      return "B"
                    }
                    else if (((69.99 >= grade) && (grade >= 65)) || grade == "B-" || grade == "b-"){
                      return "B-"
                    }
                    else if (((64.99 >= grade) && (grade >= 60)) || grade == "C+" || grade == "c+"){
                      return "C+"
                    }
                    else if (((59.99 >= grade) && (grade >= 55)) || grade == "C" || grade == "c"){
                      return "C"
                    }
                    else if (((54.99 >= grade) && (grade >= 50)) || grade == "C-" || grade == "c-"){
                      return "C-"
                    }
                    else if (((49.99 >= grade) && (grade >= 40)) || grade == "D" || grade == "d"){
                      return "D"
                    }
                    else{
                      return null
                    }
                }
                break;
            case "Senegal":
                
                    if ((20 >= grade) && (grade >= 14)){
                      return "A"
                    }
                    else if ((13.9 >= grade) && (grade >= 12)){
                      return "B+"
                    }
                    else if ((11.9 >= grade) && (grade >= 11)){
                      return "B"
                    }
                    else if ((10.9 >= grade) && (grade >= 10.5)){
                      return "B-"
                    }
                    else if ((10.4 >= grade) && (grade >= 10.1)){
                      return "C+"
                    }
                    else if (grade == 10){
                      return "C"
                    }
                    else if ((9.9 >= grade) && (grade >= 9)){
                      return "C-"
                    }
                    else if ((8.9 >= grade) && (grade >= 8)){
                      return "D"
                    }
                    else if ((7.9 >= grade) && (grade >= 0)){
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Togo":
                
                    if ((20 >= grade) && (grade >= 16)){
                      return "A+"
                    }
                    else if ((15.99 >= grade) && (grade >= 14)){
                      return "A"
                    }
                    else if ((13.99 >= grade) && (grade >= 12)){
                      return "B"
                    }
                    else if ((11.99 >= grade) && (grade >= 10)){
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 8)){
                      return "D"
                    }
                    else{
                      return null
                    }
                break;
            case "South Africa":
                
                    if ((100 >= grade) && (grade >= 75)){
                      return "A"
                    }
                    else if ((74.99 >= grade) && (grade >= 70)){
                      return "B+"
                    }
                    else if ((69.99 >= grade) && (grade >= 60)){
                      return "B"
                    }
                    else if ((59.99 >= grade) && (grade >= 50)){
                      return "C"
                    }
                    else if ((49.99 >= grade) && (grade >= 0)){
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            case "Cameroon":
                if (type == "French System"){
                  
                    if ((20 >= grade) && (grade >= 15)){
                      return "A+"
                    }
                    else if ((14.99 >= grade) && (grade >= 13)){
                      return "A-"
                    }
                    else if ((12.99 >= grade) && (grade >= 12)) {
                      return "B+"
                    }
                    else if ((11.99 >= grade) && (grade >= 11)){
                      return "B"
                    }
                    else if ((10.99 >= grade) && (grade >= 10)){
                      return "C"
                    }
                    else if ((9.99 >= grade) && (grade >= 0)){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "University of Buea"){
                  
                    if (((100 >= grade) && (grade >= 80)) || grade == "A" || grade == "a"){
                      return "A"
                    }
                    else if (((79 >= grade) && (grade >= 70)) || grade == "B+" || grade == "b+"){
                      return "B+"
                    }
                    else if (((69 >= grade) && (grade >= 60)) || grade == "B" || grade == "b"){
                      return "B"
                    }
                    else if (((59 >= grade) && (grade >= 55)) || grade == "C+" || grade == "c+"){
                      return "C+"
                    }
                    else if (((54 >= grade) && (grade >= 50)) || grade == "C" || grade == "c"){
                      return "C"
                    }
                    else if (((49 >= grade) && (grade >= 45)) || grade == "D+" || grade == "d+"){
                      return "F"
                    }
                    else if (((44 >= grade) && (grade >= 40)) || grade == "D" || grade == "d"){
                      return "F"
                    }
                    else if (((39 >= grade) && (grade >= 0)) || grade == "F" || grade == "f"){
                      return "F"
                    }
                    else{
                      return null
                    }
                }
                if (type == "Gce A Level"){
                  if(grade == "A" || grade == "a") {
                      return "A"
                  }
                  else if(grade == "B" || grade == "b"){
                      return "B"
                  }
                  else if(grade == "C" || grade == "c"){
                      return "B"
                  }
                  else if(grade == "D" || grade == "d"){
                      return "C"
                  }
                  else if(grade == "E" || grade == "e"){
                      return "C"
                  }
                  else if(grade == "F" || grade == "f"){
                      return "F"
                  }
                  else{
                      return null
                    }
                }
              
            case "Zambia":
            if (type == "Secondary"){
                    if ((2 >= grade) && (grade >= 1)){
                      return "A"
                    }
                    else if ((4 >= grade) && (grade >= 3)){
                      return "B"
                    }
                    else if ((6 >= grade) && (grade >= 5)){
                      return "C"
                    }
                    else if ((8 >= grade) && (grade >= 7)){
                      return "D"
                    }
                    else if (grade == 9){
                      return "F"
                    }
                    else{
                      return null
                    }
                  }
                  if (type == "Scale 1"){
                    
                      if (((100 >= grade) && (grade >= 86)) || grade == "A+" || grade == "a+"){
                        return "A+"
                      }
                      if (((85.99 >= grade) && (grade >= 76)) || grade == "A" || grade == "a"){
                        return "A"
                      }
                      if (((75.99 >= grade) && (grade >= 66)) || grade == "B+" || grade == "b+"){
                        return "B+"
                      }
                      if (((65.99 >= grade) && (grade >= 56)) || grade == "B" || grade == "b"){
                        return "B"
                      }
                      if (((55.99 >= grade) && (grade >= 46)) || grade == "C+" || grade == "c+"){
                        return "C+"
                      }
                      if (((39.99 >= grade) && (grade >= 36)) || grade == "C" || grade == "c"){
                      return "C"
                      }
                      if (((35.99 >= grade) && (grade >= 30)) || grade == "CP" || grade == "cp"){
                      return "C-"
                      }
                      if (((29.99 >= grade) && (grade >= 0)) || grade == "D+" || grade == "d+"){
                      return "F"
                      }
                      if (((29.99 >= grade) && (grade >= 0)) || grade == "D" || grade == "d"){
                      return "F"
                      }
                      if (((29.99 >= grade) && (grade >= 0)) || grade == "E" || grade == "e"){
                        return "F"
                      }
                      else{
                        return null
                      }
                  }
              
            case "China":
                
                    if ((100 >= grade) && (grade >= 90)){
                      return "A"
                    }
                    else if ((89 >= grade) && (grade >= 80)){
                      return "B"
                    }
                    else if ((79 >= grade) && (grade >= 70)){
                      return "C"
                    }
                    else if ((69 >= grade) && (grade >= 60)){
                      return "D"
                    }
                    else if ((59 >= grade) && (grade >= 0)){
                      return "F"
                    }
                    else{
                      return null
                    }
                break;
            default:
                null;
        }
        
        }
        let currentGpa = this.state.gpa;
        let gpaObj = {
          "id": e.target.name,
          "grade": result(country, type, grade)
        }
        //let newGpa = _.merge(currentGpa, gpaObj);
        //this.setState({gpa: newGpa}, ()=> {
          //console.log(result(country, type,grade));
          //console.log(this.state.gpa);
        //});
        if (_.some(currentGpa, ["id", e.target.name])){
          //if id is there remove then add new value
          let newGpa = _.remove(currentGpa, function(n) {
            return n.id != e.target.name;
          });
          let yourGpa = _.concat(newGpa, gpaObj);
        this.setState({gpa: yourGpa}, ()=> {
          //console.log(result(country, type,grade));
          //console.log(this.state.gpa);
        });
  
        }
        else{
        let newGpa = _.concat(currentGpa, gpaObj);
        this.setState({gpa: newGpa});
        }
        if ((this.state.country == "Nigeria" && this.state.option == "Waec") || (this.state.country == "Ghana" && this.state.option == "Waec") || (this.state.country == "Liberia" && this.state.option == "Wassce")){
          //console.log(e.target.name);
          let currentCredit = this.state.credit;
          let creditObj = {
            "id": e.target.name,
            "credit": 1
          }
          //add id so you can find the exact credit on edit
          if (_.some(currentCredit, ["id", e.target.name])){
            //if id is there remove then add new value
            let newCredit = _.remove(currentCredit, function(n) {
              return n.id != e.target.name;
            });
            let yourCredit = _.concat(newCredit, creditObj);
          this.setState({credit: yourCredit});
    
          }
          else{
          let newCredit = _.concat(currentCredit, creditObj);
          this.setState({credit: newCredit});
          }
        }
      }
      handleCourse(e){
        //console.log(e.target.value);
        //console.log(e.target.name);
        let currentCourse = this.state.currentCourse;
        let courseObj = {
          "id": e.target.name,
          "course": e.target.value
        }
        //add id so you can find the exact credit on edit
        if (_.some(currentCourse, ["id", e.target.name])){
          //if id is there remove then add new value
          let newCourse = _.remove(currentCourse, function(n) {
            return n.id != e.target.name;
          });
          let yourCourse = _.concat(newCourse, courseObj);
        this.setState({currentCourse: yourCourse});
  
        }
        else{
        let newCourse = _.concat(currentCourse, courseObj);
        this.setState({currentCourse: newCourse});
        }
      }
    render(){
        const countries = COUNTRIES;
        let options = this.state.countryOptions;
        const { steps, run } = this.state;
        //console.log(this.props.grade)
        return(
            <Layout title="GPA Calculator" {...this.props}>
                  <Joyride
                    run={run}
                    steps={steps}
                    continuous={true}
                    disableScrolling={false}
                    showSkipButton={true}
                  />
                <section className="section gpa">
                    <div className="container">

                        <div className="columns">

                                  <div className="column is-4-tablet is-5-desktop text-block">
                                    <div className="content"> 
                                        <h3 className="title">GPA Calculator</h3>

                                        <div>
                                            Various school systems have different requisite grade points across the world. 
                                            This tool helps you, either as a high school student, or any level of education, 
                                            who may not yet know their average GPA in the U.S standard to evaluate 
                                            the eligibility of their grades against the requirements 
                                            for admission into their schools of interest.
                                        </div>
                                    </div>

                                    <img className="is-hidden-tablet" src="static/images/gpa-mobile-3.png" style={{width: "100%"}} />
                                  </div>
                        </div>

                        <div className="columns is-vcentered">

                            <div className="column is-two-thirds gpa-input">
                              <div className="content">

                                <div className="long-rounded yellow countryHere">
                                    <div className="columns is-mobile align-center-now">
                                      <div className="column is-narrow">
                                          <p>Your Country</p>
                                      </div>
                                      <div className="column">
                                      <Select
                                      className="country"
                                      classNamePrefix="country-select"
                                      defaultValue={options[0]}
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

                                <div className="long-rounded yellow gradeHere" style={{minWidth: "55%"}}>
                                    <div className="columns is-mobile align-center-now">
                                      <div className="column is-narrow">
                                          <p>Grade System</p>
                                      </div>
                                      <div className="column">
                                              {!this.state.isHidden ?
                                            
                                            <Select
                                            className="grade"
                                            classNamePrefix="grade-select"
                                            placeholder="Select Grade System"
                                            defaultValue={options[0]}
                                            //value={this.state.option}
                                            isClearable={true}
                                            isDisabled={false}
                                            isSearchable={false}
                                            name="countries"
                                            onChange={this.handleOptionChange}
                                            options={options}
                                            />
                                                :
                                                <Select
                                                className="country"
                                                classNamePrefix="country"
                                                placeholder="Select Grade System"
                                                defaultValue={options[0]}
                                                //value={this.state.option}
                                                isClearable={true}
                                                isDisabled={true}
                                                isSearchable={false}
                                                name="countries"
                                                onChange={this.handleOptionChange}
                                                options={options}
                                              />
                                              }
                                              

                                      </div>
                                    </div>
                                </div>

                                



                                <span className="courseHere">
                                <div className="columns is-mobile courseHere">

                                          <div className="column">
                                            <h4>Input result</h4>
                                          </div>

                                          <div className="column is-narrow">
                                            
                                          </div>

                                </div>

                                <div className="gpa-table">
                                {this.state.rows.map(row =>
                                      <div key={row.id} className="columns table-row is-mobile is-multiline has-text-centered">

                                                <div className="column is-10-mobile">
                                                  <input name={`${row.id}`} ref={el => this.inputCourse = el} onBlur={this.handleCourse.bind(this)} className="input is-rounded" type="text" placeholder="Course name" />
                                                </div>

                                                <div className="column is-5-mobile">
                                                  <input name={`${row.id}`} ref={el => this.inputGpa = el} onBlur={this.handleChange.bind(this)} className="input is-rounded" type="text" placeholder="Grade" />
                                                </div>

                                                <div className="column is-5-mobile">
                                                {(this.state.country == "Nigeria" && this.state.option == "Waec") || (this.state.country == "Ghana" && this.state.option == "Waec") || (this.state.country == "Liberia" && this.state.option == "Wassce")?
                                                  <input name={`${row.id}`} disabled ref={el => this.inputCredit = el} onBlur={this.handleCredit.bind(this)} className="input is-rounded" type="text" placeholder="Credits" />
                                                  :
                                                  <input name={`${row.id}`} ref={el => this.inputCredit = el} onBlur={this.handleCredit.bind(this)} className="input is-rounded" type="text" placeholder="Credits" />
                                                  
                                                }
                                                </div>

                                                <div className="column is-narrow">
                                                  <a onClick={this.removeRow.bind(this, row.id)} className="delete"></a>
                                                </div>
                                      </div>
                                )}
                                </div>
                                </span>

                                <div className="add_course">

                                      <a onClick={this.addRow} className="button">
                                            <span className="icon">
                                            <FontAwesomeIcon className="far" icon={faPlusCircle} size="1x" color="#C9C5C5"/>
                                          
                                            </span>
                                            <span>Add Course</span>
                                      </a>
                                      <a onClick={this.calcGpa.bind(this)} className="button">
                                            <span className="icon">
                                            <FontAwesomeIcon className="far" icon={faCalculator} size="1x" color="#C9C5C5"/>
                                          
                                            </span>
                                            <span>Calculate GPA</span>
                                      </a>

                                      <div className="r-progressbar">

                                            <div className="radial-progress progressHere" data-progress={this.state.percentage}>
                                              <div className="circlebar">
                                                <div className="mask full">
                                                  <div className="fill"></div>
                                                </div>
                                                <div className="mask half">
                                                  <div className="fill"></div>
                                                  <div className="fill fix"></div>
                                                </div>
                                                <div className="shadow"></div>
                                                <div className="bottom"></div>

                                              </div>
                                              <div className="inset">
                                              </div>
                                            </div>  

                                            
                                            <div className="progressbar-data">

                                              <div>
                                                <h2>
                                                {this.state.result == ''?
                                                <React.Fragment>0.00</React.Fragment>
                                                :
                                                <React.Fragment>
                                                { isNaN(this.state.result) ?
                                                <React.Fragment>0.00</React.Fragment>
                                                :
                                                <React.Fragment>{this.state.result}</React.Fragment>
                                                }
                                                </React.Fragment>
                                                }
                                                </h2>
                                                <span>Cumulative GPA</span>
                                                <br /><br />
                                                <div>
                                                  <span className="is-pulled-left">0.0</span>
                                                  <span className="is-pulled-right">4.0</span>
                                                </div>
                                              </div>

                                            </div>




                                      </div>

                                </div>


                              </div>
                            </div>

                            <div className="column gpa-scale">

                                  <div className="content">

                                      <h4>The Grade Scale</h4>
                                      
                                      <GpaScale gpaCountry={this.state.country} gpaOption={this.state.option}/>

                                  </div>

                            </div>

                        </div>




                    </div>
                  </section>
                                                
            </Layout>
        );
    }
}

GpaCalculator.getInitialProps = ({query}) => {
  let country, grade, countryArray, gradeArray;
  if(query.country){
    console.log(query.country)
    country = query.country;
  }
  if(query.grade){
    console.log(query.grade)
    grade = query.grade;
  }
  if(query.country_position){
    console.log(query.country_position)
    countryArray = query.country_position;
  }
  if(query.grade_position){
    console.log(query.grade_position)
    gradeArray = query.grade_position;
  }
  return {country, grade, countryArray, gradeArray}
  //console.log(query)
  authInitialProps();
}

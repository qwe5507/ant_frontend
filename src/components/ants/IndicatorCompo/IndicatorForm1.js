import React, { Component} from "react"
import LineChartIn from "./LineChartIn"
import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import IndApi from "../../../api/IndApi";
import { Link } from 'react-router-dom';
class IndicatorForm1 extends Component{

  constructor(props){
    console.log('constro run');
    super(props);
    this.state ={
      dates : '',
      exechange_Name : '',
      rates : '',
      symbol : 'EURUSD',
      message : null
};
}

componentDidMount(){
  console.log('comdid run');
  this.reloadJipyoList();
  
}

reloadJipyoList = () => {
  IndApi.labelDalOneList()
  .then(res =>{
      this.setState({
        dates : res.data[0]["dates"].substring(0,10),
        exechange_Name : res.data[0]["exechange_Name"],
        rates : res.data[0]["price"],
        message : "1일 데이터"
      })
      
      })
      .catch(err => {
      console.error('지표리스트 오류(국외환율)', err);
     // alert('조회오류');
      })

    }


    componentWillUnmount(){
      console.log('comwilunmont run')
    }

  render(){
    return(
  <Div
    d="flex"
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    w={{ xs: "100%", md: "23rem" }}
    maxW="100%"
    pos={{ xs: "static", md: "absolute" }}
    m={{ xs: "1rem", md: "-2rem" }}
    left="0"
    //right="0"
    top="0"
    rounded="xl"
    h={{ lg: "24rem" }}
    bg="white"
    shadow="4"
    p="2rem"
  >
     <Link to={`/IndicatorDetailExeFor/${this.state.symbol}`}>
    <Div flexGrow="1">
   
    <Div>
   
      <Text
        textAlign="center"
        textSize="title"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="800"
        fontFamily="ko"
        textColor="black"
      >
       {this.state.exechange_Name}
      </Text>
      <Text
        textAlign="center"
        textSize="title"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="800"
        fontFamily="ko"
        textColor="info700"
        
      >
        {this.state.rates}
      </Text>
      <Text
        textAlign="center"
        textSize="caption"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="800"
        fontFamily="ko"
        textColor="light"
        
      >
        ({this.state.dates} 기준)
      </Text>
      </Div>
      
      <br/>
      <LineChartIn/>
     </Div>
     </Link>
  </Div>
    )
  }
}
export default  IndicatorForm1; 

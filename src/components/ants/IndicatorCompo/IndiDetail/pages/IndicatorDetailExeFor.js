import React, {useState, useEffect, useRef } from "react"
import { Text, Div,  Button,  Container} from "atomize";
import { useParams } from 'react-router-dom';
import ChartExeFor from "../chart/ChartExeFor"
import IndApi from "../../../../../api/IndApi";

import axios from "axios";

function IndicatorDetailExeFor(props) {
    
    let [result, result변경] = useState("");
    let [hits, hits변경] = useState([]); 

    let [ids, idsbyun] = useState([])
    let [id1, id1byun] = useState('')
    let [id2, id2byun] = useState('')

    let [name, namebyun] = useState('')
    let [nums, numsbyun] = useState('')
    let [date, datesbyun] = useState('')
    let [chart1, chartShow1 ] = useState(true);
    let [chart2, chartShow2 ] = useState(false);
    let [chart3, chartShow3 ] = useState(false);
    let {symbol} = useParams();
    
     {/*뉴스*/}  
     function moveHref(url){
     
     window.open(url)
    }

    function searchmatchparse(){
      IndApi.chartIndiExeFor(symbol, 1)
      .then(res =>{
       
        idsbyun(res.data[0]["exechange_Name"].split("/"))
       
        namebyun(res.data[0]["exechange_Name"])
        numsbyun(res.data[0]["rates"])
        datesbyun(res.data[0]["dates"].substring(0,10))
        console.log(ids[0].split(" ")[1])
        var temp = ids[0].split(" ")[1]
        console.log(temp)
        id1byun(temp)
        id2byun(ids[1])
      }
      )
      .catch(err => {
        console.error('1일 수치 확인 오류(국내환율)', err);
      
        })

      return 0;

    }

    function searchmatchparse2(){
      axios.get("http://localhost:8000/news/searchmatchparse", { params :{id : id1, id:id2}})
      .then(response =>{
        result=response.data
       
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        
        
      })
      .catch(error=>{
        console.log(error);
      });
    }


    useEffect(() => {
      window.scrollTo(0, 0)
      var value = searchmatchparse()
      console.log(value)
      if (value == 0)
      {
        searchmatchparse2()
      }

     },[]);
     
  
    return (     
      
      <div align = "center">
        <Container d="flex" flexDir="column" m={{ x: { xs: '0', md: '0' }, y: { xs: '5.5rem', md: '3.5rem' }}} >
       
        <Text
                textAlign="left"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
                >                
                {name}
              </Text>
          
          <Div  d="flex" flexDir="row ">
          <Text
               textAlign="left"
                textSize="title"
                m={{ t: "0", b: "1rem" }}
                textWeight="800"
                fontFamily="ko"
                textColor="info700"
              >
                {nums}
          </Text>  
          <Text
              textAlign="left"
               textSize="caption"
              m={{ t: "0.5rem", b: "0.5rem" }}
              textWeight="800"
              fontFamily="ko"
              textColor="white"
        
          >
          ((
          </Text> 
          <Text
              textAlign="left"
               textSize="caption"
              m={{ t: "0.5rem", b: "0.5rem" }}
              textWeight="800"
              fontFamily="ko"
              textColor="light"
        
          >
          ({date} 기준)
          </Text> 
          </Div>

          <Container d="flex" flexDir="row ">
        <Button onClick={() => {chartShow1(true); chartShow2(false); chartShow3(false);} } 
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            1개월
          </Button>
          <Button onClick={() => {chartShow2(true); chartShow1(false); chartShow3(false);} } 
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            3개월 
          </Button>
          <Button onClick={() => {chartShow3(true); chartShow1(false); chartShow2(false);} }
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            6개월
          </Button>
        
          </Container>
      
          {
            chart1 === true
            ? <ChartExeFor nums={30} symbol={symbol}/>
            : null
          }
          {
            chart2 === true
            ? <ChartExeFor nums={90} symbol={symbol}/>
            : null
          }
          {
            chart3 === true
            ? <ChartExeFor nums={180} symbol={symbol}/>
            : null
          }

          <Text
                textAlign="left"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                뉴스 목록
              </Text>   
          
          </Container>
          {hits.map(function(data){
        return(
          
        <Div  m = {{ xs: "0", md: "-1.5rem" }}>
        
        <Div
        bg="white" 
        d="inline-block" align="center"
       
        >
       <Div
      h = {{ xs: "11rem", md: "6rem" }}
       w = {{ xs: "25rem", md: "70rem" }}
      
       border={{ b: "1px solid" }}
       borderColor="gray400"
       pos = "flex"
       d={{ xs: "inline-block", md: "inline-block", lg: "inline-block" }}
       
       >         
           <Div
           align="flex-start"
           h = {{xs : "7rem" ,md : "auto"}}
           onClick = {() => {moveHref(data['_source']['news_url'])}}
           >
            <Text
                textAlign="left"
                textSize="subheader"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
               {data['_source']['news_title']}
               </Text>
               <Text
                m={{xs : "7rem" ,md : "auto"}}
                textAlign="left"  
                textColor="gray900"
               >{data['_source']['news_group']} | {data['_source']['news_source']} | {data['_source']['news_date'].substring(0,10)} | </Text>  
            
           </Div>

       </Div>
    </Div>
    
    </Div>
 

)})}
          
      </div>
      
    )

}

export default IndicatorDetailExeFor;
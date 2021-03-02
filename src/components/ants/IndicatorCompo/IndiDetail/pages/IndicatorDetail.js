import React, {useState, useEffect, useRef } from "react"
import { Text, Div, Button, Container } from "atomize";
import ChartKor from "../chart/ChartKor"
import IndApi from "../../../../../api/IndApi";

import axios from "axios";

function IndicatorDetail() {
    console.log('asdasd')
    let [result, resultbyun] = useState("");
    let [hits, hitsbyun] = useState([]); 

    let [nums, numsbyun] = useState('')
    let [date, datesbyun] = useState('')
    let [chart1, chartShow1 ] = useState(true);
    let [chart2, chartShow2 ] = useState(false);
    let [chart3, chartShow3 ] = useState(false);
    const usdKrwContainer = useRef(null);
    
    function moveHref(url){
      console.log("moveHref호출")
     window.open(url)
    }

    function searchmatchparse(){
      axios.get("http://localhost:8000/news/searchmatchparse", { params :{id : "달러", id: "원화"}})
      .then(response =>{
        result=response.data
        
        var hits2 = result['hits']['hits']
              
        if(hits2.length > 9)
        {
          hitsbyun([result['hits']['hits'][0], result['hits']['hits'][1], result['hits']['hits'][2], result['hits']['hits'][3], result['hits']['hits'][4], result['hits']['hits'][5], result['hits']['hits'][6], result['hits']['hits'][7], result['hits']['hits'][8]])
        }
        hitsbyun(hits2)
      })
      .catch(error=>{
        console.log(error);
      });
    }

    useEffect(() => {
      window.scrollTo(0, 0)
      IndApi.chartIndi(1)
      .then(res =>{
        numsbyun(res.data[0]["rates"])
        datesbyun(res.data[0]["dates"].substring(0,10))
             
      }
      )
      .catch(err => {
        console.error('1일 수치 확인 오류(국내환율)', err);
      
        })
        searchmatchparse()
     }, []);

    
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
                
                원/달러
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
            ? <ChartKor nums={30}/>
            : null
          }
          {
            chart2 === true
            ? <ChartKor nums={90}/>
            : null
          }
          {
            chart3 === true
            ? <ChartKor nums={180}/>
            : null
          }

          <Text
                textAlign="left"
                textSize="title"
                m={{ t: "0rem", b: "0rem" }}
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

export default IndicatorDetail;
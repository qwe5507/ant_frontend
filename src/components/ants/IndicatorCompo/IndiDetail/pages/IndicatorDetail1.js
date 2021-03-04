import React, {useState, useEffect, useRef } from "react"
import { Text, Div, Icon, Anchor, Button, Input, Container} from "atomize";
import { useParams } from 'react-router-dom';
import ChartIndi1 from "../chart/ChartIndi1"
import IndApi from "../../../../../api/IndApi";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import axios from "axios";

function IndicatorDetail1(props) {
    console.log('시작')

    let [result, resultbyun] = useState("");
    let [hits, hitsbyun] = useState([]); 

    let [nums, numsbyun] = useState('')
    let [dates, datesbyun] = useState('')
    let [title, titlebyun] = useState('')
    let [chart1, chartShow1 ] = useState(true);
    let [chart2, chartShow2 ] = useState(false);
    let [chart3, chartShow3 ] = useState(false);
    let {tableName} = useParams();
    
    function moveHref(url){
      console.log("moveHref호출")
     window.open(url)
    }

    function searchmatchparse(){
      if(tableName == 'dolleridx')
      {
        titlebyun("달러인덱스")
      }
      if(tableName == 'bond10')
      {
        titlebyun("미 10년 채권수익률")
      }
      if(tableName == 'bond2')
      {
        titlebyun("미 2년 채권수익률")
      }
      if(tableName == 'bitcoin')
      {
        titlebyun("비트코인")
      }
      console.log("제목변경",title)
      IndApi.indicators2(tableName, 1)
      .then(res =>{
        
        numsbyun(res.data[0]["price"])
        datesbyun(res.data[0]["dates"].substring(0,10))
        
        axios.get("http://localhost:8000/news/searchmatchparse", { params :{id : res.data[0]["keyword"].split("/")[0], id: res.data[0]["keyword"].split("/")[1], id:res.data[0]["keyword"].split("/")[2]}})
        .then(response =>{
          result=response.data
          
          var hits2 = result['hits']['hits']
          hitsbyun(hits2)     
          if(hits2.length > 9)
          {
            hitsbyun([result['hits']['hits'][0], result['hits']['hits'][1], result['hits']['hits'][2], result['hits']['hits'][3], result['hits']['hits'][4], result['hits']['hits'][5], result['hits']['hits'][6], result['hits']['hits'][7], result['hits']['hits'][8]])
          }
         
        })
        .catch(error=>{
          console.log(error);
        });
      }
      )
      .catch(err => {
        console.error('1일 수치 확인 오류', err);
      
        })

    }


    useEffect(() => {
      window.scrollTo(0, 0)
      
      searchmatchparse()
    }, []);

  
    return (     
      
      <div align = "center">
       <Container d="flex" flexDir="column" m={{ x: { xs: '0', md: '0' }, y: { xs: '5.5rem', md: '4rem' }}} >
       
       <Text
               textAlign="left"
               textSize="title"
               m={{ t: "0.5rem", b: "0.5rem" }}
               textWeight="800"
               fontFamily="ko"
               >                
               {title}
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
         ({dates} 기준)
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
            ? <ChartIndi1 num={30} tableName={tableName}/>
            : null
          }
          {
            chart2 === true
            ? <ChartIndi1 num={90} tableName={tableName}/>
            : null
          }
          {
            chart3 === true
            ? <ChartIndi1 num={180} tableName={tableName}/>
            : null
          }
           <Text
            textAlign="left"
            textSize="title"
            m={{ t: "0rem", b: "0rem" }}
            textWeight="800"
            fontFamily="ko"
         >
          관련지표
        </Text>
        <Container d="flex" flexDir="row">
        <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
        <Text
            fontColor="dark"
            textAlign="left"
            textSize="subheader"
            m={{ t: "0.5rem", b: "1rem" }}
            textWeight="600"
            fontFamily="ko"
         >
          상관관계가 높은 5개의 지표와 상관계수입니다.
          상관계수는 1에 가까울수록 비례 관계를, -1에 가까울수록 반비례 관계를 보입니다.
        </Text>
        </Container>
        <Container  m={{ t: "-1rem", b: "0" }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center">FistName1</TableCell>
              <TableCell align="center">FistName1</TableCell>
              <TableCell align="center">LastName1</TableCell>
              <TableCell align="center">FistName1</TableCell>
              <TableCell align="center">LastName1</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell></TableCell>
                <TableCell ></TableCell>
              </TableRow>         
              </TableBody>
        </Table>
        </Container>

          <Text
                textAlign="left"
                textSize="title"
                m={{ t: "2rem", b: "0rem" }}
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
           m={{ t: "-1.5rem", b: "-1.5rem" }}
           onClick = {() => {moveHref(data['_source']['news_url'])}}
           >
            <Text
                textAlign="left"
                textSize="subheader"
                m={{ t: "0", b: "0" }}
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

export default IndicatorDetail1;
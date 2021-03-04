  import React, {useState, useEffect, useCallback } from "react"
  import { Text, Div,  Button,  Container, Icon} from "atomize";
  import { useParams } from 'react-router-dom';
  import ChartExeFor from "../chart/ChartExeFor"
  import IndApi from "../../../../../api/IndApi";
  import Table from '@material-ui/core/Table'
  import TableBody from '@material-ui/core/TableBody'
  import TableCell from '@material-ui/core/TableCell'
  import TableHead from '@material-ui/core/TableHead'
  import TableRow from '@material-ui/core/TableRow'
  import axios from "axios";

  function IndicatorDetailExeFor(props) {
      
      let [result, resultbyun] = useState("");
      let [hits, hitsbyun] = useState([]); 
      let [inds, indsbyun] = useState([]); 

      let [id1, id1byun] = useState('달러')
      let [id2, id2byun] = useState('유로')

      let [name, namebyun] = useState('')
      let [nums, numsbyun] = useState('')
      let [date, datesbyun] = useState('')
      let [chart1, chartShow1 ] = useState(true);
      let [chart2, chartShow2 ] = useState(false);
      let [chart3, chartShow3 ] = useState(false);
      let {symbol} = useParams();
      let [symboli, symbolibyun] = useState('')

      let [ind1, ind1byun] = useState('')
      let [ind2, ind2byun] = useState('')
      let [ind3, ind3byun] = useState('')
      let [ind4, ind4byun] = useState('')
      let [ind5, ind5byun] = useState('')
      
      let [values, valuesbyun] = useState(true)
      {/*뉴스*/}  
      function moveHref(url){
      
      window.open(url)
      }

      function searchmatchparse(){
        IndApi.chartIndiExeFor(symbol, 1)
        .then(res =>{
        
          namebyun(res.data[0]["exechange_Name"])
          numsbyun(res.data[0]["price"])
          datesbyun(res.data[0]["dates"].substring(0,10))
          valuesbyun(false)
            id1byun(name.split("/")[0].split(" ")[0])
        id2byun(name.split("/")[0].split(" ")[1])

        axios.get("http://localhost:8000/news/searchmatchparsesort", { params :{id : id1, id:id2}})
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
          console.error('1일 수치 확인 오류(국내환율)', err);
        
          })

          return "res"    
      }
      
      function corrAbs(){
        console.log("들어갈것 확인",symbol)
        symbolibyun(symbol)
        IndApi.corrAbs(symbol, 5)
        .then(res=>{
          console.log("상관관계 확인", res.data)
          indsbyun(res.data)
          console.log(symboli.toLowerCase())
          //console.log(symboli["symbol"].toLowerCase())
          console.log("확인3", res.data[0][symboli.toLowerCase()])
          ind1byun(res.data[0][symboli.toLowerCase()])
          ind2byun(res.data[0][symboli.toLowerCase()])
          ind3byun(res.data[0][symboli.toLowerCase()])
          ind4byun(res.data[0][symboli.toLowerCase()])
          ind5byun(res.data[0][symboli.toLowerCase()])
        })
      }

      useEffect(() => {
        window.scrollTo(0, 0)
        
        console.log("심볼확인", symboli)
        searchmatchparse()
        corrAbs()
        
      },[id2]);

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
          <Table   >
            <TableHead>
              <TableRow>
              {inds.map(ind => 
                <TableCell align="center"><b>{ind.indiname}</b></TableCell>                   
                )}  
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>       
                <TableCell  align="center">{ind1}</TableCell>                   
                <TableCell  align="center">{ind2}</TableCell>
                <TableCell  align="center">{ind3}</TableCell>
                <TableCell  align="center">{ind4}</TableCell>
                <TableCell  align="center">{ind5}</TableCell>
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
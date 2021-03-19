import React, {useState, useEffect } from "react"
import { Text, Div, Icon, Container, Button} from "atomize";
import { useParams, Link } from 'react-router-dom';
import ChartIndi1 from "../chart/ChartIndi1"
import Corr1 from "../chart/Corr1"
import IndApi from "../../../../../api/IndApi";
import Table from 'react-bootstrap/Table';
import CommentExe from "./CommentExe"
import NewsApi from "../../../../../api/NewsApi";
function IndicatorDetail2(props) {

    let [result, resultbyun] = useState("");
    let [hits, hitsbyun] = useState([]); 

    let [inds, indsbyun] = useState([]); 
    let [nums, numsbyun] = useState('')
    let [dates, datesbyun] = useState('')
    let [title, titlebyun] = useState('')
    let [chart1, chartShow1 ] = useState(true);
    let [chart2, chartShow2 ] = useState(false);
    let [chart3, chartShow3 ] = useState(false);
    let {tableName} = useParams();
    let [symboli, symbolibyun] = useState({tableName})

    let [ind1, ind1byun] = useState('')
    let [ind2, ind2byun] = useState('')
    let [ind3, ind3byun] = useState('')
    let [ind4, ind4byun] = useState('')
    let [ind5, ind5byun] = useState('')
    
    function moveHref(url){
     window.open(url)
    }

    function searchmatchparse(){
      
      if(tableName == 'wti')
      {
        titlebyun("WTI")
      }
      if(tableName == 'goldfor')
      {
        titlebyun("국제 금")
      }

      IndApi.indicators1(tableName, 1)
      .then(res =>{
        numsbyun(res.data[0]["price"])
        datesbyun(res.data[0]["dates"].substring(0,10))
      NewsApi.searchmatchphrasesort(res.data[0]["keyword"].split("/")[0], res.data[0]["keyword"].split("/")[1], res.data[0]["keyword"].split("/")[2])
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

    function corrAbs(){
      IndApi.corrAbs(symboli["tableName"].toLowerCase(), 5)
      .then(res=>{
        indsbyun(res.data)
        ind1byun(res.data[0][symboli["tableName"].toLowerCase()])
        ind2byun(res.data[1][symboli["tableName"].toLowerCase()])
        ind3byun(res.data[2][symboli["tableName"].toLowerCase()])
        ind4byun(res.data[3][symboli["tableName"].toLowerCase()])
        ind5byun(res.data[4][symboli["tableName"].toLowerCase()])
      })
    }

    function links(indicator){
      window.location.replace(`/IndicatorDetail1/${indicator}`)
    }

    useEffect(() => {
      window.scrollTo(0, 0)
      searchmatchparse()
      corrAbs()
    }, []);

  
    return (     
      
      <div align = "center">
        <Container d="flex" flexDir="column" 
        m={{ x: { xs: '0', md: '0' }, y: { xs: '5rem', md: '4rem' }}} 
        >
        <Div d="flex" flexDir={{ xs:"column",md:"column" }}>
        <Div  d="flex"  flexDir={{ xs:"column",md:"row" }} w="100rem">
       <Text
               textAlign="left"
               textSize="heading"
               m={{ t: "0.5rem", b: "0.5rem" }}
               textWeight="800"
               fontFamily="ko"
               >                
               {title}
             </Text>
         
         <Text
              textAlign="left"
              textSize="heading"
              m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '-0.5rem', md: '0.5rem' }}}
              textWeight="800"
              fontFamily="ko"
              textColor="info700"
             >
               {nums}
         </Text>  
         <Text
             textSize="caption"
             m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '-0.5rem', md: '0.5rem' }}}
              textWeight="800"
              fontFamily="ko"
              textColor="white"
         >
         ((
         </Text> 
         <Text
             textAlign="left"
             textSize="caption"
            m={{ x: { xs: '0rem', md: '-1rem' }, y: { xs: '0rem', md: '0.5rem' }}}
            textWeight="800"
            fontFamily="ko"
            textColor="light"
         >
         ({dates} 기준)
         </Text> 
         <Div>
          <Div d="flex" flexDir="row "
           m={{ x: { xs: '1rem', md: '1rem' }, y: { xs: '0rem', md: '0em' }}}
          >
        <Button onClick={() => {chartShow1(true); chartShow2(false); chartShow3(false);} } 
             bg="black"        
             h={{ xs: '2rem', md: '2rem' }}
             w={{ xs: '5rem', md: '5rem' }}
             m='0.5rem'
             shadow="3"
             hoverShadow="4"
           ><Text
           textSize="subheader"
           >
            1개월
            </Text>
           
           </Button>
          <Button onClick={() => {chartShow2(true); chartShow1(false); chartShow3(false);} } 
             
             bg="black"
             h={{ xs: '2rem', md: '2rem' }}
             w={{ xs: '5rem', md: '5rem' }}
             m='0.5rem'
             shadow="3"
             hoverShadow="4"
          >
            <Text  textSize="subheader">
            3개월 
            </Text>
          </Button>
          <Button onClick={() => {chartShow3(true); chartShow1(false); chartShow2(false);} }
             bg="black"
             h={{ xs: '2rem', md: '2rem' }}
             w={{ xs: '5rem', md: '5rem' }}
             m='0.5rem'
             shadow="3"
             hoverShadow="4"
          >
            <Text  textSize="subheader">
            6개월
            </Text>
          </Button>
          </Div>
          </Div>
          </Div>
          </Div>
          <Div
            d="flex"
            flexDir="column"
            w={{ xs: "100%", md: "50rem" }}
            maxW="100%"
            pos={{ xs: "static", md: "absolute" }}
            m={{ x: { xs: '-1.5rem', md: '22rem' }, y: { xs: '-3rem', md: '8rem' }}}
            left="0"
            top="0"
            rounded="xl"
            h={{ lg: "25rem" }}
            bg="white"
           
            p="2rem"
         >
             <Text
                textAlign="left"
                textSize="subheader"
                textWeight="800"
                fontFamily="ko"
                bgColor="red"
                m={{ x: { xs: '-0.5rem', md: '0' }, y: { xs: '1rem', md: '-2rem' }}}
                >
               기간별 수치
              </Text>
              <Div flexGrow="1">
          {
            chart1 === true
            ? 
            <Div  m={{ x: { xs: '0', md: '0' }, y: { xs: '0rem', md: '3rem' }}}>
            <ChartIndi1 num={30} tableName={tableName}/>
            </Div>
            : null
          }
           {
            chart2 === true
            ? 
            <Div  m={{ x: { xs: '0', md: '0' }, y: { xs: '0rem', md: '3rem' }}}>
            <ChartIndi1 num={90} tableName={tableName}/>
            </Div>
            : null
          }
           {
            chart3 === true
            ? 
            <Div  m={{ x: { xs: '0', md: '0' }, y: { xs: '0rem', md: '3rem' }}}>
            <ChartIndi1 num={180} tableName={tableName}/>
            </Div>
            : null
          }
          </Div>
            </Div>
              <Div
            d="flex"
            flexDir="column"
            w={{ xs: "100%", md: "23rem" }}
            maxW="100%"
            pos={{ xs: "static", md: "absolute" }}
            m={{ x: { xs: '-1.5rem', md: '25rem' }, y: { xs: '-3.5rem', md: '8rem' }}}
            right="0"
            top="0"
            rounded="xl"
            h={{ lg: "25rem" }}
            bg="white"
            p="2rem"
          >
          <Text
            textAlign="left"
            textSize="subheader"
            textWeight="800"
            fontFamily="ko"
            bgColor="red"
            m={{ x: { xs: '0', md: '0' }, y: { xs: '2rem', md: '-2rem' }}}
            >
            기간별 상관관계
            </Text>
            <Div flexGrow="0">
          {
            chart1 === true
            ? 
            <Div  m={{ x: { xs: '0', md: '0' }, y: { xs: '-1.5rem', md: '3rem' }}}>
            <Corr1 nums={30} tableName={tableName}/>
            </Div>
            : null
            }        
          {
            chart2 === true
            ?
            <Div  m={{ x: { xs: '0', md: '0' }, y: { xs: '-1.5rem', md: '3rem' }}}>
             <Corr1 nums={90} tableName={tableName}/>
             </Div>
            : null
            }         
          {
            chart3 === true
            ?
            <Div  m={{ x: { xs: '0', md: '0' }, y: { xs: '-1.5rem', md: '3rem' }}}>
            <Corr1 nums={180} tableName={tableName}/>
            </Div>
            : null
            }
          </Div>
          </Div>
          <Div
          d="flex"
          flexDir="column"
          w={{ xs: "100%", md: "72rem" }}
          maxW="100%"
          pos={{ xs: "static", md: "absolute" }}
          m={{ x: { xs: '-2rem', md: '22rem' }, y: { xs: '2rem', md: '31rem' }}}
          left="0"
          top="0"
          rounded="xl"
          h={{ lg: "15rem" }}
          bg="white"
          p="2rem"
          >
          <Div d="flex" flexDir="column">
          <Text
            textAlign="left"
            textSize="title"
            m={{ t: "0rem", b: "0rem" }}
            textWeight="800"
            fontFamily="ko"
         >
          관련지표
          </Text>
          <Div d="flex" flexDir="row">
          <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
          <Text
            fontColor="dark"
            textAlign="left"
            textSize="subheader"
            m={{ t: "0.5rem", b: "1rem" }}
            textWeight="600"
            fontFamily="ko"
          >
          전체 기간에서 상관관계가 높은 5개의 지표와 상관계수입니다.
          </Text>
        </Div>
        <Div d="flex" flexDir="row"
            m={{ x: { xs: '0rem', md: '0rem' }, y: { xs: '-1rem', md: '-1.5rem' }}}
        >
        <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
        <Text
            fontColor="dark"
            textAlign="left"
            textSize="subheader"
            m={{ t: "0.5rem", b: "1rem" }}
            textWeight="600"
            fontFamily="ko"
         >
           상관계수는 1에 가까울수록 비례 관계를, -1에 가까울수록 반비례 관계를 보입니다.
        </Text>
        </Div>
        </Div>
        <Div  m={{ x: { xs: '-1em', md: '0rem' }, y: { xs: '1rem', md: '1.5rem' }}} align="center" w={{xs:"135%", md:"100%"}}>
        <Table responsive size="sm">
        <thead>
          <tr align="center">
            {inds.map(ind => 
                 <th align="center">
                 {
                  (ind.indiname == '달러인덱스') || (ind.indiname == '비트코인') || (ind.indiname == '미 10년 채권수익률') || (ind.indiname == '미 2년 채권수익률')
                  ?
                  (
                    <button onClick={ () => links(ind.indicator)} style={{backgroundColor: '#fbe0a1'}}>
                      <Text
                        textSize={{ xs: "caption", md: "body" }}
                          > {ind.indiname}</Text></button>
                  ) : (
                    (ind.indiname == '국제 금') || (ind.indiname == 'WTI') 
                    ?
                    (
                      <Link to={`/IndicatorDetail2/${ind.indicator}`} >
                        <button style={{backgroundColor: '#fbe0a1'}}>
                      <Text
                      textSize={{ xs: "caption", md: "body" }}
                      >
                      {ind.indiname}
                      </Text>
                      </button></Link>
                    ) : (
                      (ind.indiname == '달러/유로') || (ind.indiname == '영국 파운드/달러') || (ind.indiname == '일본 엔/달러') || (ind.indiname == '중국 위안/달러')
                      ?
                      (
                        <Link to={`/IndicatorDetailExeFor/${ind.indicator}`} >
                          <button style={{backgroundColor: '#fbe0a1'}}>
                      <Text
                      textSize={{ xs: "caption", md: "body" }}
                      >
                      {ind.indiname}
                      </Text>
                      </button>
                          </Link>
                      ) :
                      (ind.indiname == '원/달러')
                      ?
                      (
                        <Link to="/IndicatorDetail">
                         <button style={{backgroundColor: '#fbe0a1'}}>
                      <Text
                      textSize={{ xs: "caption", md: "body" }}
                      >
                      {ind.indiname}
                      </Text>
                      </button>
                          
                          </Link>
                      ) :
                      ''
                    )
                  )                
                }
                </th>                   
              )}  
          </tr>
          </thead>
          <tbody>
           <tr  align="center">
           <td align="center">{ind1}</td>      
           <td align="center">{ind2}</td>      
           <td align="center">{ind3}</td>      
           <td align="center">{ind4}</td>      
           <td align="center">{ind5}</td>      
              </tr>
              </tbody>
        </Table>
        </Div>

        </Div>
        <Div
            d="flex"
            flexDir="column"
            border="1px solid"
            borderColor="gray200"
            w={{ xs: "100%", md: "36rem" }}
            maxW="100%"
            pos={{ xs: "static", md:"static" }}
            m={{ x: { xs: '0rem', md: '-1rem' }, y: { xs: '-2.5rem', md: '40rem' }}}
            p={{ x: { xs: '1rem', md: '22rem' }, y: { xs: '2rem', md: '50rem' }}}
            left="0"
            top="0"
            rounded="xl"
            h={{ lg: "52.5rem" }}
            bg="white"
            shadow="4"
            p="2rem"
            >
           <Div flexGrow="1">
           <Text
            textAlign="left"
            textSize="title"
            m={{ x: { xs: '-1rem', md: '-1rem' }, y: { xs: '1rem', md: '-0.5rem' }}}
            textWeight="800"
            fontFamily="ko"
            >
                  뉴스 목록
                </Text>   
          {hits.map(function(data){
          return(
          <Div
          align="flex-start"
          h = {{xs : "rem" ,md : "auto"}}
          m={{ x: { xs: '0rem', md: '0' }, y: { xs: '0rem', md: '1rem' }}}
          onClick = {() => {moveHref(data['_source']['news_url'])}}
          >
            <Text
                textAlign="left"
                textSize="subheader"
                textWeight="800"
                fontFamily="ko"
            >
            {data['_source']['news_title']}
            </Text>
            <Text
                 m = {{ xs: "1rem", md: "0" }}
                 textAlign="left"  
                 textColor="gray900"
               >{data['_source']['news_group']} | {data['_source']['news_source']} | {data['_source']['news_date'].substring(0,10)} | </Text>       
           </Div>

            )})}
          </Div>
          </Div>    
          <Div
           d="flex"
           flexDir="column"
           border="1px solid"
           borderColor="gray200"
           w={{ xs: "100%", md: "32rem" }}
           maxW="100%"
           pos={{ xs: "static", md: "absolute" }}
           m={{ x: { xs: '0rem', md: '26rem' }, y: { xs: '3rem', md: '47.5rem' }}}
           p={{ x: { xs: '0rem', md: '0rem' }, y: { xs: '2rem', md: '16rem' }}}
           right="0"
           top="0"
           rounded="xl"
           h={{ lg: "52.5rem" }}
           bg="white"
           shadow="4"
           p="2rem"
            >          
           <Div flexGrow="1">
           <Text
            textAlign="left"
            textSize="title"
            m={{ x: { xs: '-1rem', md: '-1rem' }, y: { xs: '0rem', md: '-0.5rem' }}}
            textWeight="800"
            fontFamily="ko"
          >
            개미토론방
              </Text>
            <CommentExe tableName={tableName} num={2}/>
          </Div>
         </Div>
          </Container>
      </div>
    )
}
  
export default IndicatorDetail2;
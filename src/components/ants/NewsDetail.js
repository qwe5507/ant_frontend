import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Input, Div, Image, Container, Button, Anchor, Dropdown, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
//import Modal from 'react-modal';
import axios from "axios";
function NewsDetail(){

    let { search } = useParams();
    let [result, result변경] = useState("");
    let [hits, hits변경] = useState([]); 
    let [showcoFsvalue, showcoFsvalueChange] = useState(false);
    let [coFsvalueSel, coFsvalueSelChange] = useState('조건');
    let [calendarShow, calendarShowChange] = useState(false);
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    if(date<10) {
      date='0'+date
    } 
    if(month<10) {
      month='0'+month
    }

    let now = year +'-'+month+"-"+date;
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
    ]);
  
    function moveHref(url){
      console.log("moveHref호출")
      window.location.href = url;
    }

    const coFsvalue = (
      <Div
      
        
      >
          {['최신순', '좋아요순', '1주일', '1개월', '3개월', '6개월', '1년'].map((name, index) => (
              <Anchor
                  d="block"
                  p={{ y: "0.25rem", l: "0.75rem" }}
                  
                  onClick={() => coFsvalueClicked(name)}
              > 
                  {name}
              </Anchor>
          ))}
      </Div>
  );

  

  function coFsvalueClicked(name) {
    coFsvalueSelChange(name)
    showcoFsvalueChange(!showcoFsvalue)
    if(name == "1주일"){
      searchmatchparsedate("7")
    } else if (name =="1개월"){
      searchmatchparsedate("30")
    } else if (name=="3개월"){
      searchmatchparsedate("90")
    } else if (name=="6개월"){
      searchmatchparsedate("180")
    } else if (name=="1년"){
      searchmatchparsedate("365")
    } else if (name=="최신순"){
      searchSort()
    }

  }
    function searchGroup(group){
      axios.get("http://localhost:8000/news/searchgroupmatchphrase", { params : { id : group} })
      .then(response=>{
        console.log('그룹', group)
        result=response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error=>{
        console.log(error);
      })
    }

    function searchSort(){
      console.log(search)
      axios.get("http://localhost:8000/news/searchmatchparsesort", { params : { id : search }})
      .then(response =>{
        result=response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error=>{
        console.log(error);
      });
    }

    function searchmatchparsedate(date){
      console.log(date, search)
      axios.get("http://localhost:8000/news/searchmatchparsedate", { params : { id : search, id2 : date }})
      .then(response =>{
        result=response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error=>{
        console.log(error);
      });
    }

    function searchmatchparse(){
      axios.get("http://localhost:8000/news/searchmatchparse", { params : { id : search }})
      .then(response =>{
        result=response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error=>{
        console.log(error);
      });
    }


    console.log("test")
    useEffect(() => {
      searchmatchparse()
    
    },[])

    function timecal(data) {
      var nowtime = new Date()
      var boardtime = new Date(data)
      var elapsedtime = nowtime.getTime() - boardtime.getTime()
      let elapsedMin = elapsedtime / 1000 / 60; // 150.0666...
      let elapsedHour = elapsedtime / 1000 / 60 / 60; // 2.501111...
      let elapsedDay = elapsedtime / 1000 / 60 / 60 / 24;
      var resulttime;
      if(elapsedMin < 10){
        resulttime = "now"
      }else if (elapsedMin >= 10 && elapsedMin < 60 ){
        resulttime = String(Math.floor(elapsedMin))+"분" 
      }else if (elapsedMin >= 60 && elapsedHour < 24){
        resulttime = String(Math.floor(elapsedHour))+"시간" 
      }else if (elapsedHour >= 24 && elapsedHour < 48){
        resulttime = "어제"
      }else if (elapsedHour >= 48 && elapsedDay < 30){
        resulttime = String(Math.floor(elapsedDay))+"일" 
      }else if (elapsedDay >= 30){
        resulttime = String(boardtime.getMonth()+1)+"."+String(boardtime.getDate())
      }
      return resulttime;
   }
    
    function textLengthOverCut(txt, len, lastTxt) {
      if (len == "" || len == null) { // 기본값
          len = 78;
      }
      if (lastTxt == "" || lastTxt == null) { // 기본값
          lastTxt = "...";
      }
      if (txt.length > len) {
          txt = txt.substr(0, len) + lastTxt;
      }
      return txt;
  }

 
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  

    return (
      <div>
      <Div
        tag="section"
        pos={{ xs: 'relative', md: 'relative' }}
        top="0"
        transition
        left="10%"
        right="0"
        zIndex="1"
        w="80%"
        align = "space-between"
        
      >

        <Div
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          w="0rem"
          bg="white"
          opacity="1"
          zIndex="-1"
          
        ></Div>
        <Container w="30.5rem" d="static" align="center" justify="center" >

          {/* Icon For Mobile */}
         {/* 모바일일때 생기는탭 */}
          <Div
            d={{ xs: "flex", md: "none" }}
            flexDir="column"
 
            m={{ t: "5rem"}}
          >

            <Div
              h="2px"
              w="1rem"
              bg="black"
              rounded="md"
            ></Div>
            <Div
              h="2px"
              w="1rem"
              bg="black"
              rounded="lg"
            ></Div>
          </Div>

          <Label
             d={{ xs: "flex", md: "none" }}
             m={{ l: "85%" ,t : "-1rem" }}

            align="center"
            textWeight="600"
            >
            <Switch

                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />
          
            </Label>

          {/* Links for Desktop */}
          <Div
            d="flex"

            bg={{ xs: "white", md: "transparent" }}
            align={{ xs: "strech", md: "flex-start" }}
            flexDir={{ xs: "column", md: "row" }}
            pos={{ xs: "absolute", md: "relative" }}
            w = "1100px"
            p={{
              t: { xs: "6rem", md: "0" },
              b: { xs: "2rem", md: "5%" },
              x: { xs: "1.5rem", md: "0" },
            }}
            //마진
            m={{ l : { xs: '5rem', md: '-80%' },
               t : { xs: '5rem', md: '20%' }
            }}

            zIndex={{ xs: "-1", md: "0" }}
            shadow={{ xs: "4", md: "0" }}
            opacity={{

              md: "1",
            }}
            transform={{
         
              md: "none"
            }}
            transition
            border={{ b: "1px solid" }}
            borderColor="black"
          >

            
            <Div>
              <Anchor
                target="_blank"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              
              >
                    <Text
                        textSize="title"
                        m={{ b: "0.25rem" ,r : "2.5rem" , l : "2.5rem" }}
                        textWeight="1000"
                        textAlign="center"
                        onClick = {() => {searchSort()}}
                    >
                        핫이슈
                    </Text>
              </Anchor>
              </Div>

              <Div>
              <Anchor
                target="_blank"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem" ,r : "2.5rem" }}
                        onClick = {() => {searchGroup("정책/금융")}}
                    >
                        정책/금융
                    </Text>
              </Anchor>
              </Div>

            
            <Div>
              <Anchor
                target="_blank"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem" ,r : "2.5rem" }}
                        onClick = {() => {searchGroup("국제경제")}}
                    >
                        국제경제
                    </Text>
              </Anchor>
              </Div>
         
              <Div>
              <Anchor
                target="_blank"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem" ,r : "2.5rem" }}
                        onClick = {() => {searchGroup("IB/기업")}}
                    >
                        IB/기업
                    </Text>
              </Anchor>
              </Div>

              <Div>
              <Anchor
                target="_blank"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem" ,r : "2.5rem" }}
                        onClick = {() => {searchGroup("증권")}}
                    >
                        증권
                    </Text>
              </Anchor>
              </Div>


            <Div>
              <Anchor
                target="_blank"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem" ,r : "2.5rem" }}
                        onClick = {() => {searchGroup("부동산")}}
                    >
                        부동산
                    </Text>
              </Anchor>
            </Div>
           
          
            {/* <Label
             m={{ l: "40rem" ,t : "0.2rem" }}
            onClick={() =>
                selectedSwitchValueChange( !selectedSwitchValue)
            }
            align="center"
            textWeight="600"
            // m={{ b: "1rem" }}
            >

            {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) ?
            null :
            <Switch
                checked={selectedSwitchValue}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />}
            {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) ?
            null :
            selectedSwitchValue ? 
            <Text>추천순</Text> : <Text>최신순</Text>}
            </Label> */}



          </Div>
          
          <Div
              d="flex"
              justify="flex-end"
              w="80%"
              m={{
                l: '2rem',
                r: { xs: '20rem', md: '3rem' },
                y: '1rem'
            }}
          >
          
          
          <Dropdown
              w={{ xs: "90%", sm: "11rem" }}
              m={{ b: "1.5rem", r: "-22rem" }}
              isOpen={showcoFsvalue}
              onClick={() =>
                  showcoFsvalueChange(!showcoFsvalue)
              }
              menu={coFsvalue}
              >
              {coFsvalueSel}
          </Dropdown>

          <Div
            
          >


          {/* <Calendar
            activeStartDate={new Date()}
            onChange={onChange}
            value={value}
          />
          <Calendar
            activeStartDate={new Date()}
            onChange={onChange}
            value={value}
          /> */}
          </Div>
          {/* <Dropdown
              w={{ xs: "50%", sm: "11rem" }}
              m={{ b: "1.5rem", r: "1rem" }}
              onClick={() =>
                calendarShowChange(!calendarShow)
              }
              >
          </Dropdown>

              {calendarShow==true ? 
                <Calendar
                 // onChange={this.onDateChange} 
                 // value={this.state.date}
                />
                :
                null

              } */}



            {/* <Dropdown
              w={{ xs: "50%", sm: "11rem" }}
              m={{ b: "1.5rem", r: "1rem" }}
              onClick={ () =>  calendarShowChange(!calendarShow) } 
              >
              달력
              {calendarShow==true ? 
              <>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </>
              
              : null }  
          </Dropdown> */}
            
          </Div>
              
        {hits.map(function(data){
        return(
        <Div  
        m={{t :{ md : "5%"}, l :{ md : "-78%"}}}
        w = {{xs: "90vw", md : "248%"}}
        align="center" justify="space-between"
        d={{ xs: "flex", md: "flex" }}

        >
        
        <Div
  
        //   shadow="4"
        //   border="1px solid"
        //   borderColor="gray200"
        bg="white"
        //   rounded="lg"
        d="inline-block" align="center"
        >
       <Div
       // h="10rem"
  
       h = {{ xs: "11rem", md: "9rem" }}
       w = {{ xs: "25rem", md: "47rem" }}
       // bg="black"
       // rounded="md"
       // border="1px solid"
       // borderColor="gray200"
       border={{ b: "1px solid" }}
       borderColor="gray400"
       pos = "flex"
       d={{ xs: "inline-block", md: "inline-block" }}
       
       >   
       
           <Div
           align="flex-start"
           // pos= "absolute"
           // bottom = "35rem"
           h = {{xs : "7rem" ,md : "auto"}}

           >
               <Text
               textAlign="left"
               cursor="pointer"
               textSize="heading"
               textWeight="750"
               fontFamily="secondary"
               justify="flex-start"
               // m={{ b: "1rem" }}
               m={{ b: "0rem" }}
               pos= {{xs:"absolute",md: "static"}}
               onClick = {() => {moveHref(data['_source']['news_url'])}}
               // bottom = "32rem"
               >
               {/* kakao mang hera kakao mang herakakao mangrang herakakao mangr */}
               
               {data['_source']['news_title']}
               </Text>
               <Text
                m={{ b: "1rem" }}
               >{data['_source']['news_group']} | {data['_source']['news_source']}</Text>  
           </Div>

           <Div
           justify="space-between"
           align="center"
           // pos= "absolute"
           pos =  {{xs:"static",md: "static"}}
           // bottom = "32rem"
          >
               {/* <Text
               // textAlign="left"
               textSize="title"
               textWeight="400"
               fontFamily="secondary"
               textAlign="justify"
               justify="flex-end"
               // m={{ b: "1rem" }}
               
               >
              {
              
              textLengthOverCut(data['_source']['news_content'])
              
              }
               </Text>     */}
           </Div>   
           <Div
           // align=""
           // h="19rem"
           w="15rem"
           justify="space-around"
           // bg="black"
           // rounded="md"
           // border="1px solid"
           // borderColor="gray200"
           // pos= "absolute"
           pos =  {{xs:"absolute",md: "static"}}
           // bottom = "340px"
           // bottom = "22rem"
           m = "3px"
           
           >
               <Div d="flex" align="center">
                 
               <Icon
                   transition
                   name= "Timestamp"
                   color= "gray"
                   size="18px"
                   cursor="pointer"
                   m={{r : "0.4rem"}}
               />
               <Text
               textAlign="left"
               textSize="body"
               textWeight="600"
               fontFamily="secondary"
               textColor = "gray"
               m={{r : "1rem"}}
               
               >
               {timecal(data['_source']['news_date'])}
               </Text>
               <Icon
                   transition
                   name= "Eye"
                   color= "gray"
                   size="18px"
                   cursor="pointer"
                   m={{r : "0.4rem"}}
               />
               <Text
               textAlign="left"
               textSize="body"
               textWeight="600"
               fontFamily="secondary"
               m={{r : "1rem"}}
               textColor = "gray"
               >
              0
               </Text>
               <Icon
                   transition
                   name= "Message"
                   color= "gray"
                   size="33px"
                   cursor="pointer"
                   m={{r : "0.4rem"}}
               />
               <Text
               textAlign="left"
               textSize="body"
               textWeight="600"
               fontFamily="secondary"
               textColor = "gray"
               m={{r : "1rem"}}
               >
               0
               </Text>
               {/* <Div 
               // pos="relative"
               // top="0"
               // m={{l : "30rem"}}
               m={{
                   l: { xs: '7rem', md: '22rem' }
               }}
               >
               <Icon name="Options" size="20px" />
               </Div> */}
           </Div>    
           
           </Div>

       
       </Div>
    </Div>
    
    </Div>
 

)})}
                    
                 
        </Container>
               
       
  
      </Div>


    </div>

        
    )

}


export default NewsDetail;
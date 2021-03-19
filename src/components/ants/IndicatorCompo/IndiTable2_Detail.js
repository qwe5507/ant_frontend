import React, {Component, useState} from 'react';
import IndApi from "../../../api/IndApi";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { Text, Div} from "atomize";
import { Link } from 'react-router-dom';

class IndiTable2_Detail extends Component{

    constructor(props){
        super(props);
        this.state ={
          indifors : [],
          indikors : [],
          dolleridx : [],
          dollerid : 'dolleridx',
          message : null
    };
    }

    componentDidMount(){
        this.reloadJipyoList();
        this.reloadKorList();
        this.reloadDolIdxList(); 
      }
    
    reloadJipyoList = () => {
    IndApi.exeForeignList()
    .then(res =>{
        this.setState({
          indifors: res.data})
        })
        .catch(err => {
        console.error('지표리스트 오류(국외환율)', err);
        })
      }

    reloadKorList = () => {
    IndApi.exeKorList()
    .then(res =>{
        this.setState({indikors: res.data})
        })
    .catch(err => {
        console.error('지표리스트 오류(국내환율)', err);
        })  
    }

    reloadDolIdxList = () => {
      IndApi.indicators2("dolleridx", 3)
      .then(res =>{
          this.setState({dolleridx: res.data})
          })
      .catch(err => {
          console.error('5일 달러인덱스 오류', err);
          })
      
      }
   
      componentWillUnmount(){
        console.log('comwilunmont run')
      }

      render(){
        return(
          <div>    
        <Div  p={{ t: { xs: "0rem", md: "0rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          국제시장 환율
          </Text>
          </Div>
          <Table size="small" style={{margin:"8px"}}>
        <TableHead>         
          <TableRow>         
            <TableCell align="center"><b>통화명</b></TableCell>
            <TableCell align="center"><b>매매기준율</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.indifors.map(indifor => 
            <TableRow>           
              <TableCell align="center">
              <Link to={`/IndicatorDetailExeFor/${indifor.symbol}`} >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
            
              <Text
              textSize={{xs:"caption", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
                {indifor.exechange_Name}
                </Text>
             
              </Button>
              </Link>
                </TableCell>
              <TableCell align="center">{indifor.price}</TableCell>
              <TableCell align="center">{indifor.dates.substring(0,10)}</TableCell>
            </TableRow>
        )
      }         
            </TableBody>
      </Table>
      </Div >

      <Div  p={{ t: { xs: "1rem", md: "1rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          달러인덱스
          </Text>
          </Div>
          <Table size="small" style={{margin:"8px"}}>
        <TableHead>         
          <TableRow>         
            <TableCell align="center"><b>통화명</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>
            <TableCell align="center"><b>가격</b></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.dolleridx.map(dolidx => 
            <TableRow>
              
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.dollerid}`} >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
              <Text
              textSize={{xs:"tiny", md:"body"}}
              textWeight="800"
              fontFamily='ko'
              >
                달러인덱스</Text>
              </Button>
              </Link>
                </TableCell>
              <TableCell align="center">{dolidx.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{dolidx.price}</TableCell>
              
            </TableRow>
        )
      }         
            </TableBody>
      </Table>
      </Div >


      <Div  p={{ t: { xs: "1rem", md: "1rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          원/달러 환율
          </Text>
          </Div>
      <Table  size="small" style={{margin:"8px"}}>
        <TableHead>         
          <TableRow>
          <TableCell align="center"><b>통화명</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>
            <TableCell align="center"><b>매매기준율</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody align="center">
        {this.state.indikors.map(indikor => 
            <TableRow  >        
              <TableCell align="center">
              <Link to="/IndicatorDetail" >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
              <Text
              textSize={{xs:"caption", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
                원/달러
                </Text>
              </Button>
                </Link>
                </TableCell>      
              <TableCell align="center">{indikor.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{indikor.price}</TableCell>
            </TableRow>
        )
      }         
            </TableBody>
      </Table>
      </Div>
      </div>
      )}

}
export default IndiTable2_Detail;

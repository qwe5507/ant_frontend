
import React, {Component, useState} from 'react';
import IndApi from "../../../api/IndApi";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { Text, Div } from "atomize";
import { Link } from 'react-router-dom';

class IndiTable3 extends Component{

    constructor(props){
        console.log('constro run');
        super(props);
        this.state ={
          wtis : [],
          forgolds : [],
          wtiid : 'wti',
          forgoldid : 'goldfor',
          message : null
    };
}

    componentDidMount(){
        console.log('comdid run');
        this.reloadWTIList();
        this.reloadForGoldList();
      }

    
    reloadWTIList = () => {
      IndApi.indicators1("wti", 5)
    .then(res =>{
        this.setState({wtis: res.data})
        })
        .catch(err => {
        console.error('지표리스트(WTI) 오류', err);
        //alert('조회오류');
        })

      }

      reloadForGoldList = () => {
        IndApi.indicators1("goldfor", 5)
        .then(res =>{
          this.setState({forgolds: res.data})
          })
          .catch(err => {
          console.error('지표리스트(국제금) 오류', err);
          })
  
        }

      componentWillUnmount(){
        console.log('comwilunmont run')
      }
    
      render(){
        console.log('render run');
        return(
          <div>
       
       <Div  p={{ t: { xs: "1rem", md: "5rem" } }}
        m={{ x: { xs: '0rem', md: '0rem' }, y: { xs: '0rem', md: '2.5rem' }}}
        >
        <Div textAlign="left">
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          WTI(서부 텍사스유)
        </Text>
        </Div>
        <Table size="small" style={{margin:"8px"}}>
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>구분</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>          
            <TableCell align="center"><b>가격</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.wtis.map(wti => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail2/${this.state.wtiid}`} >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
              <Text
              textSize={{xs:"body", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
                WTI
                </Text>
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{wti.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{wti.price}</TableCell>
             
            </TableRow>      
        )
      }   
            </TableBody>
        </Table>
        </Div >
        
        <Div  p={{ t: { xs: "1rem", md: "0rem" } }} >
          <Div textAlign="left">
          <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          국제 금 시세
          </Text>
          </Div>
          <Table size="small" style={{margin:"8px"}}>
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>구분</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>          
            <TableCell align="center"><b>가격</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.forgolds.map(forgold => 
          <TableRow>
          <TableCell align="center">
          <Link to={`/IndicatorDetail2/${this.state.forgoldid}`} >
          <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
          <Text
              textSize={{xs:"body", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
            국제 금
            </Text>
          </Button>
          </Link>
            </TableCell>
            <TableCell align="center">{forgold.dates.substring(0,10)}</TableCell>   
          <TableCell align="center">{forgold.price}</TableCell>
          </TableRow>         
        )
      }
          </TableBody>
        </Table>
      </Div >
    
          </div>
      )
      }

}
export default IndiTable3;
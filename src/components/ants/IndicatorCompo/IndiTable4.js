import { render } from '@testing-library/react';
import React, {Component, useState} from 'react';
import IndApi from "../../../api/IndApi";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

import { Text, Div} from "atomize";

class IndiTable4 extends Component{

    constructor(props){
        super(props);
        this.state ={
          bond10s : [],
          bond2s : [],
          bond10id : 'bond10',
          bond2id : 'bond2',
          message : null
    };
    }

    componentDidMount(){
        this.reloadBond10List();
        this.reloadBond2List();
    }
    
    reloadBond10List = () => {
    IndApi.indicators2("bond10", 5)
    .then(res =>{
        this.setState({bond10s: res.data})
        })
        .catch(err => {
        console.error('지표리스트(10년 채권) 오류', err);
        })
      }

      reloadBond2List = () => {
        IndApi.indicators2("bond2", 5)
        .then(res =>{
            this.setState({bond2s: res.data})
            })
            .catch(err => {
            console.error('지표리스트(2년 채권) 오류', err);
            })
      }

      componentWillUnmount(){
        console.log('comwilunmont run')
      }
    
      render(){
        return(
          <div>
      
      <Div  p={{ t: { xs: "1rem", md: "5rem" } }}
        m={{ x: { xs: '0rem', md: '0rem' }, y: { xs: '0rem', md: '2.5rem' }}}
        >
        <Div textAlign="left" m={{ x: { xs: '0rem', md: '0rem' }}}>
        <Div textAlign="left" m={{ y: { xs: '0.5rem', md: '0.5rem' }}}>
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          미 10년 채권수익률
        </Text>
        </Div>
        </Div>
        <Table size="small" style={{margin:"-1px"}}>
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>구분</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>          
            <TableCell align="center"><b>종가</b></TableCell>
            <TableCell align="center"><b>오픈</b></TableCell>
            <TableCell align="center"><b>고가</b></TableCell>
            <TableCell align="center"><b>저가</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.bond10s.map(bond10 => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.bond10id}`} >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
              <Text
              textSize={{xs:"tiny", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
              미 10년 채권
              </Text>
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{bond10.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{bond10.price}</TableCell>
              <TableCell align="center">{bond10.open}</TableCell>
              <TableCell align="center">{bond10.high}</TableCell>
              <TableCell align="center">{bond10.low}</TableCell>    
            </TableRow>      
        )}   
            </TableBody>
        </Table>
        </Div >
        
        <Div  p={{ t: { xs: "1rem", md: "1rem" } }} >
        <Div textAlign="left" m={{ x: { xs: '0rem', md: '0rem' }}}>
        <Div textAlign="left" m={{ y: { xs: '0.5rem', md: '0.5rem' }}}>
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          미 2년 채권수익률
        </Text>
        </Div>
        </Div>
        <Table size="small" style={{margin:"-1px"}}>
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>구분</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>          
            <TableCell align="center"><b>종가</b></TableCell>
            <TableCell align="center"><b>오픈</b></TableCell>
            <TableCell align="center"><b>고가</b></TableCell>
            <TableCell align="center"><b>저가</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.bond2s.map(bond2 => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.bond2id}`} >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
              <Text
              textSize={{xs:"caption", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
              미 2년 채권
              </Text>
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{bond2.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{bond2.price}</TableCell>
              <TableCell align="center">{bond2.open}</TableCell>
              <TableCell align="center">{bond2.high}</TableCell>
              <TableCell align="center">{bond2.low}</TableCell>    
            </TableRow>      
        )}   
            </TableBody>
        </Table>
        </Div>
        </div>
      )}
}
export default IndiTable4;
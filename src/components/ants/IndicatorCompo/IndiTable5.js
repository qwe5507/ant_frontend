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

import { Text, Div } from "atomize";

class IndiTable5 extends Component{

    constructor(props){
        console.log('constro run');
        super(props);
        this.state ={
          bitcoins : [],
          bitcoinid : 'bitcoin',
          message : null
    };
}

    componentDidMount(){
        console.log('comdid run');
        this.reloadBitCoinList();
      }

    
    reloadBitCoinList = () => {
      IndApi.indicators2("bitcoin", 10)
    .then(res =>{
        this.setState({bitcoins: res.data})
        })
        .catch(err => {
        console.error('지표리스트(비트코인) 오류', err);
       //alert('조회오류');
        })

      }

      componentWillUnmount(){
        console.log('comwilunmont run')
      }
    
      render(){
        console.log('render run');
        return(
          <div>
          
      <Div  p={{ t: { xs: "9rem", md: "5rem" } }} >
      <Div  p={{ t: { xs: "2rem", md: "2rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="title"
          textWeight="800"
          fontFamily='ko'
          >
          비트코인
        </Text>
        </Div>
        <Table >
        <TableHead>
          <TableRow>
          <TableCell align="center">구분</TableCell>
            <TableCell align="center">기준일자</TableCell>
            <TableCell align="center">종가</TableCell>
            <TableCell align="center">오픈</TableCell>
            <TableCell align="center">고가</TableCell>
            <TableCell align="center">저가</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.bitcoins.map(bitcoin => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.bitcoinid}`} >
              <Button variant="contained">
              비트코인
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{bitcoin.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{bitcoin.price}</TableCell>
              <TableCell align="center">{bitcoin.open}</TableCell>
              <TableCell align="center">{bitcoin.high}</TableCell>
              <TableCell align="center">{bitcoin.low}</TableCell>
             
            </TableRow>      
        )
      }   
            </TableBody>
        </Table>
        </Div >
      </Div >
          </div>
      )

      }

}
export default IndiTable5;
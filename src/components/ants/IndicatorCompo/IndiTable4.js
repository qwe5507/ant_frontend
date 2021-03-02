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
        console.log('constro run');
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
        console.log('comdid run');
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
        //alert('조회오류');
        })

      }

      reloadBond2List = () => {
        IndApi.indicators2("bond2", 5)
        .then(res =>{
            this.setState({bond2s: res.data})
            })
            .catch(err => {
            console.error('지표리스트(2년 채권) 오류', err);
           // alert('조회오류');
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
          미 10년 채권수익률
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
        {this.state.bond10s.map(bond10 => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.bond10id}`} >
              <Button variant="contained">
              미 10년 채권수익률
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{bond10.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{bond10.price}</TableCell>
              <TableCell align="center">{bond10.open}</TableCell>
              <TableCell align="center">{bond10.high}</TableCell>
              <TableCell align="center">{bond10.low}</TableCell>
             
            </TableRow>      
        )
      }   
            </TableBody>
        </Table>
        </Div >
        
        <Div  p={{ t: { xs: "2rem", md: "2rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="title"
          textWeight="800"
          fontFamily='ko'
          >
          미 2년 채권수익률
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
        {this.state.bond2s.map(bond2 => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.bond2id}`} >
              <Button variant="contained">
              미 2년 채권수익률
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{bond2.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{bond2.price}</TableCell>
              <TableCell align="center">{bond2.open}</TableCell>
              <TableCell align="center">{bond2.high}</TableCell>
              <TableCell align="center">{bond2.low}</TableCell>
             
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
export default IndiTable4;
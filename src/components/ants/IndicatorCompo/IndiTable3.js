
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
        <Div  p={{ t: { xs: "9rem", md: "5rem" } }} >
        <Div  p={{ t: { xs: "2rem", md: "2rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="title"
          textWeight="800"
          fontFamily='ko'
          >
          WTI
        </Text>
        </Div>
        <Table >
        <TableHead>
          <TableRow>
          <TableCell align="center">구분</TableCell>
            <TableCell align="center">기준일자</TableCell>          
            <TableCell align="center">가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.wtis.map(wti => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail2/${this.state.wtiid}`} >
              <Button variant="contained">
                WTI
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
        
        <Div  p={{ t: { xs: "2rem", md: "2rem" } }} >
          <Div textAlign="left">
          <Text
          textSize="title"
          textWeight="800"
          fontFamily='ko'
          >
          국제 금
          </Text>
          </Div>
        <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">구분</TableCell>
            <TableCell align="center">기준일자</TableCell>
            <TableCell align="center">단위</TableCell>
            <TableCell align="center">가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.forgolds.map(forgold => 
          <TableRow>
          <TableCell align="center">
          <Link to={`/IndicatorDetail2/${this.state.forgoldid}`} >
          <Button variant="contained">
            국제 금
          </Button>
          </Link>
            </TableCell>
            <TableCell align="center">{forgold.dates.substring(0,10)}</TableCell>
          <TableCell align="center">달러/트레이온스</TableCell>
          <TableCell align="center">{forgold.price}</TableCell>
          </TableRow>         
        )
      }
          </TableBody>
        </Table>
      </Div >
      </Div>  
          </div>
      )
      }

}
export default IndiTable3;
import { render } from '@testing-library/react';
import React, {Component, useState} from 'react';
//import ApiService from '../ApiService';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Text, Div, Icon, Anchor, Button, Input, Container, Row, footerLinks, Col,  mediaLinks } from "atomize";

class IndiTable5 extends Component{

    constructor(props){
        console.log('constro run');
        super(props);
        this.state ={
          jipyos : [],
          message : null
    };
}
/*
    componentDidMount(){
        console.log('comdid run');
        this.reloadJipyoList();
      }

    
    reloadJipyoList = () => {
    ApiService.fetchJipyo()
    .then(res =>{
        this.setState({jipyos: res.data})
        })
        .catch(err => {
        console.error('지표리스트 오류', err);
        alert('조회오류');
        })

      }

      componentWillUnmount(){
        console.log('comwilunmont run')
      }
    */
      render(){
        console.log('render run');
        return(
          <div>
          
      <Div  p={{ t: { xs: "9rem", md: "5rem" } }} >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">FistName5</TableCell>
            <TableCell align="center">FistName5</TableCell>
            <TableCell align="center">LastName5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>

            </TableRow>         
            </TableBody>
      </Table>
      </Div >
          </div>
      )

      }

}
export default IndiTable5;
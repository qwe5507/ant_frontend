import React, {Component, useState} from 'react';
import IndApi from "../../../api/IndApi";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { Text, Div, Icon, Anchor} from "atomize";
import { Link } from 'react-router-dom';

class IndiTable2_Detail extends Component{

    constructor(props){
        console.log('constro run');
        super(props);
        this.state ={
          indifors : [],
          indikors : [],
          message : null
    };
}

    componentDidMount(){
        
        console.log('comdid run');
        this.reloadJipyoList();
        this.reloadKorList();
        
      }

    
    reloadJipyoList = () => {
    IndApi.exeForeignList()
    .then(res =>{
        this.setState({
          indifors: res.data})
        })
        .catch(err => {
        console.error('지표리스트 오류(국외환율)', err);
       // alert('조회오류');
        })

      }

    reloadKorList = () => {
    IndApi.exeKorList()
    .then(res =>{
        this.setState({indikors: res.data})
        })
    .catch(err => {
        console.error('지표리스트 오류(국내환율)', err);
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
          
      <Div  p={{ t: { xs: "2rem", md: "2rem" } }} >
        <Div textAlign="left">
        <Text
        textSize="title"
        textWeight="800"
        fontFamily='ko'
        >
          국제시장 환율
          </Text>
          </Div>
      <Table >
        <TableHead>         
          <TableRow>         
            <TableCell align="center">통화명</TableCell>
            <TableCell align="center">심볼</TableCell>
            <TableCell align="center">매매기준율</TableCell>
            <TableCell align="center">기준일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.indifors.map(indifor => 
            <TableRow>
              
              <TableCell align="center">
              <Link to={`/IndicatorDetailExeFor/${indifor.symbol}`} >
              <Button variant="contained">
                {indifor.exechange_Name}
              </Button>
              </Link>
                </TableCell>
              <TableCell align="center">{indifor.symbol}</TableCell>
              <TableCell align="center">{indifor.rates}</TableCell>
              <TableCell align="center">{indifor.dates.substring(0,10)}</TableCell>
            </TableRow>
        )
      }         
            </TableBody>
      </Table>
      </Div >


      <Div  p={{ t: { xs: "2rem", md: "5rem" } }} >
        <Div textAlign="left">
        <Text
        textSize="title"
        textWeight="800"
        fontFamily='ko'
        >
          원/달러 환율
          </Text>
          </Div>
      <Table >
        <TableHead>         
          <TableRow>
          <TableCell align="center">통화명</TableCell>
            <TableCell align="center">기준일자</TableCell>
            <TableCell align="center">매매기준율</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody align="center">
        {this.state.indikors.map(indikor => 
            <TableRow  >        
              <TableCell align="center">
              <Link to="/IndicatorDetail" >
              <Button variant="contained">
                원/달러
              </Button>
                </Link>
                </TableCell>      
              <TableCell align="center">{indikor.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{indikor.rates}</TableCell>
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
export default IndiTable2_Detail;
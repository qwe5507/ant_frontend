import React, {Component} from 'react';
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
        super(props);
        this.state ={
          bitcoins : [],
          bitcoinid : 'bitcoin',
          message : null
    };}

    componentDidMount(){
        this.reloadBitCoinList();
    }

    reloadBitCoinList = () => {
      IndApi.indicators2("bitcoin", 10)
    .then(res =>{
        this.setState({bitcoins: res.data})
        })
        .catch(err => {
        console.error('지표리스트(비트코인) 오류', err);
        })
      }

      componentWillUnmount(){
        console.log('comwilunmont run')
      }
    
      render(){
        return(
          <div>     
      <Div  p={{ t: { xs: "0rem", md: "6rem" } }} >
      <Div  p={{ t: { xs: "1rem", md: "2rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="heading"
          textWeight="800"
          fontFamily='ko'
          >
          비트코인
        </Text>
        </Div>
        <Table size="small" style={{margin:"-1px"}}>
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>구분</b></TableCell>
            <TableCell align="center"><b>기준일자</b></TableCell>          
            <TableCell align="center"><b>가격</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.bitcoins.map(bitcoin => 
            <TableRow>
              <TableCell align="center">
              <Link to={`/IndicatorDetail1/${this.state.bitcoinid}`} >
              <Button size="small" variant="contained" style={{boxShadow: 'none', backgroundColor: '#fbe0a1'}}>
              <Text
              textSize={{xs:"tiny", md:"body"}}
              textWeight="900"
              fontFamily='ko'
              >
              비트코인
              </Text>
                </Button>
                </Link>
                </TableCell>
              <TableCell align="center">{bitcoin.dates.substring(0,10)}</TableCell>
              <TableCell align="center">{bitcoin.price}</TableCell>
            </TableRow>      
        )}   
            </TableBody>
        </Table>
        </Div >
      </Div >
          </div>
      )}
      }
export default IndiTable5;
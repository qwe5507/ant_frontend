
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

class IndiTable1 extends Component{

    constructor(props){
        console.log('constro run');
        super(props);
        this.state ={
          jipyokor : [],
          jipyoeurusd : [],
          jipyousdgbp : [],
          jipyousdjpy : [],
          jipyousdcny : [],
          jipyowti : [],
          jipyogoldfor : [],
          jipyobond10 : [],
          jipyobond2 : [],
          jipyodolidx : [],
          jipyobit : [],
          message : null
      };
    }

    componentDidMount(){
        this.reloadJipyoList();
      }
   
    reloadJipyoList = () => {
    IndApi.chartIndi(1)
    .then(res =>{
        this.setState({jipyokor: res.data})
        })
        .catch(err => {
        console.error('원/달러리스트 오류', err);
        })

    IndApi.chartIndiExeFor("EURUSD",1)
    .then(res =>{
      this.setState({jipyoeurusd: res.data})
        })
        .catch(err => {
        console.error('EURUSD리스트 오류', err);
        })

    IndApi.chartIndiExeFor("USDGBP",1)
    .then(res =>{
      this.setState({jipyousdgbp: res.data})
        })
        .catch(err => {
        console.error('USDGBP리스트 오류', err);
        })

    IndApi.chartIndiExeFor("USDJPY",1)
    .then(res =>{
      this.setState({jipyousdjpy: res.data})
        })
        .catch(err => {
        console.error('USDJPY리스트 오류', err);
        })

    IndApi.chartIndiExeFor("USDCNY",1)
    .then(res =>{
      this.setState({jipyousdcny : res.data})
        })
    .catch(err => {
        console.error('USDCNY리스트 오류', err);
        })
    
    IndApi.indicators1("wti",1)
    .then(res =>{
      this.setState({jipyowti: res.data})

        })
    .catch(err => {
        console.error('wti리스트 오류', err);
        })
    
    IndApi.indicators1("goldfor",1)
    .then(res =>{
      this.setState({jipyogoldfor: res.data})
        })
    .catch(err => {
        console.error('goldfor리스트 오류', err);
        })
    
    IndApi.indicators2("dolleridx",1)
    .then(res =>{
      this.setState({jipyodolidx: res.data})
        })
    .catch(err => {
        console.error('bond10리스트 오류', err);
        })
    
    IndApi.indicators2("bond10",1)
    .then(res =>{
      this.setState({jipyobond10: res.data})
        })
    .catch(err => {
        console.error('bond10리스트 오류', err);
        })
    
    IndApi.indicators2("bond2",1)
    .then(res =>{
      this.setState({jipyobond2: res.data})
      console.log("2년확인",this.state.jipyobond2)
        })
    .catch(err => {
        console.error('bond2리스트 오류', err);
        })

    IndApi.indicators2("bitcoin",1)
    .then(res =>{
      this.setState({jipyobit: res.data})
        })
    .catch(err => {
        console.error('bitcoin리스트 오류', err);
        })
    
    }

      render(){
        console.log('render run');
        return(
            <div>
            
        <Div  p={{ t: { xs: "9rem", md: "5rem" } }} >
        <Div textAlign="left">
        <Text
          textSize="title"
          textWeight="800"
          fontFamily='ko'
          >
          최근 1일간 수치
        </Text>
        </Div>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center">지표명</TableCell>
              <TableCell align="center">수치</TableCell>
              <TableCell align="center">기준일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {this.state.jipyokor.map(indikor => 
          <TableRow>
             <TableCell align="center">
             <Link to="/IndicatorDetail" >
              <Button variant="contained">
               원/달러
               </Button>
              </Link>
               </TableCell>
             <TableCell align="center">{indikor.price}</TableCell>
             <TableCell align="center">{indikor.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}
        {this.state.jipyoeurusd.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to="/IndicatorDetailExeFor/EURUSD" >
              <Button variant="contained">
               달러/유로
               </Button>
              </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}
        {this.state.jipyousdgbp.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to="/IndicatorDetailExeFor/USDGBP" >
              <Button variant="contained">
               영국 파운드/달러
               </Button>
              </Link>
              </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}    
        {this.state.jipyousdjpy.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to="/IndicatorDetailExeFor/USDJPY" >
              <Button variant="contained">
               일본 엔/달러
               </Button>
              </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}    
        {this.state.jipyousdcny.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to="/IndicatorDetailExeFor/USDCNY" >
              <Button variant="contained">
               중국 위안/달러
               </Button>
              </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}    
        {this.state.jipyowti.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to={"/IndicatorDetail2/wti"} >
              <Button variant="contained">
               WTI
               </Button>
                </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}   
        {this.state.jipyogoldfor.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to={"/IndicatorDetail2/goldfor"} >
              <Button variant="contained">
               국제 금
               </Button>
                </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}    
        {this.state.jipyobond10.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to={"/IndicatorDetail1/bond10"} >
              <Button variant="contained">
               미 10년 채권수익률
               </Button>
                </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}    
        
        {this.state.jipyobond2.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to={"/IndicatorDetail2/bond2"} >
              <Button variant="contained">
               미 2년 채권수익률
               </Button>
                </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )} 
        
        {this.state.jipyodolidx.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to={"/IndicatorDetail2/dolleridx"} >
              <Button variant="contained">
               달러인덱스
               </Button>
            </Link>
            </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}    
        
        {this.state.jipyobit.map(indi => 
          <TableRow>
             <TableCell align="center">
             <Link to={"/IndicatorDetail2/bitcoin"} >
              <Button variant="contained">
               비트코인
               </Button>
              </Link>
               </TableCell>
             <TableCell align="center">{indi.price}</TableCell>
             <TableCell align="center">{indi.dates.substring(0,10)}</TableCell>
          </TableRow>
        )}   
       
          </TableBody>
        
        </Table>
        
        </Div >
            </div>
        )

      }

}
export default IndiTable1;
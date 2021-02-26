import { render } from '@testing-library/react';
import React, {Component, useEffect} from 'react';
import IndApi from "../../../api/IndApi";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Text, Div, Icon, Anchor, Button, Link } from "atomize";
import { useHistory, useParams } from 'react-router-dom';
function IndiTable2_For(){
    let history = useHistory();
    
    var indifors = [];
    var indikors = [];
    var message = null
    
    useEffect(() => {
        console.log('comdid run');
        IndApi.exeForeignList()
        .then(res =>{
        indifors = res.data
        })
        .catch(err => {
        console.error('지표리스트 오류(국외환율)', err);
       // alert('조회오류');
        })
        IndApi.exeKorList()
       .then(res =>{
        indikors = res.data
        })
        .catch(err => {
        console.error('지표리스트 오류(국내환율)', err);
        // alert('조회오류');
        })
      }, []
    )

        return(
          <div>
          

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
        {indifors.map(indifor => 
            <TableRow>
              <TableCell align="center">{indifor.exechange_Name}</TableCell>
              <TableCell align="center">{indifor.symbol}</TableCell>
              <TableCell align="center">{indifor.rates}</TableCell>
              <TableCell align="center">{indifor.dates.substring(0,10)}</TableCell>
            </TableRow>
        )
      }         
            </TableBody>
      </Table>
  
          </div>
      )

      

}
export default IndiTable2_For;
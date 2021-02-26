import { render } from '@testing-library/react';
import React, {Component, useEffect} from 'react';
import IndiTable2_For from "./IndiTable2_For";
import IndiTable2_Kor from './IndiTable2_Kor'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Text, Div, Icon, Anchor, Button, Link } from "atomize";
import { useHistory, useParams } from 'react-router-dom';
function IndiTable2(){
    let history = useHistory();

        return(
          <div>
          
      <Div  p={{ t: { xs: "9rem", md: "5rem" } }} >
        <Div textAlign="left">
        <Text
        textSize="title"
        textWeight="800"
        fontFamily='ko'
        >
          국제시장 환율
          </Text>
          </Div>
      <IndiTable2_For />
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
          <IndiTable2_Kor />
         </Div >
      
          </div>
      )

      

}
export default IndiTable2;
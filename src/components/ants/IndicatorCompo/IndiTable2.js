import { render } from '@testing-library/react';
import React, {Component, useEffect} from 'react';
import IndiTable2_Detail from './IndiTable2_Detail'
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
       
          <IndiTable2_Detail />
         </Div >
      
          </div>
      )

      

}
export default IndiTable2;
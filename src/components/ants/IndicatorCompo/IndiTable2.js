import React from 'react';
import IndiTable2_Detail from './IndiTable2_Detail'
import { Div } from "atomize";

function IndiTable2(){

        return(
          <div>
          <Div p={{ t: { xs: "1rem", md: "5rem" } }}
          m={{ x: { xs: '0rem', md: '0rem' }, y: { xs: '0rem', md: '2.5rem' }}} >
          <IndiTable2_Detail />
         </Div >
      
        </div>
      )
}
export default IndiTable2;
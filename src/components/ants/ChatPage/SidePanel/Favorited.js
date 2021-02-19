import React, { Component } from "react"
import { Div, Text, Container} from "atomize"
import { connect } from 'react-redux';


export class Favorited extends Component {
    render() {
        return (
            <div>

                <br/>
            <Text
                textAlign="right"
                textSize="subheader"
                textWeight="800"
                fontFamily="ko"
              >
                FAVORITED(0)
              </Text>
             
            </div>
        )
    }
}

export default connect()(Favorited);
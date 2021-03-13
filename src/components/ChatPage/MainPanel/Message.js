import React from 'react'
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

import Media from 'react-bootstrap/Media';
import { Row, Col,Text } from "atomize"

function MessageBody({ message, user }) {

    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      
    
    const isMessageMine = (message, user) => {
        return message.user.id === user.uid
    };

    const timeFromNow = timestamp => moment(timestamp).fromNow();

    const isImage = message => {
        return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
    };

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div align = {isMessageMine(message, user) ? "right" : "left" } >
      <CardContent style={{  padding:'2', width : "75%", backgroundColor: isMessageMine(message, user) ? "#ECECEC" : "#FFFFFF", borderRadius: "1em", margin:'0.5em'}}  >
        <Media style={{ marginBottom:'3px'}}>
            
            <Media.Body >
            <span  style={{ display: 'inline' }}>
                <Row m={'-0.5rem'}>
                <Col size={{ xs: "2", lg: "auto"}} align="center">
                <img
                style={{ borderRadius: '5px' , display: 'inline-block', verticalAlign:'middle'}}
                width={45}
                height={45}
                className="mr-3"
                src={message.user.image}
                alt={message.user.name}
                
                />  
                </Col>
                <Col size={{ xs: "3", lg: "auto"}} >
            
                    <Text
                        textAlign="left"
                        textSize="body"
                        textWeight="800"
                        fontFamily="ko"
                        m="-0.3rem"
                >               
                   {message.user.name}{" "}
                    </Text>
              
                    <div style={{ fontSize: '10px', color: 'gray' , margin:'5%'}}  align="left" >
                        {timeFromNow(message.timestamp)}
                    </div>
            
                </Col>
                <Col size={{ xs: "7.5", lg: "auto"}} > 
                    <div align="left" style={{ padding:'2%'}}>
                        {isImage(message) ?
                    <img style={{ maxWidth: '300px' }} alt="이미지" src={message.image} />
                    :
                    <span style={{ fontSize: '14px', color: 'black', margin:'-15%' }} id="move">{message.content}</span>
                        }
                  </div>
                </Col>
                </Row>       
            </span>   
                    
            </Media.Body>
        </Media>
        </CardContent>
        </div>
    )
}

export default MessageBody
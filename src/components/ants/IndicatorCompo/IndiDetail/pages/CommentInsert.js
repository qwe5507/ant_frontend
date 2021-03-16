import React, {useState, useEffect, useRef } from "react"
import { Text, Div,  Button, Icon, Modal} from "atomize";
function CommentInsert(props) {
  
      return (
        <Modal
        isOpen={props.isOpen}
        onClose= {props.onClose}
        m={{ y: "4rem", x: { xs: "1rem", lg: "auto" },t: "6rem" }}
        rounded="md"
        >
          <Icon
            name="Cross"
            pos="absolute"
            top="1rem"
            right="1rem"
            size="16px"
            cursor="pointer"
          />
          <Div d="flex" m={{ b: "2rem" }}>
            <Icon
              name="AlertSolid"
              color="warning700"
              m={{ t: "0.35rem", r: "0.5rem" }}
            />
            <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
              게시물을 등록하시겠습니까?
            </Text>
          </Div>
          <Div>
        </Div>
          <Div d="flex" justify="flex-end">
            <Button
              onClick={props.onClose}
              bg="gray200"
              textColor="medium"
              m={{ r: "1rem" }}
            >
              Cancel
            </Button>
            <Button bg="info700">
              Yes, Submit
            </Button>
          </Div>
    
        </Modal>
      );
    };

export default CommentInsert;
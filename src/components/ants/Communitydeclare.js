import { Div, Button, Modal, Icon, Text, Dropdown, Anchor  } from "atomize";
import React, { useState, useEffect } from "react"



const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }}>
      {["욕설", "부적절인 내용", "기타"].map((name, index) => (
        <Anchor d="block" p={{ y: "0.25rem" }} onClick = {()=>{}}>
          {name}
        </Anchor>
      ))}
    </Div>
  );

function Communitydeclare(){ 
    let [isOpens,isOpens변경] = useState(false);
    let [onCloses,onCloses변경] = useState(false);
    
  return (
    <Modal
      isOpen={isOpens}
      onClose= {onCloses}
      m={{ y: "4rem", x: { xs: "1rem", lg: "auto" },t: "6rem" }}
      rounded="md"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={() => onCloses변경(false)}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          신고유형을 선택해주세요.
        </Text>

      </Div>
      <Div>
      <Dropdown targetHover menu={menuList}
      m={{ b: "2rem" }}
      >
          hover
        </Dropdown>
    </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={() => onCloses변경(false)}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={() => onCloses변경(false)} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  );
};

export default Communitydeclare;
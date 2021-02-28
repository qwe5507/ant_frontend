import React from "react"
import { Div, Text, Row, Col, Container, Anchor, Icon } from "atomize"

const footerLinks = {
  docs: [
    {
      name: "Installation",
      link: "/docs/react/setup",
    },
    {
      name: "Theme Setup",
      link: "/docs/react/theme",
    },
    {
      name: "Grid",
      link: "/docs/react/grid",
    },
    {
      name: "Atoms",
      link: "/docs/react/atoms",
    },
    {
      name: "Molecules",
      link: "/docs/react/molecules",
    },
    {
      name: "Functions",
      link: "/docs/react/functions",
    },
  ],
  atomize: [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Design",
      anchor: true,
      link: "http://www.atomizedesign.com/",
    },
    {
      name: "Development",
      link: "/docs/react/intro",
    },
  ],
  resources: [
    {
      name: "Sketch File",
      anchor: true,
      link: "https://gumroad.com/l/atomize",
    },
    {
      name: "Github",
      anchor: true,
      link: "https://github.com/Proksh/atomize",
    },
  ],
  about: [
    {
      name: "Showcase",
      link: "/docs/react/showcase",
    },
    {
      name: "Contribute",
      link: "/docs/react/contributing",
    },
  ],
  extras: [
    {
      name: "Blog",
      anchor: true,
      link:
        "https://hashnode.com/post/getting-started-with-react-atomize-and-gatsby-cjyfgtj0m001obzs19cobmogi",
    },
    {
      name: "Need Help?",
      anchor: true,
      link: "mailto:proksh@atomizedesign.com",
    },
    {
      name: "Give Feedback",
      anchor: true,
      link: "mailto:proksh@atomizedesign.com",
    },
  ],
}

const mediaLinks = [
  {
    icon: "Github",
    link: "https://github.com/proksh",
  },
  {
    icon: "Behance",
    link: "https://www.behance.net/prokshh90d1",
  },
  {
    icon: "Dribbble",
    link: "https://dribbble.com/proksh",
  },
  {
    icon: "Twitter",
    link: "https://twitter.com/proksh_luthra",
  },
  {
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/prokshluthra/",
  },
]

const Footer = () => {
  return (
    <Div
      tag="footer"
      p={{ t: { xs: "12rem", md: "8rem" }, b: { xs: "4rem", md: "5rem" } }}
      pos="relative"
    >
      <Container>
        <Div m={{ b: "8rem" }} d={{ xs: "none", md: "block" }}>
          <Row>
            {Object.keys(footerLinks).map((key, index) => {
              return (
                <Col
                  size={{ xs: 6, md: 2 }}
                  offset={{ xs: 0, md: index === 0 && 1 }}
                >
                  <Div
                    p={{ l: { md: "2.5rem" }, b: { xs: "1.5rem", md: "0" } }}
                    textColor="medium"
                  >
                    <Text
                      m={{ b: "1rem" }}
                      textColor="black"
                      textTransform="capitalize"
                      textWeight="500"
                    >
                      {key}
                    </Text>
                    {footerLinks[key].map((link, i) => {
                      if (link.anchor) {
                        return (
                          <Anchor
                            m={{ b: "0.5rem" }}
                            textColor="medium"
                            hoverTextColor="info800"
                            d="block"
                            href={link.link}
                            target="_blank"
                            textWeight="400"
                          >
                            {link.name}
                          </Anchor>
                        )
                      }
                    })}
                  </Div>
                </Col>
              )
            })}
          </Row>
        </Div>

        <Div d="flex" align="center" justify="center" flexDir="column">
          <Text
            tag="h2"
            textWeight="400"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            똑똑한 개미들에서 제공하는 모든 정보는 투자 참고 사항이며, 정보의 오류와 지연 가능성이 있습니다.
            똑똑한 개미들은 제공하는 정보에 의한 투자 결과에 대해 법적인 책임을 지지 않습니다.
            똑똑한 개미들이 제공하는 모든 컨텐츠는 저작권법에 의해 보호 받고 있으며 당사의 동의 없이 어떠한
            형태로든 복제, 배포, 전송, 대여할 수 없으며 만일 이를 위반할 경우 법적인 책임을 지게 됩니다.
          </Text>
          <Text
            tag="h2"
            textWeight="400"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            대표 이진현  서울 금천구 가산동  사업자등록번호 000-00-0000 통신판매업신고번호 2021-서울-00000 고객문의 contacts@smartants.com 개인정보처리방침
          </Text>
          {/* <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blank">
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="info800"
                  m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
                  cursor="pointer"
                />
              </Anchor>
            ))}
          </Div> */}
        </Div>
      </Container>
    </Div>
  )
}

export default Footer

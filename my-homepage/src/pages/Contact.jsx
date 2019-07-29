import React, { Component } from "react";
import { Row, Col } from "antd";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import styled from "styled-components";
const Contents = styled(Row).attrs(() => ({ type: "flex" }))`
  margin-top: 1px;
  background-color: #f3f7f820;
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  height: 700px;
`;
export class Contact extends Component {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <Row
        type="flex"
        align="middle"
        style={{ background: "#0a262e", height: "100vh" }}
      >
        <Col span={24} style={{ textAlign: "center" }}>
          <Logo />
          <Menu pathname={pathname} />
        </Col>
        <Contents>
          <Col span={24}>
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "25px",
                marginLeft: "40px"
              }}
            >
              Email
            </div>
            <div
              style={{
                color: "white",
                marginLeft: "60px",
                marginBottom: "20px"
              }}
            >
              fdsa0329@naver.com
            </div>
          </Col>
        </Contents>
      </Row>
    );
  }
}

export default Contact;

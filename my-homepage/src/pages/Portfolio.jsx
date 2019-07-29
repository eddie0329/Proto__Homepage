import React, { Component } from "react";
import { Row, Col } from "antd";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import styled from "styled-components";
import MyBook from "../components/BookSample";
import BookShelf from "../images/Bookshelf.png";


const Contents = styled(Row).attrs(() => ({ type: "flex" }))`
  margin-top: 1px;
  background-color: #f3f7f820;
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export class Portfolio extends Component {
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
          <Row
            type="flex"
            style={{
              width: "1400px",
              height: "350px",
              // backgroundColor: "black"
            }}
          >
            <Col span={8}>
              <MyBook/>
            </Col>
            <Col span={8}>
              <MyBook />
            </Col>
            <Col span={8}>
              <MyBook />
            </Col>
            <Row
              type="flex"
              align="top"
              style={{
                width: "1400px",
                height: "0px",
              }}
            >
              <Col span={24}>
                <img src={BookShelf} style={{width: "2880px", height: "500px", marginLeft: "-180px"}}/>
              </Col>
            </Row>
          </Row>
        </Contents>
      </Row>
    );
  }
}

export default Portfolio;

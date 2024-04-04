import React from "react";
import { Card, Col, Row } from "antd";
import { pieData, columnData, stockData } from "../../constants/chartDatas";
import { CustomChart } from "../../components";


const Reports = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card bordered={false}>
        <CustomChart options={pieData} />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false}>
        <CustomChart options={stockData} />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false}>
        <CustomChart options={columnData} />
      </Card>
    </Col>
  </Row>
);
export default Reports;

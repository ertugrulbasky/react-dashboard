import React from "react";
import { Card, Col, Row } from "antd";
import { pieData, columnData, stockData } from "../../constants/chartDatas";
import Chart from "../../components/CustomChart/Chart";

const Reports = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card bordered={false}>
        <Chart options={pieData} />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false}>
        <Chart options={stockData} />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false}>
        <Chart options={columnData} />
      </Card>
    </Col>
  </Row>
);
export default Reports;

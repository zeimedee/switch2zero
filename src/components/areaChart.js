import React from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import {useContext} from 'react'
import { AppContext } from '../context/AppContext';

function AreaCharts() {
  const {bChart } = useContext(AppContext)
  return  (
    <div>
    <br />
    <Container>
      <Row>
        <Col></Col>
        <Col>
        <h3>Cumulative spend</h3>
        </Col>
        <Col></Col>   
      </Row>
    </Container>
    
    <AreaChart width={900} height={500} data={bChart}>
    <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" interval={0} angle={10} dx={0} />
    <YAxis />
    <Tooltip/>
    </AreaChart>
    </div>
  )
}

export default AreaCharts
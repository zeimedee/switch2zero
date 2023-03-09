import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {useContext} from 'react'
import { AppContext } from '../context/AppContext';


function Chart() {
  const { aChart} = useContext(AppContext)
  return (
    <div>
    <Container>
      <Row>
        <Col></Col>
        <Col>
        <h3>Carbon Offset</h3>
        </Col>
        <Col></Col>   
      </Row>
    </Container>
    
    <LineChart width={900} height={500} data={aChart}>
    <Line type="monotone" dataKey="offset" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" interval={0} angle={15} dx={0}/>
    <YAxis />
    <Tooltip/>
    </LineChart>
    </div>
  )
}

export default Chart
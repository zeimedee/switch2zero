import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';

import axios from 'axios'


function Forms() {
    const { register, handleSubmit } = useForm()
    const { setTable, table, setAChart, setBChart, setSummary } = useContext(AppContext)



    const Fetch = async(input) =>{
        //fetch simulated date from api and fill chart data
        let payload = { data: input}
        console.log(input)
         axios.post('https://switch2zero.onrender.com/api/v1/simulate/',payload)
            .then((data)=>{
                setAChart(data.data.results.offsetData)
                setBChart(data.data.results.spendData)
                setSummary(data.data.summary)})
            .catch((err)=>{
                console.log(err)
            })
     
    }
    const onSubmit = (data) => {
        //get the length of the current object array and add 1
        const id = table.length + 1
        //append the id to the date
       const state = {...data, id:id}
       //make copy of state and append current state
       const payload = [...table, state]
        //append data to the table state
        setTable(previousState =>([...previousState, state]), Fetch(payload))
        
    }
    
  return (
    <div>
        <Container>
            <Row>
            <Col><h4>Country</h4></Col>
            <Col></Col>
            <Col>
                <Form.Select {...register("country")}>
                <option>select country</option>
                <option value={15.52}>United States</option>
                <option value={5.55}>United Kingdom</option>
                <option value={9.44}>Germany</option>
                <option value={6.95}>South Africa</option>
                <option value={1.91}>India</option>
                <option value={7.38}>china</option>
                <option value={8.56}>Singapore</option>
                <option value={17.10}>Australia</option>
                </Form.Select>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>

            </Row>
            <br />
            <Row>
                <Col><h4>Simulation Mode</h4></Col>
                <Col></Col>
                <Col>
                    <Form.Select {...register("mode")}>
                    <option>select mode</option>
                    <option value="monthly">monthly</option>
                    </Form.Select>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>               
            </Row>
            <br/>
            <Row>
            <Col>
            <Form.Label>Month & Year</Form.Label>
            <Form.Control type='date' {...register("date", { required: true })}></Form.Control>
            </Col>
            <Col>
            <Form.Label>Number of Trees</Form.Label>
            <Form.Control type='number' min='1' max='55' {...register("trees")}></Form.Control>
            </Col>
            </Row>
            <br/>
            <Row>
                <p>Each Tree cost $120 upfront and $12 per year immediately thereafter</p>
            </Row>
            {/* <br /> */}
            <Row>
            <Col>
            <Button onClick={handleSubmit(onSubmit)}>Add Purchase</Button>
            </Col>
            </Row>
            <br/>
        </Container>
        

    </div>
  )
}

export default Forms
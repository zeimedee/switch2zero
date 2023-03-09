import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapTable from 'react-bootstrap-table-next';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios'


function Table({ data }) {
  const { setTable, table, setAChart, setBChart } = useContext(AppContext)

  const Fetch = () =>{
    //fetch simulated date from api and fill chart data
    let payload ={ data: table}
    console.log(payload)
  axios.post('https://switch2zero.onrender.com/api/v1/simulate/',payload)
        .then((data)=>{
            setAChart(data.data.results.offsetData)
            setBChart(data.data.results.spendData)
        })
        .catch((err)=>{
            console.log(err)
        })
 
}
    const handleDelete = (rowId) => {
        //filter table data
        const data = table.filter((purchase)=> { return purchase.id !== parseInt(rowId) })
        //update table state
        console.log(data)
        setTable(data);
        //fetch new chart data
        Fetch()
      };
      
        const columns = [{
        dataField: 'id',
        text: '#',
      }, 
      {
        dataField: 'date',
        text: 'Month & Year'
        }, 
        {
        dataField: 'trees',
        text: 'Number of Trees',
        },
        {
            text:"action",
            formatter: (cellContent, row) => {
                return (
                  <button
                    className="btn btn-danger btn-xs"
                    onClick={()=>  handleDelete(row.id) }
                  >
                    Delete
                  </button>
                );
              },
        }
    ];
    //count total number of trees purchased
        const total = (items) =>{
            let count = 0;
            items.map((n)=>{
                count += parseInt(n.trees);
                return count
            })
            return count;
        }
        
  return (
    <div>
    <Container>
        <Row>
            <h3>Purchases</h3>
        </Row>
        <Row>
        <BootstrapTable keyField='id' data={ data } columns={ columns } >
        </BootstrapTable>
        </Row>
        <Row>
        <Col></Col>
        <Col></Col>
        <Col><h5>Total:{total(data)}</h5></Col>
            
        </Row>
    </Container>

    </div>
  )
}

export default Table
import Container from 'react-bootstrap/Container';
import Title from './components/Title'
import Forms from './components/Form'
import Summary from './components/Summary';
import Chart from './components/chart'
import AreaCharts from './components/areaChart';
import { AppContext } from './context/AppContext';
import Table from './components/Table';

import { useState } from 'react';

function App() {
  const [table,setTable] = useState([])
  const[bChart, setBChart] = useState([])
  const[aChart, setAChart] = useState([])
  const [summary, setSummary] = useState('')

  return (
    <div >
    <Container>
      <AppContext.Provider value={{ table, setTable, bChart, setBChart, aChart, setAChart,summary, setSummary}}>
        <Title />
        <Forms />
        <Table  data={table}/>
        <Summary  summary={summary}/>
        <Chart />
        <AreaCharts />
      </AppContext.Provider>
    </Container>
      
    </div>
  );
}

export default App;

import { useState, useContext } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import { UserContext } from './context/UserProvider'
import Auth from './pages/Auth'

import AreaChart from './charts/AreaChart';
import Card from './components/Card'
import AppBar from './layout/AppBar'
import Drawer from './layout/Drawer'
import Content from './layout/Content'

const chartData = {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }

function App() {
    const { token } = useContext(UserContext)
    const [drawer, setDrawer] = useState(false)

    return (
        <div className="App">
        { !token ? <Auth /> :
            <>
            <AppBar />
            <Drawer open={drawer} setDrawer={setDrawer}/>
            <Switch>
                <Route exact path="/">
                    <Content drawerWidth={drawer ? 200 : 80}>
                        <Card height={"300px"}>
                            <h1>Standup Attendance</h1>
                            <AreaChart />
                        </Card>
                    </Content>
                </Route>
            </Switch>
            </>
        }
        </div>
    )
}

export default App;

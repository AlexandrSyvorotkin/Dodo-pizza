import React, {useEffect, useState} from 'react'
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom'
import axios from 'axios'

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data})=> {
            setPizzas(data.pizzas)
        })
    }, []);


    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' render={()=> <Home items={pizzas}/>} exact/>
                    <Route path='/Cart' component={Cart} exact/>
                </div>
            </div>
        </div>
    );
}

export default App;

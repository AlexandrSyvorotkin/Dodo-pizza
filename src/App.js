import React, {useEffect, useState} from 'react'
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom'

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        return () => {
            fetch('http://localhost:3000/db.json').then((res)=> res.json()).then(json => {
                setPizzas(json.pizzas)
            })
        };
    }, []);

    console.log(pizzas)


    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' component={Home} exact/>
                    <Route path='/Cart' component={Cart} exact/>
                </div>
            </div>
        </div>
    );
}

export default App;

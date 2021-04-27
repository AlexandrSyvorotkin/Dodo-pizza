import React, {useEffect, useState} from 'react'
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'

function App() {

    const dispatch = useDispatch()



    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
            // setPizzas(data.pizzas)
            dispatch(setPizzas(data))
        })
    }, [])

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
    )
}

export default App


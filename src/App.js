import React, {useEffect, useState} from 'react'
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import store from './redux/store'


import {setPizzas as setPizzasAction} from './redux/actions/pizzas'

// function App() {
//
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data})=> {
//             setPizzas(data.pizzas)
//         })
//     }, []);
//
//
//     return ;
// }


class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data})=> {
            this.props.savePizzas(data.pizzas)
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Route path='/' render={()=> <Home items={this.props.items}/>} exact/>
                        <Route path='/Cart' component={Cart} exact/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        savePizzas: (items)=> dispatch(setPizzasAction(items)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

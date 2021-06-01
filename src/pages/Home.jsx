import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'}
]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)
    const cartItems = useSelector(({cart}) => cart.items);


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy, dispatch])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index),)
    }, [dispatch])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch])


    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoriesNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />
                    ))
                    : Array(12).fill(0).map((_, index) => (<PizzaLoadingBlock key={index}/>))}
            </div>

        </div>
    );
};

export default Home;

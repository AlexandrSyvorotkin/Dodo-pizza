import React, {useCallback} from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoriesNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'},{name:'алфавит', type: 'alphabet'}
]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)

    const onSelectCategory = useCallback((index)=> {
        dispatch(setCategory(index))
    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoriesNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {
                items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
            }
            </div>
        </div>
    );
};

export default Home;

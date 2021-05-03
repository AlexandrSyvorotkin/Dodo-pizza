import React, {useState} from 'react';
import PropTypes from "prop-types";
import Index from "./PizzaBlock";


const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
    // const [activeItem, setActiveItem] = useState(null);


    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active': ''} onClick={()=> { onClickCategory(null) }}>Все</li>
                {items && items.map((name, index) => (
                    <li
                        className={activeCategory === index ? 'active': ''}
                        onClick={()=> onClickCategory(index)} key={`${name} ${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}

export default Categories;
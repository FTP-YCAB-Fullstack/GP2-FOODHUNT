import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import cart from './cart.png';
import './SearchBar.css';

import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';

const SearchBar = props => {
    const order = useSelector(state => state.order)
    const history = useHistory();

    const [done, setDone] = React.useState({
        Beef: false,
        Breakfast: false,
        Chicken: false,
        Dessert: false,
        Goat: false,
        Lamb: false,
        Miscellaneous: false,
        Pasta: false,
        Pork: false,
        Seafood:false,
        Side: false,
        Starter: false,
        Vegan: false,
        Vegetarian: false  
    })

    const filters = (category) => {
        props.setCategory(state => `${category} ${state}`);
        setDone(state => {
            return {
                ...state,
                [category]: true
            }
        })
    }

    const [openModal,setOpenModal] = useState(false)
    const [option, setOption] = useState([]);

    const changeCategory = e => {
        props.setCategory(e.target.value);
        let copyDone = {...done};
        for (let state in copyDone) {
            copyDone[state] = false
        };
        setDone(copyDone)
    }

    React.useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(res => {
            let {meals} = res.data;
            setOption(meals)
        })
    }, [])

    return (
        <>
            <div className="flex justify-center gap-x-4">
                <div className="w-96">
                    <input list="category" type="search" className="searchBox border-2 bg-gray-300 rounded-lg w-full p-4" onChange={changeCategory} placeholder="Masukan Kategori" value={props.category}/>
                </div>
                <div className="relative w-24">
                    <a onClick={() => history.push("/order")} className="cursor-pointer">
                        <div className="absolute w-6 bg-gray-400 rounded-full text-center">
                            {order.length}
                        </div>
                        <img className="w-8/12 yellow-300" src={cart} alt="no"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {option.map((el, i) => <button disabled={done[el.strCategory] ? true : false} onClick={() => filters(el.strCategory)} className="cursor-pointer p-2 m-2 bg-yellow-300" style={{
                    backgroundColor: done[el.strCategory] ? 'red' : 'gold'
                }} key={i}>{el.strCategory}</button>)}
            </div>
        </>
    )
}

export default SearchBar;
import React from 'react'
import {useSelector} from 'react-redux';

import Cardcontent from "../../components/Main Content/Card";
import Header from "../../components/Navbar/Header"
import SearchBar from './../../components/Search Bar/SearchBar'

const MainPage = () => {
    const state = useSelector(state => state.data);
    const order = useSelector(state => state.order)
    const [category, setCategory] = React.useState('');
    const [filter, setFilter] = React.useState([]);
    
    React.useEffect(() => {
        // setFilter(state.filter(el => el.category === category));
        function result(x) {
            let result = [];
            let arr = x.split(' ');
            arr.forEach(el => {
                result.push(state.filter(x => x.category === el))
            });
            result = result.filter(el => el.length !== 0);
            result = result.flat(1);
            return result
        } 

        setFilter(result(category));
    }, [category]);

    React.useEffect(() => {
        if (category === '') {
            setFilter(state.filter(el => el.category === 'Chicken'))
        } else {
            setFilter(state.filter(el => el.category === category))
        }
    }, [state])

    return (
        <div className="Mainpage">
            <Header/>
            <SearchBar category={category} setCategory={setCategory}/>
            <div className="card-container w-full flex justify-center flex-col gap-y-8 mt-16">
                <div className="cards flex flex-wrap justify-center gap-x-24 gap-y-16">
                    {filter.map((el, i) => <Cardcontent key={i} {...el} />)}
                </div>
            </div>
        </div>
    )
}

export default MainPage
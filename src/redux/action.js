import axios from 'axios'

export const getApi = category => {
    return (dispatch) => {
        async function getApiCategory() {
            try {
              let data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
              data = await data.data;
              let {meals} = data;
              meals = meals.map(el => {
                  return {
                    ...el,
                    price: category === 'Beef' || category === 'Chicken' || category === 'Lamb' ? 30000 : 20000, 
                    category,
                    quantity: 1,
                    carted: false
                  }
              });

              meals = meals.slice(0,6);

              dispatch({type: 'GET_API', payload: meals});
            } catch(err) {
              console.log(err)
            }
          }
        getApiCategory();
    }
}
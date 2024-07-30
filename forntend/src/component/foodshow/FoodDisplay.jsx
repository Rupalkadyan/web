import React, { useContext } from 'react'
import'./FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FOODs/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (

    <div className='food-display' id='food-display'>
        <h2>Top Dishes near You</h2>
        <div className="food-display-list">
          {food_list.map((items,index)=>{
          if(category==="All"||category===items.category){
            return (
              
              <FoodItem id={items._id} name={items.name} description={items.description} price={items.price} image={items.image}/>
             
              )
          }
             
            })
          }
         
        </div>
    </div>
  )
}


export default FoodDisplay
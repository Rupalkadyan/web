import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolores qui amet delectus repellendus quas eum voluptas laboriosam quos ad, iure fugit repellat saepe. Exercitationem, amet?</p>
        <div className="explore-menu-list">
            {menu_list.map((items)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===items.menu_name?"All":items.menu_name)} className="explore-menu-list-item">
                        <img className={category===items.menu_name?"active":""} src={items.menu_image} alt=''/>
                        <p>{items.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
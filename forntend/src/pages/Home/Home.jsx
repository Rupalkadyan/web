import React ,{useState} from 'react'
import'./Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/foodshow/FoodDisplay'
import Appdownload from '../../component/appdownload/Appdownload'
const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
      
    </div>
  )
}
export default Home
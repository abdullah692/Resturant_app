import logo from './logo.svg';
import './App.css';
import Resturant from './Components/Resturant';
import React, { useState } from 'react'
import Menu from './Components/MenuApi'
function App() {

  const [items, setItems] = useState(Menu);

const list=[...new Set(Menu.map((element)=>{
  return element.category
}))]
console.log(list);

const filter=((category)=>{
  const updateList=Menu.filter((currElem)=>{
    return currElem.category===category
  });
  setItems(updateList);
})

  return (
    <div className="App">
      <nav className='navBar'>
        <div className='buttons'>
          <button className='btn_group' onClick={() => filter('breakfast')}>BreakFast</button>
          <button className='btn_group' onClick={()=>filter('lunch')}>Lunch</button>
          <button className='btn_group' onClick={()=>filter('dinner')}>Dinner</button>
          <button className='btn_group' onClick={()=>setItems(Menu)}>All</button>
        </div>




      </nav>

      <Resturant menuData={items} />
    </div>
  );
}

export default App;

import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

function ExploreMenu({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit saepe expedita doloremque. Omnis earum voluptas, ad ratione aspernatur asperiores explicabo aliquam provident, possimus doloremque dignissimos! Cumque inventore quaerat assumenda saepe.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev => prev ===item.menu_name ?"All" :item.menu_name)} key={index} className='explore-menu-list-item'>
              <img  className={category === item.menu_name ?"active" :""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
}

export default ExploreMenu;

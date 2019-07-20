import React from 'react';
import './css/sidedrawer.css';
const sidedrawer =props =>{
    let drawerClasses = 'sidedrawer';
    if(props.show){
        drawerClasses ='sidedrawer open';
    }
      return(
      <nav className={drawerClasses}>
        <ul>
            <li><a href="https://github.com/SaurabhCR7">Github</a></li>
            <li><a href="https://saurabhcr7.github.io/">Contact</a></li>
        </ul>
    </nav>
      );
};

export default sidedrawer;
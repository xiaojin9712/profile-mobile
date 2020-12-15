import React from 'react';
import './style.less';


function Item(props) {

  return (
    <div className="item">
        { props.children }
    </div>
  )
}

export default Item;
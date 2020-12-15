import React from 'react';
import './style.less';


function Button(props) {

  return (
    <button className="primary">
        { props.children }
    </button>
  )
}

export default Button;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import "./TabBar.less";

function TabBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(e) {
    setActiveIndex(parseInt(e.target.dataset.index, 10))
  }
  
  return (
    <div className="tabbar" onClick={handleClick}>
      <Link className={ classNames('tabbar-item', { 'active': activeIndex === 0}) } to="/home" data-index="0">Home</Link>
      <Link className={ classNames('tabbar-item', { 'active': activeIndex === 1}) } to="/me" data-index="1">Me</Link>
      <Link className={ classNames('tabbar-item', { 'active': activeIndex === 2}) } to="/hooks" data-index="2">Hooks</Link>
      {/* <Link className={ classNames('tabbar-item', { 'active': activeIndex === 3}) } to="/test" data-index="3">Test</Link> */}
    </div>
  )
}

export default TabBar;
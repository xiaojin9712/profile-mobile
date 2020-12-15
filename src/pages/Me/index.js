import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { connect } from "react-redux"
// import { add } from "@/store/actions/test"
// import { Button } from 'antd-mobile';
import Item from '../../components/Item';
import { Camera, Battery, Bell, Eye, Airplay, DollarSign, Video, Mail, PlusCircle } from 'react-feather';
import './style.less';


function Me(props) {
  console.log(props)
  return (
  <div className="center">
    <section className="overview">
    <h3>Overview</h3>
    <div className="overview-panel">
      <div className="balance">
        <h3 className="amount">20,600</h3>
        <p>Current balance</p>
      </div>
      <div className="add-button">
        <PlusCircle />
      </div>
    </div>

    </section>
    <section className="operations">
      <h3>Operations</h3>
    <div className="row">
    <Item>
      <Camera />
    </Item>
    <Item>
      <Battery />
    </Item>
    <Item>
      <Bell />
    </Item>
    <Item>
      <Eye />
    </Item>
    </div>
    <div className="row">
    <Item>
      <Airplay />
    </Item>
    <Item>
      <DollarSign />
    </Item>
    <Item>
      <Video />
    </Item>
    <Item>
      <Mail />
    </Item>
    </div>
    </section>
   
    {/* <div className="hairline-top" style={{...style.test}}></div>
    <div style={{...style.test, ...style.border}}></div>
    <Link to="/about">关于我</Link>
    <Link to="/me/1">详情</Link>
    <div>
      <span>{props.count}</span>
      <Button onClick={e => props.add()}>+</Button>
    </div> */}
  </div>)
}

// const mapState = (state) => {
//   return {
//     count: state.test
//   }
// }

// const mapActions = (dispatch) => {
//   return {
//     add: id => dispatch(add(id))
//   }
// }

// export default connect(mapState, mapActions)(Me);
export default Me;

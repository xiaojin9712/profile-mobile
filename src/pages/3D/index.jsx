import React, { useState, useEffect } from 'react';
import './style.less';

getUser().then(res => {
  console.log(res)
})

function Home() {

  const [user, setUser] = useState('');
  useEffect(() => {
    getUser().then(user => {
      setUser(user.name);
    })
  }, []);
  return (
    <div className="home">
      <div className="left">

      </div>
      <div className="right">
        <section className="info">
          <p className="time">
            06:20 PM
          </p>
          <p className="date">
          Nov.10.2020 | Wednesday
          </p>
        </section>
        <section className="logo-wrapper">
          <div className="logo"></div>
          <h2>XXXXavier.com</h2>
          <p>You only live once, but if you do it right, once is enough.</p>
          <p>Keep go on.</p>
        </section>

        <section className="operation-wrapper">
          <Button>Contact me.</Button>
        </section>
      </div>
      {/* <a href={`//${user}`} target="_blank">{user}</a>
      <Button>点击</Button>
      <p className="base-font">基础字体大小</p>
      <p className="base-font-vw">对比字体大小</p> */}
    </div>
  )
}

export default Home;
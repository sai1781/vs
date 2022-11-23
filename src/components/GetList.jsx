import React from "react";
import Nav from './Nav'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'


function GetList({ data }) {
  const navigate = useNavigate("")
  



  const change = (post) => {
    window.location.href = post.url
  }

  return (
    <div className="mainContainer" >
      <Nav />


      <div className="container">
        <button className="button">Platforms</button>
        {data.map((post, idx) => (
          <>

            <div className="data" onClick={() => change(post)} key={idx} >

              <h2>Contest Name: {post.name}</h2>
              <div className="image">
                {idx % 2 === 0 ? <img className="img1" src="https://avatars.githubusercontent.com/u/11960354?v=4" alt="no_image" /> :
                  (<img className="img2" src="https://camo.githubusercontent.com/e9297cea140e529dc33aee99af9b7b63259e89cab1d64d440b71d01a80fac131/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f636f64652d666f726365732d333632383639352d333032393932302e706e67" alt="no_image" />)}
              </div>
              <p>start_date : { }</p>
              <p>start_time : {post.start_time}</p>
              {/* <p>end_time : {date.sethours(post.end_time)}</p> */}
              <h3>duration : {post.duration}</h3>
              <h3>duration : {post.duration}</h3>
              {/* <h3> Start_Time: {new Date(data.start_time).toLocaleString()}</h3>
              <h3> End_Time: {new Date(data.end_time).toLocaleString()}</h3>
              <h3> Duration: {`${days} days ${hours} hr ${mins} min & ${secs} sec`}</h3> */}
            </div>
          </>
        ))}
      </div>
    </div >

  );
}

export default GetList;




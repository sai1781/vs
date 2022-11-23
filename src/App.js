import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import GetList from './components/GetList';
import {Routes,Route} from 'react-router-dom'
import{product_url} from"./utils"

function App() {
  const [list, setList] = useState([]);
  useEffect(()=>{
    (async _ =>{
      const requestUrl = await product_url.get();
      console.log(requestUrl)
      setList(requestUrl.data)
    })()
       
  }, []);
  console.log(list)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GetList data={list} />} />
      </Routes>
    </div>
  );
}

export default App;

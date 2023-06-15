import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Newsitem from './components/Newsitem';

export default class App extends Component {
  render() {
    return (
      <div>
       
        <NavBar/>
        <Routes>
        <Route path="/" element={<News key="general" category="general"/>}/>
        <Route path="/buisness" element={<News key="Business" category="business"/>}/>
        < Route path="/entertainment" element={<News key="Entertainment" category="entertainment"/>}/>
        <Route Route path="/general" element={<News key="general" category="general"/>}/>
        <Route Route path="/health" element={<News key="health" category="health"/>}/>
        <Route Route path="/science" element={<News key="science" category="science"/>}/>
        <Route Route path="/sports" element={<News key="sports" category="sports"/>}/>
        <Route Route path="/technology" element={<News key="technology" category="technology"/>}/>
        </Routes>
       
      </div>
    )
  }
}


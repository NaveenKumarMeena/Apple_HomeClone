import React from 'react'
import Header from '../Header/Header'
import Section from './CovidSection/Section'
import Home from './home/home'
import "./Body.css"
import Footer from './footer/Footer'


const Body = () => {
    return (
        <>
        <div className="header"><Header/></div>
        <div className="covid-section"><Section/></div>
        <div className="home"><Home/></div>  
        <div className="footer"><Footer/></div>       
        </>
    )
}

export default Body

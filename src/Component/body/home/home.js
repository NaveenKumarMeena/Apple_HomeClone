import React from 'react'
import Fullhome from './FullWidth/Fullhome'
import HalfHome from './TwoBox/halfhome'

function Home() {
    return (
        <div className="home">
            <Fullhome/>
            <HalfHome/>
        </div>
    )
}

export default Home

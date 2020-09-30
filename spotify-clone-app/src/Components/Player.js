import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../Style/Player.css'

const Player = ({spotify}) => {
    return (
        <div className="Player">
           <div className="player__body">
               <Sidebar/>
               <Body spotify={spotify}/>
           </div>
               <Footer />
        </div>
    )
}

export default Player

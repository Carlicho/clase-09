import React, { Component} from "react";
import logo from '../../assets/img/tocadiscos.png'
import banner from '../../assets/img/header.png'
import logoaudio from '../../assets/audio/lattente.mp3'
import './navbar.css'

export default class Navbar extends Component {

    render (){
         return(
            <div>
                <img src={ logo}  alt='logo' className="logo"></img>
                <br></br>
                <audio className="logoaudio" controls src={logoaudio}></audio>
                <br></br>
                <img src={ banner}  alt='banner' className="banner"></img>
            </div>

         )
    }
}
import React from "react";
import './landingpage.css'
import { Link } from "react-router-dom";
export function Portnav() {
    return (
        <>

            <header>
                <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tYgs1GScuh4D7d7Sg5HZTfOZ_uqkzwdUsA&usqp=CAU" style={{ padding: "5px", borderRadius: "15px" }} height="60px" width="200px" /></div>
                <nav>
                    <ul>
                        <Link to="/dashboard" ><li><a href="#">Home</a></li></Link>
                        <Link to="/dashboard" ><li><a href="#about">About</a></li></Link>
                        <Link to="/dashboard" ><li><a href="#programs">Programs</a></li></Link>
                        <Link to="/dashboard" ><li><a href="#admissions">GuideLines</a></li></Link>
                        <Link to="/dashboard" ><li><a href="#contact">Contact</a></li></Link>

                    </ul>
                </nav>
            </header>


        </>
    )
}
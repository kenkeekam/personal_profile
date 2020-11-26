import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__info">
                <h1>I'm Kenneth Yip</h1>
                <h2>Front End Web Developer</h2>
            </div>

            <div className="home__text">
                <p>Hello, I'm Kenneth Yip. A Front End Web Developer based in London. I love all things tech related.
                   Currently, I have a focus towards coding, I like to work with Firebase, HTML, CSS, JavaScript, and React.js but I am always open to learn new things.</p>
                   <br/>
                <p>Besides coding, I have a technical background in Networking and Information Security. </p>
            <img src="" alt=""/>
            </div>
            
            <div className="home__textTwo">
                <p>Designed & built by <span className="home__textUnderline">Kenneth Yip</span></p>
                <br/>
                <p><span className="home__textUnderline">Look at the source-code</span></p>
            </div>


       
        </div>
    )
}

export default Home

import React from 'react';
import ReactDOM from 'react-dom';
import './dist/index.css'

class Page extends React.Component { 
    render() {
        return <div className="main">
            <div className="navbar"><Navbar /></div>
                <div className="title-box">
            <TheTitle name="Lorenzo Deflorian" subtitle="a creator."/>
        </div></div> 
    }
};

function TheTitle(props) {
    return (
        <div>
            <h1 className="title">{props.name}</h1>
            <h3 className="subtitle">{props.subtitle}</h3>
        </div>
    );
}

function Navbar() {
    const clickables = ["Home", "About", "Stuff"]
    const bar = clickables.map((clickable) => <li className="bar-item">
            <a href="#" id="clickable-text">{clickable}</a>
        </li>
    )
    return (
        <ul>{bar}</ul>
    ) 
}

ReactDOM.render(<Page />, document.getElementById('root'))
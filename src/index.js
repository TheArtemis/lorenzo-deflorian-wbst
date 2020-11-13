import React from 'react';
import ReactDOM from 'react-dom';
import './dist/index.css'

class Page extends React.Component { 
    render() {
        return <div className="title-box">
            <TheTitle name="Lorenzo Deflorian" subtitle="a creator."/>
        </div>
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

ReactDOM.render(<Page />, document.getElementById('root'))
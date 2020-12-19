/* @jsx createElement */
import { createElement, render, Component } from './react.js';

class YourTitle extends Component{
    render () {
        return (
            <p>Title for Class!</p>
        )
    }
}

function Title(props) {
    return (
        <div>
            <h2>TITLE!</h2>
            <YourTitle />
            <p>p tag</p>
        </div>
    );
}

render(<Title />, document.querySelector('#root'))
/* @jsx createElement */
import { createElement, render, Component } from './react.js';

class YourTitle extends Component {
  render() {
    return createElement("p", null, "Title for Class!");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h2", null, "TITLE!"), createElement(YourTitle, null), createElement("p", null, "p tag"));
}

render(createElement(Title, null), document.querySelector('#root'));
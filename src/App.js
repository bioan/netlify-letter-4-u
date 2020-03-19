import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageButton from './components/ImageButton'

function App() {
  const images = ['letter-4-u.png', 'letter-4-u-overlay.png']
  const [opened, setOpened] = useState(false)
  const [image, setImage] = useState(images[0])
  const message = "u r awesome, much hugs"
  const handleClick = () => {
    setOpened(!opened)
    setImage( opened ? images[0] : images[1] )
  }

  return (
    <div className="child">
      <ImageButton image={image} onClick={handleClick}/>
      { opened ? <p className="message">{message}</p> : ''}
    </div>
  );
}

export default App;


// import React, { Component } from "react"
// import logo from "./logo.svg"
// import "./App.css"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <LambdaDemo />
//         </header>
//       </div>
//     )
//   }
// }

// export default App

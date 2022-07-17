import React, { Component } from 'react';
import './App.css';

// list 3-23
// class App extends Component {
//   data = []

//   area = {
//     width: "500px",
//     height: "500px",
//     border: "1px solid blue",
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       list: this.data
//     }
//     this.doAction = this.doAction.bind(this)
//   }

//   doAction(event) {
//     let x = event.pageX
//     let y = event.pageY
//     this.data.push({x: x, y: y})
//     this.setState({
//       list: this.data
//     })
//   }

//   draw(d) {
//     let s = {
//       position: "absolute",
//       left: (d.x - 25) + "px",
//       top: (d.y - 25) + "px",
//       width: "50px",
//       height: "50px",
//       backgroundColor: "#66f3",
//     }
//     return <div style={s}></div>
//   }

//   render() {
//     return <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <p className="subtitle">draw rectangle</p>
//         <div style={this.area} onClick={this.doAction}>
//           {this.data.map((value) => this.draw(value))}
//         </div>
//       </div>
//     </div>
//   }
// }

// list 3-24
class App extends Component{
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ]

  constructor(props) {
    super(props)
    this.state = {
      list: this.data,
    }
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show List.</p>
        <List title="サンプル・リスト" data={this.data} />
      </div>
    </div>
  }
}

class List extends Component {
  number = 1

  render() {
    let data = this.props.data;
    return <div>
      <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {data.map((item, key) => 
            <li>
              <Item number={key + 1} value={item} />
            </li>
          )}
        </ul>
    </div>
  }
}

class Item extends Component {
  itm = {
    fontSize: "16pt",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf",
  }

  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return <p style={this.itm}>
      <span style={this.num}>
        [{this.props.number}]&nbsp;
      </span>
      {this.props.value}
    </p>
  }
}
export default App;

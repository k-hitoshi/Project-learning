import React, { useEffect, useState } from 'react';
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

// // list 3-24
// class App extends Component{
//   data = [
//     "This is list sample.",
//     "これはリストのサンプルです。",
//     "配列をリストに変換します。"
//   ]

//   constructor(props) {
//     super(props)
//     this.state = {
//       list: this.data,
//     }
//   }

//   render() {
//     return <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <p className="subtitle">Show List.</p>
//         <List title="サンプル・リスト" data={this.data} />
//       </div>
//     </div>
//   }
// }

// class List extends Component {
//   number = 1

//   render() {
//     let data = this.props.data;
//     return <div>
//       <p className="h5 text-center">{this.props.title}</p>
//         <ul className="list-group">
//           {data.map((item, key) => 
//             <li>
//               <Item number={key + 1} value={item} />
//             </li>
//           )}
//         </ul>
//     </div>
//   }
// }

// class Item extends Component {
//   itm = {
//     fontSize: "16pt",
//     color: "#00f",
//     textDecoration: "underline",
//     textDecorationColor: "#ddf",
//   }

//   num = {
//     fontWeight: "bold",
//     color: "red"
//   }

//   render() {
//     return <p style={this.itm}>
//       <span style={this.num}>
//         [{this.props.number}]&nbsp;
//       </span>
//       {this.props.value}
//     </p>
//   }
// }
//

// list 3-25
// class App extends Component {
//   // input = ''

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <Message title="Children!">
//             これはコンポーネント内のコンテンツです。
//             マルでテキストを分割し、リストに表示します。
//             改行は必要ありません。
//           </Message>
//         </div>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   li = {
//     fontSize: '14pt',
//     fontWeight: 'bold',
//     color: '#090',
//   }

//   render() {
//     let content = this.props.children
//     let arr = content.split('。')
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++){
//       if (arr[i].trim() != ''){
//         arr2.push(arr[i]);
//       }
//     }

//     let list = arr2.map( (value,key)=>(
//       <li className="list-group-item" style={this.li} key={key}>
//         {key + 1}. {value} .
//       </li>)
//     )
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <ol className="list-group">{list}</ol>
//       </div>
//     )
//   }
// }

// リスト　3-26
// class App extends Component {
//   input = ''

//   constructor(props) {
//     super(props)
//     this.state = {
//       title: 'input form',
//       message: 'type your name.'
//     }

//     this.doChange = this.doChange.bind(this)
//     this.doSubmit = this.doSubmit.bind(this)
//   }

//   doChange(e) {
//     this.input = e.target.value;
//   }

//   doSubmit(e) {
//     this.setState({
//       title: 'send form',
//       message: 'Hello, ' + this.input + '!!'
//     })
//     e.preventDefault()
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <h4>{this.state.title}</h4>
//           <p className="card h5 p-3">{this.state.message}</p>
//           <div className="alert alert-primary mt-3">
//             <form onSubmit={this.doSubmit}>
//               <div className="form-group">
//                 <label>Message:</label>
//                 {/* リスト 3-27,3-28CSSS */}
//                 {/* <input type="text" className="form-control" onChange={this.doChange} /> */}
//                 {/* min="最小数値" max="最大数値" minlength="最小文字数" maxlength="最大文字数" */}
//                 <input type="text" className="form-control" onChange={this.doChange} required pattern="[A-Za-z _,.]+" />
//               </div>
//               <input type="submit" className="btn btn-primary" value="Click" />
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// リスト3-29
// class App extends Component {
//   input = ''

//   constructor(props) {
//     super(props)
//     this.state = {
//       title: 'input form',
//       message: 'type your name.',
//       max: 10, //★
//     }
//     this.doCheck = this.doCheck.bind(this)
//   }

//   doCheck(e) {
//     alert(
//       e.target.value + 'は長すぎます。（最大' + this.state.max + '文字）'
//     )
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <h4>{this.state.title}</h4>
//           <Message maxlength={this.state.max} onCheck={this.doCheck} />
//         </div>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   li = {
//     fontSize: '14pt',
//     fontWeight: 'bold',
//     color: '#090',
//   }

//   constructor(props) {
//     super(props)
//     this.doChange = this.doChange.bind(this)
//   }

//   doChange(e) {
//     if (e.target.value.length > this.props.maxlength) {
//       this.props.onCheck(e)
//       e.target.value = e.target.value.substr(0, this.props.maxlength)
//     }
//   }

//   render() {
//     return (
//       <div className="form-group">
//         <label>input:</label>
//         <input type="text" className="form-control" onChange={this.doChange} />
//       </div>
//     )
//   }
// }

// リスト3-30

// let data = {
//   title: 'React-Context',
//   message: 'this is sample message'
// }

// const SampleContext = React.createContext(data)
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <Title />
//           <Message />
//         </div>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextType = SampleContext

//   render() {
//     return (
//       <div className="card p-2 my-3">
//         <h2>{this.context.title}</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext

//   render() {
//     return (
//       <div className="alert alert-primary">
//         <p>{this.context.message}</p>
//       </div>
//     )
//   }
// }

// リスト3-31
// let data = {
//   title: 'React-Context',
//   message: 'this is sample message.',
// }

// const SampleContext = React.createContext(data)

// class App extends Component {
//   newdata = {
//     title: '新しいタイトル',
//     message: 'これは新しいメッセージです。',
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <Title />
//           <Message />
//           <hr />
//           <SampleContext.Provider value={this.newdata}>
//             <Title />
//             <Message />
//           </SampleContext.Provider>
//           <hr />
//           <Title />
//           <Message />
//         </div>
//       </div>
//     )
//   }
// }
// class Title extends Component {
//   static contextType = SampleContext

//   render() {
//     return (
//       <div className="card p-2 my-3">
//         <h2>{this.context.title}</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext

//   render() {
//     return (
//       <div className="alert alert-primary">
//         <p>{this.context.message}</p>
//       </div>
//     )
//   }
// }

// リスト 3-32
// let theme = {
//   light: {
//     styles: {
//       backgroundColor: '#f0f9ff',
//       color: '#00f',
//     },
//     head: 'bg-primary text-white display-4 mb-4',
//     alert: 'alert alert-primary my-3',
//     text: 'text-primary m-3',
//     foot: 'py-4',
//   },
//   dark: {
//     styles: {
//       backgroundColor: '#336',
//       color: '#eef',
//     },
//     head: 'bg-secondary text-white display-4 mb-4',
//     alert: 'alert alert-dark my-3',
//     text: 'text-light m-3',
//     foot: 'py-4'
//   }
// }

// const ThemeContext = React.createContext(theme.dark) //★

// class App extends Component {
//   static contextType = ThemeContext

//   render() {
//     return (
//       <div style={this.context.styles}>
//         <h1 className={this.context.head}>React</h1>
//         <div className='container'>
//           <Title value='Context page' />
//           <Message value='This is Context sample.' />
//           <Message value='※これはテーマのサンプルです。' />
//           <div className={this.context.foot}></div>
//         </div>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextType = ThemeContext

//   render() {
//     return (
//       <div className={this.context.alert}>
//         <h2 style={this.context.styles}>{this.props.value}</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = ThemeContext

//   render() {
//     return (
//       <div style={this.context.styles}>
//         <p className={this.context.text}>{this.props.value}</p>
//       </div>
//     )
//   }
// }
// リスト4-1
// function App() {
//   const [message] = useState("Welcome to Hooks!")

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h5">{message}.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// リスト4-2
// function App() {
//   const [count, setCount] = useState(0)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h1 mb-3">click: {count} times!</p>
//             <button className="btn btn-primary" onClick={clickFunc}>
//               Click me
//             </button>
//         </div>
//       </div>
//     </div>
//   )
// }
// リスト4-3
// function App() {
//   const [count, setCount] = useState(0)
//   const [flag, setFlag] = useState(false)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }
//   const changeFlag = (e) => {
//     setFlag(e.target.checked) //★
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         {flag ?
//         <div className="alert alert-primary text-center">
//           <p className="h5 mb-3">click: {count} times!</p>
//           <div>
//             <button className="btn btn-primary" onClick={clickFunc}>
//               Click me
//             </button>
//           </div>
//         </div>
//         :
//         <div className="card p-3 border-primary text-center">
//           <p className="h5 mb-3 text-left text-primary">
//             click: {count} times!
//           </p>
//           <div>
//             <button className="btn btnprimary" onClick={clickFunc}>
//               Click me
//             </button>
//           </div>
//         </div>
//         }
//         <div className="form-group h4 text-center pt-3">
//           <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
//           <label className="form-check-label" htmlfor="ckeck1">change form style</label>
//         </div>
//       </div>
//     </div>
//   )
// }

// リスト4-4
// function AllertMessage() {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       This is Alert message!
//     </div>
//   )
// }

// function CardMessage() {
//   return (
//     <div className="card p-3 h5 border-primary text-center">
//       This is Card message!
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AllertMessage />
//         <CardMessage />
//       </div>
//     </div>
//   )
// }

// リスト4-5
// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       {props.message}
//     </div>
//   )
// }

// function CardMessage(props) {
//   return (
//     <div className="card p-3 border-primary text-center">
//       {props.message}
//     </div>
//   )
// }

// function App () {
//   const [msg] = useState("This is sample message!")

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage message={msg} />
//         <CardMessage message={msg} />
//       </div>
//     </div>
//   )
// }

// リスト4-6
// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       {props.message}
//     </div>
//   )
// }

// function CardMessage(props) {
//   return (
//     <div className="card p-3 h5 border-primary text-center">
//       {props.message}
//     </div>
//   )
// }

// function App() {
//   const [msg, setMsg] =useState("This is sample message!")

//   const doAction = () => {
//     let res = window.prompt('type you name!')
//     setMsg('Hello, ' + res + '!!')
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage message={msg} />
//         <CardMessage message={msg} />
//         <div className="text-center">
//           <button className="btn btn-primary" onClick={doAction}>
//             Click me!
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// リスト4-7
// function AlertMessage(props) {
//   const data = ["Hello!", "Welcome...", "Good-bye?"]

//   const actionAlert = () => {
//     const re = data[Math.floor(Math.random() * data.length)]
//     props.setAlert('message: ' + re + '.')
//   }

//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{props.alert}</h5>
//       <button className="btn btn-primary" onClick={actionAlert}>
//         Click me!
//       </button>
//     </div>
//   )
// }

// function CardMessage(props) {
//   const [count, setCount] = useState(0)

//   const actionCard = () => {
//     setCount(count + 1)
//     props.setCard('card counter: ' + count + ' count.')
//   }

//   return (
//     <div className="card p-3 border-dark text-center">
//       <h5>{props.card}</h5>
//       <button className="btn btn-secondary" onClick={actionCard}>
//         Click me!
//       </button>
//     </div>
//   )
// }

// function App() {
//   const [alert, setAlert] = useState('This is alert message!')
//   const [card, setCard] = useState('This is card message!')

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage alert={alert} setAlert={setAlert} />
//         <CardMessage card={card} setCard={setCard} />
//         <hr />
//         <div className="text-right">
//           <p>{alert}</p>
//           <p>{card}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// リスト4-8
// function AlertMessage(props) {
//   const data = props.data
//   const msg = JSON.stringify(data)

//   return (
//     <div className="alert alert-primary h5 test-primary">
//       <h5>{msg}</h5>
//       <hr />
//       <table className="table h6">
//         <tbody>
//           <tr><th>Name</th><td>{data.name}</td></tr>
//           <tr><th>Mail</th><td>{data.mail}</td></tr>
//           <tr><th>Age</th><td>{data.age}</td></tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// function App() {
//   const [name, setName] = useState('')
//   const [mail, setMeil] = useState('')
//   const [age, setAge] = useState(0)
//   const [form, setForm] = useState({
//     name: 'no name',
//     mail: 'no mail',
//     age: 0,
//   })

//   const doChangeName = (e) => {
//     setName(e.target.value)
//   }

//   const doChangeMail = (e) => {
//     setMeil(e.target.value)
//   }

//   const doChangeAge = (e) => {
//     setAge(e.target.value)
//   }

//   const doSubmit = (e) => {
//     setForm({
//       name: name,
//       mail: mail,
//       age: age
//     })
//     e.preventDefault()
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage data={form} setData={setForm} />
//         <form onSubmit={doSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input type="text" className="form-control" onChange={doChangeName} />
//           </div>
//           <div className="form-group">
//             <label>Mail:</label>
//             <input type="text" className="form-control" onChange={doChangeMail} />
//           </div>
//           <div className="form-group">
//             <label>Age:</label>
//             <input type="number" className="form-control" onChange={doChangeAge} />
//           </div>
//           <input type="submit" className="btn btn-primary" value="Click"/>
//         </form>
//       </div>
//     </div>
//   )
// }

// リスト4-9
// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{props.msg}</h5>
//     </div>
//   )
// }

// function App() {
//   const [val, setVal] = useState(0)
//   const [msg, setMsg] = useState('set a number...')

//   const doChange = (e) => {
//     setVal(e.target.value)
//   }

//   useEffect(() => {
//     let total = 0
//     for (let i = 0; i <= val; i++) {
//       total += i
//     }
//     setMsg('total: ' + total + '.')
//   })

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage msg={msg} />
//         <div className="form-group">
//           <label>Input:</label>
//           <input className="form-control" type="number" onChange={doChange} />
//         </div>
//       </div>
//     </div>
//   )
// }

// リスト4-10
// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//         <h5>{props.msg}</h5>
//     </div>
//   )
// }

// function App() {
//   const [val, setVal] = useState(1000)
//   const [tax1, setTax1] = useState(0)
//   const [tax2, setTax2] = useState(0)
//   const [msg, setMsg] = useState(<p>set a price...</p>)

//   const doChange = (e) => {
//     setVal(e.target.value)
//   }

//   const doAction = () => {
//     let res = (
//       <div>
//         <p>軽減税率(8%) : {tax1} 円</p>
//         <p>軽減税率(10%) : {tax2} 円</p>
//       </div>
//     )
//     setMsg(res)
//   }

//   useEffect(() => {
//     setTax1(Math.floor(val * 1.08))
//   })

//   useEffect(() => {
//     setTax2(Math.floor(val * 1.11))
//   })

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div calssName="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage msg={msg} />
//         <div className="form-group">
//           <label>Input:</label>
//           <input className="form-control" type="number" onChange={doChange}/>
//         </div>
//         <button className="btn btn-primary" onClick={doAction}>
//           Calc
//         </button>
//       </div>
//     </div>
//   )

// }

// リスト 4-11
function AlertMessage(props) {
  return (
    <div className="alert alert-primary h5 text-primary">
        <h5>{props.msg}</h5>
    </div>
  )
}

function App() {
  const [val, setVal] = useState(1000)
  const [tax1, setTax1] = useState(0)
  const [tax2, setTax2] = useState(0)
  const [msg, setMsg] = useState(<p>set a price...</p>)

  const doChange = (e) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    let res = (
      <div>
        <p>軽減税率(8%) : {tax1} 円</p>
        <p>軽減税率(10%) : {tax2} 円</p>
      </div>
    )
    setMsg(res)}, [tax1, tax2]
  )

  useEffect(() => {
    setTax1(Math.floor(val * 1.08))
  })

  useEffect(() => {
    setTax2(Math.floor(val * 1.11))
  })

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div calssName="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input className="form-control" type="number" onChange={doChange}/>
        </div>
      </div>
    </div>
  )
}

export default App;


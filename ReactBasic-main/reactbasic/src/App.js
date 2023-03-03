/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let user = 'yejin1';
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState(0);
  let [like, setLike] = useState(0);
  // 변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[ ]
  let [title, setTitle] = useState(["DW아카데미 503호", "DW아카데미 501호", "DW아카데미 203호"])
  let [bgColor, setbgColor] = useState('white');

  let changeBg = () => {
    let newBg = bgColor == 'white'? 'red' : 'white';
    setbgColor(newBg)
  }

  //  let bebe = title.map(function(){
  //   return (<div className="list">
  //   <h4>{title}</h4>
  //   <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
  //   <p>안녕하세요. 저는 이예진입니다.</p>
  // </div>)
  // })

  console.log(bebe)

  return ( 
    <div className="App" style={{backgroundColor : bgColor}}>
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button onClick={()=>{
          setCount(count + 1)
        }}>Click Me</button>
      </div>

      {/* <div className="list">
        <h4>{title[0]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div> */}

       

      {
        title.map(function(a , i){
          return (
            <div className="list">
            <h4>{a}</h4>
            <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
            <p>안녕하세요. 저는 이예진입니다.</p>
          </div>
    
          )
        })
      }
       

      {/* <div className="list">
        <h4>{title[1]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div> */}

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = "리액트 너무 재밌어요!";
        console.log(title == copy)
        setTitle(copy)
      }}>글제목 변경</button>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort()
        setTitle(copy);
      }}>글 정렬</button>

      <button onClick={changeBg}>배경색 변경</button>

    </div>
  );
}

export default App;
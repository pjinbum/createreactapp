/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// const [chogi , hammsu] = useState(0);

// function Button1(){
//   <button onClick={()=>{
//     document.querySelector('.App').style.background = 'blue'
//    }} style={{width : '200px' , height : '50px' , background : 'yellow'}}>background</button>
// }

function Divdiv(current, index) {
  // let divdiv = document.querySelector('.divdiv') ;
  // divdiv.parentElement

  return (
    <div
      className="divdiv"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "yellowgreen",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Box{}</h1>
    </div>
  );
}

function Asidea() {
  return (
    <button
      style={{ width: "100px", height: "30px", backgroundColor: "yellow" }}
    >
      click click
    </button>
  );
}

function App() {
  const [chogi1, setbeyeal] = useState([
    "red",
    "green",
    "gray",
    "skyblue",
    "#fff",
  ]);
  const [chogi, sethamsu] = useState("");
  const [chogi11, sethamsu1] = useState("white");

  let changeBg = () => {
    let newBg = chogi11 == "white" ? "red" : "white";
    sethamsu1(newBg);
  };

  //map함수가 array의 갯수만큼 return을 반복한다. 여러줄일때는 소괄호 쳐주고 한줄이면 소괄호 생략
  //매개변수 (파라미터)를 만들어 주면 함수 파라미터가 array자료 안에 있는 데이터가 된다
  [1, 2, 3].map(function (num) {
    return console.log(num);
  });

  let num = [1, 2, 3, 4, 5];
  let newNum = num.map((e) => e + 1);
  console.log(newNum);

  newNum = num.map((e) => e * 3);
  console.log(newNum);

  return (
    <div
      className="App"
      style={{ background: chogi11, width: "100vw", height: "100vh" }}
    >
      <div>
        <button
          onClick={() => {
            document.querySelector(".App").style.background = "blue";
          }}
          style={{ width: "200px", height: "50px", background: "yellow" }}
        >
          background
        </button>

        <button
          onClick={() => {
            document.querySelector(".App").style.background = "black";
          }}
          style={{ width: "200px", height: "50px", background: "pink" }}
        >
          click black
        </button>

        <button
          onClick={() => {
            sethamsu("red");
          }}
          style={{ width: "200px", height: "50px", background: "yellowgreen" }}
        >
          click chogi
        </button>

        <button
          onClick={changeBg}
          style={{ width: "200px", height: "50px", background: "skyblue" }}
        >
          click
        </button>

        {num.map(function (a, i) {
          return (
            <button
              onClick={changeBg}
              style={{ width: "200px", height: "50px", background: "skyblue" }}
              key={i}
            >
              click {a}
            </button>
          );
        })}

        <Divdiv></Divdiv>
        <Divdiv></Divdiv>
        <Divdiv></Divdiv>
        <Divdiv></Divdiv>
        <Divdiv></Divdiv>

        <Asidea></Asidea>
        <Asidea></Asidea>
        <Asidea></Asidea>
        <Asidea></Asidea>
      </div>
    </div>
  );
}

export default App;

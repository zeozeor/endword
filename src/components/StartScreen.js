import { useState } from "react";
import logo from "../assets/game-1.png";

const StartScreen = ({onStart}) => {
  const [input,setInput] = useState('');  //input부모 컴포넌트로 보내기 위해 변수 설정
  const handleSubmit = (event)=>{
    event.preventDefault();
    if( input.trim() ){
      onStart(input.trim());
    } else {
      alert("시작 단어를 입력하세요");
    }
  }
  return (
    <div className="start-screen">
      <h1>WORD CHAIN GAME<br/>with.BOT</h1>
      <div className="logo">
        <img src={logo} alt="제품 이미지"/>
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <h2>시작 단어를 입력하세요</h2>

        {/* input의 정보를 부모 컴포넌트로 보내기 */}
        <input 
        type="text"
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        />
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
};

export default StartScreen;
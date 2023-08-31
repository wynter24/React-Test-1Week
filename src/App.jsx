import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, content: "react를 배워봅시다." },
  ]);

  // input에 입력되는 데이트
  const [content, setContent] = useState("");

  // input에 보여짐
  const InputContent = (event) => {
    setContent(event.target.value);
  };

  // 추가하기 버튼 클릭 시 content 추가
  const AddContent = () => {
    const newContent = {
      id: toDo[toDo.length-1].id +1,
      content,
    };
    setToDo([...toDo, newContent]);
    setContent("");
    // console.log(newContent.id);
  };

  return (
    <div className="App">
      <div>
        <div className='add-input'>
          <input type='text' value={content} onChange={InputContent} />
          <button onClick={AddContent}>추가하기</button>
        </div>
        <h1>Todo List</h1>
      </div>
      <div className='content-box-layout'>
        {toDo.map(function (item) {
          return (
            <div key={item.id} className="contenet-box">
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import "./Todos.css";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

const Todos = () => {
  const [toggelBtn, setToggleBtn] = useState(true);
  let [inputValue, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  let [selectEdidId, setNewEdit] = useState(null);
  let [editId, setEdit] = useState(null);

  const updateValue = () => {
    if (inputValue && toggelBtn ===false) {
        if (selectEdidId === editId){
          datas[editId] = inputValue;
          setNewEdit(null);
          setEdit(null);
          setToggleBtn(true)
          setInput("")
          datas.map(() => {
            return [...datas, inputValue];
          });
        }
    }
    else if(inputValue){
      setDatas([inputValue, ...datas]);
      setInput("");
     
    }
    else {
      alert(" please write your todo");
    }
  };

  const HandelDel = (currentIndex) => {
    const newDatas = datas.filter((value, index) => {
      return currentIndex !== index;
    });
    setDatas(newDatas);
  };

  const HandelEdit = (value, index) => {
    setInput(value);
    setEdit(index);
    setToggleBtn(false);
    setNewEdit(index);
  };
  const clearTodo=()=>{
    setDatas([])

  }
  return (
    <>
      <div className="TodosContainer">
        <div className="Todos__Inputfield">
          <input
            type="text"
            placeholder="What's your plans 🤞🤞"
            value={inputValue}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={updateValue}>
            {toggelBtn ? (
              <AiOutlinePlus size={27} color="rgb(6, 52, 67)" />
            ) : (
              <AiOutlineEdit size={27} color="rgb(6, 52, 67)" />
            )}
          </button>
        </div>
        <div className="todos__list">
          <div className="todos">
            {datas.map((value, index) => {
              return (
                <p key={index}>
                  {value}
                  <span className="icons">
                    <AiOutlineEdit
                      size={25}
                      className="editIcon IconControl"
                      onClick={() => {
                        HandelEdit(value, index);
                      }}
                    />
                    <AiOutlineDelete
                      size={25}
                      className="delIcon IconControl"
                      onClick={() => {
                        HandelDel(index);
                      }}
                    />
                  </span>
                </p>
              );
            })}
            <div className="clearBtn">
              <button onClick={clearTodo}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todos;

import { useState } from 'react';
import "./Todolist.css"

function Todolist() {
    const [activity, setActivity] = useState("");
    const [listDB, setListDB] = useState([]);
    function addActivity() {
        if (activity === '') { }
        else {
            setListDB((listDB) => {
                const updatedList = [...listDB, activity]
                console.log(updatedList)
                setActivity('');
                return updatedList;
            })
        }
    }

    function removeActivity(i) {
        const updatedListDB = listDB.filter((list, id) => {
            return i !== id;
        })
        setListDB(updatedListDB);
    }

    function removeAll() {
        setListDB([]);
    }

    return (
        <div className="App">
            <div className='todo-app'>
                <header className='header'>
                    <h2>To Do List 📓</h2>
                    <div className='user'>
                        <input
                            type='text'
                            id='userInput'
                            placeholder='Add Activity'
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)} />
                        <button id='add-btn' onClick={addActivity}>Add</button>
                    </div>
                </header>
                <hr />
                {listDB !== [] && listDB.map((data, i) => { //i = key
                    return (
                        <>
                            <div className='listDB' key={i}>
                                <span className='span'>•</span>
                                <input type='text' value={data} id='inputList' disabled />
                                <button className='delete-btn btn' onClick={() => removeActivity(i)}>ｘ</button>
                            </div>
                        </>
                    )
                })}
                {listDB.length >= 1 && <button id='remove-btn' onClick={removeAll}>Remove all</button>}
            </div>
        </div>
    );
}

export default Todolist;

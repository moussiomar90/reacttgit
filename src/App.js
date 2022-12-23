
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const [tache, setTache] = useState('')

  const { todoItem } = useSelector(state => state.toDoListReducer);

  const Dispatch = useDispatch()
console.log(todoItem)
  return (<>
    <div class="container">
      <div id="newtask">
        <center><h2>Redux ToDolist from git 2.1547</h2> </center>
        <input type="text" placeholder="Tache" value={tache} onChange={(e) => setTache(e.target.value)} />
        <button onClick={(e) => tache.length > 0 && Dispatch({ type: 'ajouter', payload: tache }) }><i class="fa-solid fa-plus"></i></button>
      </div>

      <div id="tasks">

        {todoItem.map((item, key) => {
          return (<div class="task">
            {!item.completed ? <i class="fa-regular fa-circle-dot"  onClick={(e) => Dispatch({ type: 'completed', payload: key })} ></i> : <i class="fa-solid fa-circle-dot"></i> }
            
                       <span id="taskname">
              { item.completed ? <s>{item.tache}</s> : item.tache}
            </span>
            <button class="delete" onClick={(e) => Dispatch({ type: 'delete', payload: key })}>
              <i class="far fa-trash-alt"></i>
            </button>
           
          </div>)


        })}

      </div>
 
    </div>
 
    <div className='copyright'> © Developed by DDDD Moussi 0.4</div>
    <div className='copyright'> © Developed by MLKK Moussi 0.5MONKA</div>
    </>
          );
}

export default App;

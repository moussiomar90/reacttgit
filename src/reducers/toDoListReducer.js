
export const toDoListReducer = (state = { todoItem: [{tache:'',completed:false}] }, action) => {

    switch (action.type) {
        case 'ajouter':
            let completed = false;
            localStorage.setItem("todolis", JSON.stringify([...state.todoItem, {tache:action.payload, completed}] ))
            return (
                { ...state, todoItem: [...state.todoItem, {tache:action.payload, completed}] }
            );


        case 'delete':

            const newdotolist = state.todoItem.filter((item, key) => key != action.payload)
            localStorage.setItem("todolis", JSON.stringify(newdotolist))

            return { ...state, todoItem: newdotolist }
        case 'completed':

          
            const newdotolist2 = state.todoItem.map((item, key) => key == action.payload  ? {...item,completed : true }: item )
            localStorage.setItem("todolis", JSON.stringify(newdotolist2))
            return { ...state, todoItem: newdotolist2 }
 
        default:
            return state;

    }
};
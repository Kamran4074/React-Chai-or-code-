import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"Hello"}]
}

// function sayHello(){
//     console.log('Hello')
// }
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        // addTodo:sayHello,  we can write function out side and give reference here too 

        addTodo:(state,action)=>{
            const todo={id:nanoid(),
                text:action.payload.text} 
                state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            const{id,text}=action.payload;// extract values from payload
            const todo=state.todos.find((todo)=>todo.id===id)
            if(todo){
                todo.text=text
            }
        }
    }
})

export const{addTodo,removeTodo,updateTodo}= todoSlice.actions
export default todoSlice.reducer
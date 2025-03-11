import { create } from "zustand";

const UseExamStore=create((set)=>({
    examCode:null,
    updateExamCode:(code)=>
    {
        set({examCode:code})
    },
    addMessage:(message)=>set(state=>({messages:[...state.messages,message]}))
}))

export default UseExamStore;
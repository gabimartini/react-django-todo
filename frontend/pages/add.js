import { useState } from "react"
import axios from "axios"
import Form from "@/components/form"
import { env } from "@/next.config"
import classes from "./add.module.css"

const AddTask = () => {
const [newTitle, setNewTitle] = useState("")
const [newContent, setNewContent] = useState("")
const [isCompleted, setIsCompleted] = useState(false)
const [isSuccess, setIsSucess] = useState("")

    const onAdd = () => {
        axios.post(`${env.NEXT_PUBLIC_API_ENDPOINT}/add/`, {
            title: newTitle,
            content: newContent,
            complete: isCompleted
        }).then((res) => (
        setIsSucess(res.statusText),
        setNewTitle(""), setNewContent(""), setIsCompleted(false)))
        .catch(e => console.log({e}))
    }

    return(
        <>
        <Form setNewContent={setNewContent} setNewTitle={setNewTitle} setIsCompleted={setIsCompleted} newTitle={newTitle} newContent={newContent} isCompleted={isCompleted}/>
        <button onClick={() => onAdd()} role='button'>Add Task</button>
        <p className={isSuccess !==  "" ? classes.success : classes.null}>{isSuccess}</p>
        </>
    )
}

export default AddTask
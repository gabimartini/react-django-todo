import classes from "./edit.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { env } from "@/next.config"
import Form from "./form"

const Edit = ({id, setEdit}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [complete, setComplete] = useState(false)
    useEffect(() => {
        axios.get(`${env.NEXT_PUBLIC_API_ENDPOINT}/tasks/${id}`)
        .then(res => (
            setTitle(res.data.title), 
            setContent(res.data.content), 
            setComplete(res.data.complete)
            ))
        .catch(e => console.log(e))
    }, [])

    const onUpdate = () => {
        axios.put(`${env.NEXT_PUBLIC_API_ENDPOINT}/update/${id}`, {
            title: title,
            content: content,
            complete: complete
        }).then(res => 
            setTimeout(() => {
                setEdit(false)
            }, [300])
            ).catch(e => console.log(e))
    }
    return (
        <div className={classes.mainModal}>
            <div className={classes.modal} >
            <button onClick={() => setEdit(false)}>X</button>
            <h1>Edit your task</h1>
            <Form setNewTitle={setTitle} newTitle={title} setNewContent={setContent} newContent={content} setIsCompleted={setComplete} isCompleted={complete}/>
            <button onClick={() => onUpdate()} style={{position: "flex"}}>Update</button>
        </div>
        </div>
    )
}

export default Edit
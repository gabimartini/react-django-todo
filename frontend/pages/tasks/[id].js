import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"
import classes from "./[id].module.css"
import { env } from "@/next.config"

const TaskDetail = () => {
    const [task, setTask] = useState({})
    const router = useRouter()

    useEffect(() => {
        const {id} = router.query
        axios.get(`${env.NEXT_PUBLIC_API_ENDPOINT}/tasks/${id}`).then(res => setTask(res.data)).catch(e => console.log(e))
    })
    return (
        <div className={classes.detail_group}>
        <h1 className={classes.title}>{task.title}</h1>
        <div className={classes.wrap_result}>
            <p className={classes.item}>Task description: <span>{task.content}</span></p>
            <p className={classes.item}>Completed: <input type="checkbox" checked={task.complete} className={classes.checked}/></p>
        </div>
        <div className={classes.buttons}>
        <button>Edit</button>
        <button>Delete</button>
        </div>
        </div>
        
    )
}

export default TaskDetail
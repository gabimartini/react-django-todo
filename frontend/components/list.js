import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import classes from "./list.module.css"
import Edit from "./edit";
import { env } from "@/next.config";

const List = () => {
    const [initTask, setInitTask] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState("")
    const [deletedMessage, setDeletedMessage] = useState("")

    useEffect(() => {
        axios({
            method: "GET",
            url: `${env.NEXT_PUBLIC_API_ENDPOINT}/tasks/`
        })
        .then(res => (console.log({res}),setInitTask(res.data)))
        .catch((error) => {
        console.log({error})
        });
    },[!isEdit])

    const onDelete = (todo_id) => {
        axios.delete(`${env.NEXT_PUBLIC_API_ENDPOINT}/delete/${todo_id}`)
        .then(res => {
            console.log({res})
            if(res.status === 204)
                setDeletedMessage("Success Deleted");
           const filterTask = initTask.filter(el => el.id !== todo_id)
           setInitTask(filterTask);
        })
        .catch((err) => console.log(err))
    }

    const onEdit = (id) => {
        setIsEdit(!isEdit)
        setId(id)
    }
    return (
        <div className={classes.group_list}>
            <h1 className={classes.title}>This is all your tasks: </h1>
            {
                isEdit && (
                    <Edit id={id} setEdit={setIsEdit}/>
                )
            }
            <table  className={classes.list_item}>
                <thead>
                    <tr>
                    <th className={classes.title_task}>Title</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
        {
            initTask?.map((el, i) => {
                return (
                    
                <tr key={el.id}>
                    <td className={classes.title_task}><Link href={`/tasks/${el.id}`}>{el.title}</Link></td>
                    <td><button onClick={() => onEdit(el.id)} >Edit task</button></td>
                    <td><button onClick={() => onDelete(el.id)} >Delete task</button></td>
                </tr>
                
                )
            }
        )}
            </tbody>

        </table>
        <p className={deletedMessage !== "" ? classes.deleted : classes.null}>{deletedMessage}</p>
    </div>
    )

}

export default List;
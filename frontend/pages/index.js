import Link from "next/link"
import classes from "./index.module.css"

export default function Home() {
  return (
    <div className={classes.home_group}>
      <h1>Home page</h1>
      <div className={classes.button_group}>
        <Link href="/tasks">See all tasks</Link>
        <Link href="/add">Add new task</Link>
      </div>
    </div>
  )
}

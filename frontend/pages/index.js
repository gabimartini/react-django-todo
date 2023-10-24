import Link from "next/link"
import classes from "./home.module.css"

export default function Home() {
  return (
    <div className={classes.home_group}>
      <h1 cy-data='title'>Home page</h1>
      <div className={classes.button_group}>
        <Link href="/tasks" role="link">See all tasks</Link>
        <Link href="/add" role="link">Add new task</Link>
      </div>
    </div>
  )
}

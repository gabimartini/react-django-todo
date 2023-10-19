import Link from "next/link"
import classes from "./navbar.module.css"
const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.li_group}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/tasks">Tasks</Link></li>
                <li><Link href="/add">New Task</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
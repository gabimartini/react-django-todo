import Link from "next/link"
import classes from "./navbar.module.css"
const NavBar = () => {
    return (
        <nav className={classes.nav} role='nav'>
            <ul className={classes.li_group} cy-data='nav-bar'>
                <li><Link href="/" role='link'>Home</Link></li>
                <li><Link href="/tasks" role='link'>Tasks</Link></li>
                <li><Link href="/add" role='link' cy-data='add-task'>New Task</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
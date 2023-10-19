import NavBar from "../navbar";
import classes from "./index.module.css"

const Layout = (props) => {
    return (
        <>
        <NavBar />
        <main className={classes.main}>{props.children}</main>
        </>
    )
}

export default Layout;
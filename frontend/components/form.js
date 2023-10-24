import classes from "./form.module.css"

const Form = ({setNewContent, setNewTitle, setIsCompleted, newTitle, newContent, isCompleted}) => {
    return (
        <form className={classes.add_form}>
                <div className={classes.inputGroup}>
                    <label  htmlFor="title">Title</label>
                    <input id="title" onChange={(e) => setNewTitle(e.target.value)} value={newTitle}/>
                    </div>
                    <div className={classes.inputGroup}>
                    <label  htmlFor="content">Content</label>
                    <textarea id="content"  rows="5" onChange={(e) => setNewContent(e.target.value)} value={newContent}/>
                    </div>
                    <div className={classes.inputGroup}>
                    <label  htmlFor="complete">Complete</label>
                    <input className={classes.checkbox} id="complete" type="checkbox" rows="5" onChange={(e) => setIsCompleted(e.target.checked)} checked={isCompleted}/>
                </div>
            
        </form>
    )
}

export default Form;
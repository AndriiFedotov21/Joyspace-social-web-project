import './Dialogs.module.css'
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? classes.active : classes.dialog}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <Dialog name='Danny' id='1'/>
                <Dialog name='Andrii' id='2'/>
                <Dialog name='Kirill' id='3'/>
                <Dialog name='Ivan' id='4'/>
                <Dialog name='Who?' id='5'/>
                <Dialog name='Sveta' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='What?'/>
                <Message message='Who are you?'/>
                <Message message='How is it going?'/>
                <Message message='Where is it?'/>
                <Message message='You ok??'/>

            </div>

        </div>
    )
}

export default Dialogs
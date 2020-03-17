import React from "react";
import aa from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Massages from "./Massage/Massages";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    // console.log(props);
    let storeGetState = props.storeGetState.dialogsPage;
    let DialogsItemElem = storeGetState.dialogsData.map((i, k) => <DialogItem key={k} name={i.name} id={i.id} avatarSrc={i.avatarSrc}/>);
    let MessageElem = storeGetState.messagesData.map((i, k) => <Massages key={k} text={i.massage} id={i.id}/>);
    let newMassageBody = storeGetState.newMessageText;

    let onClickMassage = () => {
        props.onClickMassage();  //40 - React
    };
    let onChangeMassage = (e) => {
        props.updateNewMassageBodyCreator(e.target.value);
    };

       if(props.isAuthLogin === false){
           return <Redirect to ={'/login'}/>
       }

    return (
        <div>
            <div className={aa.dialogs}>
                <div className={aa.dialogsItems}>
                    {DialogsItemElem}
                </div>
                <div className={aa.massages}>
                    <div>{MessageElem}</div>
                    <div>
                        <div>
                            <textarea placeholder={'enter your massage'} cols="30" rows="10" value={newMassageBody}
                                      onChange={onChangeMassage}/>
                        </div>
                        <div>
                            <button onClick={onClickMassage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
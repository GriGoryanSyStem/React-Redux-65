import React from "react";
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        storeGetState:state,
        isAuthLogin: state.auth.isAuth//68 Redirect
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageBodyCreator:(e_Target_Value_Text)=>{
            dispatch(updateNewMassageBodyCreator(e_Target_Value_Text))
        },
        onClickMassage:()=>{
            dispatch(sendMassageCreator())
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);   // 45 - React

export default DialogsContainer;
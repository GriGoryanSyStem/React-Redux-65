import {sendMassageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        storeGetState:state,
        isAuthLogin: state.authReducer.isAuth //68 Redirect
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onClickMassage:(newMassageBody)=>{
                        dispatch(sendMassageCreator(newMassageBody))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
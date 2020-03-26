// import React from "react";
// import aa from './ProfileInfo.module.css'
//
// class ProfileStatus extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             editMode: false,
//             status: this.props.status
//         }
//     }
//     activateChangeValue = () => {
//         this.setState({
//             editMode: !this.state.editMode
//         });
//         this.props.updateStatusThunk(this.state.status)
//     };
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     };
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             });
//         }
//     }
//     render() {
//         return (
//             <div className={aa.statusContainerDiv}>
//                 {!this.state.editMode &&
//                 <div>
//                     <span
//                         onDoubleClick={this.activateChangeValue}>{this.props.status || "------ No Status ------"}
//                     </span>
//                 </div>
//                 }
//                 {this.state.editMode &&
//                 <div>
//                     <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true}
//                            onBlur={this.activateChangeValue}/>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
//
// export default ProfileStatus;
//

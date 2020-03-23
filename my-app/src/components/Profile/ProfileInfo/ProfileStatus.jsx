import React from "react";
import aa from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        editMode: true
    }
}
    changeValue = () =>{
     this.setState({
         editMode:!this.state.editMode
     })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.changeValue}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.props.status} autoFocus={true} onBlur = {this.changeValue}/>
                </div>
                }
            </div>

        )
    }
}

export default ProfileStatus;


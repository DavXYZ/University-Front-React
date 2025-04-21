import { connect } from "react-redux"
import Profile from "./Profile"

const ProfileContainer = (props) => {
    return (
        <Profile {...props}/>
    )
}

export default connect (null,null)(ProfileContainer);
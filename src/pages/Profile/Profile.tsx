import React from 'react'
import {useSelector} from "react-redux";
const Profile = () => {

    // @ts-ignore
    const id = useSelector(state => state.auth.id)
    console.log(id)

    return <h1>this is ur profile, id #: {id}</h1>
}

export default Profile;
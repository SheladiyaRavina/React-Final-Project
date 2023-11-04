import React from 'react'

const UserAuth = () => {
    let checkUserLogin = JSON.parse(localStorage.getItem('checkUserLogin'))
    return checkUserLogin;
}

export default UserAuth;

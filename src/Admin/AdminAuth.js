import React from 'react'

const AdminAuth = () => {
    let adminLogin = JSON.parse(localStorage.getItem('adminLogin'))
    return adminLogin;
}

export default AdminAuth

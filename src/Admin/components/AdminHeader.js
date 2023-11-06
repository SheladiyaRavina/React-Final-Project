import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const AdminHeader = () => {

    const navigate = useNavigate();
    let loginAdmin = JSON.parse(localStorage.getItem('adminLogin'));

    const logOut = () => {
        localStorage.clear('adminLogin');
        navigate('/');
    }

    return (
        <div>
            <div>
                <header id="header" className="header fixed-top d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo d-flex align-items-center">
                            <img src="../img/logo.png" alt />
                            <span className="d-none d-lg-block">NiceAdmin</span>
                        </div>
                        <i className="bi bi-list toggle-sidebar-btn" />
                    </div>{/* End Logo */}
                    <div className="search-bar">
                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                            <button type="submit" title="Search"><i className="bi bi-search" /></button>
                        </form>
                    </div>{/* End Search Bar */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">
                            <li className="nav-item d-block d-lg-none">
                                <div className="nav-link nav-icon search-bar-toggle ">
                                    <i className="bi bi-search" />
                                </div>
                            </li>{/* End Search Icon*/}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link nav-icon" data-bs-toggle="dropdown">
                                    <i className="bi bi-bell" />
                                    <span className="badge bg-primary badge-number">4</span>
                                </NavLink>{/* End Notification Icon */}
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                    <li className="dropdown-header">
                                        You have 4 new notifications
                                        <NavLink ><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-exclamation-circle text-warning" />
                                        <div>
                                            <h4>Lorem Ipsum</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>30 min. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-x-circle text-danger" />
                                        <div>
                                            <h4>Atque rerum nesciunt</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>1 hr. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-check-circle text-success" />
                                        <div>
                                            <h4>Sit rerum fuga</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>2 hrs. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-info-circle text-primary" />
                                        <div>
                                            <h4>Dicta reprehenderit</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="dropdown-footer">
                                        <NavLink>Show all notifications</NavLink>
                                    </li>
                                </ul>{/* End Notification Dropdown Items */}
                            </li>{/* End Notification Nav */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link nav-icon" data-bs-toggle="dropdown">
                                    <i className="bi bi-chat-left-text" />
                                    <span className="badge bg-success badge-number">3</span>
                                </NavLink>{/* End Messages Icon */}
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                    <li className="dropdown-header">
                                        You have 3 new messages
                                        <NavLink ><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="message-item">
                                        <NavLink>
                                            <img src="../img/messages-1.jpg" alt className="rounded-circle" />
                                            <div>
                                                <h4>Maria Hudson</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>4 hrs. ago</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="message-item">
                                        <NavLink>
                                            <img src="../img/messages-2.jpg" alt className="rounded-circle" />
                                            <div>
                                                <h4>Anna Nelson</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>6 hrs. ago</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="message-item">
                                        <NavLink>
                                            <img src="../img/messages-3.jpg" alt className="rounded-circle" />
                                            <div>
                                                <h4>David Muldon</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>8 hrs. ago</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="dropdown-footer">
                                        <NavLink>Show all messages</NavLink>
                                    </li>
                                </ul>{/* End Messages Dropdown Items */}
                            </li>{/* End Messages Nav */}
                            <li className="nav-item dropdown pe-3">
                                <NavLink className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                    <img src="../img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                                </NavLink>{/* End Profile Iamge Icon */}
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" >
                                            <i className="bi bi-person" />
                                            <span>My Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center">
                                            <i className="bi bi-gear" />
                                            <span>Account Settings</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" >
                                            <i className="bi bi-question-circle" />
                                            <span>Need Help?</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" >
                                            <i className="bi bi-box-arrow-right" />
                                            <span>Sign Out</span>
                                        </NavLink>
                                    </li>
                                </ul>{/* End Profile Dropdown Items */}
                            </li>{/* End Profile Nav */}
                        </ul>
                    </nav>{/* End Icons Navigation */}
                </header>{/* End Header */}
                {/* ======= Sidebar ======= */}
                <NavLink id="sidebar" className="sidebar">
                    <ul className="sidebar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link " to={`/admin/dashbord`}>
                                <i className="bi bi-grid" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>{/* End Dashboard Nav */}

                        <li className="nav-heading">Pages</li>
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" to={`/admin/brand`} >
                                <i className="bi bi-person" />
                                <span>Brands</span>
                            </NavLink>
                        </li>{/* End Profile Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" to={`/admin/slider`} >
                                <i className="bi bi-person" />
                                <span>Sliders</span>
                            </NavLink>
                        </li>{/* End Profile Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" to={`/admin/product`}>
                                <i className="bi bi-question-circle" />
                                <span>Product</span>
                            </NavLink>
                        </li>{/* End F.A.Q Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" to={`/admin/user`} >
                                <i className="bi bi-person" />
                                <span>Users</span>
                            </NavLink>
                        </li>{/* End Profile Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" >
                                <i className="bi bi-envelope" />
                                <span>Contact</span>
                            </NavLink>
                        </li>{/* End Contact Page Nav */}

                        {
                            !loginAdmin ? (
                                <div>
                                    <li className="nav-item">
                                        <NavLink className="nav-link collapsed" to={`/register`}>
                                            <i className="bi bi-card-list" />
                                            <span>Register</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link collapsed" to={`/login`} >
                                            <i className="bi bi-box-arrow-in-right" />
                                            <span>Login</span>
                                        </NavLink>
                                    </li>
                                </div>
                            ) : (
                                <li className="nav-item">
                                    <NavLink className="nav-link collapsed"  >
                                        <i className="bi bi-box-arrow-in-right" />
                                        <span onClick={() => logOut()}>Logout</span>
                                    </NavLink>
                                </li>
                            )
                        }

                    </ul>
                </NavLink>{/* End Sidebar*/}
            </div>
        </div>

    )
}

export default AdminHeader;

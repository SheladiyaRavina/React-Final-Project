import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {

    const navigate = useNavigate();
    let loginUser = JSON.parse(localStorage.getItem('checkUserLogin'));

    const logOut = () => {
        localStorage.clear('checkUserLogin');
        navigate('/');
    }

    return (
        <div className="main" style={{ fontFamily: 'poppins' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="col-xl-2 p-3">
                        <img src="https://watchbox-sfcc.imgix.net/revamp/WatchBox_Wordmark_RGB_Black.svg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex col-xl-5 ps-5">

                        </form>
                        <div className="col-xl-7 justify-content-end">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link fw-bold me-2" aria-current="page" style={{ color: '#012970' }}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/user/product" style={{ color: '#012970' }} className="nav-link fw-bold me-2" aria-current="page">Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/user/login" className="nav-link fw-bold me-2" style={{ color: '#012970' }} aria-current="page">Login</NavLink>
                                </li>
                                {
                                    !loginUser ?
                                        (
                                            <li className="nav-item">
                                                <NavLink to="/user/register" className="nav-link fw-bold me-2" style={{ color: '#012970' }} aria-current="page">Register</NavLink>
                                            </li>

                                        ) : (
                                            <>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link fw-bold me-2" style={{ color: '#012970' }} onClick={() => logOut()} aria-current="page">Logout</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/user/cart" style={{ color: '#012970' }} className="nav-link fw-bold me-2" aria-current="page">Cart</NavLink>
                                                </li>
                                            </>
                                        )
                                }



                                <li className="nav-item">
                                    <NavLink to="/user/profile" style={{ color: '#012970' }} className="nav-link fw-bold me-2" aria-current="page">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="m-0 w-100" style={{ height: '3px', backgroundColor: 'black' }} />
        </div>
    )

}

export default Header;
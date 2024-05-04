import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavbarDB = () => {

    const [showNotification, setshowNotification] = useState(false)
    const [showSettings, setshowSettings] = useState(false)
    const [showUser, setshowUser] = useState(false)


    const showNoti = () => {
        setshowNotification(!showNotification);
        setshowSettings(false);
        setshowUser(false);
    }

    const showNoti2 = () => {
        setshowSettings(!showSettings);
        setshowNotification(false);
        setshowUser(false);
    }

    const showNoti3 = () => {
        setshowUser(!showUser);
        setshowSettings(false);
        setshowNotification(false);
    }

    const handleNavDisplayClick = () => {
        // setting value to false to determine when navbar and footer to be hidden
        localStorage.setItem("activeLink", "home");
        handleButtonClick();
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.js-item-menu')) {
                setshowNotification(false);
                setshowSettings(false);
                setshowUser(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <>
            {/* <!-- HEADER DESKTOP--> */}
            <header className="header-desktop3 d-none d-lg-block">
                <div className="section__content section__content--p35">
                    <div className="header3-wrap">
                        <div className="header__logo">
                            <Link to="/" onClick={() => handleNavDisplayClick()}>Swirl Marketing</Link>
                        </div>
                        <div className="header__navbar">
                            <ul className="list-unstyled">
                                <li className="has-sub">
                                    <Link to="/dashboard">
                                        <i className="ri-dashboard-fill"></i>Dashboard
                                        <span className="bot-line"></span>
                                    </Link>
                                    <ul className="header3-sub-list list-unstyled">
                                        <li>
                                            <Link to="/dashboard-add-new-services">Add New Service</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard-services-list">Services List</Link>
                                        </li>

                                    </ul>
                                </li>

                                <li className="has-sub">
                                    <Link to="/dashboard-services">
                                        <i className="ri-macbook-fill"></i>Services
                                        <span className="bot-line"></span>
                                    </Link>
                                </li>

                                <li className="has-sub">
                                    <a href="#">
                                        <i className="ri-user-6-fill"></i>
                                        <span className="bot-line"></span>User</a>
                                    <ul className="header3-sub-list list-unstyled">
                                        <li>
                                            <Link to="/dashboard-login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard-register">Register</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard-forgot-password">Forget Password</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="header__tool">
                            <div className={`header-button-item has-noti js-item-menu ${showNotification ? 'show-dropdown' : ''}`}>
                                <i className="mdi mdi-bell" style={{ color: "white" }} onClick={() => showNoti()}></i>
                                <div className="notifi-dropdown notifi-dropdown--no-bor js-dropdown">
                                    <div className="notifi__title">
                                        <p>You have 3 Notifications</p>
                                    </div>
                                    <div className="notifi__item">
                                        <div className="bg-c1 img-cir img-40">
                                            <i className="mdi mdi-email-open"></i>
                                        </div>
                                        <div className="content">
                                            <p>You got a email notification</p>
                                            <span className="date">April 12, 2018 06:50</span>
                                        </div>
                                    </div>
                                    <div className="notifi__item">
                                        <div className="bg-c2 img-cir img-40">
                                            <i className="mdi mdi-account-box"></i>
                                        </div>
                                        <div className="content">
                                            <p>Your account has been blocked</p>
                                            <span className="date">April 12, 2018 06:50</span>
                                        </div>
                                    </div>
                                    <div className="notifi__item">
                                        <div className="bg-c3 img-cir img-40">
                                            <i className="mdi mdi-file-document"></i>
                                        </div>
                                        <div className="content">
                                            <p>You got a new file</p>
                                            <span className="date">April 12, 2018 06:50</span>
                                        </div>
                                    </div>
                                    <div className="notifi__footer">
                                        <a href="#">All notifications</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`header-button-item js-item-menu ${showSettings ? 'show-dropdown' : ''}`}>
                                <i className="mdi mdi-cog" style={{ color: "white" }} onClick={() => showNoti2()}></i>
                                <div className="setting-dropdown js-dropdown">
                                    <div className="account-dropdown__body">
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-account"></i>Account</a>
                                        </div>
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-cog"></i>Setting</a>
                                        </div>
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-cash"></i>Billing</a>
                                        </div>
                                    </div>
                                    <div className="account-dropdown__body">
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-earth"></i>Language</a>
                                        </div>
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-pin"></i>Location</a>
                                        </div>
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-email"></i>Email</a>
                                        </div>
                                        <div className="account-dropdown__item">
                                            <a href="#">
                                                <i className="mdi mdi-bell"></i>Notifications</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-wrap">
                                <div className={`account-item account-item--style2 clearfix js-item-menu ${showUser ? 'show-dropdown' : ''}`}>
                                    <div className="image">
                                        <img src="src/assets/images/icon/haider.JPG" alt="Haider Ashraf" />
                                    </div>
                                    <div className="content">
                                        <a className="js-acc-btn" href="#" onClick={() => showNoti3()}>Haider Ashraf <i className="mdi mdi-chevron-down" style={{ color: "white" }}></i></a>
                                    </div>
                                    <div className="account-dropdown js-dropdown">
                                        <div className="info clearfix">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="src/assets/images/icon/haider.JPG" alt="Haider" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h5 className="name">
                                                    <a href="#">Haider Ashraf</a>
                                                </h5>
                                                <span className="email">haidersomroo@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__body">
                                            <div className="account-dropdown__item">
                                                <a href="#">
                                                    <i className="mdi mdi-account"></i>Account</a>
                                            </div>
                                            <div className="account-dropdown__item">
                                                <a href="#">
                                                    <i className="mdi mdi-cog"></i>Setting</a>
                                            </div>
                                            <div className="account-dropdown__item">
                                                <a href="#">
                                                    <i className="mdi mdi-cash"></i>Billing</a>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__footer">
                                            <a href="#">
                                                <i className="mdi mdi-power"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- END HEADER DESKTOP--> */}

        </ >
    )
}

export default NavbarDB
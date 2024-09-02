import React from 'react'
import '../../css/nav/navbar.css'
import '../../css/icon.css'
import NavbarDropdown from './dropdown/NavbarDropdown'
import { FaUser, FaCog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import NavbarElement from './NavbarElement';
import { FaCircleQuestion } from 'react-icons/fa6';

function Navbar() {

    const userMenuItems = [
        { icon: <FaUser />, label: 'Profile', href: '#profile' },
        { icon: <FaCog />, label: 'Settings', href: '#settings' },
        { icon: <FaEnvelope />, label: 'Messages', href: '#messages' },
        { icon: <FaSignOutAlt />, label: 'Logout', href: '#logout' },
    ];

    const signoutIcon = <FaSignOutAlt />;
    const circleQuestionIcon = <FaCircleQuestion />;
    
  return (
    <nav id="navbar-main" className="navbar is-fixed-top">
        <div className="navbar-brand">
            <a className="navbar-item mobile-aside-button">
                <span className="icon">
                    <i className="mdi mdi-forwardburger mdi-24px"></i>
                </span>
            </a>
            <div className="navbar-item">
                <div className="control">
                    <input placeholder="Search everywhere..." className="input"/>
                </div>
            </div>
        </div>
        <div className="navbar-brand is-right">
            <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
                <span className="icon">
                    <i className="mdi mdi-dots-vertical mdi-24px"></i>
                </span>
            </a>
        </div>
        <div className="navbar-menu" id="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item dropdown">
                    <NavbarDropdown items={userMenuItems} btnName="John Doe" hasLastDivider={true}/>
                </div>
                <div className="navbar-item dropdown has-divider has-user-avatar">
                    <NavbarDropdown items={userMenuItems} 
                                btnName="John Doe" 
                                hasUserAvatar={true}
                                isUserName={true}
                                hasLastDivider={true}/>
                </div>

                <NavbarElement icon={circleQuestionIcon} elementName="About"/>
                <NavbarElement icon={signoutIcon} elementName="Logout"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import '../../css/aside/asidebar.css'
import { Link } from 'react-router-dom'

const Asidebar = () => {
    return (
        <aside className="aside is-placed-left is-expanded">
            <div className="aside-tools">
                <div>
                Admin <b className="font-black">One</b>
                </div>
            </div>
            <div className="menu is-menu-main">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                <li className="--set-active-index-html">
                    <Link to="/dashboard">
                    <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                    <span className="menu-item-label">Dashboard</span>
                    </Link>
                </li>
                </ul>
                <p className="menu-label">Examples</p>
                <ul className="menu-list">
                <li className="--set-active-tables-html">
                    <Link to="/add-task">
                    <span className="icon"><i className="mdi mdi-table"></i></span>
                    <span className="menu-item-label">Add Task</span>
                    </Link>
                </li>
                <li className="--set-active-tables-html">
                    <Link to="tables.html">
                    <span className="icon"><i className="mdi mdi-table"></i></span>
                    <span className="menu-item-label">Tables</span>
                    </Link>
                </li>
                <li className="--set-active-forms-html">
                    <Link to="forms.html">
                    <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
                    <span className="menu-item-label">Forms</span>
                    </Link>
                </li>
                <li className="--set-active-profile-html">
                    <Link to="profile.html">
                    <span className="icon"><i className="mdi mdi-account-circle"></i></span>
                    <span className="menu-item-label">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="login.html">
                    <span className="icon"><i className="mdi mdi-lock"></i></span>
                    <span className="menu-item-label">Login</span>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown">
                    <span className="icon"><i className="mdi mdi-view-list"></i></span>
                    <span className="menu-item-label">Submenus</span>
                    <span className="icon"><i className="mdi mdi-plus"></i></span>
                    </Link>
                    <ul>
                    <li>
                        <Link to="#void">
                        <span>Sub-item One</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#void">
                        <span>Sub-item Two</span>
                        </Link>
                    </li>
                    </ul>
                </li>
                </ul>
                <p className="menu-label">About</p>
                <ul className="menu-list">
                <li>
                    <Link to="https://justboil.me/tailwind-admin-templates/free-dashboard/" className="has-icon">
                    <span className="icon"><i className="mdi mdi-help-circle"></i></span>
                    <span className="menu-item-label">About</span>
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/justboil/admin-one-tailwind" className="has-icon">
                    <span className="icon"><i className="mdi mdi-github-circle"></i></span>
                    <span className="menu-item-label">GitHub</span>
                    </Link>
                </li>
                </ul>
            </div>
        </aside>
    )
}

export default Asidebar
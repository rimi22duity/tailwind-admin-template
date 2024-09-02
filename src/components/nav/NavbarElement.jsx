import React from "react"

const NavbarElement = ({icon, elementName}) => {
    return (
        <a href="https://justboil.me/tailwind-admin-templates/free-dashboard/" 
        className="flex items-center space-x-2 text-black hover:text-gray-600 px-4 py-2">
            <span>{elementName}</span>
            <span className="icon">
                {React.cloneElement(icon)}
            </span>
        </a>
    )
}

export default NavbarElement
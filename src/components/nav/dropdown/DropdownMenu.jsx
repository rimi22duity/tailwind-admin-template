import React from "react"

const DropdownMenu = ({menuItems, hasLastDivider=false}) => {
    return (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10 top-full left-0">
            {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                    <a href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">

                    {React.cloneElement(item.icon, { className: "mr-2" })}
                    {item.label}
                    </a>

                    {hasLastDivider === true && index === menuItems.length - 2 && <hr className="navbar-divider"/>}
                </React.Fragment>
            ))}      
        </div>
    )
}

export default DropdownMenu
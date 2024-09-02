import React, { useState } from "react"
import NavbarDropdownBtn from "./NavbarDropdownBtn"
import DropdownMenu from "./DropdownMenu"

const NavbarDropdown = ({items, btnName, hasLastDivider, hasUserAvatar, isUserName}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
          <NavbarDropdownBtn btnName={btnName} 
                             onClickFunction={() => setOpen(open => !open)}
                             hasUserAvatar={hasUserAvatar}
                             isUserName={isUserName} />
        
          { open && <DropdownMenu menuItems={items} hasLastDivider={hasLastDivider}/>}
        </>
    )
}

export default NavbarDropdown
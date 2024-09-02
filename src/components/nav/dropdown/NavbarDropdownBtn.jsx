import React from 'react'
import { BsChevronDown } from "react-icons/bs"

const NavbarDropdownBtn = ({btnName, onClickFunction, hasUserAvatar, isUserName}) => (
  (
    <a className="flex items-center space-x-2 px-4 py-2" onClick={onClickFunction}>
        {hasUserAvatar && <div className="user-avatar">
                            <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full"/>
                          </div>}

        {isUserName ? <div className="is-user-name"><span className='text-black hover:text-gray-600'>{btnName}</span></div>
                    : <span className='text-black hover:text-gray-600'>{btnName}</span>}
        
        <span className="icon">
            <BsChevronDown />
        </span>
    </a>
  )
)

export default NavbarDropdownBtn
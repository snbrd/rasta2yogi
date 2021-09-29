import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io'

export default function MenuItem({ menu, showSidebar }) {
  const [children, setChildren] = useState(false)
  const showChildren = (isParent) => {
    if (isParent) setChildren(!children)
    else showSidebar(false)
  }
  return (
    <li key={menu.label}>
      <Link to={menu.path} className="flex flex-row space-x-4 items-center" onClick={() => showChildren(menu.parent)}>
        {menu.icon}
        <span className="flex-grow-1 pr-8">{menu.label}</span>
        {menu.parent && children && <IoIcons.IoIosArrowDropdown />}
        {menu.parent && !children && <IoIcons.IoIosArrowDropright />}
      </Link>
      {menu.child.length > 0 && children && (
        <ul className="flex flex-col items-start text-sm">
          {menu.child.map((i, id) => {
            return (
              <li key={i.label}>
                {i.path.includes('http') ? (
                  <a href={i.path} onClick={showSidebar}>
                    <span className="ml-10">{i.label}</span>
                  </a>
                ) : (
                  <Link to={i.path} onClick={showSidebar}>
                    <span className="ml-10">{i.label}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

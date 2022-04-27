import React, { useState } from 'react'
import {
  controlImg,
  logoImg,
  Chart_fill,
  Chat,
  User,
  Calendar,
  Search,
  Chart,
  Folder,
  Setting,
} from './assets/images/index'

export default function App() {
  const [open, setOpen] = useState(true)

  const menu = [
    { title: 'Dashboard', src: Chart_fill },
    { title: 'Inbox', src: Chat },
    { title: 'Accounts', src: User, gap: true },
    { title: 'Schedule ', src: Calendar },
    { title: 'Search', src: Search },
    { title: 'Analytics', src: Chart },
    { title: 'Files ', src: Folder, gap: true },
    { title: 'Setting', src: Setting },
  ]

  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? 'w-72' : 'w-20'
          } duration-300 p-5 pt-7 bg-dark-purple h-screen relative`}
        >
          <img
            src={controlImg}
            alt=""
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
              !open && 'rotate-180'
            }`}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logoImg}
              alt=""
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1
              className={`text-white origin-left text-xl font-medium duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Dashboard
            </h1>
          </div>
          <ul className="pt-6">
            {menu.map((item, index) => (
              <li
                key={index}
                className={`text-sm text-gray-300 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  item.gap ? 'mt-9' : ''
                } ${index === 0 && 'bg-light-white'}`}
              >
                <img src={item.src} alt="" />
                <span className={`${!open && 'hidden'} duration-200`}>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Home Pages</h1>
        </div>
      </div>
    </>
  )
}

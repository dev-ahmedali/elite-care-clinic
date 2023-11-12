import { useEffect, useRef } from "react";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import {Menu} from "lucide-react"

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headingRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickeyHeader = () => {
    window.addEventListener('scroll' , () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headingRef.current.classList.add('sticky__header')
      } else {
        headingRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickeyHeader()
    return window.removeEventListener('scroll', handleStickeyHeader)
  })

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu")
  }
  return (
    <header className="header flex items-center" ref={headingRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h3>Elite-Care</h3>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((items, index) => (
                <li key={items.id}>
                  <NavLink
                    to={items.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-indigo-500 text-sm leading-7 font-[600]"
                        : "text-zinc-500 text-sm leading-7 font-[500] hover:text-indigo-400"
                    }>
                    {items.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className=" w-full rounded-full"
                    alt="User profile"
                  />
                </figure>
              </Link>
            </div>
            <Link to='/login'>
              <button className="bg-indigo-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
               <Menu className="w-6 h-6 cursor-pointer"/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

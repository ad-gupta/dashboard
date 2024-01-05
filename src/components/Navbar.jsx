import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../data/avatar1.jpg";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStateContext } from "../contexts/context";
import {Cart, Chat, UserProfile, Notification} from ".";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, setScreenSize, screenSize, currentColor} =
    useStateContext();

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        icon={<FiMenu />}
        color={currentColor}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          icon={<IoCartOutline />}
          color={currentColor}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          dotColor="#03C9D7" 
          icon={<CiChat1 />}
          color={currentColor}
        />
        <NavButton
          title="Notifications"
          dotColor="rgb(254, 201, 15)" 
          customFunc={() => handleClick("notification")}
          icon={<IoMdNotificationsOutline />}
          color={currentColor}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="user-profile" className="rounded-full w-8 h-8"/>
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Akshay
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked?.cart && <Cart />}
        {isClicked?.chat && <Chat />}
        {isClicked?.notification && <Notification />}
        {isClicked?.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;

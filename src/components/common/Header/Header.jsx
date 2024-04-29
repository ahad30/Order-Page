import React from "react";
import { RiSearchLine } from "react-icons/ri";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,

} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);


    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#59C6D2" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
           to="/" className="flex items-center text-[#150B2BB3]">
          Home
        </NavLink>
        </Typography>

        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#59C6D2": "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/updateProfile" className="flex items-center text-[#150B2BB3]">
          Shop
        </NavLink>
        </Typography>

        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#59C6D2": "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/price" className="flex items-center text-[#150B2BB3]">
          About
        </NavLink>
        </Typography>

  
     
      
      </ul>
    );
   
    return (
      <div className="max-h-[768px]  lg:max-w-7xl mx-auto">
        <Navbar className="sticky top-0 z-10  py-2 lg:px-8 lg:py-5 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center">
              <Typography
                as="a"
                className="mr-7 cursor-pointer py-1.5 font-bold"
              >
                <NavLink to="/">Order</NavLink>
              </Typography>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="mr-2 hidden lg:block">{navList}</div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded px-4 py-2 pl-10 focus:outline-none w-full sm:w-auto"
              />
              <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 pointer-events-none">
                <RiSearchLine size={20} color="#555" />
              </div>
            </div>
          </div>
          <MobileNav open={openNav} className={`flex justify-center`}>
            {navList}
          </MobileNav>
        </Navbar>
      </div>
    );
};

export default Header;
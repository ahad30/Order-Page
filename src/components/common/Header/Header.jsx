import React from "react";
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
                <NavLink to="/">
               Order
                </NavLink>
              </Typography>           
            </div>

            <div className="flex items-center gap-4 ">
              <div className="mr-2 hidden lg:block">{navList}</div>   
     
            </div>

            <div className="flex items-center gap-2">
            <div>
            <Link to="/login">  <Button className={`bg-[#59C6D2]`}>Log in</Button></Link>
            </div>
            <div className="gap-4  hidden lg:block">
            <Link to="/register">  <Button className={`bg-[#23BE0A]`}>Register</Button></Link>
            </div>
        
            <IconButton
                variant="text"
                className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            <div>
            </div>
            </div>
          </div>
          <MobileNav open={openNav} className={`flex justify-center`}>{navList}</MobileNav>
        </Navbar>
      </div>
    );
};

export default Header;
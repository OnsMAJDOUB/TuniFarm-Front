// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons v2

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-green-600 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="text-white text-2xl font-bold">
//               TuniFarm
//             </Link>
//           </div>

         
//           <div className="hidden md:flex space-x-6">
//             <Link
//               to="/about"
//               className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               About
//             </Link>
//             <Link
//               to="/shop"
//               className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Shop
//             </Link>
//             <Link
//               to="/contact"
//               className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/login"
//               className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Register
//             </Link>
//           </div>

       
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
//             >
//               {isOpen ? (
//                 <XMarkIcon className="h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

   
//       {isOpen && (
//         <div className="md:hidden bg-green-500">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link
//               to="/about"
//               className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </Link>
//             <Link
//               to="/shop"
//               className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Shop
//             </Link>
//             <Link
//               to="/contact"
//               className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/login"
//               className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import "../components/NavBar.css";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/Actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  XMarkIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <header className="backdrop-blur-sm bg-green-500/30 hover:backdrop-blur-xl transition duration-300 fixed w-full z-40">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
           <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
               TuniFarm
            </Link>
         </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
          

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-100"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-green-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-green-600 group-hover:text-green-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-green-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-green-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-green-900 hover:bg-green-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-green-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/" className="text-sm font-semibold leading-6 text-white">
            Home
          </Link>
          <Link
            to="/shop"
            className="text-sm font-semibold leading-6 text-white"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-white"
          >
            About us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          {isAuth ? (
            <>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-green-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition"
                >
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <a
                      onClick={() => dispatch(logout(navigate))}
                      className="block px-4 py-2 text-sm cursor-pointer text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/register"
                className="rounded-md ml-4 px-4 py-2 text-sm font-semibold leading-6 text-white bg-green-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">TuniFarm</span>
              <img
                alt="TuniFarm"
                src="your_logo_url_here"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            <Disclosure as="div">
              <DisclosureButton className="text-base font-semibold text-green-600">
                Home
              </DisclosureButton>
              <DisclosurePanel className="pl-6 pt-1 text-base text-gray-900">
                Home Page
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div">
              <DisclosureButton className="text-base font-semibold text-green-600">
                Shop
              </DisclosureButton>
              <DisclosurePanel className="pl-6 pt-1 text-base text-gray-900">
                Shop Page
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div">
              <DisclosureButton className="text-base font-semibold text-green-600">
                Contact
              </DisclosureButton>
              <DisclosurePanel className="pl-6 pt-1 text-base text-gray-900">
                Contact Us Page
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div">
              <DisclosureButton className="text-base font-semibold text-green-600">
                About
              </DisclosureButton>
              <DisclosurePanel className="pl-6 pt-1 text-base text-gray-900">
                About Us Page
              </DisclosurePanel>
            </Disclosure>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}




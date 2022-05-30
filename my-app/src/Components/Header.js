/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  const solutions = [
    {
      name: "Home",
      to: "/",
      // icon: AiOutlineHome,
    },
    {
      name: "About us",
      to: "/about",
      // icon: ChartBarIcon,
    },
    {
      name: "Find Realtor",
      to: "find-realtor",
      // icon: ChartBarIcon,
    },
    {
      name: "Services",
      to: "/",
      // icon: ChartBarIcon,
    },
    {
      name: "Contact",
      to: "/",
      // icon: ChartBarIcon,
    },
  ];
  const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
  ];
  const resources = [
    {
      name: "Help Center",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: SupportIcon,
    },
    {
      name: "Guides",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: BookmarkAltIcon,
    },
    {
      name: "Events",
      description:
        "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: CalendarIcon,
    },
    {
      name: "Security",
      description: "Understand how we take your privacy seriously.",
      href: "#",
      icon: ShieldCheckIcon,
    },
  ];
  const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {/* <div className="bg-[#1E4077] text-white flex justify-around font-normal py-3">
        <div className="flex justify-between space-x-2">
          <label className="">in the news:</label>
          <p className="font-thin">
            This is where Great Agents connect with serious buyers{" "}
          </p>
        </div>
        <div className="flex justify-between">
          <a>Call (888) 666-8161</a>
          <a>My Account</a>
        </div>
      </div> */}
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 lg:justify-start md:space-x-10">
            <div className="flex justify-start md:h-full lg:w-0 lg:flex-1">
              <a href="#">
                {/* <span className="sr-only">Workflow</span> */}
                <img className="md:h-16 w-auto h-12" src={logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:hidden lg:flex space-x-10 items-center"
            >
              <a
                href="#"
                className="text-base font-medium text-black hover:text-gray-900"
              >
                <Link to="/">Home</Link>
              </a>
              <a
                href="#"
                className="text-base font-medium text-black hover:text-gray-900"
              >
                <Link to="/about">About us</Link>
              </a>
              <a
                href="#"
                className="text-base font-medium text-black hover:text-gray-900"
              >
                <Link to="/find-realtor">Find Realtor</Link>
              </a>
              <a
                href="#"
                className="text-base font-medium text-black hover:text-gray-900"
              >
                <Link to="/services">Services</Link>
              </a>
              <a
                href="#"
                className="text-base font-medium text-black hover:text-gray-900"
              >
                Contact
              </a>
              <button className="bg-[#E62E2D] text-white px-6 py-2">
                <Link to="/sign-up">Join Us</Link>
              </button>
              <button className="text-[#E62E2D] bg-white pr-3 py-2">
                <Link to="/login">Login</Link>
              </button>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 ">
                  <nav className="grid gap-y-8 bg-white">
                    {solutions.map((item) => (
                      <Link className=" " to={item.to}>
                        <a
                          key={item.name}
                          // href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/* <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          /> */}
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>{" "}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1E4077] "
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-[#1E4077] hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Header;

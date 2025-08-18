'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleSwitch from './toggleSwitch';


const routes = [
    {
        pathName: "Home",
        path: "/"
    },
    {
        pathName: "Products",
        path: "/products"
    },
    {
        pathName: "Services",
        path: "/services"
    },
    {
        pathName: "Categories",
        path: "/categories"
    },
    {
        pathName: "Dashboard",
        path: "/dashboard"
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Logo and desktop menu */}
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-bold text-cyan-500">
                                Logo
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {
                                    routes.map((route) => <Link
                                        key={route.path}
                                        href={route.path}
                                        className={`${pathName === route.path && "bg-gray-900 "} text-white px-3 py-2 rounded-md text-sm font-medium`}
                                    >
                                        {route.pathName}
                                    </Link>)
                                }
                            </div>
                        </div>
                        <div>
                            <ToggleSwitch/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {
                        routes.map((route) => <Link
                            key={route.path}
                            href={route.path}
                            className={`${pathName === route.path && "bg-gray-900 "} text-white px-3 py-2 grid rounded-md text-sm font-medium`}
                        >
                            {route.pathName}
                        </Link>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
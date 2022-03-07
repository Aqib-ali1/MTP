import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Search Product',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text2'
    },

    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text2'
    },

    {
        title: 'Users',
        path: '/Users',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text2'
    },

    {
        title: 'Messages',
        path: '/Messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text2'
    }

]
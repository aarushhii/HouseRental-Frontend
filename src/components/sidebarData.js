import React from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CottageIcon from '@mui/icons-material/Cottage';
import GroupIcon from '@mui/icons-material/Group';
import AddHomeIcon from '@mui/icons-material/AddHome';

export const sidebarData=[
    {
        title:"Dashboard",
        icon:<SpaceDashboardIcon/>,
        link:"/"
    },

    {
        title:"Properties",
        icon:<CottageIcon/>,
        link:"/properties"
    },
    {
        title:"Tenents",
        icon:<GroupIcon/>,
        link:"/tenents"
    },
    {
        title:"Add Property",
        icon:<AddHomeIcon/>,
        link:"/addproperty"
    }
]



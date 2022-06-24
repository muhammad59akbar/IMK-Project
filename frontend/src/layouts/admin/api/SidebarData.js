import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as iOIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';


export const Sidebaritem = [
    {
        tittle: 'Dashboard',
        linkitem : '/mdproadmin/dashboard',
        icon: <AiIcons.AiFillDashboard />,
    },
    {
        tittle: 'Add Category',
        linkitem : '/mdproadmin/AddCategory',
        icon: <AiIcons.AiFillFolderAdd />,
    },
    {
        tittle: 'View Category',
        linkitem : '/mdproadmin/ViewCategory',
        icon: <HiIcons.HiViewBoards />,
    },
    {
        tittle: 'Products',
        linkitem : '#',
        icon: <FaIcons.FaProductHunt />,
        iconClose: <iOIcons.IoIosArrowDropdownCircle />,
        iconOpen: <iOIcons.IoIosArrowDroprightCircle />,

        subMenu: [
            {
                tittle: 'Add Product',
                linkitem: '#',
                icon: <AiIcons.AiFillFolderAdd />,
            },
            {
                tittle: 'View Product',
                linkitem: '#',
                icon: <HiIcons.HiViewBoards />
            }
        ]
    },
    {
        tittle: 'Profile',
        linkitem : '/mdproadmin/Profile',
        icon: <HiIcons.HiViewBoards />,
    },
    
    
]

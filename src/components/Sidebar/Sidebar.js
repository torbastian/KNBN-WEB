import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './Sidebar.styles';

const Sidebar = props => {
    const { backgroundImage = '', 
        sidebarHeader = {
            fullName: '',
            shortName: ''
        }, 
        menuItems = [],
        fonts = {
            header: '',
            menu: ''
        }
    } = props;

    // State
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);
    const [subMenusStates, setSubmenus] = useState({});
    

    // Effect

    // useEffect(() => {what u want to do with the logic}, [Dependency])

    // Update of header state
    useEffect(() => {
        //setTimeout 200 milliseconds from shortname to fullname
        isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName);
    }, [isSidebarOpen, sidebarHeader])

    

    //Update of sidebar state
     useEffect(() => {
         const updateWindowWidth = () => {
             if (window.innerWidth < 1000) setSidebarState(false);
             else setSidebarState(true)
         }
         window.addEventListener('resize', updateWindowWidth);

         return () => window.removeEventListener('resize', updateWindowWidth);
     }, [isSidebarOpen]);

     // Add index of menu items with submenus to state
    useEffect(() => {
        const newSubmenus = {};

        menuItems.forEach((item, index) => {
            // !! meaning = if its 0 it will be false, anything but 0 will be true
            const hasSubmenus = !!item.subMenuItems.length;
            
            if (hasSubmenus) {
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['isSelected'] = null;
            }
        })

        setSubmenus(newSubmenus)
    }, [menuItems]);

    // const states = {
    //     2: {
    //         isOpen: false,
    //         selected: null
    //     }
    // }

    // Checking which menu/index is clicked on
    const handleMenuItemClick = (name, index) => {
        setSelectedMenuItem(name)
        
        //deepcopy 
        //using JSON.stringify to stringify an object, and use JSON.parse to parse your result string into an object
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));
        
        // checks subMenusStates if it have property which in this case is index
        // and checks about sub menu is open or not
        if(subMenusStates.hasOwnProperty(index)){
            subMenusCopy[index]['isOpen']= !subMenusStates[index]['isOpen']
            setSubmenus(subMenusCopy)
        }
        else{
            for ( let item in subMenusStates){
                subMenusCopy[item]['isOpen'] = false;
                subMenusCopy[item][selected] = null;
            }
            setSubmenus(subMenusCopy);
        }

    }

    const handleSubMenuItemClick = (menuItemIdx, subMenuItemIdx) => {
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

        subMenusCopy[menuItemIdx]['selected'] = subMenuItemIdx;
        setSubmenus(subMenusCopy);
    }
    
    const menuItemJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;

        // check if the menu have sub menu or not
        const hasSubMenus = !!item.subMenuItems.length;
        
        //if subMenusState with index exists set it on isOpen
        const isOpen = subMenusStates[index]?.isOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            const isSubmenuItemSelected = subMenusStates[index]?.selected === subMenuItemIndex;
            return (
                <Link to={`${item.to}${subMenuItem.to}`} style={{ textDecoration: 'none' }} key={subMenuItemIndex}>
                <s.SubMenuItem
                    onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
                    selected={isSubmenuItemSelected}
                >{subMenuItem.name}</s.SubMenuItem>
                </Link>
            )
        })

        return(
            <s.ItemContainer key={index}>
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                    <s.MenuItem 
                        font={fonts.menu}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                        isOpen={isOpen}
                    >
                        <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
                        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                        {hasSubMenus && isSidebarOpen &&(
                            <s.DropdownIcon selected={isItemSelected} isOpen={isOpen}/>
                        )}
                    </s.MenuItem>
                </Link>
                <AnimatePresence>
                    {/* Display submenus if hasSubMenus is true and isOpen is true then show this component*/}
                    {hasSubMenus && isOpen && (
                        <motion.nav
                            //starting point of the animation when opening sub menu
                            initial={{ opacity: 0, y: -15 }}
                            //ending point of the animation
                            animate={{ opacity: 1, y: 0 }}
                            transition={{duration: 0.35}}
                            //exit point when closing sub menu
                            exit={{ opacity: 0, x: -30 }}
                        >
                            <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>{subMenusJSX}</s.SubMenuItemContainer>
                        </motion.nav>
                        
                    )}
                </AnimatePresence>
            </s.ItemContainer>
        )
    });


    return (
    <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
        <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemJSX}</s.MenuItemContainer>
        {/* <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
            <s.Toggler />
        </s.TogglerContainer> */}
    </s.SidebarContainer>
    )
}

export default Sidebar
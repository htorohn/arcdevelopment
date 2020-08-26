import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

import MenuTab from './MenuTab'
import DrawerMenu from './DrawerMenu'
import logo from '../../assets/logo.svg'


function ElevationScroll(props) {
    const { children } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

const useStyles = makeStyles(theme => ({
    appbar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em',
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '7em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em'
        }
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px'
    },
    drawerIconContainer: {
        '&:hover': {
            backgroundColor: 'transparent'
        },
        marginLeft: 'auto'
    },
    drawerIcon: {
        height: '50px',
        width: '50px',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            height: '40px',
            width: '40px',
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    }

}))

const tabs = [
    {
        label: 'Home',
        route: '/',
        menu: false
    },
    {
        label: 'Services',
        route: '/services',
        menu: true,
        menuOptions: [
            {
                label: "Services",
                route: '/services'
            },
            {
                label: "Custom Software Development",
                route: '/customsoftware'
            },
            {
                label: "Mobile Apps Development",
                route: '/mobileapps'
            },
            {
                label: "Websites Development",
                route: '/websites'
            }
        ]
    },
    {
        label: 'The Revolution',
        route: '/revolution',
        menu: false
    },
    {
        label: 'About Us',
        route: '/about',
        menu: false
    },
    {
        label: 'Contact Us',
        route: '/contact',
        menu: false,
        // menuOptions: [
        //     {
        //         label: "Otro Menu",
        //         route: '/customsoftware'
        //     }
        // ]
    },
]

const Header = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    const [openDrawer, setOpenDrawer] = useState(false)
    const [value, setValue] = useState(0)
    const handleChange = (e, value) => {
        setValue(value)
    }

    useEffect(() => {
        const index = tabs.findIndex(tab => tab.route === window.location.pathname)
        console.log('Tab: ', value)
        if (index === -1) {
            let menuIndex = false
            tabs.map((tab, index) => {
                if (tab.menu) {
                    const menuOptionIndex = tab.menuOptions.findIndex(option => option.route === window.location.pathname)
                    if (menuOptionIndex !== -1) {
                        menuIndex = index
                        return null
                    } else {
                        menuIndex = false
                    }
                }
                return null
            })
            setValue(menuIndex)

        } else {
            setValue(index)
        }
        console.log("Tab salida: ", value)

    }, [value])

    const tabsMenu = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='secondary'>
                {
                    tabs.map((tab, index) => {
                        if (tab.menu) {
                            return (
                                <MenuTab key={index} tab={tab} index={index} tabSelected={value} setTabSelected={setValue} />
                            )
                        } else {
                            return <Tab key={index} className={classes.tab} component={Link} to={tab.route} label={tab.label} />
                        }
                    })
                }
            </Tabs>
            <Button variant='contained' component={Link} to='/estimate'
                color='secondary' className={classes.button} onClick={() => setValue(false)}>
                Free Estimate
                        </Button>
        </React.Fragment>
    )

    const drawerMenu = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} classes={{ paper: classes.drawer }}
                open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
            >
                <div className={classes.toolbarMargin} />
                <DrawerMenu items={tabs} setOpenDrawer={setOpenDrawer} additionalItems={[{ label: 'Free Estimate', route: '/estimate' }]}
                    tabSelected={value} setTabSelected={setValue} />


            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to='/' className={classes.logoContainer}
                            disableRipple onClick={() => setValue(0)} >
                            <img
                                alt='Company Logo'
                                src={logo}
                                className={classes.logo}
                            />
                        </Button>
                        {matches ? drawerMenu : tabsMenu}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Header
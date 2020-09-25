import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    servicesContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25,
            marginTop: '8em',
        }
    },
    subtitle: {
        marginBottom: '1em'
    },
    specialText: {
        fontFamily: 'Pacifico',
        fontSize: '1.75rem',
        color: theme.palette.common.orange
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
}))

const Services = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const { setValue, setSelectedIndex } = props
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container direction='column'>
            <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em' : '2em' }}>
                <Typography variant='h2' align={ matchesSM ? 'center' : undefined } gutterBottom>
                    Services
                </Typography>
            </Grid>
            {/* iOS/Android Section */}
            <Grid item >
                <Grid container justify={matchesSM ? 'center' : 'flex-end'} className={classes.servicesContainer} style={{ marginTop: matchesSM ? '1em' : '5em' }}>
                    <Grid item style={{ textAlign: matchesSM ? 'center' : undefined, width: matchesSM ? undefined : '35em' }}>
                        <Typography variant='h4'>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrate your web experience or create a standalone app{matchesSM ? ' ' : <br />}with either mobile platform.
                        </Typography>
                        <Button 
                            component={ Link }
                            to='/mobileapps'
                            onClick={() => {setValue(1); setSelectedIndex(2)}}
                            variant='outlined' 
                            className={classes.learnButton}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img className={classes.icon} alt='mobile phone icon' src={mobileAppIcon} width='250em' />
                    </Grid>
                </Grid>
            </Grid>

            {/* Custom Software Section */}
            <Grid item >
                <Grid container justify={matchesSM ? 'center' : undefined} className={classes.servicesContainer}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solutions, from investigation to <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button 
                            component={ Link }
                            to='/customsoftware'
                            onClick={() => {setValue(1); setSelectedIndex(1)}}
                            variant='outlined' 
                            className={classes.learnButton}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt='custom software icon' src={customSoftwareIcon}  />
                    </Grid>
                </Grid>
            </Grid>

            {/* Websites Section */}
            <Grid item >
                <Grid container justify={matchesSM ? 'center' : 'flex-end'} className={classes.servicesContainer} style={{ marginBottom: '10em' }}>
                    <Grid item style={{ textAlign: matchesSM ? 'center' : undefined, width: matchesSM ? undefined : '35em' }}>
                        <Typography variant='h4'>
                            Website Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button 
                            component={ Link }
                            to='/websites'
                            onClick={() => {setValue(1); setSelectedIndex(3)}}
                            variant='outlined' 
                            className={classes.learnButton}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img className={classes.icon} alt='websites icon' src={websitesIcon} width='250em' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Services
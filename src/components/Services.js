import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import CallToAction from './ui/CallToAction'

const useStyles = makeStyles(theme => ({

}))

const Services = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const { setValue, setSelectedIndex } = props
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container>
            Hola Services
        </Grid>
    )
}

export default Services

import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Sagar Chandore</Typography>
                <Typography variant="h5" className={classes.text}>I'm a MERN Stack Engineer based in India. 
                    I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Sagar9081/" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:sagarch9081@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;
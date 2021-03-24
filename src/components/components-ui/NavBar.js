import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge';
import Star from '@material-ui/icons/Star';
import Home from '@material-ui/icons/Home';
import History from '@material-ui/icons/History';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  icon: {
    '&:hover': {
      backgroundColor: '#9FB1B9',
    }
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 4,
    top: 2,
    backgroundColor: 'orange',
    color: 'black'
  },
}))(Badge);


const NavBar = ({ countFavoritesHeroes }) => {
  const classes = useStyles();
  const countFavorites = countFavoritesHeroes()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App Marvel
          </Typography>
          <div>
            <Link to="/home">
              <IconButton
                aria-haspopup="true"
                color="black"
                className={classes.icon}>
                <Home fontSize="large" />
              </IconButton>
            </Link>
            <Link to="/history">
              <IconButton
                aria-haspopup="true"
                color="black"
                className={classes.icon}>              
                  <History fontSize="large" />
              </IconButton>
            </Link>
            <Link to="/favorites">
              <IconButton
                aria-haspopup="true"
                color="black"
                className={classes.icon}>
                <StyledBadge badgeContent={countFavorites} color="secondary">
                  <Star fontSize="large" />
                </StyledBadge>
              </IconButton>
            </Link>          
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
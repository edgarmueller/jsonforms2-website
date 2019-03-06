import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from './Logo';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    minHeight: '5vh',
    margin: 0,
    backgroundColor: '#212121',
    boxShadow: 'none',
    paddingLeft: 10,
    paddingRight: 10
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Header = ({ classes }) => (
  <AppBar className={classes.appBar} position='relative'>
    <Toolbar style={{ padding: 0 }} >
      <Link to='/' className='logo__icon'>
        <Logo width={45} height={30} color='#fff' />
      </Link>
      &nbsp;
              <Link to='/' className='logo__title'>
        <Typography variant="title" color="inherit">
          JSONForms
                </Typography>
      </Link>
      <Button
        component={({ ...props }) => <Link to='/examples/basic' {...props} className='nav__link' />}
      >
        Examples
              </Button>

      <Button
        component={props => <Link to="/docs" {...props} className='nav__link' />}
      >
        Docs
              </Button>
      <Button
        component={props => <Link to="/support" {...props} className={['nav__link', 'navbar__support-link'].join(' ')} />}
      >
        Professional Support
              </Button>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)

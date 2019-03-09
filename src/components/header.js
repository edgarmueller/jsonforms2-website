import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Helmet from 'react-helmet';
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
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <title>JSON Forms</title>
      <script type="text/javascript">{`
      var _iub = _iub || []; _iub.csConfiguration = {
        "lang":"en",
        "siteId":1122783,
        "cookiePolicyId":83048734
      };
      `}
      </script>
      <script type="text/javascript"
        src="https://cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js"
        charSet="UTF-8"
        async>
      </script>
      <script type="text/javascript">{`
      // Single Page Apps for GitHub Pages
      // https://github.com/rafrex/spa-github-pages
      // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
      // ----------------------------------------------------------------------
      // This script checks to see if a redirect is present in the query string
      // and converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
      `}
      </script>
    </Helmet>
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
          component={({ ...props }) => <Link to='/examples/person' {...props} className='nav__link' />}
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
  </>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    background: 'linear-gradient(#2e3ccb, #2835bf)'
  },
  backButton: {
    position: 'absolute'
  },
  title: {
    flexGrow: 1
  },
  searchButton: {
    position: 'absolute',
    right: '12px'
  },
  hidden: {
    display: 'none'
  }
}))

const TITLE_MAP = {
  '/home': '首页',
  '/file': '档案',
  '/discover': '发现',
  '/tool': '工具',
  '/user': '个人'
}


function NavBar(props) {
  const classes = useStyles()
  const pathname = props.history.location.pathname
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} align="center">
            {TITLE_MAP[pathname]}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withRouter(NavBar)
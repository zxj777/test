import React, {
  useState,
  useEffect,
} from 'react'
// import { NavLink } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import HomeOutlined from '@material-ui/icons/HomeOutlined'
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined'
import ExploreOutlined from '@material-ui/icons/ExploreOutlined'
import BuildOutlined from '@material-ui/icons/BuildOutlined'
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined'

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

function NavMenu(props) {
  const pathname = props.history.location.pathname
  const initValue = pathname.slice(1)
  // if (!HAS_MENU_ARR.includes(pathname)) {
  //   initValue = 'home'
  // } else {
  //   initValue = pathname.slice(1)
  // }

  const [value, setValue] = useState(initValue)
  const classes = useStyles()

  function handleChange(e, v) {
    if (v === value) return
    setValue(v)
    props.history.replace(`/${v}`)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="首页" value="home" icon={<HomeOutlined />} />
      <BottomNavigationAction label="档案" value="file" icon={<DescriptionOutlined />} />
      <BottomNavigationAction label="发现" value="discover" icon={<ExploreOutlined />} />
      <BottomNavigationAction label="工具" value="tool" icon={<BuildOutlined />} />
      <BottomNavigationAction label="个人" value="user" icon={<PersonOutlineOutlined />} />
    </BottomNavigation>
  )
}

export default withRouter(NavMenu)
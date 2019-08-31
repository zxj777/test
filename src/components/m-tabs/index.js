import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Search from '@material-ui/icons/Search'
import BorderColorOutlined from '@material-ui/icons/BorderColorOutlined'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

function TabPanel(props) {
  const { children } = props
  return <div>{children}</div>
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    width: '100%'
    // position: 'relative',
    // overflow: 'hidden'
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  tabs: {
    width: '66vw'
  },
  tab: {
    border: '1px solid rgba(0, 0, 0, 0.54)',
    marginRight: '2vw',
    padding: '0px 12px'
  },
  tabSelected: {
    borderColor: '#3f51b5'
  },
  tabIcon: {

  },
  indicator: {
    display: 'none'
  },
  tabPanel: {
    display: 'none'
  },
  opts: {
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    height: '80%'
  }
}))

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function MTabs(props) {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
    props.changeTab(newValue)
  }

  function handleChangeIndex(index) {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <Container classes={{root: classes.tabsContainer}}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{indicator: classes.indicator}}
          aria-label="scrollable auto tabs"
        >
          {props.tabs.map((item, index) => (
            <Tab
              label={item.title}
              key={item.id}
              className={classes.tab}
              disableRipple
              classes={{selected: classes.tabSelected}}
              {...a11yProps(index)} />
          ))}
        </Tabs>
        <div className={classes.opts}>
          <IconButton className={classes.tabIcon} onClick={props.opts_1}>
            <Search color={'action'}></Search>
          </IconButton>
          <Divider orientation="vertical" classes={{vertical: classes.divider}} />
          <IconButton className={classes.tabIcon} onClick={props.opts_2}>
            <BorderColorOutlined color={'action'}></BorderColorOutlined>
          </IconButton>
        </div>
      </Container>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.content}
      >
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
        {props.children.map((item, index) => <TabPanel value={value} index={index} key={index} className={classes.tabPanel}>
          {item}
        </TabPanel>)}
      </SwipeableViews>
    </div>
  )
}

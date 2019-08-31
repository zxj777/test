import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AirportShuttle from '@material-ui/icons/AirportShuttle'
import Scroll from '../../../../components/ui-components/scroll'

const useStyles = makeStyles(() => ({
  navContainer: {
    width: '22vw',
    overflow: 'hidden'
  },
  listContainer: {
    backgroundColor: '#f9f5f5'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '22vw',
    fontSize: '14px'
  },
  listItemActive: {
    border: '1px solid #f9f5f5',
    backgroundColor: '#fff'
  }
}))

export default function MNav(props) {
  const classes = useStyles()
  const [typeIndex, setTypeIndex] = useState(0)

  function handleSelectType(index) {
    setTypeIndex(index)
    props.changeSelectedType(index)
  }

  return <div className={classes.navContainer}>
    <Scroll direction={{scrollX: false, scrollY: true}}>
      <ul className={classes.listContainer}>
        {props.list.map((item, index) => (
        <li
          key={item.title}
          className={`${classes.listItem} ${typeIndex === index && classes.listItemActive}`}
          onClick={() => handleSelectType(index)}>
          <AirportShuttle fontSize="large" color="primary"></AirportShuttle>
          <span>{item.title}</span>
        </li>))}
      </ul>
    </Scroll>
  </div>
}
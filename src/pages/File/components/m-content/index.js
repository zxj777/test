import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MList from '../m-list'
import MNav from '../m-nav'

const useStyles = makeStyles(() => ({
  contentContainer: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    display: 'flex',
    paddingTop: '20px',
    height: '100%',
    boxSizing: 'border-box'
  }
}))

export default function MContent(props) {
  const classes = useStyles()
  const [typeIndex, setTypeIndex] = useState(0)
  function handleChangeSelectedType(index) {
    setTypeIndex(index)
  }

  return <div className={classes.contentContainer}>
  <MNav list={props.data} changeSelectedType={handleChangeSelectedType}></MNav>
  <MList list={props.data[typeIndex]}></MList>
</div>
}
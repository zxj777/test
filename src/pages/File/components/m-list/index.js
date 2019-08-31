import React, { useRef, useLayoutEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Scroll from '../../../../components/ui-components/scroll'

const useStyles = makeStyles(() => ({
  mainContentContainer: {
    paddingLeft: '24px',
    paddingRight: '24px',
    flex: 1,
    overflow: 'hidden'
  },
  container: {
    marginBottom: '2vw',
    overflow: 'hidden'
  },
  subTitle: {
    paddingRight: '4px',
    paddingBottom: '4vw',
    paddingLeft: '4px'
  },
  subContainer: {
    marginBottom: '3vw',
    borderBottom: '1px solid #ccc'
  },
  subRow: {
    display: 'flex',
    paddingLeft: '4px',
    paddingRight: '4px',
    height: '10vw',
    lineHeight: '10vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px'
  },
  status: {
    width: '14vw',
    height: '6vw',
    lineHeight: '6vw',
    borderRadius: '3vw',
    textAlign: 'center',
    backgroundColor: '#f7eaea',
  }
}))

export default function MList(props) {
  const { data } = props.list
  const classes = useStyles()

  return <div className={classes.mainContentContainer}>
    <Scroll direction={{scrollX: false, scrollY: true}} >
      <ul>
        {data.map((item, index) => <li key={index} className={classes.container}>
          <h5 className={classes.subTitle}>{item.subTitle}</h5>
          <ul>
            {item.items.map((subItem, subIndex) => {
              const { name, status, file_count, pic_count } = subItem
              return <li key={subIndex} className={classes.subContainer}>
                <div className={classes.subRow}>
                  <span>{name}</span>
                  <span className={classes.status}>{status}</span>
                </div>
                <div className={classes.subRow}>
                  <span>图片: {pic_count}张 文件: {file_count}个</span>
                  <span><span style={{color: '#3f51b5'}}>进度</span> ></span>
                </div>
              </li>
            })}
          </ul>
        </li>)}
      </ul>
    </Scroll>
  </div>
}
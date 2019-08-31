import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import { fetchTestData, fetchTestTabs } from '../../store/file/actionCreators'
import MTabs from '../../components/m-tabs'
import MContent from './components/m-content'

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    paddingTop: '20px'
  },
  loading: {
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  }
}

class File extends PureComponent {
  componentDidMount() {
    this._init()
  }
  
  _init = () => {
    const { testTabs } = this.props
    if (!testTabs.length) {
      this.props.getTestTabs()
    }
  }

  handleChangeTab(index) {
    const { testTabs, testData } = this.props
    const id = testTabs[index].id
    console.log(id, testData, 888)
    if (!testData[id]) {
      this.props.getTestData(id)
    }
  }

  render() {
    const { classes, testData, testTabs } = this.props
    return <div className={classes.root}>
      <MTabs tabs={testTabs} changeTab={index => this.handleChangeTab(index)}>
        {
          testTabs.map(item => {
            const data = testData[item.id]
            return data ? <MContent data={data} key={item.id} /> : <div key={item.id} className={classes.loading}><span>loading</span></div>
          })
        }
      </MTabs>
    </div>
  }
}

const mapState = state => ({
  testTabs: state.file.testTabs,
  testData: state.file.testData
})

const mapDispatch = dispatch => ({
  getTestData(id) {
    dispatch(fetchTestData(id))
  },
  getTestTabs() {
    dispatch(fetchTestTabs())
  }
})

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(File))

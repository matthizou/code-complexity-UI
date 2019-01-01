import { connect } from 'react-redux'
import { App } from './App'
import { increaseCounter, counterSelector } from '../../services/counterDuck'

const mapStateToProps = state => {
  return {
    count: counterSelector(state),
  }
}

const mapDispatchToProps = {
  increaseCounter,
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export const AppContainer = enhance(App)

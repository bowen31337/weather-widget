import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state, ownProps) =>{
	return ({
	  pageName:ownProps.location.pathname.replace("/","")
	})
} 

export default connect(mapStateToProps, null)(App)

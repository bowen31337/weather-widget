import React from 'react'
import AppContainer from '../containers/AppContainer'
import WidgetContainer from '../containers/WidgetContainer'
import '../assets/css/custom.css'

const App = props => {
	return (
		<AppContainer {...props}>
			<WidgetContainer />
		</AppContainer>
		)
}

export default App

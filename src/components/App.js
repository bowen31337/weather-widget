import React from 'react'

const App = props => {
  const {pageName,children } = props
  return (
    <div className="weather-widget" data-page={pageName} >
      {children}
    </div>
  )

}

export default App

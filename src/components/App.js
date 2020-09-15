import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './ui/Header'
import theme from './ui/Theme'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
import MobileApps from './MobileApps'



function App() {
  const [selectedIndex, setSelectedIndex] = useState(0) //para saber que item de menu esta seleccionado
  const [value, setValue] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path='/services' render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} /> } />
          <Route exact path='/revolution' component={()=><div>The Revolution </div>} />
          <Route exact path='/customsoftware' render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} /> } />
          <Route exact path='/mobileapps' render={(props) => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} /> } />
          <Route exact path='/websites' component={()=><div>Websites </div>} />
          <Route exact path='/about' component={()=><div>About Us </div>} />
          <Route exact path='/contact' component={()=><div>Contact Us </div>} />
          <Route exact path='/estimate' component={()=><div>Get an Estimate </div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

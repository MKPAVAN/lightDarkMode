import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  changeBgColor = () => {
      this.setState((prevState) => ({isDarkMode: !prevState.isDarkMode}) )
  }


  render() {

    const {isDarkMode} = this.state 

    let cardClassName = null 
    let headClassName = null
    let content = null

    if(isDarkMode) {
        cardClassName = "dark-mode"
        headClassName = "dark-mode-head"
        content = "Light Mode"
    }else {
        cardClassName = "light-mode"
        headClassName = "light-mode-head"
        content = "Dark Mode"

    }


    return(

        <div className="bg-container">
            <div className={cardClassName}>
                <h1 className ={headClassName} ></h1>
                <button type="button" onClick={this.changeBgColor} >{content}</button>
            </div>
        </div>
    )


  }
export default LightDarkMode
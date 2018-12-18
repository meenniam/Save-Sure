import React ,{Component} from 'react'
import './HomePage.css'
import Banner from './Banner'
import Service from './Service'
import Service5 from './Service5'
import Insurance from './Insurance'

import Slogan from './Slogan'

class HomePage extends Component{
  render(){
    return(
      <div>
        <Banner></Banner>
        <Service></Service>
        <Service5></Service5>
        <Slogan></Slogan>
        <Insurance></Insurance>
        <div className="homeCon">
        </div>
      </div>
    )
  }
}

export default HomePage

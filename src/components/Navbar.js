import React,{Component} from 'react'
import './Navbar.css'
import 'font-awesome/css/font-awesome.min.css';
import logo from '../images/newlogo.jpg'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      name: ''
    }
  }
  componentDidMount(){
    window.onscroll = function() {navSticky()};
    var navbar = document.getElementById("navbarFull");
    function navSticky() {
      if (window.pageYOffset >= 100) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    function navScreen(x) {
      var navFull = document.getElementById('navbarFull')
      var navSmall = document.getElementById('navbarSmall')
      if (x.matches) { // If media query matches
        navFull.style.display = 'none'
        navSmall.style.display = 'block'
      } else {
        navFull.style.display = 'block'
        navSmall.style.display = 'none'
      }
    }

    var x = window.matchMedia("(max-width: 700px)")
    navScreen(x) // Call listener function at run time
    x.addListener(navScreen)
  }
  render(){
    return(
      <div>
        <div id="navbarSmall" className="navSmall">
          <input type="checkbox" id="nav" className="hidden"></input>
          <label htmlFor="nav" className="nav-btn">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div className="nav-wrapper">
            <ul>
              <li>
                <a>ประกัน  <i className="fa fa-chevron-down"></i></a>
                <ul>
                  <li>
                    <a>ซื้อประกัน / บริการออนไลน์</a>
                  </li>
                  <li>
                    <a>ผลิตภัณฑ์</a>
                  </li>
                  <li>
                    <a>บริการลูกค้า</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>สิทธิประโยชน์</a>
              </li>
              <li>
                <a>เกี่ยวกับเรา</a>
              </li>
              <li>
                <a>ติดต่อเรา</a>
              </li>
              <li>
                <a>เข้าสู่ระบบ | ลงทะเบียน</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="navbarFull" className="nav">
          <div className="upperNav">
            <div className="logoImg">
              <img src={logo} width='120px'></img>
            </div>

          </div>
          <div className="downNav">
            <div className="navItem">
              <ul>
                <li>
                  <a>ประกัน  <i className="fa fa-chevron-down"></i></a>
                  <ul>
                    <li>
                      <a>ซื้อประกัน / บริการออนไลน์</a>
                    </li>
                    <li>
                      <a>ผลิตภัณฑ์</a>
                    </li>
                    <li>
                      <a>บริการลูกค้า</a>
                    </li>
                    <div className="imgNavList">
                      <img src={logo} width='80%'height="80%"></img>
                    </div>

                  </ul>
                </li>
                <li>
                  <a>สิทธิประโยชน์</a>
                </li>
                <li>
                  <a>เกี่ยวกับเรา</a>
                </li>
                <li>
                  <a>ติดต่อเรา</a>
                </li>
                <li>
                  <a>เข้าสู่ระบบ | ลงทะเบียน</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Navbar

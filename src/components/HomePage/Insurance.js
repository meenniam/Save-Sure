import React,{Component} from 'react'

import './Insurance.css'
import insure1 from '../../images/insure1.jpg'
import insure2 from '../../images/insure2.jpg'
import insure3 from '../../images/insure3.jpg'

class Insurance extends Component {
  render(){
    return(
      <div className="insuranceCon">
        <div className="insuraceIn">
          <div className="row">
            <div className="colInsure-3">
              <div className="insureBox">
                <img src={insure1} width="100%"></img>
                <h3>พรบ.เริ่มต้น 25-40% </h3>
                <h3>สมัครใจ 10-20% </h3>
              </div>
            </div>
            <div className="colInsure-3">
              <div className="insureBox">
                <img src={insure2} width="100%"></img>
                  <h3>พรบ.เริ่มต้น 20-40% </h3>
                  <h3>สมัครใจ 10-20% </h3>
              </div>
            </div>
            <div className="colInsure-3">
              <div className="insureBox">
                <img src={insure3} width="100%"></img>
                  <h3>พรบ.เริ่มต้น 15-35% </h3>
                  <h3>สมัครใจ 10-20% </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Insurance

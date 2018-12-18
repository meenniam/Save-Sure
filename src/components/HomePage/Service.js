import React,{Component} from 'react'

import './Service.css'
import banner2 from '../../images/02.jpg'
import banner3 from '../../images/bannerlong700px.jpg'
import benefit1 from '../../images/benefit1.png'
import benefit2 from '../../images/benefit2.png'
import benefit3 from '../../images/benefit3.png'
import benefit4 from '../../images/benefit4.png'
import $ from 'jquery'

class Service extends Component{
  componentDidMount(){
    $(document).ready(function() {
  //window and animation items
      var animation_elements = $.find('.animation-elementService');
      var web_window = $(window);

  //check to see if any animation containers are currently in view
      function check_if_in_view() {
  //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

  //iterate through elements to see if its in view
        $.each(animation_elements, function() {

    //get the element sinformation
          var element = $(this);
          var element_height = $(element).outerHeight();
          var element_top_position = $(element).offset().top;
          var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
          if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
          }
        });

      }

    //on or scroll, detect elements in view
      $(window).on('scroll resize', function() {
        check_if_in_view()
      })
    //trigger our scroll event on initial load
      $(window).trigger('scroll');

    });
  }
  render(){
    return(
      <div className="serviceCon">
        <picture>
          <source media="(max-width: 650px)" srcSet={banner3}/>
          <img src={banner2} width="100%"/>
        </picture>
        <div className="serviceVideo">
          <div className="videoBack">

          </div>
        </div>

        <div className="benefitCon">
          <div className="row">
            <div className="benefitLeft">
              <div style={{'textAlign':'right','paddingRight':'10px'}}>
                <h2>สิทธิประโยชน์สำหรับสมาชิก 5 ข้อ savesure.online เท่านั้น</h2>
              </div>

            </div>
            <div className="benefitRight">
              <div className="row animation-elementService slide-left">
                <div className="column-1"><img src={benefit1} width="100px"></img></div>
                <div className="column-2"><p>1. ส่วนลด พรบ. 15% – 40%</p></div>
              </div>
              <div className="row animation-elementService slide-left">
                <div className="column-1"><img src={benefit2} width="100px"></img></div>
                <div className="column-2"><p>2. ส่วนลดประกันภัย สมัครใจ  2+,  3+  ส่วนลด 15% - 20%</p></div>
              </div>
              <div className="row animation-elementService slide-left">
                <div className="column-1"><img src={benefit3} width="100px"></img></div>
                <div className="column-2"><p>3. ค่าการตลาด ประชาสัมพันธ์ 10% (คำนวณจากยอดเงินที่ฝากเข้าบัญชีทุกๆครั้ง สำหรับชำระค่าประกันภัย พรบ.)</p></div>
              </div>
              <div className="row animation-elementService slide-left">
                <div className="column-1"><img src={benefit4} width="100px"></img></div>
                <div className="column-2"><p>4. ค่าส่วนต่างของ % ส่วนลดประกันภัย และ พรบ.</p></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Service

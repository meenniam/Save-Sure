import React,{Component} from 'react'

import './Service5.css'
import coins from '../../images/coins.png'
import icon from '../../images/icon.png'
import $ from 'jquery'

class Service5 extends Component{
  componentDidMount(){
    $(document).ready(function() {
  //window and animation items
      var animation_elements = $.find('.animation-elementService5');
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
          if ((element_bottom_position>= window_top_position) && (element_top_position <= window_bottom_position)) {
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
      <div className="service5Con">
        <div className="row">
          <div className="columnSer5-1">
            <div className="ser5Detail">
              <div className="row">
                <div className="columnSer5content-1">
                  <div className="icon5">
                    <img src={icon} id="icon" width="100%"></img>
                  </div>
                </div>
                <div className="columnSer5content-2">
                  <p>5. ค่ารักษาบัญชี เป็นค่าใช้จ่ายรายเดือน สำหรับสมาชิก ค่าคีย์ ประกันภัย  พรบ. อินเตอร์เน็ต โทรศัพท์      ดังนี้ (คำนวณจากยอดเงินสำหรับชำระค่าประกัน ของแต่ละสมาชิก)
                  </p>
                </div>
              </div>
              <ul>
                <li>ยอดเงินคงเหลือในบัญชี  	3,000.  ละ 150 บาท / เดือน</li>
                <li>ยอดเงินคงเหลือในบัญชี  	5,000.  ละ 250 บาท / เดือน</li>
                <li>ยอดเงินคงเหลือในบัญชี  	7,000.  ละ 350 บาท / เดือน</li>
                <li>ยอดเงินคงเหลือในบัญชี  	10,000. ละ 500 บาท / เดือน</li>
              </ul>
            </div>
          </div>
          <div className="columnSer5-2">
            <div className="imgSerCon animation-elementService5 slide-left">
              <img src={coins} width="100%"></img>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Service5

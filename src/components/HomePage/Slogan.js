import React ,{Component} from 'react'

import './Slogan.css'
import slogan1 from '../../images/slogan1.png'
import slogan2 from '../../images/slogan2.png'
import slogan3 from '../../images/slogan3.png'
import slogan4 from '../../images/slogan4.png'
import slogan5 from '../../images/slogan5.png'

import $ from 'jquery'

class Slogan extends Component {

  componentDidMount(){

    $(document).ready(function() {
  //window and animation items
      var animation_elements = $.find('.SloganCon div');
      var web_window = $(window);

  //check to see if any animation containers are currently in view
      function check_if_in_view() {
  //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

  //iterate through elements to see if its in view
        $.each(animation_elements, function(i, val) {
    //get the element sinformation
          var element = $(this);
          var element_height = $(element).outerHeight();
          var element_top_position = $(element).offset().top;
          var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
          if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            element.addClass('in-view'+(i+1));
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
      <div className="SloganCon" id="mySlogan">
        <div className="divSlogan1">
          <img src={slogan1} className="imgSlogan1" width="60%"></img>
        </div>
        <div className="divSlogan2">
          <img src={slogan2} className="imgSlogan2" width="40%"></img>
        </div>
        <div className="divSlogan3">
          <img src={slogan3} className="imgSlogan3" width="40%"></img>
        </div>
        <div className="divSlogan4">
          <img src={slogan4} className="imgSlogan4" width="40%"></img>
        </div>
        <div className="divSlogan5">
          <img src={slogan5} className="imgSlogan5" width="30%"></img>
        </div>
      </div>
    )
  }
}

export default Slogan

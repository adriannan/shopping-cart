import React from "react";
import $ from "jquery";

const UpBtn = () => {
  // handle btn
  $(".btn-up").fadeOut();
  $(document).ready(function() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".btn-up").fadeIn();
      } else {
        $(".btn-up").fadeOut();
      }
    });

    //Click event to scroll to top
    $(".btn-up").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 800);
      console.log("ok");
      return false;
    });
  });
  return (
    <button className="btn-up btn btn-outline-dark ">
      <i class="fas fa-arrow-up"></i>
    </button>
  );
};

export default UpBtn;
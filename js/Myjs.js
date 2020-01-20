$(document).ready(function(){
    $("#back-top").hide(); 
   // fade in #back-top
   $(function () {
   $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
   $('#back-top').fadeIn();
   } else {
   $('#back-top').fadeOut();
   }
   }); 
  // scroll body to 0px on click
   $('#back-top a').click(function () {
   $('body,html').animate({
   scrollTop: 0
   }, 800);
   return false;
   });
   }); 
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  
    $('#btn').hover(function(){
  $('#mypopaver').fadeToggle();
    })
    |$('.div1').hover(function(){
      $(this).slideUp(500)
      $('.div2').slideDown(500)
    })
    $('.div2').mouseleave(function(){
      $(this).slideUp(500)
      $('.div1').slideDown(500)
    })
  
    $('#a0').hover(function(){
    
      $('#div1,#div2,#div3,#div4,#div5,#div6,#div7').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#a1').hover(function(){
      $('#div1').show()
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div1').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
    $('#cont2').hover(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
  
    $('#a2').hover(function(){
      $('#div2').show()
      $('#div1,#div3,#div4,#div5,#div6,#div7,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div2').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
  
  
    $('#a3').hover(function(){
      $('#div3').show()
      $('#div1,#div2,#div4,#div5,#div6,#div7,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div3').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
    
    $('#a4').hover(function(){
      $('#div4').show()
      $('#div2,#div3,#div1,#div5,#div6,#div7,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div4').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
  
    
    $('#a5').hover(function(){
      $('#div5').show()
      $('#div2,#div3,#div4,#div1,#div6,#div7,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div5').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
  
    $('#a6').hover(function(){
      $('#div6').show()
      $('#div2,#div3,#div4,#div5,#div1,#div7,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div6').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
  
    $('#a7').hover(function(){
      $('#div7').show()
      $('#div2,#div3,#div4,#div5,#div6,#div1,#div8').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div7').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    })
  
    $('#a8').hover(function(){
    
      $('#div1,#div2,#div3,#div4,#div5,#div6,#div7').hide()
      var w=$(document).width();
    if(w < 992){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
    }
    })
    $('#div8').mouseleave(function(){
      $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div1').hide()
      
    })
/////////////////////////Navbar////////////////////////////
var w=$(document).width();
console.log(w);

    if(w < 992){
       
        $('#Link1,#Link2,#Link3,#Link4,#Link5,#Link6,#Link7,#Link8,#Link9,#Link10,#Link11,#Link12,#Link13,#Link14,#Link15,#Link16,#Link17,#Link18,#Link19,#Link20,#Link21').prop("href" , "#logo")
        $("#a1,#a2,#a3,#a4,#a5,#a6,#a7").prop("href" , "#logo")
        $("#a1").click(function(){
          $("#Link1,#Link2,#Link3").fadeToggle()
          $("#Link4,#Link5,#Link6,#Link7,#Link8,#Link9,#Link10,#Lin11,#Link12,#Link13,#Link14,#Link15,#Link16,#Link17,#Link18,#Link19,#Link20,#Link21").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#a2").click(function(){
          $("#Link4,#Link5,#Link6").fadeToggle()
          $("#Link1,#Link2,#Link3,#Link7,#Link8,#Link9,#Link10,#Lin11,#Link12,#Link13,#Link14,#Link15,#Link16,#Link17,#Link18,#Link19,#Link20,#Link21").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#a3").click(function(){
          $("#Link7,#Link8,#Link9").fadeToggle()
          $("#Link1,#Link2,#Link3,#Link4,#Link5,#Link6,#Link10,#Link11,#Link12,#Link13,#Link14,#Link15,#Link16,#Link17,#Link18,#Link19,#Link20,#Link21").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#a4").click(function(){
          $("#Link10,#Link11,#Link12").fadeToggle()
          $("#Link1,#Link2,#Link3,#Link4,#Link5,#Link6,#Link7,#Link8,#Link9,#Link13,#Link14,#Link15,#Link16,#Link17,#Link18,#Link19,#Link20,#Link21").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#a5").click(function(){
          $("#Link13,#Link14,#Link15").fadeToggle()
          $("#Link1,#Link2,#Link3,#Link4,#Link5,#Link6,#Link7,#Link8,#Link9,#Link10,#Link11,#Link12,#Link16,#Link17,#Link18,#Link19,#Link20,#Link21").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#a6").click(function(){
          $("#Link16,#Link17,#Link18").fadeToggle()
          $("#Link1,#Link2,#Link3,#Link4,#Link5,#Link6,#Link7,#Link8,#Link9,#Link10,#Link11,#Link12,#Link13,#Link14,#Link15,#Link19,#Link20,#Link21").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#a7").click(function(){
          $("#Link19,#Link20,#Link21").fadeToggle()
          $("#Link1,#Link2,#Link3,#Link4,#Link5,#Link6,#Link7,#Link8,#Link9,#Link10,#Link11,#Link12,#Link13,#Link14,#Link15,#Link16,#Link17,#Link18").hide()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      
      $("#Link1").click(function(){
          $("#Sublink1").fadeToggle()
          $('#Sublink2,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link2").click(function(){
          $("#Sublink2").fadeToggle()
          $('#Sublink1,#Sublink3,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link3").click(function(){
          $("#Sublink3").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link4").click(function(){
          $("#Sublink4").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link5").click(function(){
          $("#Sublink5").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink3,#Sublink4,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link6").click(function(){
          $("#Sublink6").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink3,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link7").click(function(){
          $("#Sublink7").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink3,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link8").click(function(){
          $("#Sublink8").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink3,#Sublink9,Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link9").click(function(){
          $("#Sublink9").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink3,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link10").click(function(){
          $("#Sublink10").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink3,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link11").click(function(){
          $("#Sublink11").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink3,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link12").click(function(){
          $("#Sublink12").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink3,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link13").click(function(){
          $("#Sublink13").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink3,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link14").click(function(){
          $("#Sublink14").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink3,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link15").click(function(){
          $("#Sublink15").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink3,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link16").click(function(){
          $("#Sublink16").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink3,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link17").click(function(){
          $("#Sublink17").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink3,#Sublink18,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link18").click(function(){
          $("#Sublink18").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink3,#Sublink19,#Sublink20,#Sublink21').hide()
      })
      $("#Link19").click(function(){
          $("#Sublink19").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink3,#Sublink20,#Sublink21').hide()
      })
      $("#Link20").click(function(){
          $("#Sublink20").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink3,#Sublink21').hide()
      })
      $("#Link21").click(function(){
          $("#Sublink21").fadeToggle()
          $('#Sublink1,#Sublink2,#Sublink4,#Sublink5,#Sublink6,#Sublink7,#Sublink8,#Sublink9,#Sublink10,#Sublink11,#Sublink12,#Sublink13,#Sublink14,#Sublink15,#Sublink16,#Sublink17,#Sublink18,#Sublink19,#Sublink20,#Sublink3').hide()
      })
      }
    

  });
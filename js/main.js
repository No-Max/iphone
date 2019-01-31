$('.phone-slider').slick({
  slidesToShow: 9,
  autoplay: true,
  dots: false,
  prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
  nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

  responsive: [
  {
    breakpoint: 1600,
    settings: {
      dots: true,
      slidesToShow: 7,
    }
  },
  {
    breakpoint: 1100,
    settings: {
      dots: true,
      slidesToShow:5,
    }
  },
  {
    breakpoint: 900,
    settings: {
      dots: true,
      slidesToShow:4,
    }
  },
  {
    breakpoint: 700,
    settings: {
      dots: true,
      slidesToShow:3,
    }
  },
  {
    breakpoint: 550,
    settings: {
      dots: true,
      slidesToShow:2,
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow:1,
    }
  }
  ]
});


var allService = [
"Замена дисплея",                      
"Замена слухового динамика",          
"Замена кнопки «Home»",               
"Замена кнопки включения",            
"Замена микрофона",                   
"Замена передней камеры",             
"Замена разъема зарядки",             
"Замена аккумулятора",                
"Замена корпуса",     
"Замена кнопки переключения вибро",   
"Замена основной камеры",             
"Замена кнопок громкости",            
"Замена полифонического динамика",    
"Замена разъема наушников",           
"Пайка",                              
"Наклеить защитное стекло"
];

var i_7       =   ['270','60','-','90','90','130','90','75','под заказ','80','150','80','65','-','95','15'];

var i_6splus  =   ['300','60','55','70','70','70','70','85','250','70','130','70','65','70','95','15'];

var i_6s      =   ['190','55','55','65','70','65','70','65','230','70','90','65','60','70','95','15'];

var i_6plus   =   ['190','45','45','65','65','55','60','65','230','55','55','55','55','60','95','15'];

var i_6       =   ['150','45','50','50','60','50','60','55','110','55','50','55','40','60','95','15'];

var i_5se     =   ['110','35','40','45','45','50','45','70','90','45','40','45','40','45','95','15'];

var i_5c      =   ['110','35','35','45','45','45','45','45','90','45','40','45','35','45','95','15'];

var i_5s      =   ['110','40','40','45','40','45','40','45','90','45','40','45','35','40','95','15'];

var i_5       =   ['110','35','35','45','40','40','40','45','90','45','40','45','30','40','95','15'];


var iphones_price = [i_5,i_5s,i_5c,i_5se,i_6,i_6plus,i_6s,i_6splus,i_7];

var phone = $(".slide");
var service = $(".service");

function getServiceList(ser, del, mod){
  var html = "";
  for(var i = 0; i < ser.length; i++){
    if( del.indexOf(''+i) == -1 || del == "all"){
      html += "<a class='service-item' href='#result' data-price='"+iphones_price[mod][i]+"'>"+ser[i]+"</a>"; 
    }
  }
  service.html(html);
}
getServiceList(allService, "all", 0);
$(".disp").hide();
$(".disp-serv").hide();

phone.click(function(){
  $(".result-price").text(0);
  phone.removeClass("active");
  $(this).addClass("active");
  $(".disp").hide();
$(".disp-serv").hide();

  var ph = $(this).attr("data-phone");
  var del = $(this).attr("data-del").split(",");
  var mod = $.trim($(this).children(".text").text());
  
  $(".result-phone").text("Iphone " + mod);
  $("#form-model").val("Iphone " + mod);
  getServiceList(allService, del, ph);
    $(".disp-serv").fadeIn().html('<a href="#service">Выберите что нужно сделать! <i class="fa fa-angle-up" aria-hidden="true"></i>');
});

service.on('click', 'a', function(){
  $(".service-item").removeClass("active-service");
  
  if(phone.hasClass("active")){

    $(this).addClass("active-service");  

    $(".result-price").text($(this).attr("data-price"));
    $("#form-price").val($(this).attr("data-price"));

    $(".result-service").text($(this).text());
    $("#form-service").val($(this).text());
    $(".disp").fadeIn();
  }else{
    $(this).attr("href","#phones");
  }
});

$(".scroll").on("click","a", function (event) {
        //remove default event click on link
        event.preventDefault();

        //get id with active href
        var id  = $(this).attr('href');
        
        //get height menu to block
        var top = $(id).offset().top-120;
        
        //animation scroll, menu - top for 800 ms
        $('body,html').animate({scrollTop: top}, 800);
      });
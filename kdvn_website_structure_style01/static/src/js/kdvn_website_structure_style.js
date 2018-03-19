/* Deploy do not show alert follow 
   https://github.com/OCA/website/blob/8.0/website_cookie_notice/views/website.xml
*/
"use strict";
(function($){
    $(".kdvn_alert button").click(function(e){
       e.preventDefault();
       e.stopPropagation();
       $.ajax("/alert_off/" + $(e.target).attr("id"), {
           "complete": function(jqXHR, textStatus) {
                //console.log("DONE", jqXHR, textStatus);
                //TODO: How to hide here
                $(e.target).closest(".kdvn_alert").hide("fast");
           }
       });
    });
})(jQuery);

//Khi click vao thi anh duoc phong to trong Certificate
$('.pop').on('click', function() {
	$('.imagepreview').attr('src', $(this).find('img').attr('src'));
	$('#imagemodal').modal('show');
});
//An hien menu trai trong cac trang Project    
if( $("#xs-check").is(":visible") )
    $("#kdvn-str-collapse-comp").removeClass("in");

/*Thay doi toc do chuyen slice*/
$('.carousel').carousel({
	interval: 3000
});
 $(document).ready(function() {


     /*******************************************************************************************************/

     //Accordion for About Us page
     $("#accordion").accordion ({
         active: false,
         heightStyle: "content",
         collapsible: true,
     });

     /*******************************************************************************************************/

     //blur banner image on Home page when scrolling
     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         $('.img-blur').css({
             filter: "blur(" + (scroll/80) + "px)"
         });
     });


     /*******************************************************************************************************/

     // //getJSON for the About page image and desciption
     // $.getJSON("Barlis-MonastAboutContent.json", function(data){
     //     $.each(data, function() {
     //         $.each(this, function(AboutContents, value) {
     //             $("#AboutContents").append(
     //                 "<img src=" + value.image + ">" +
     //                 "<p>" + value.bio + "</p>"
     //             );
     //         });
     //     });
     // });


 });//end ready

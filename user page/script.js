function change_text(){

    let current_text = $('#alternating').text();
    let other_text = "We sincerely apologize for any delays experienced due to mco reinforcement";
    let orig_text = "free shipping on orders over rm60 within malaysia.";

    if (current_text == "free shipping on orders over rm60 within malaysia."){
        $("#alternating").fadeOut("slow", function() {
            $('#alternating').text(other_text);
        });
        $("#alternating").delay(200).fadeIn("slow");
    }else {
        $("#alternating").fadeOut("slow", function() {
            $('#alternating').text(orig_text);
        });
        $("#alternating").delay(200).fadeIn("slow");
    }

}
setInterval(change_text, 4000);

$(function(){

  $('#eye').click(function(){

        if($(this).hasClass('fa-eye-slash')){

          $(this).removeClass('fa-eye-slash');

          $(this).addClass('fa-eye');

          $('#password').attr('type','text');

        }else{

          $(this).removeClass('fa-eye');

          $(this).addClass('fa-eye-slash');

          $('#password').attr('type','password');
        }
    });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

function openSearch() {
document.getElementById("mylayout").style.display = "block";
}
function closeSearch() {
document.getElementById("mylayout").style.display = "none";
}






var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function()
{
  ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
  ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
  ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function()
{
  ProductImg.src = SmallImg[3].src;
}

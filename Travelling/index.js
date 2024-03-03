$("#bar").click(()=>{
    $("#link").slideToggle();
})

$("#img1").mouseenter(()=>{
    $("#img1").attr("src","img1.1.jpg");
})

$("#img1").mouseleave(()=>{
    $("#img1").attr("src","img1.jpg");
})

$("#img2").mouseenter(()=>{
    $("#img2").attr("src","img2.2.jpg");
})

$("#img2").mouseleave(()=>{
    $("#img2").attr("src","img2.jpg");
})

$("#img3").mouseenter(()=>{
    $("#img3").attr("src","img3.3.jpg");
})

$("#img3").mouseleave(()=>{
    $("#img3").attr("src","img3.jpg");
})

$("#img4").mouseenter(()=>{
    $("#img4").attr("src","img4.4.jpg");
})

$("#img4").mouseleave(()=>{
    $("#img4").attr("src","img4.jpg");
})

$("#img5").mouseenter(()=>{
    $("#img5").attr("src","img5.5.jpg");
})

$("#img5").mouseleave(()=>{
    $("#img5").attr("src","img5.jpg");
})

$("#img6").mouseenter(()=>{
    $("#img6").attr("src","img6.6.jpg");
})

$("#img6").mouseleave(()=>{
    $("#img6").attr("src","img6.jpg");
})

$("#img7").mouseenter(()=>{
    $("#img7").attr("src","img7.7.jpg");
})

$("#img7").mouseleave(()=>{
    $("#img7").attr("src","img7.jpg");
})

$("#img8").mouseenter(()=>{
    $("#img8").attr("src","img1.1.jpg");
})

$("#img8").mouseleave(()=>{
    $("#img8").attr("src","img1.jpg");
})

$("#img9").mouseenter(()=>{
    $("#img9").attr("src","img2.2.jpg");
})

$("#img9").mouseleave(()=>{
    $("#img9").attr("src","img2.jpg");
})

$("#img10").mouseenter(()=>{
    $("#img10").attr("src","img3.3.jpg");
})

$("#img10").mouseleave(()=>{
    $("#img10").attr("src","img3.jpg");
})

$("#img11").mouseenter(()=>{
    $("#img11").attr("src","img4.4.jpg");
})

$("#img11").mouseleave(()=>{
    $("#img11").attr("src","img4.jpg");
})

$("#img12").mouseenter(()=>{
    $("#img12").attr("src","img5.5.jpg");
})

$("#img12").mouseleave(()=>{
    $("#img12").attr("src","img5.jpg");
})

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
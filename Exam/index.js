$("#form").submit((event)=>{
    event.preventDefault();

    let title=$("#add").val();

    $("#box").append(`<p id="p1">${title}</p>`);
})

$("#btn").click(()=>{
    $("body").toggleClass("modeback");

    $("#text1").toggleClass("modetext");

})
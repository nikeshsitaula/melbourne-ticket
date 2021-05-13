$(document).ready(function(){
    setTimeout(function(){
        $('#mainad').css('display','block')
    }, 1000);
});


$(document).ready(function(){

    $('#shake_01').effect ('shake',{times:2}, 7000);
});

// $(document).ready(function(){
//     $('#closead').click(function(){
//         $('#mainad').hide();
//     });
// });

$(document).click((event) => {
    if (!$(event.target).closest('#element').length) {
        // the click occured outside '#element'
        $('#closead').click(function(){
            $('#mainad').hide();
        });
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

jQuery.fn.shake = function () {
    this.each(function (i) {
        var currentLeft = parseInt($(this).css("left"));
        for (var x = 1; x <= 8; x++) {
            $(this).animate({ left: (currentLeft - 10) }, 10).animate({ left: currentLeft }, 50).animate({ left: (currentLeft + 10) }, 10).animate({ left: currentLeft }, 50);
        }
    });
    return this;
}

$(".mainad1").click(function() {
    $(this).shake();
});


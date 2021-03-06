$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $('#mycarousel').carousel({
        interval: 2000
    })
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
            $("#carousel-button").removeClass('btn-danger');
            $("#carousel-button").addClass('btn-success');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
            $("#carousel-button").removeClass('btn-success');
            $("#carousel-button").addClass('btn-danger');
        }
    });
});

function showReserveModal(){
    $("#reserveModal").modal('toggle')
}

$('#reserveModal').modal({
    keyboard: true
})

function showLoginModal(){
    $("#loginModal").modal('toggle')
}

$('#loginModal').modal({
    keyboard: true
})
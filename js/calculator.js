$( document ).ready(function() {
    
    $("#btn-calc").on("click", function(event){
        event.preventDefault();
       var napravlenie = $('input[name=napravlen]:checked').val();
       var otkuda = $("#calc_region_1 option:selected").text();
       if ($('#box-1').is(':checked')){
            var otkudaGruzchiki = true;
        } else {
            var otkudaGruzchiki = false;
        }
       if ($('#box-2').is(':checked')){
            var putGruzchiki = true;
        } else {
            var putGruzchiki = false;
        }
       if ($('#box-3').is(':checked')){
            var timeGruzchiki = true;
        } else {
            var timeGruzchiki = false;
        }
        var kuda  = $("#calc_region_2 option:selected").text();
        var predmet = $('input[name=predmet]:checked').val();
    });
    
    $('#rangetree').on('input',function () {
        $('#rangrasstoyan').css('display', 'block');
        var per = Number($(this).val());
        if(per>99){
            per='более 100';
        }else if(per==0){
            $('#rangrasstoyan').css('display', 'none');
        }
        $('#rangrasstoyan').val(per + " км");
    });
    
    $('#rangeTime').on('input',function () {
        $('#rangVrema').css('display', 'block');
        var per = Number($(this).val());
        if(per>24){
            per='error';
        }else if(per==0){
            $('#rangVrema').css('display', 'none');
        }
        $('#rangVrema').val(per + ":00");
    });
    
    $("#calc_region_2").on("click", function(){
        var kudaVal = $("#calc_region_2 option:selected").val();
        if(kudaVal != 1){
           $('#putOplet').css('display', 'none');
        }else{
            $('#putOplet').css('display', 'block');             
        }
        
    });
})
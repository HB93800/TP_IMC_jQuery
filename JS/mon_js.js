$(document).ready (function() {
    //console.log('salut');
    
    $('.soumettre').click(function (e) {
        e.preventDefault();
        var taille_c=parseFloat($('.taille').val());
        var nbchf=$(".taille").val().length;
        var poids_c=parseFloat($('.poids').val());
        var nbchf2=$(".poids").val().length;
        
        console.log(nbchf);
        console.log(nbchf2);

        if ((isNaN($(".taille").val())||nbchf>3)&&(isNaN($(".poids").val())||nbchf>3)) {
                       
            console.log('NOK');
            
            $(".taille").val('Saisir votre taille en cm!');
            $(".poids").val('Saisir votre poids en kg !');
            $(".taille, .poids").css('font-size', '12px');
            $(".taille, .poids").css('color', 'white');
            $(".taille, .poids").css('backgroundColor','#F97454');
        } else {
            console.log('OK');
            var imc=(poids_c/((taille_c/100)*(taille_c/100))).toFixed(1);
            $(".imc").html(imc);

        };  
        console.log(imc);       
        if (imc<18.5) {
                $(".imc_expl").html('18.5< Votre IMC ('+imc+') vous êtes en insuffisance pondérale !');
                  

                        } else if ((imc>18.5)&&(imc<24.9)) {                
                                $(".imc_expl").html('18.5< Votre IMC ('+imc+') <24.9 : poids normal');

                                    } else if ((imc>25)&&(imc<29.9)) {
                                            $(".imc_expl").html('25< Votre IMC ('+imc+') <29.9 :  vous êtes en surpoids !');

                                            } else if (imc>30) {
                                                    $(".imc_expl").html("Votre IMC ("+imc+") >30: Attention vous êtes en situation d'"+"<a href='https://sante.journaldesfemmes.fr/fiches-maladies/2605013-obesite-moderee-morbide-definition-symptomes-imc-causes-consequences-solutions-calcul/' class='link'> obésité</a>"+" !!" );
                                                    
                                                        } else {
                                                        console.log('désolé hors tolérance');
                                                        }
        
        
           

    });
   /* $('.taille', '.poids').keyup(function (e) {
    $('.taille', '.poids').html();*/

   
});
function refresh() {
    window.location.reload();
    }

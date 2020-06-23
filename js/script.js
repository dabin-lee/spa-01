


$(function(){
    var $featureCont = $('.feature__cont'),
        $featureContLi = $featureCont.find('> li');

        $featureCont.on("focus, mouseover", function(){
            $(this).find('li').addClass('feature__block');
            }).on("mouseout", function(){
            $(this).find('span').removeClass('feature__block');
            });
    });

console.log(featureCont);
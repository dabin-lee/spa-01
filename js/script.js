$(function(){
    // section--team
    var $maNager = $('.manager--profile');
        $maNager.on({
            mouseenter : function(){
                if($(this).hasClass('over') == true){
                    $maNager.removeClass('over');
                }else{
                    $(this).addClass('over');
                }
            },mouseleave: function(){
                $maNager.removeClass('over');
            }
        });

    // section--testimonials
        var $slideGroup = $('.article__group--testimonials'),
            $slides = $slideGroup.find('> .indicator--article'),
            $currentIndex = 0,
            $duration = 500,
            $easing = 'easeInOutExpo';


            function goToslide(index){
                    $slides.each(function(i){ // 각각 slide마다 css로 left값 바꿈
                        var newLeft = (i * 100) + '%';
                        $(this).css({left: newLeft});
                    });
                    $currentIndex = index;
                    $slideGroup.animate({left: (- 100 * index) + '%'}, $duration, $easing);
                }
                goToslide();



        var $inDicatorBtn = $('.indicator--btn');
            $inDicatorBtn.each(function(){
                var idx = $(this).index() ;
                $(this).on({
                    click : function(){
                        $inDicatorBtn.removeClass('indicator--on');
                        $inDicatorBtn.eq(idx).addClass('indicator--on');
                        goToslide(idx);
                    }
                })
            })

    });

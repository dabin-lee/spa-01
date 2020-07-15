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
        // arrow
        var cnt = 0,
            $arrowBox = $('.slide__wrap'),
            $prevArrow = $arrowBox.find('.arrow--prevBtn'),
            $nextArrow = $arrowBox.find('.arrow--nextBtn'),
            $inDicatorBtn = $('.indicator--btn');

        var cnt = 0,
            idx = 0,
            $slideGroup = $('.article__group--testimonials'),
            $slides = $slideGroup.find('> .indicator--article'),
            $duration = 500,
            $easing = 'easeInOutExpo';

            // function goToslide(idx){
            //         $slides.each(function(i){ // 각각 slide마다 css로 left값 바꿈
            //             cnt = i;
            //             var newLeft = (i * 100) + '%';
            //             $(this).css({left: newLeft},0, function(){
            //                 if(cnt > 4){cnt = 0;}
            //                 if(cnt < 0){cnt = 4;}
            //             });
            //         });
            //         $currentIndex = idx;
            //         $slideGroup.stop().animate({left: (- 100 * idx) + '%'},$duration, $easing);
            //         $inDicatorBtn.eq(idx).addClass('indicator--on').siblings().removeClass('indicator--on');
            //     }
            //     goToslide();
            //     console.log(goToslide);

            function goToslide(){
                $slides.each(function(i){
                    idx = i;
                    var newLeft = (i * 100) + '%';
                    $(this).css({left: newLeft},0);
                });
                $slideGroup.animate({left: (- 100 * cnt) + '%'},$duration, $easing,function(){
                    if(cnt > 3){cnt = 0;}
                    if(cnt < 0){cnt = 3;}
                });
                $inDicatorBtn.eq(cnt).addClass('indicator--on').siblings().removeClass('indicator--on');
            }
            goToslide();

            // console.log($slides.length);

            $inDicatorBtn.each(function(){
                var ind_ = $(this).index() ;
                $(this).on({
                    click : function(){
                        goToslide();
                    }
                })
            });

            function prevCount(){
                cnt--;
                goToslide();
            }
            function nextCount(){
                cnt++;
                goToslide();
            }
            // function autoPlay(){
            //     setId = setInterval(nextCount, 3000);
            // }
            // autoPlay();

            $prevArrow.on({
                click : function(){
                    // if(!$slideGroup.is(':animate')){
                    //     prevCount();
                    // }
                    prevCount();
                }
            });

            $nextArrow.on({
                click : function(){
                    // if(!$slideGroup.is(':animate')){
                    //     nextCount();
                    // }
                    nextCount();
                }
            });


        // datepicker, timepicker
        $("#reserveDate").datepicker({});
        $('#timePicker').timepicker({
            timeFormat: 'p h:mm',
            interval: 60,
            minTime: '09',
            maxTime: '11:00pm',
            defaultTime: '14',
            startTime: '00:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });

    });

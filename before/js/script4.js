$(function(){
    // section--team
    var $maNagerLi = $('.tiles > li'),
        $maNagerProfile = $maNagerLi.find(' > figcaption'),
        $snsBtn = $maNagerProfile.find('.btn__sns'),
        $snsBtnDetails = $snsBtn.find('> ul > li'),
        $snsBtnDetailsA = $snsBtnDetails.find('> a'),
        $z_idx = 0;

        // $maNagerLi.each(function(e){
        //     // console.log(e);
        //     $(this).on({
        //         focus, mouseenter : function(){
        //             $(this).addClass('on');
        //             if($snsBtnDetailsA.focus()){
        //                 console.log('focus');
        //             }
        //         },blur, mouseleave : function(){
        //             $maNagerProfile.eq(e).css({height:120});
        //             $snsBtn.eq(e).css({opacity:1});

        //             // $(this).removeClass('on');
        //             $snsBtnDetailsA.blur();
        //         }
        //     })
        // });








        $maNagerLi.each(function(e){
            $(this).on({
                focus, mouseenter : function(){
                    $(this).addClass('on');
                },blur, mouseleave : function(){
                    $(this).removeClass('on');
                }
            })
        });


        $snsBtnDetailsA.on({

            focusin : function(i){
                $maNagerLi.addClass('on');
            },focusout :function(){
                _thisParent.removeClass('on');
            }
        });



    // section--testimonials
        var cnt = 0,
            idx = 0,
            $slideGroup = $('.article__group--testimonials'),
            $slides = $slideGroup.find('> .indicator--article'),
            $duration = 500,
            $easing = 'easeInOutExpo',
            $arrowBox = $('.slide__wrap'),
            $prevArrow = $arrowBox.find('.arrow--prevBtn'),
            $nextArrow = $arrowBox.find('.arrow--nextBtn'),
            $inDicatorBtn = $('.indicator--btn');

            //main slide
            function goToslide(){
                // console.log(cnt);
                curChk();

                    $slides.each(function(i){ // 각각 slide마다 css로 left값 바꿈
                        idx = i;
                        var newLeft = (i * 100) + '%';
                        $(this).css({left: newLeft});
                    });

                    $slideGroup.stop().animate({left: (- 100 * cnt) + '%'}, $duration, $easing);
                    $inDicatorBtn.eq(cnt).addClass('indicator--on').siblings().removeClass('indicator--on');
                }
                goToslide();


            //슬라이드 길이 조절
            function curChk(){
                // cnt >= $slides.length ? cnt = 0 : cnt = $slides.length-1

				if(cnt >= $slides.length){  // 슬라이드 길이보다 더 높을 때
					cnt = 0;
				}else if(cnt < 0){ // 0 보다 작을때
					cnt = $slides.length-1;
				}
			}

            //각각의 인디게이터
            $inDicatorBtn.each(function(e){
                var ind_ = $(this).index();
                $(this).on({
                    click : function(){
						cnt = ind_;
                        goToslide();
                    }
                })
            });

            //슬라이드 pre, nex / btn
            function prevSlide(){
                cnt--;
                goToslide();
            }
            function nextSlide(){
                cnt++;
                goToslide();
            }
            $prevArrow.on({
                click : function(){
                    prevSlide();
                }
            })
            $nextArrow.on({
                click : function(){
                    nextSlide();
                }
            })

            // var teamFigcaption = $('.figcaption');

            //     $teamFigcaption.on({
            //         focus : function(){
            //             alert('ddd');
            //         }
            //     })

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

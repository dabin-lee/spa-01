$(function(){
    // section--team
    var $maNagerLi = $('.tiles > li'),
        $maNagerProfile = $maNagerLi.find(' > figcaption'),
        $snsBtn = $maNagerProfile.find('.btn__sns'),
        $tabList = $('#tablist'),
        $tabLi = $('.tab'),
        $Tab = $tabList.find('> a'),
        $z_idx = 0;

    console.log($Tab);
        // 마우스 오버, 포커스 인
        $maNagerLi.on({
            mouseenter:	function(){
                $(this).addClass('on');
                $Tab.focus()
                $tabList.find('li').eq().attr('tabIndex', 0);
            },
            focus:	function(){  //키보드접근 focusin == focus    커보드 떠날 때 focusout == blur
                $(this).addClass('on');
                $Tab.focus()
            }
        });
        $snsBtn.on({
            focus:	function(){
                $Tab.focus()
            }
        });

        // 마우스 리브 , 포커스 리브
        $maNagerLi.on({
            mouseleave:	function(){
                $(this).removeClass('on');
                $(this).find('.tablist > li > a').attr('tabindex', 0);
            }
        });

        $snsBtn.on({
            blur:	function(){
                $(this).removeClass('on');
            }
        });


        $maNagerLi.on({
            focusout:	function(){
                $(this).removeClass('on');
                $(this).find('.tablist > li > a').attr('tabindex', 0);
            }
        });



        $maNagerLi.on({
            blur:	function(){
                $Tab.focus(function(){
                    alert('dadz');
                    $(this).last().focus();
                    $('.manager--profile').removeClass('on');
                });
            },
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

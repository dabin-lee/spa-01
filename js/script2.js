(function($){

// section--testimonials
var slideGroup = ('.article__group--testimonials'),
    slides = ('.indicator--article'),
    slideCount = slides.length;

// var inDicatorList = ('.slider__indicator--btn'),
//     inDicatorBtn = inDicatorList.find('> li');

        // 슬라이드
        var cnt = 0;

        function slideWrap(){
            slideGroup.animate({left : -100 + '%'},800,function(){
                if(cnt >= 3){cnt = 0;}
                this.animate({left : -100 + '%' * cnt}, 0);
            });
        };

        // count
        function coUnt(){
            cnt++;
            slideWrap();
        }
        // timer
        function Timer(){
            setInterval(() => {
                slideWrap
            }, 3000);
        }
        Timer();

    })();

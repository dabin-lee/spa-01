<!--
2.	접근성 고려
이제 접근성을 고려해 볼까요.
접근성 검수는 IE를 기준으로 합니다.
접근성 심사 업체가  PC는 IE를 기준으로 하고 있습니다.

1 a, button, input 요소는 키보드 tab으로 접근이 가능 해야 합니다.
2. a, button, input 요소는 포커스(초점)가 갔을 때 표시가 되어야 합니다.
- 보통 reset.css 에서 디자인 적으로 outline을 제거하는데
해당 요소들에는 outline이든 , border든 포커스가 갔을 때 해 요소에 표시가 되여야 합니다.
3. section—testimonials  인디게이터, 추가할 버튼도 키보드로 접근 가능 및 기능 구현이 되어야 합니다.
4. section—team도 현재는 마우스로만 접근 가능합니다. 키보드 접근으로 해당 기능 사용할 수 있게 해주세요. -->


### 탭 색인 생성
- tabindex

```
<p tabindex="0">p 태그</p>
<span tabindex="-1">span 태그</span>
<div tabindex="1">div 태그</div>
```

- div > p 태그 순서로 접근
- 0과 1은 tab탭으로 접근 가능합니다. 하지만 -1의 값은 tab으로 접근하지 못함
- a, button, input 태그 등이 tab의 접근이 가능하더라도 -1의 값을 가지면 접근을 차단한다.
[tabindex 주의 사항]


### 포커스링
- 출처 : https://nuli.navercorp.com/community/article/1132995
- 접근성 좋은 포커스링은 어떻게 제공하는가?
  - 포커스링은 CSS 가상 선택자(pseudo Selector)중 하나인 :focus 로 모든 그래픽 기반의 브라우저에게 보편적으로 제공할 수 있다.
  - 파이어폭스의 경우, :-moz-focusring 선택자를 통해 제공이 가능

  [가시성을 향상시켜 접근성을 높이기]
  - 초점을 받은 요소의 색상을 눈에 잘 띄도록 바꾸는 방법 사용
  - 최소 2px 정도의 두껍고 대비가 높은 색의 실선(solid)를 사용한 테두리 사용

  :one:[[outline 속성]]
    - css의 outline 속성으로 선을 제공하는 방식
    - ex) button:focus,button {outline:solid 3px #0088ff;}
    - 장점은 보편적인 방법이기 때문에 모든 브라우저에서 무리 없이 동일한 디자인을 제공하기 수월하다는 점
    - border가 제공된 요소의 디자인을 변경하지 않고 동시에 사용할 수 있다는 장점
    - border-radius나 clip-path 등으로 요소의 모양을 변형한 요소에 대응할 수 없다는 치명적인 단점
    - outline 사용시 고려사항
      - 요소보다 낮은 높이 계층에 테두리가 부여되기에 콘텐츠 간격을 고려해야 한다.
      - 간격이 너무 좁은 연속된 콘텐츠에 outline으로 포커스링 제공할 경우 일부분이 콘텐츠 요소에 가려지게 된다.



  :two:[[border 속성]]
    - outline 속성과 거의 유사한 방법, Border 속성을 사용하여 포커스링 테두리 스타일을 주는 방법
    - 테두리 속성이라 기존에 있던 테두리를 대체하는 것이 단점
    - border-radius 등의 형태를 변환하는 속성과 호환되어 형태에 맞는 포커스링을 제공할 수 있다.
    - __디자인상 테두리가 없는 링크(a) 요소와 같은 곳에 사용 시 적합한 기법__
      ```
      button:focus {
      outline:none;
      border-style:solid;
      border-width:1px 3px 3px 3px;
      border-color: #88dfff #228fbf #33bfff #228fbf;
      }
      ```
    - border 사용시 고려사항
      - 초점을 받은 요소의 크기가 늘어나 레이아웃 컨테이너의 크기를 벗어나 넓이가 맞지 않아 레이아웃이 의도와 다르게 표시되는 현상이 발생
      - border로 포커스링 제공 시 컨텐츠 크기 등을 반드시 고려 후 계산하여 디자인을 제공

  :three:[[box-shadow]]
    - border와 시각적 비슷한 효과를 제공하는 방법
    - 한 번에 여러 겹의 색상을 사용 할 수 있고, __border와 outline이 동시에 사용 가능__
    - 반면에 border와 같이 한 면의 색상을 따로 주는 등의 디자인이 어려운 단점을 갖고 있다.
    - 실선(solid)을 제외한 border나 outline에서 제공하는 점선(dotted), 마루형 선(ridge), 대시 선(dashed) 등의 다양한 선 디자인을 구현하기 어려운 점
    - border-radius에도 대응이 가능한 기법이며, CSS3 속성이기 때문에 __구형 internet Explorer에서 작동하지 않는 점을 유의__
      ```
      button:focus {
      outline:none;
      border-style:solid;
      border-width:1px 3px 3px 3px;
      border-color: #88dfff #228fbf #33bfff #228fbf;
      }
      ```

### focus & active
- :focus 요소가 현재 입력을 수신하도록 선택된 상태
- :active 요소가 현재 사용자에 의해 활성화 되고 있는 상태

<!--

5. 새 창 기능은 정상적으로 되고 있지만 의미가 잘못되어 있습니다.
a태그 target 개념 이론 정리 해서 git에 올려 주시고
과제에도 반영해 주세요.
target="_blank|_self|_parent|_top|framename"

요청 기한  8월 7일

 -->

### alt / title
- [img태그]
  -  alt 값 : 이미지가 외부 주소이기에 잘못되었거나 서버에 문제가 생기면 이미지를 못 읽어오기에 alt속성이 해당 이미지를 대체하여 나타낸다.<br>
    (blind 를 써서 긴 텍스트를 정리해주는 방법은 좋으나, 한 문장 정도의 글은 alt로 채워넣어도 된다는 점.)


- [a태그]
  - title 속성 : 해당 요소의 제목과 같은 역할
  - a 요소의 텍스트 또는 이미지 등의 콘텐츠가 링크 정보를 정확하게 제시하고 있다면, title 속성을 사용할 필요는 없음
  - a 태그안에 이미 alt값으로 정보 표시 되어있기때문에 title까지 넣는건 지나침. 접근성 상에서도 스크린리더가 두번 읽게 됨으로 좋지않음.
  - list a 태그 title값은 동일하게 할 것. (새 창 열림)
  - <a> 요소는 앵커(anchor)로써, 문서 간의 연결, URI 참조가 주된 목적


- [button태그]
  - `<button> `요소는 클릭함으로써 이벤트를 발생시키는게 주된 목적
  - 기능을 구현하는 것은 (ex. 팝업창을 띄우거나 어떤 요소를 숨기거나 보이게 하거나 등등) button 요소를 사용
  - 페이지 내 기능 a > button 으로 예시)
```
<div class="font-control">
  <ul class="btn-article">
    <li class="up"><a href="#" title="글자 크기 확대하기">글자 확대 버튼</a></li>
    <li class="down"><a href="#" title="글자 크기 줄이기">글자 축소 버튼</a></li>
    <li class="basics"><a href="#" title="글자 크기 기본">글자 기본으로 보기</a></li>
  </ul>
  <!--
    이런 경우가 a 대신 button type="button" 을 쓰라는 경우입니다.
    페이지 내의 기능이 들어간 경우.
  -->
</div>
```

[target 속성]
| target 속성 |                                  내용                                  |
|:-----------:|:----------------------------------------------------------------------:|
|    _blank   | 새 윈도우 창을 열어서 웹페이지를 연다. 기존의 창은 그대로 남겨져 있음. |
|    _self    |   현재 윈도우 창에서 그대로 링크 된 웹 페이지를 연다. (현재의 프레인)  |
|   _parent   |            현재 프레임의 부모 프레임에서 새 웹페이지가 열림.           |
|     _top    |         최상위 프레임에서 열림. 현재 창에서 full window로 열기         |
| framename   |          iframe요소의 이름을 명시함                                    |


- _blank title : _blank를 사용한 경우, "ooo 사이트 새창으로 이동" 과 같이 새창이 열림을 명시적으로 말씀해 주는 바람직 합니다.
target="_blank"를 사용한 경우 스크린리더에서 "새창열림"으로 인식가능 하므로, title에 "새창열림"을 적지 않아도 관찮습니다.
하지만 스크립트 등을 이용하여 새창을 만드는 경우는 반드시 "새창열림"을 명시해야 합니다.

[그외]
- a 태그 하나만 적기 보단 div, span, ul li 감싸주는게 css 관련
- 또는 아래와 같이 a > span 사용
	- `<a href="#" title="전체 목록열기"><span>전체메뉴</span></a>`
- 인디게이터는 주로 a보단 button으로 사용하는걸 더 추천드립니다.




nav안에 a는 alt안씀?

/*
  제이쿼리 필수 핵심이론 - 메서드 (페이드 효과)

  페이드 : 투명도(opacity) 가 서서히 진해지고 흐려지는 현상

  ms : 지속시간 , 아무값 없을 시 Default

  ms가 단어면 '' 쳐서 사용

  fadeIn(ms) : 선택요소 페이드로 나타나게 함
  fadeOut(ms) : 선택요소 페이드로 사라지게 함
  fadeToggle(ms) : 선택요소를 페이드로 나타나게/사라지게 토글

*/

$('.show-btn').click(function(){
    $('.container div').fadeIn();
});

$('.hide-btn').click(function(){
    $('.container div').fadeOut();
});

$('.toggle-btn').click(function(){
    $('.container div').fadeToggle();
});
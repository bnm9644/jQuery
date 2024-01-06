
/*
  제이쿼리 필수 핵심이론 - 메서드 (탐색)

  children() - 선택요소의 바로 아래 단 개인 자식요소만 선택

  siblings() - 선택요소의 형제요소 선택

  stop() - 애니메이션 한번 실행시 전에 실행하던건 삭제하는 기능
*/

//$('.menu li').mouseenter(function(){
  //$('.sub-menu').slideDown();
//});

$('.menu li').mouseenter(function(){
  //$(this).slideDown(); 
  //★ this: 위의 자기 자신, 현재는 .menu li가 된다.
  $(this).children('.sub-menu').stop().slideDown(); 
  // 자식요소가 1개만 있으면 필요 없음.
});

$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').stop().slideUp(); 
});
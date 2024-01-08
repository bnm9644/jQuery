
/*
  제이쿼리 필수 핵심이론 - 메서드 (탐색)

  ★ siblings() - 선택요소의 형제요소 선택,
     siblings(selector) - 선택요소의 형제요소 中, selector 선택

  stop() - 애니메이션 한번 실행시 전에 실행하던건 삭제하는 기능
*/ 

$('.btn span').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

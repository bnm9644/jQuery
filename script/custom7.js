
/*
  ★ 제이쿼리 필수 핵심이론 - 메서드 (탐색) ★

  ★ siblings() - 선택요소의 형제요소 선택,
     siblings(selector) - 선택요소의 형제요소 中, selector 선택

     next() - 선택요소의 바로 '다음'에 위치한 형제요소 선택 , nextAll() - 모두 선택
     prev() - 선택요소의 바로 '이전'에 위치한 형제요소 선택 , prevAll() - 모두 선택

     $(this).siblings(".p").addClass("active"); 
     - this를 제외한 형제 "선택자" 중 .p 요소를 선택하여 그것만 active class 처리한다!
     - 선택자 없으면 '형제' 태그 전부 다 처리.
    
    $('.menu li').siblings();             : menu li 태그의 위치와 동일한 형제 태그를 모두 검색
    
*/ 

$('.btn span').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});
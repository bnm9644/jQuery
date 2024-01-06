$('.show-btn').click(function(){
    $('div').show();
});

$('.hide-btn').click(function(){
    $('div').hide();
});

$('.slide-btn').mouseenter(function(){
    $('div').show();
});

$('.slide-btn').mouseleave(function(){
    $('div').hide();
});

// 제이쿼리 필수 이론, 
// 선택자 종류 - CSS 클래스/아이디/태그 선택자 , this
// 함수 종류 - click(클릭) / mouseenter(마우스 커서 위) / mouseleave(마우스 커서 뗌) 
/* 메서드 종류 - slideDown, slideUp, - 슬라이드로 내려가고 올라감
                     stop, 
                     show, hide, 
                     fadeIn, fadeOut, 
                     addClass, removeClass - class 넣고 뺌
                     children, siblings - 선택자 탐색
*/                     
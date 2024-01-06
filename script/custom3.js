/*
    제이쿼리 필수 핵심이론 , 메서드 (보이기/감추기)

    $('선택자').함수(function() {
        $('선택요소').메서드();
    });
    
    show() - 선택요소 보이기
    hide() - 선택요소 감추기
    toggle() - 선택요소 보이기/감추기
    slideDown() - 선택요소 서서히 보이기
    slideUp () - 선택요소 서서히 감추기
    slideToggle() - 선택요소 서서히 보이기/김추기
    
 */

$('.show-btn').click(function(){
    $('.container div').show();
});

$('.hide-btn').click(function(){
    $('.container div').hide();
});

/*
$('.toggle-btn').click(function(){
    $('.container div').toggle();
});
*/

$('.toggle-btn').click(function(){
    $('.container div').slideToggle(); // 슬라이드 토글
});

$('.show-slide-btn').click(function(){
    $('.container div').slideDown();   // 슬라이드 내리면서 노출
});

$('.hide-slide-btn').click(function(){
    $('.container div').slideUp();     // 슬라이드 말면서 숨김
});
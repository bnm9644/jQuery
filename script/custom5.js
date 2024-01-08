
/*
  제이쿼리 필수 핵심이론 - 메서드 (클래스 제어)

  addClass(ms) : 선택요소 클래스 넣기
  removeClass(ms) : 선택요소 클래스 뻬기
  toggleClass(ms) : 선택요소를 클래스 넣고 빼기
  hasClass() : 선택요소에 클래스가 존재여부를 파악, True/False 로 리턴
*/

$('.add-btn').click(function(){
  $('.container div').addClass('active'); // .적으면 안됨!
});

$('.remove-btn').click(function(){
  $('.container div').removeClass('active');
});

$('.toggle-btn').click(function(){
  $('.container div').toggleClass('active');
});

if($('.container div').hasClass('active')) {
   console.log('true'); 
} else {
   console.log('false'); 
}

/*
  ★ 제이쿼리 필수 핵심이론 - 메서드 ★

  - append()    - 선택된 요소의 마지막 (끝) 에 새 소스 추가
  - prepend()   - 선택된 요소의 첫번째 (시작) 에 새 소스 추가
  - remove()    - 선택된 요소 삭제
  - wrap()      - 선택된 요소의 부모태그 생성
  - unwrap()    - 선택된 요소의 부모태그 삭제
  - html ()     - 선택된 요소의 내용을 새로운 HTML 요소로 변경 
  - text ()     - 선택된 요소의 내용의 새로운 text 변경
  - each (callback) - 콜백함수 내용 반복, 반복문!
  - first()     - 선택된 요소 중 첫번쨰 요소 선택
  - last()      - 선택된 요소 중 마지막 요소 선택 
  - eq()        - 선택된 요소 중 전달받은 인덱스 번호에 해당하는 요소 선택
  - not ()      - 선택된 요소가 아닐떄 
  - slice(a)    - 선택된 요소 중 a번만
  - slice(a,b)  - 선택된 요소 중 a번쨰 부터 b번째 까지
  - width, height - 선택된 요소 너비, 높이
  - offset, position - 선택된 요소 위치
  - scrollLeft, scrollTop - 선택된 요소 스크롤 위치
  - 대체 요소.replaceAll(선택된 요소) - 선택된 요소를 대체 요소로 변경
  - attr(a) - 선택된 요소의 속성을 a로 바꿈, attr(a,b) - 선택된 요소의 속성을 a에서 b로 변경
  - removeAttr() - 선택된 요소의 속성 삭제
  - prop({a:b}) - 선택된 요소의 지정된 프로퍼티를 전달받은 a:b로 설정,
  - removeProp("a") - 선택된 요소의 프로퍼티 삭제 


  ex)
    $('.menu li').append('<a></a>');      : li태그들 밑에 a태그 추가 
    $('<a></a>').appendTo('.menu li');    : li태그들 밑에 a태그 추가 
    
    $('.menu li').prepend('<a></a>');     : li태그들 '위'에 a태그 추가 
    $('<a></a>').prependTo('.menu li');   : li태그들 '위'에 a태그 추가 
*/


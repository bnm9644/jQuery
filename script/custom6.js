/*
  제이쿼리 필수 핵심이론 - 메서드 (탐색)

  parents() - 선택요소의 바로 위 부모 태그를 선택

  children() - 선택요소의 바로 아래 단 개인 자식요소만 선택

  siblings() - 선택요소의 형제요소 선택

  find() - 선택요소의 자식요소 중 지정한 요소 '모두' 검색 하는 기능
  
  stop() - 애니메이션 한번 실행시 전에 실행하던건 '삭제' 하는 기능

  ex)
    $('.menu li').parents();              : li태그 바로 위의 부모 태그인 ul.menu, body, html 태그를 모두 검색
    $('.menu li').parents('body');        : li태그 바로 위의 부모 태그인 ul.menu, body, html 中 body 태그를 검색 
    $('.menu li').children();             : li태그 밑의 자식 태그인 a,div(sub-menu) 태그 두개를 모두 검색 
    $('.menu li').children('a');          : li태그 밑의 자식 태그인 a를 모두 검색 
    $('.menu li').siblings();             : 현재 선택자의 위치와 동일한 형제 태그를 모두 검색 
    $('.menu li').children().find('div'); : li 태그 밑의 자식 태그들 중 div를 검색 
    $('.menu li').children().find('*');   : li 태그 밑의 자식 태그들 모두 검색
*/

/*  
    $('.menu li').mouseenter(function(){
      $('.sub-menu').slideDown();
    });
*/

$('.menu li').mouseenter(function(){
  /*
    $(this).slideDown(); 
    ★ this: 위의 자기 자신, 현재는 .menu li가 된다.
  */
  $(this).children('.sub-menu').stop().slideDown(); 
  // 자식요소가 1개만 있으면 필요 없음.
});

$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').stop().slideUp(); 
});

/* 
★ mouseleave 와 mouseenter의 합인 hover - hover(mouseenter시 콜백, mouseleave시 콜백)
  <html>
    <head>
        <style>
            .reverse{
                background: Red;
                color:Yellow;
            }
        </style>
        <script src='https://code.jquery.com/jquery-3.3.1.js'></script>
        <script>
                $(document).ready(function(){
                    //hover : 1. mouseenter,2. mouseleave
                    $('h3').hover(function(){
                        $(this).addClass('reverse');
                    },function(){
                        $(this).removeClass('reverse');
                    });
                });
        </script>
    </head>
    <body>
        <h3>header-0</h3>
        <h3>header-1</h3>
        <h3>header-2</h3>
    </body>
</html>
*/

/*
  제이쿼리 필수 핵심이론 - 메서드 (탐색)

  children() - 선택요소의 바로 아래 단 개인 자식요소만 선택

  siblings() - 선택요소의 형제요소 선택

  find() - 선택요소의 자식요소 중 지정한 요소 '모두' 검색 하는 기능
  
  stop() - 애니메이션 한번 실행시 전에 실행하던건 '삭제' 하는 기능
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

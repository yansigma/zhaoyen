
    // 當畫面元素（靜態元素）載入完成後才執行程式
$(document).ready(function(){

    //function(){要執行的動作}
    // 畫面元素載入完成後要執行的程式
    // TODO: 1 啟用WOW.js
    new WOW().init();
    // TODO: 2-1 設定.nav-link的點擊事件
    // 選擇.navbar裡面所有的.nav-link ''文字字串
    $('.navbar .nav-link').click(function(){
        // TODO: 2-2 取得移動目標
        // $(this): 被點擊的.nav-link
        //取得屬性元素屬性的值
         const target = $(this).attr('href');  
         console.log(target);
        // #introSection
        // TODO: 2-3 取得移動目標的座標
        // .offset() => { top: 200, left: 0 }
        const position = $(target).offset().top;
        console.log(position);
        // TODO: 2-4 使用動畫移動到目標的座標
        // 導覽列的高度
        //    先停止目前有在執行的動畫.stop()，再執行新的動畫
        // .animate({物件}, 動畫秒數-單位為千分之一秒)
        const navberhight = 72;
        $('html,body').animate({
            scrollTop : position - navberhight
        },500);
      });
});

window.onload=function(){
   var linkbt01=document.getElementById("linkbt01");
   var light01=document.getElementById('light01');
   var closebt01=document.getElementById("closebt01");
   var fade01=document.getElementById('fade01');

   var linkbt02=document.getElementById("linkbt02");
   var light02=document.getElementById('light02');
   var closebt02=document.getElementById("closebt02");
   var fade02=document.getElementById('fade02');

   var linkbt03=document.getElementById("linkbt03");
   var light03=document.getElementById('light03');
   var closebt03=document.getElementById("closebt03");
   var fade03=document.getElementById('fade03');

   var linkbt04=document.getElementById("linkbt04");
   var light04=document.getElementById('light04');
   var closebt04=document.getElementById("closebt04");
   var fade04=document.getElementById('fade04');

   var linkbt05=document.getElementById("linkbt05");
   var light05=document.getElementById('light05');
   var closebt05=document.getElementById("closebt05");
   var fade05=document.getElementById('fade05');

   var linkbt06=document.getElementById("linkbt06");
   var light06=document.getElementById('light06');
   var closebt06=document.getElementById("closebt06");
   var fade06=document.getElementById('fade06');

   linkbt01.onclick=function(){
     light01.style.display='block';
     fade01.style.display='block';
   }

   linkbt02.onclick=function(){
     light02.style.display='block';
     fade02.style.display='block';
   }

    linkbt03.onclick=function(){
     light03.style.display='block';
     fade03.style.display='block';
   }

   linkbt04.onclick=function(){
     light04.style.display='block';
     fade04.style.display='block';
   }

   linkbt05.onclick=function(){
     light05.style.display='block';
     fade05.style.display='block';
   }

    linkbt06.onclick=function(){
     light06.style.display='block';
     fade06.style.display='block';
   }


   closebt01.onclick=function(){
     light01.style.display='none';
     fade01.style.display='none';
   }

   closebt02.onclick=function(){
     light02.style.display='none';
     fade02.style.display='none';
   }
  
     closebt03.onclick=function(){
     light03.style.display='none';
     fade03.style.display='none';
   }

   closebt04.onclick=function(){
     light04.style.display='none';
     fade04.style.display='none';
   }

   closebt05.onclick=function(){
     light05.style.display='none';
     fade05.style.display='none';
   }
  
     closebt06.onclick=function(){
     light06.style.display='none';
     fade06.style.display='none';
   }
}


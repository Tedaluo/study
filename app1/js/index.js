










var obj={
  data1: function(){
    $('.banner').unslider({
      speed: 500,               
      delay: 3000,              
      complete: function() {},  
      keys: true,               
      dots: true,               
      fluid: false              
    });
  }
   
//   data1: function(){
//     var ban=document.getElementById('banner');
//     var pics=document.getElementById('pic');
//     var liArr=pics.children;
//     var tips=document.getElementById('tips');
//     var lis=tips.children;
//     var target=0,step=0,distance=0,timer=0, timer=null;
//     var widths=liArr[0].offsetWidth;
//     // console.log(widths);960
//     // 动画框架
//     var key=0,square=0;
//     for(var i=0;i<lis.length;i++){
//       lis[i].index=i;
//       lis[i].onmouseover=function(){
//         clearInterval(timer);
//         for(var j=0;j<lis.length;j++){
//           lis[j].className='';
//         }
//         this.className='current';
//         key=square=this.index;
//         animate(pics,-this.index*960);
//       }
//       lis[i].onmouseout=function(){
//         timer=setInterval(autoPlay,1000);
//       }
//     }
//     timer=setInterval(autoPlay,1000);
//     function autoPlay(){
//       key++;
//       if(key>lis.length){
//         pics.style.left=0;
//         key=1;
//       }
//       animate(pics,-key*960);
//       square++;
//       if(square>lis.length-1){
//         square=0;
//       }
//       for(var i=0;i<lis.length;i++){
//         lis[i].className='';
//       }
//       lis[square].className='current';
//     }; 
//   },
//   data2:function(){
//     //产品展示动画：
//     var bottomParent=document.getElementById('bottomBox');
//     var ul=bottomParent.getElementsByTagName('ul')[0];
//     var liArr=ul.children;
//     var timer=null,key=0;
//     // console.log(liArr[0].offsetWidth) 148;
//     timer=setInterval(autoPlay,1000);
//     function autoPlay(){
//       key++;
//       if(key>liArr.length){
        
//         ul.style.left = 0+'px';
//         key = 1;
//       }
//       animate(ul,-key*148);
//     }

//   },
//   data3:function(){
//     var consult=document.getElementById('consult');
//     window.onscroll=function(){
//       consult.style.top=document.body.scrollTop+document.documentElement.scrollTop+60+"px";
//     }
//   },  
// }
// function animate(ele,target){
//   clearInterval(ele.timer);
//   var speed = ele.offsetLeft < target ? 15 : -15;
//   ele.timer = setInterval(function() {
//     var result = target - ele.offsetLeft;
//     ele.style.left = ele.offsetLeft + speed  + "px";
//     if(Math.abs(result) <= 15) {
//       ele.style.left = target + "px";
//       clearInterval(ele.timer);
//       // console.log(1);
//     }
//   },10) 
}
window.onload=function(){
  obj.data1();
  
}
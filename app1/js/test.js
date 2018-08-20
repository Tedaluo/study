window.onload=function(){
  var ban=document.getElementsByClassName('banner')[0];
  var pics=ban.getElementsByClassName('pic')[0];
  var liArr=pics.getElementsByTagName('li');
  var tips=document.getElementById('tips');
  var lis=tips.children;
  var target=0,step=0,distance=0,timer=0, timer=null;
  var widths=liArr[0].offsetWidth;
  // console.log(widths);960
  // 动画框架
  var key=0,square=0;
  for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
      clearInterval(timer);
      for(var j=0;j<lis.length;j++){
        lis[j].className='';
      }
      this.className='current';
      key=square=this.index;
      animate(pics,-this.index*960);
    }
    lis[i].onmouseout=function(){
      timer=setInterval(autoPlay,1000);
    }
  }
  timer=setInterval(autoPlay,1000);
  function autoPlay(){
    key++;
    if(key>lis.length){
      pics.style.left=0;
      key=1;
    }
    animate(pics,-key*960);
    square++;
    if(square>lis.length-1){
      square=0;
    }
    for(var i=0;i<lis.length;i++){
      lis[i].className='';
    }
    lis[square].className='current';
  };


  function animate(ele,target){
    clearInterval(ele.timer);
    var speed = ele.offsetLeft < target ? 15 : -15;
    ele.timer = setInterval(function() {
      var result = target - ele.offsetLeft;
      ele.style.left = ele.offsetLeft + speed  + "px";
      if(Math.abs(result) <= 15) {
        ele.style.left = target + "px";
        clearInterval(ele.timer);
        // console.log(1);
      }
    },10) 
  }
  //产品展示动画：
  var bottomParent=document.getElementById('bottomBox');
  var ul=bottomParent.getElementsByTagName('ul')[0];
  var liArr=ul.children;
  // console.log(liArr[0].offsetWidth) 148;

  

  
}

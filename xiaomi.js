window.onload=function() {

	  let aside=document.getElementsByClassName("liebiao")[0];
    let lis=aside.getElementsByTagName("li");
    let item=document.getElementsByClassName("item");
    let imglists=document.getElementsByClassName("imglist")[0];
    let imgs=imglists.getElementsByTagName("li");
    let btns=document.getElementsByClassName("circle")[0];
    let btnlis=btns.getElementsByTagName("li");
    let banner=document.getElementsByClassName("banner")[0];
    let left=document.getElementsByClassName("banner-left")[0];
    let right=document.getElementsByClassName("banner-right")[0];
    for(let i=0;i<lis.length;i++){

    	lis[i].onmouseover=function(){
    		item[i].style.display="block";
    	}
    	lis[i].onmouseout=function(){
    		item[i].style.display="none";
    	}
    }
     

     let num=0;
     let t=setInterval(move,3000);
     function move(){
         num++;
        if(num==imgs.length){
          num=0;
          }
        for(let j=0;j<imgs.length;j++){
            imgs[j].style.display="none";
            btnlis[j].style.background="rgba(0,0,0,0)";
          }
         imgs[num].style.display="block";    
        btnlis[num].style.background='#dddddd';
       }
       banner.onmouseover=function(){
             clearInterval(t);
    }
       banner.onmouseout=function(){
          t=setInterval(move,1000);
    }
     function moveL(){
         num--;
        if(num<0){
          num=imgs.length-1;
          }
        for(let j=0;j<imgs.length;j++){
            imgs[j].style.display="none";
            btnlis[j].style.background="rgba(0,0,0,0)";
          }
         imgs[num].style.display="block";    
         btnlis[num].style.background="#dddddd";
       }
       banner.onmouseover=function(){
             clearInterval(t);
    }
       banner.onmouseout=function(){
          t=setInterval(move,1000);
    }

     for(let i=0;i<btnlis.length;i++){
     	btnlis[i].onmouseover=function(){
           for(let j=0;j<imgs.length;j++){
           	   imgs[j].style.display="none";
               btnlis[j].style.background="rgba(0,0,0,0)";
           }
           imgs[i].style.display="block";
           btnlis[i].style.background="#dddddd";
           num=i;
           }
    }
    right.onclick=function (){
          move();
    }

   left.onclick=function(){
     moveL();
   }

     
}

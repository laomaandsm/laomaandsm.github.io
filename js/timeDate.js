// var now = new Date(); 
// function createtime() { 
//     var endtime= new Date("26/12/2023 19:08:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒//我这里是倒计时，所以是结束时间
//     now.setTime(now.getTime()+250); 
//     days = (endtime - now ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days); 
//     hours = (endtime-now ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours); 
//     if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (endtime-now ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum); 
//     mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;} 
//     seconds = (endtime-now ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); 
//     snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;} 
//     document.getElementbyId("timeDate").innerHTML = "本站可能还有 "+dnum+" 天 "; 
//     document.getElementbyId("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"; 
// } 
// setInterval("createtime()",250);
// setInterval(() => {
//   let end_time = Math.round(new Date('2023-12-26 19:08:00').getTime() / 1000); //在此行修改建站时间
//   let timestamp = Math.round((new Date().getTime()) / 1000);
//   let second =  end_time-timestamp;
//   let time = new Array(0, 0, 0, 0, 0);

//   var nol = function(h){
//     return h>9?h:'0'+h;
//   }
//   if (second >= 365 * 24 * 3600) {
//     time[0] = parseInt(second / (365 * 24 * 3600));
//     second %= 365 * 24 * 3600;
//   }
//   if (second >= 24 * 3600) {
//     time[1] = parseInt(second / (24 * 3600));
//     second %= 24 * 3600;
//   }
//   if (second >= 3600) {
//     time[2] = nol(parseInt(second / 3600));
//     second %= 3600;
//   }
//   if (second >= 60) {
//     time[3] = nol(parseInt(second / 60));
//     second %= 60;
//   }
//   if (second > 0) {
//     time[4] = nol(second);
//   }
// //   if ((Number(time[2])<22) && (Number(time[2])>7)){
// //     currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/糖果屋-营业中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
// //   }
// //   else{
// //     currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/糖果屋-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
// //   }
//   document.getElementById("workboard").innerHTML = currentTimeHtml;
// }, 1000);

var now=new Date;
function createtime(){now.setTime(now.getTime()+1e3);
    var e=new Date("08/01/2022 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),e_t=new Date("12/26/2023 19:08:00"),n=(e_t-now)/1e3/60/60/24,r=Math.floor(n),i=(e_t-now)/1e3/60/60-24*r,s=Math.floor(i);1==String(s).length&&(s="0"+s);
    var d=(e_t-now)/1e3/60-1440*r-60*s,l=Math.floor(d);1==String(l).length&&(l="0"+l);
    var g=(e_t-now)/1e3-86400*r-3600*s-60*l,b=Math.round(g);
    1==String(b).length&&(b="0"+b);
    let c="";
    c=s<18&&s>=9?`<img class='boardsign' src='https://lmandsm-img.pages.dev/img/haha-rocket.svg' title='吃饱睡够自由'><br> <div style="font-size:13px;font-weight:bold">本站还能飞行 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`:`<img class='boardsign' src='https://lmandsm-img.pages.dev/img/haha-rocket.svg' title='这是搬过来的~'><br> <div style="font-size:13px;font-weight:bold">本站还能飞行 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}
    setInterval((()=>{createtime()}),1e3);


    //var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);var e=new Date("08/01/2022 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),o=new Date("08/09/2022 00:00:00"),n=(now-o)/1e3/60/60/24,r=Math.floor(n),i=(now-o)/1e3/60/60-24*r,s=Math.floor(i);1==String(s).length&&(s="0"+s);var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);1==String(l).length&&(l="0"+l);var g=(now-o)/1e3-86400*r-3600*s-60*l,b=Math.round(g);1==String(b).length&&(b="0"+b);let c="";c=s<18&&s>=9?`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`:`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);
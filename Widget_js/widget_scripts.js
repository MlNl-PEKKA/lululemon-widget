function widget_main_active(){
  freeze=0;
  document.getElementById("widget_fullscreen").classList.remove("active");
  document.getElementById("widget_zs_zone").innerText=" ";
  document.getElementById("widget_zs_time").innerText="Hover for info";
  document.getElementById("widget_main").classList.toggle("active");
  document.getElementById("widget_main").classList.remove("extend");
  document.getElementById("widget_tab_box").classList.remove("active");
  document.getElementById("widget_arrow1_white").classList.remove("rotate");
  document.getElementById("widget_ext").classList.remove("extend");
  document.getElementById("widget_tab_box").classList.remove("active2");
  document.getElementById("widget_tab_box").classList.remove("extend");
  document.getElementById("widget_main_button_white").classList.toggle("rotate");
  document.getElementById("widget_custom1").classList.remove("active");
  document.getElementById("widget_custom2").classList.remove("active");
  document.getElementById("widget_custom3").classList.remove("active");
  document.getElementById("widget_custom4").classList.remove("active");
  document.getElementById("widget_custom5").classList.remove("active");
  document.getElementById("widget_custom6").classList.remove("active");
  document.getElementById("widget_custom7").classList.remove("active");
  document.getElementById("widget_settings_white").classList.remove("active");
  document.getElementById("widget_settings1").classList.remove("active");
  document.getElementById("widget_settings2").classList.remove("active");
  document.getElementById("widget_settings3").classList.remove("active");
  document.getElementById("widget_settings4").classList.remove("active");
  document.getElementById("widget_settings5").classList.remove("active");
}
function widget_settings_active(){
  freeze=0;
  document.getElementById("widget_fullscreen").classList.remove("active");
  document.getElementById("widget_zs_zone").innerText=" ";
  document.getElementById("widget_zs_time").innerText="Hover for info";
  document.getElementById("widget_main").classList.remove("extend");
  document.getElementById("widget_tab_box").classList.remove("active");
  document.getElementById("widget_arrow1_white").classList.remove("rotate");
  document.getElementById("widget_ext").classList.remove("extend");
  document.getElementById("widget_tab_box").classList.remove("active2");
  document.getElementById("widget_tab_box").classList.remove("extend");
  document.getElementById("widget_custom1").classList.remove("active");
  document.getElementById("widget_custom2").classList.remove("active");
  document.getElementById("widget_custom3").classList.remove("active");
  document.getElementById("widget_custom4").classList.remove("active");
  document.getElementById("widget_custom5").classList.remove("active");
  document.getElementById("widget_custom6").classList.remove("active");
  document.getElementById("widget_custom7").classList.remove("active");
  document.getElementById("widget_settings_white").classList.toggle("active");
  document.getElementById("widget_settings1").classList.toggle("active");
  document.getElementById("widget_settings2").classList.toggle("active");
  document.getElementById("widget_settings3").classList.toggle("active");
  document.getElementById("widget_settings4").classList.toggle("active");
  document.getElementById("widget_settings5").classList.toggle("active");
}
function widget_tab_active(){
  if(!freeze){
    document.getElementById("widget_fullscreen").classList.remove("active");
    document.getElementById("widget_zs_zone").innerText=" ";
    document.getElementById("widget_zs_time").innerText="Hover for info";
    document.getElementById("widget_tab_box").classList.toggle("active");
    document.getElementById("widget_arrow1_white").classList.toggle("rotate");
    document.getElementById("widget_settings_white").classList.remove("active");
    document.getElementById("widget_settings1").classList.remove("active");
    document.getElementById("widget_settings2").classList.remove("active");
    document.getElementById("widget_settings3").classList.remove("active");
    document.getElementById("widget_settings4").classList.remove("active");
    document.getElementById("widget_settings5").classList.remove("active");
  }
}
var def;
t=["widget_t1","widget_t2","widget_t3","widget_t4","widget_t5","widget_t6","widget_t7"];
offsets=["widget_offset1","widget_offset2","widget_offset3","widget_offset4","widget_offset5","widget_offset6","widget_offset7"];
dates=["widget_date1","widget_date2","widget_date3","widget_date4","widget_date5","widget_date6","widget_date7"];
timezones=["Australia/Melbourne","Asia/Shanghai","Asia/Hong_Kong","Asia/Calcutta","Europe/London","Canada/Eastern","Canada/Pacific"];
tz_names=["Melbourne","Shanghai","Hong Kong","India","London","Eastern time","Pacific Time"];
techie_offset=[];
techie_off=[];
date_format=["dd / MM / yy","MM / dd / yy","dd MMM, yyyy","MMM dd, yyyy"];
var mytechieoffset;
var start=900;
var end=1800;
var freeze=0;
var custom_time=0;
var cust_h=0,cust_m1=0,cust_m2=0;
var start_h=9,start_m1=0,start_m2=0;
var end_h=18,end_m1=0,end_m2=0;
var dateformat=0;
var time_format=0;
function widget_date_format(a){
  dateformat=a;
  document.getElementById("widget_dateformats1").classList.remove("active");
  document.getElementById("widget_dateformats2").classList.remove("active");
  document.getElementById("widget_dateformats3").classList.remove("active");
  document.getElementById("widget_dateformats4").classList.remove("active");
  switch(a){
    case 0:document.getElementById("widget_dateformats1").classList.add("active");break;
    case 1:document.getElementById("widget_dateformats2").classList.add("active");break;
    case 2:document.getElementById("widget_dateformats3").classList.add("active");break;
    case 3:document.getElementById("widget_dateformats4").classList.add("active");break;
  }
}
function widget_time_format(a){
  document.getElementById("widget_12hr").classList.remove("active");
  document.getElementById("widget_24hr").classList.remove("active");
  switch(a){
    case 0:document.getElementById("widget_12hr").classList.add("active");
          document.getElementById("widget_t1").classList.remove("active");
          document.getElementById("widget_t2").classList.remove("active");
          document.getElementById("widget_t3").classList.remove("active");
          document.getElementById("widget_t4").classList.remove("active");
          document.getElementById("widget_t5").classList.remove("active");
          document.getElementById("widget_t6").classList.remove("active");
          document.getElementById("widget_t7").classList.remove("active");
          document.getElementById("widget_up_white_hr0").classList.remove("active");
          document.getElementById("widget_up_white_m10").classList.remove("active");
          document.getElementById("widget_up_white_m20").classList.remove("active");
          document.getElementById("widget_up_white_mr0").classList.remove("active");
          document.getElementById("widget_down_white_hr0").classList.remove("active");
          document.getElementById("widget_down_white_m10").classList.remove("active");
          document.getElementById("widget_down_white_m20").classList.remove("active");
          document.getElementById("widget_down_white_mr0").classList.remove("active");
          document.getElementById("widget_up_white_hr1").classList.remove("active");
          document.getElementById("widget_up_white_m11").classList.remove("active");
          document.getElementById("widget_up_white_m21").classList.remove("active");
          document.getElementById("widget_up_white_mr1").classList.remove("active");
          document.getElementById("widget_down_white_hr1").classList.remove("active");
          document.getElementById("widget_down_white_m11").classList.remove("active");
          document.getElementById("widget_down_white_m21").classList.remove("active");
          document.getElementById("widget_down_white_mr1").classList.remove("active");
          document.getElementById("widget_up_white_hr2").classList.remove("active");
          document.getElementById("widget_up_white_m12").classList.remove("active");
          document.getElementById("widget_up_white_m22").classList.remove("active");
          document.getElementById("widget_up_white_mr2").classList.remove("active");
          document.getElementById("widget_down_white_hr2").classList.remove("active");
          document.getElementById("widget_down_white_m12").classList.remove("active");
          document.getElementById("widget_down_white_m22").classList.remove("active");
          document.getElementById("widget_down_white_mr2").classList.remove("active");time_format=0;
      break;
    case 1:document.getElementById("widget_24hr").classList.add("active");
    document.getElementById("widget_t1").classList.add("active");
    document.getElementById("widget_t2").classList.add("active");
    document.getElementById("widget_t3").classList.add("active");
    document.getElementById("widget_t4").classList.add("active");
    document.getElementById("widget_t5").classList.add("active");
    document.getElementById("widget_t6").classList.add("active");
    document.getElementById("widget_t7").classList.add("active");
    document.getElementById("widget_up_white_hr0").classList.add("active");
    document.getElementById("widget_up_white_m10").classList.add("active");
    document.getElementById("widget_up_white_m20").classList.add("active");
    document.getElementById("widget_up_white_mr0").classList.add("active");
    document.getElementById("widget_down_white_hr0").classList.add("active");
    document.getElementById("widget_down_white_m10").classList.add("active");
    document.getElementById("widget_down_white_m20").classList.add("active");
    document.getElementById("widget_down_white_mr0").classList.add("active");
    document.getElementById("widget_up_white_hr1").classList.add("active");
    document.getElementById("widget_up_white_m11").classList.add("active");
    document.getElementById("widget_up_white_m21").classList.add("active");
    document.getElementById("widget_up_white_mr1").classList.add("active");
    document.getElementById("widget_down_white_hr1").classList.add("active");
    document.getElementById("widget_down_white_m11").classList.add("active");
    document.getElementById("widget_down_white_m21").classList.add("active");
    document.getElementById("widget_down_white_mr1").classList.add("active");
    document.getElementById("widget_up_white_hr2").classList.add("active");
    document.getElementById("widget_up_white_m12").classList.add("active");
    document.getElementById("widget_up_white_m22").classList.add("active");
    document.getElementById("widget_up_white_mr2").classList.add("active");
    document.getElementById("widget_down_white_hr2").classList.add("active");
    document.getElementById("widget_down_white_m12").classList.add("active");
    document.getElementById("widget_down_white_m22").classList.add("active");
    document.getElementById("widget_down_white_mr2").classList.add("active");time_format=1;
    break;
  }
  document.getElementById("widget_start_time").innerText=twelve_hr(start,1,time_format);
  document.getElementById("widget_end_time").innerText=twelve_hr(end,1,time_format);
  document.getElementById("widget_custom_time").innerText=twelve_hr(custom_time,1,time_format);
  widget_custom(4);
  idealwins();
}
function widget_custom(a){
  switch(a){
    case +1:cust_h=(cust_h+1)%24;break;
    case +2:cust_m1=(cust_m1+1)%6;break;
    case +3:cust_m2=(cust_m2+1)%10;break;
    case 0:cust_h=(cust_h+12)%24;break;
    case -3:cust_m2-=1;if(cust_m2==-1){cust_m2=9;}break;
    case -2:cust_m1-=1;if(cust_m1==-1){cust_m1=5;}break;
    case -1:cust_h-=1;if(cust_h==-1){cust_h=23;}break;
    default:break;
  }
  custom_time=((cust_h*100)+(cust_m1*10)+cust_m2);
  document.getElementById("widget_custom_time").innerText=twelve_hr(custom_time,1,time_format);
  document.getElementById("widget_custom1").innerText=conv2(custom_time,0);
  document.getElementById("widget_custom2").innerText=conv2(custom_time,1);
  document.getElementById("widget_custom3").innerText=conv2(custom_time,2);
  document.getElementById("widget_custom4").innerText=conv2(custom_time,3);
  document.getElementById("widget_custom5").innerText=conv2(custom_time,4);
  document.getElementById("widget_custom6").innerText=conv2(custom_time,5);
  document.getElementById("widget_custom7").innerText=conv2(custom_time,6);
}
function widget_start(a){
  prev=start;
  prevh=start_h;
  prevm1=start_m1;
  prevm2=start_m2;
    switch(a){
      case +1:start_h=(start_h+1)%24;break;
      case +2:start_m1=(start_m1+1)%6;break;
      case +3:start_m2=(start_m2+1)%10;break;
      case 0:start_h=(start_h+12)%24;break;
      case -3:start_m2-=1;if(start_m2==-1){start_m2=9;}break;
      case -2:start_m1-=1;if(start_m1==-1){start_m1=5;}break;
      case -1:start_h-=1;if(start_h==-1){start_h=23;}break;
      default:break;
    }
    start=((start_h*100)+(start_m1*10)+start_m2);
    if(start>=0&&start<end){
      document.getElementById("widget_start_time").innerText=twelve_hr(start,1,time_format);
      idealwins();
    }
    else{
      start=prev;
      start_h=prevh;
      start_m1=prevm1;
      start_m2=prevm2;
    }
}
function widget_end(a){
    prev=end;
    prevh=end_h;
    prevm1=end_m1;
    prevm2=end_m2;
      switch(a){
        case +1:end_h=(end_h+1)%24;break;
        case +2:end_m1=(end_m1+1)%6;break;
        case +3:end_m2=(end_m2+1)%10;break;
        case 0:end_h=(end_h+12)%24;break;
        case -3:end_m2-=1;if(end_m2==-1){end_m2=9;}break;
        case -2:end_m1-=1;if(end_m1==-1){end_m1=5;}break;
        case -1:end_h-=1;if(end_h==-1){end_h=23;}break;
        default:break;
      }
      end=((end_h*100)+(end_m1*10)+end_m2);
      if(end<=2359&&end>start){
        document.getElementById("widget_end_time").innerText=twelve_hr(end,1,time_format);
        idealwins();
      }
      else{
        end=prev;
        end_h=prevh;
        end_m1=prevm1;
        end_m2=prevm2;
      }
}
function conv2(b,a){
  var h1=parseInt(b/100),m1=parseInt(b%100);
  var c=parseInt(mytechieoffset);
  var h2=parseInt(c/100),m2=parseInt(c%100);
  var h=h1-h2;
  var m=m1-m2;
  if(m>=60){m-=60;h++;}
  else if(m<0){m+=60;h--;}
  if(h<0){h+=24;}
  else if(h>=24){h-=24;}
  var h3=parseInt(parseInt(techie_offset[a])/100);
  var m3=parseInt(parseInt(techie_offset[a])%100);
  h+=h3;m+=m3;
  if(m>=60){m-=60;h++;}
  else if(m<0){m+=60;h--;}
  if(h<0){h+=24;}
  else if(h>=24){h-=24;}
  return twelve_hr((h*100+m),0,time_format);
}
function widget_load(){
  document.getElementById("widget_12hr").classList.add("active");
  document.getElementById("widget_dateformats1").classList.add("active");
  document.getElementById("widget_start_time").innerText=twelve_hr(start,1,time_format);
  document.getElementById("widget_end_time").innerText=twelve_hr(end,1,time_format);
  mytechieoffset=(luxon.DateTime.now()).toFormat("ZZZ");
  for(i=0;i<7;i++){
    techie_offset[i]=(luxon.DateTime.now().setZone(timezones[i])).toFormat("ZZZ");
    techie_off[i]=(luxon.DateTime.now().setZone(timezones[i])).toFormat("ZZ");
  }
  for(def=0;def<7;def++){
    if(techie_offset[def]==mytechieoffset){
      if((def==1)&&(luxon.DateTime.now().toFormat("z")=="Asia/Hong_Kong")){
          def++;
      }
      break;
    }
  }
  if(def==7){
    def=4;
  }
  widget_pin(def);
  widget_all_action();
  idealwins();
  updates();
}
function idealwins(){
    document.getElementById("w1").innerText=win(parseInt(techie_offset[0]));
    document.getElementById("w2").innerText=win(parseInt(techie_offset[1]));
    document.getElementById("w3").innerText=win(parseInt(techie_offset[2]));
    document.getElementById("w4").innerText=win(parseInt(techie_offset[3]));
    document.getElementById("w5").innerText=win(parseInt(techie_offset[4]));
    document.getElementById("w6").innerText=win(parseInt(techie_offset[5]));
    document.getElementById("w7").innerText=win(parseInt(techie_offset[6]));
}
function win(a){
  var myoffset=parseInt(mytechieoffset);
  var b;
  if(myoffset>a){
    b=a;a=myoffset;
  }
  else{
    b=myoffset;
  }
  var s1,s2,e1,e2;
  s1=conv(parseInt(mytechieoffset),sub(start,a));
  s2=conv(parseInt(mytechieoffset),sub(start,b));
  e1=conv(parseInt(mytechieoffset),sub(end,a));
  e2=conv(parseInt(mytechieoffset),sub(end,b));
  if(e1>s2&&e1<=end&&s2>=start)
    return(twelve_hr(s2,0,time_format)+" to "+twelve_hr(e1,0,time_format));
  else if(e2>s1&&e2<=end&&s1>=start)
    return(twelve_hr(s1,0,time_format)+" to "+twelve_hr(e2,0,time_format));
  else
    return("UNAVAILABLE");
}
function twelve_hr(time,cust,t_f){
  var h=parseInt(time/100),m=parseInt(time%100),mr="AM";
  if(h>=24){
    h-=24;
  }
  if(!t_f){
    if(h>=12){
      mr="PM";
      if(h>12){
        h-=12;
      }
    }
    if(h==0){
      h=12;
    }
  }
  if(h<10)
    h="0"+h;
  if(m<10)
    m="0"+m;
  if(!t_f){
    if(!cust)
      return(h+":"+m+" "+mr);
    else if(cust)
      return(h+" : "+m+" | "+mr);
  }
  else{
    return(h+":"+m);
  }

}
function conv(offset,time){
  var h1,m1,h2,m2,h,m;
  h1=parseInt(time/100);h2=parseInt(offset/100);m1=parseInt(time%100);m2=parseInt(offset%100);
  h=h1+h2;
  m=m1+m2;
  if(m>=60){m-=60;h++;}
  else if(m<0){m+=60;h--;}
  if(h<0){h+=24;}
  else if(h>=24){h-=24;}
  return((h*100)+m);
}
function sub(x,y){
  var h1,h2,m1,m2,h,m,val;
  h1=parseInt(x/100);h2=parseInt(y/100);m1=parseInt(x%100);m2=parseInt(y%100);
  h=h1-h2;
  m=m1-m2;
  if(m>=60){m-=60;h++;}
  else if(m<0){m+=60;h--;}
  if(h<0){h+=24;}
  else if(h>=24){h-=24;}
  val=(h*100)+m;
  if(val>=2400)
    val-=2400;
  return(val);
}
function updates(){
  document.getElementById("widget_main_zone").innerText=tz_names[def];
  if(!time_format)
    document.getElementById("widget_main_time").innerText=(luxon.DateTime.now().setZone(timezones[def])).toFormat("hh:mm:ss a");
  else
    document.getElementById("widget_main_time").innerText=(luxon.DateTime.now().setZone(timezones[def])).toFormat("HH:mm:ss");
  document.getElementById("widget_main_day").innerText=(luxon.DateTime.now().setZone(timezones[def])).toFormat("cccc");
  if(dateformat%2==0)
    document.getElementById("widget_main_date").innerText=(luxon.DateTime.now().setZone(timezones[def])).toFormat("dd LLLL, yyyy");
  else
    document.getElementById("widget_main_date").innerText=(luxon.DateTime.now().setZone(timezones[def])).toFormat("LLLL dd, yyyy");
  for(var i=0;i<7;i++){
    if(!time_format)
      document.getElementById(t[i]).innerText=(luxon.DateTime.now().setZone(timezones[i])).toFormat("hh:mm a");
    else
      document.getElementById(t[i]).innerText=(luxon.DateTime.now().setZone(timezones[i])).toFormat("HH:mm");
    document.getElementById(dates[i]).innerText=(luxon.DateTime.now().setZone(timezones[i])).toFormat(date_format[dateformat]);
    document.getElementById(offsets[i]).innerText="UTC "+(luxon.DateTime.now().setZone(timezones[i])).toFormat("ZZ");
  }
  setInterval(updates, 1000);
}
function widget_extend(){
  document.getElementById("widget_fullscreen").classList.remove("active");
  document.getElementById("widget_zs_zone").innerText=" ";
  document.getElementById("widget_zs_time").innerText="Hover for info";
  if(freeze==0)
    freeze=1;
  else
    freeze=0;
  document.getElementById("widget_main").classList.toggle("extend");
  document.getElementById("widget_ext").classList.toggle("extend");
  document.getElementById("widget_tab_box").classList.toggle("active2");
  document.getElementById("widget_tab_box").classList.toggle("extend");
  document.getElementById("widget_arrow1_white").classList.add("rotate");
  document.getElementById("widget_custom1").classList.toggle("active");
  document.getElementById("widget_custom2").classList.toggle("active");
  document.getElementById("widget_custom3").classList.toggle("active");
  document.getElementById("widget_custom4").classList.toggle("active");
  document.getElementById("widget_custom5").classList.toggle("active");
  document.getElementById("widget_custom6").classList.toggle("active");
  document.getElementById("widget_custom7").classList.toggle("active");
  document.getElementById("widget_settings_white").classList.remove("active");
  document.getElementById("widget_settings1").classList.remove("active");
  document.getElementById("widget_settings2").classList.remove("active");
  document.getElementById("widget_settings3").classList.remove("active");
  document.getElementById("widget_settings4").classList.remove("active");
  document.getElementById("widget_settings5").classList.remove("active");
}
function widget_extend_close(){
  freeze=0;
  document.getElementById("widget_main").classList.toggle("extend");
  document.getElementById("widget_ext").classList.remove("extend");
  document.getElementById("widget_tab_box").classList.remove("active2");
  document.getElementById("widget_tab_box").classList.add("active");
  document.getElementById("widget_tab_box").classList.remove("extend");
  document.getElementById("widget_custom1").classList.remove("active");
  document.getElementById("widget_custom2").classList.remove("active");
  document.getElementById("widget_custom3").classList.remove("active");
  document.getElementById("widget_custom4").classList.remove("active");
  document.getElementById("widget_custom5").classList.remove("active");
  document.getElementById("widget_custom6").classList.remove("active");
  document.getElementById("widget_custom7").classList.remove("active");
}
filled=[0,0,0,0,0,0,0];
function widget_add(a){
  if(filled[a]==0)
    filled[a]=1;
  else
    filled[a]=0;
  switch(a){
    case 0:document.getElementById("widget_button_pin1").classList.toggle("active");
    document.getElementById("widget_time1").classList.toggle("active");break;
    case 1:document.getElementById("widget_button_pin2").classList.toggle("active");
    document.getElementById("widget_time2").classList.toggle("active");break;
    case 2:document.getElementById("widget_button_pin3").classList.toggle("active");
    document.getElementById("widget_time3").classList.toggle("active");break;
    case 3:document.getElementById("widget_button_pin4").classList.toggle("active");
    document.getElementById("widget_time4").classList.toggle("active");break;
    case 4:document.getElementById("widget_button_pin5").classList.toggle("active");
    document.getElementById("widget_time5").classList.toggle("active");break;
    case 5:document.getElementById("widget_button_pin6").classList.toggle("active");
    document.getElementById("widget_time6").classList.toggle("active");break;
    case 6:document.getElementById("widget_button_pin7").classList.toggle("active");
    document.getElementById("widget_time7").classList.toggle("active");break;
  }
  for(i=0;i<7;i++)
    if(!filled[i])
      break;
  if(i==7)
    document.getElementById("widget_addall").classList.add("active");
  else
    document.getElementById("widget_addall").classList.remove("active");
  widget_empty();
}
function widget_all_action(){
  for(i=0;i<7;i++)
    if(!filled[i])
      break;
  document.getElementById("widget_button_pin1").classList.remove("active");
  document.getElementById("widget_time1").classList.remove("active");
  document.getElementById("widget_button_pin2").classList.remove("active");
  document.getElementById("widget_time2").classList.remove("active");
  document.getElementById("widget_button_pin3").classList.remove("active");
  document.getElementById("widget_time3").classList.remove("active");
  document.getElementById("widget_button_pin4").classList.remove("active");
  document.getElementById("widget_time4").classList.remove("active");
  document.getElementById("widget_button_pin5").classList.remove("active");
  document.getElementById("widget_time5").classList.remove("active");
  document.getElementById("widget_button_pin6").classList.remove("active");
  document.getElementById("widget_time6").classList.remove("active");
  document.getElementById("widget_button_pin7").classList.remove("active");
  document.getElementById("widget_time7").classList.remove("active");
  document.getElementById("widget_addall").classList.remove("active");
  filled=[0,0,0,0,0,0,0];
  if(i!=7){
    document.getElementById("widget_button_pin1").classList.add("active");
    document.getElementById("widget_time1").classList.add("active");
    document.getElementById("widget_button_pin2").classList.add("active");
    document.getElementById("widget_time2").classList.add("active");
    document.getElementById("widget_button_pin3").classList.add("active");
    document.getElementById("widget_time3").classList.add("active");
    document.getElementById("widget_button_pin4").classList.add("active");
    document.getElementById("widget_time4").classList.add("active");
    document.getElementById("widget_button_pin5").classList.add("active");
    document.getElementById("widget_time5").classList.add("active");
    document.getElementById("widget_button_pin6").classList.add("active");
    document.getElementById("widget_time6").classList.add("active");
    document.getElementById("widget_button_pin7").classList.add("active");
    document.getElementById("widget_time7").classList.add("active");
    document.getElementById("widget_addall").classList.add("active");
    filled=[1,1,1,1,1,1,1];
  }
  widget_empty();
}
function widget_empty(){
  var count=0;
  for(i=0;i<7;i++)
    if(filled[i])
      count++;
  if(count==0){
    document.getElementById("widget_empty").classList.add("active");
    document.getElementById("widget_empty_doge").classList.add("active");
  }
  else{
    document.getElementById("widget_empty").classList.remove("active");
    document.getElementById("widget_empty_doge").classList.remove("active");
  }
}
function widget_add_zs(a){
    if(a!=-1){
      document.getElementById("widget_zs_zone").innerText=tz_names[a];
      document.getElementById("widget_zs_time").innerText="UTC "+techie_off[a];
    }
}
function widget_pin(a){
    def=a;
    mytechieoffset=techie_offset[a];
    idealwins();
    widget_custom(4);
    document.getElementById("widget_p0").classList.remove("active");
    document.getElementById("widget_pw0").classList.remove("active");
    document.getElementById("widget_p1").classList.remove("active");
    document.getElementById("widget_pw1").classList.remove("active");
    document.getElementById("widget_p2").classList.remove("active");
    document.getElementById("widget_pw2").classList.remove("active");
    document.getElementById("widget_p3").classList.remove("active");
    document.getElementById("widget_pw3").classList.remove("active");
    document.getElementById("widget_p4").classList.remove("active");
    document.getElementById("widget_pw4").classList.remove("active");
    document.getElementById("widget_p5").classList.remove("active");
    document.getElementById("widget_pw5").classList.remove("active");
    document.getElementById("widget_p6").classList.remove("active");
    document.getElementById("widget_pw6").classList.remove("active");
    switch(a){
      case 0:document.getElementById("widget_p0").classList.toggle("active");
      document.getElementById("widget_pw0").classList.toggle("active");break;
      case 1:document.getElementById("widget_p1").classList.toggle("active");
      document.getElementById("widget_pw1").classList.toggle("active");break;
      case 2:document.getElementById("widget_p2").classList.toggle("active");
      document.getElementById("widget_pw2").classList.toggle("active");break;
      case 3:document.getElementById("widget_p3").classList.toggle("active");
      document.getElementById("widget_pw3").classList.toggle("active");break;
      case 4:document.getElementById("widget_p4").classList.toggle("active");
      document.getElementById("widget_pw4").classList.toggle("active");break;
      case 5:document.getElementById("widget_p5").classList.toggle("active");
      document.getElementById("widget_pw5").classList.toggle("active");break;
      case 6:document.getElementById("widget_p6").classList.toggle("active");
      document.getElementById("widget_pw6").classList.toggle("active");break;
    }
}
function widget_fullscreen(){
  freeze=0;
  document.getElementById("widget_fullscreen").classList.toggle("active");
  document.getElementById("widget_zs_zone").innerText=" ";
  document.getElementById("widget_zs_time").innerText="Hover for info";
  document.getElementById("widget_tab_box").classList.add("active");
  document.getElementById("widget_main").classList.remove("extend");
  document.getElementById("widget_ext").classList.remove("extend");
  document.getElementById("widget_tab_box").classList.remove("active2");
  document.getElementById("widget_tab_box").classList.remove("extend");
  document.getElementById("widget_custom1").classList.remove("active");
  document.getElementById("widget_custom2").classList.remove("active");
  document.getElementById("widget_custom3").classList.remove("active");
  document.getElementById("widget_custom4").classList.remove("active");
  document.getElementById("widget_custom5").classList.remove("active");
  document.getElementById("widget_custom6").classList.remove("active");
  document.getElementById("widget_custom7").classList.remove("active");
}

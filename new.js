function vote()
{
 
 var r=['r1','r2','r3','r4','r5','r6'];
 var chk=['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13'];
 var uni=['11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
 var dhm=['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15'];
 var is=['111','112','113','114'];
 
 var chkv=['c1p1','c2p1','c3p1','c4p1','c5p1','c6p1','c7p1','c8p1','c9p1','c10p1','c11p1','c12p1','c13p1']; //ls party 1 
 var univ=['c1p2','c2p2','c3p2','c4p2','c5p2','c6p2','c7p2','c8p2','c9p2','c10p2','c11p2','c12p2','c13p2','c14p2','c15p2'];
 var dhmv=['c1p3','c2p3','c3p3','c4p3','c5p3','c6p3','c7p3','c8p3','c9p3','c10p3','c11p3','c12p3','c13p3','c14p3','c15p3'];
 var rsv=['c1p4','c2p4','c3p4','c4p4','c5p4','c6p4']; //localstorage rss
 var isv=['c1p5','c2p5','c3p5','c4p5'];
 
 var p1=0,p2=0,p3=0,p4=0,p5=0;
 var a,a1,a2,a3,a4,a5;
  /*
  //ip_define
  for(a=0;a<4;a++)
  {
	if(document.getElementById(ip[a]).checked)
	 localStorage.setItem(ipv[a],parseInt(localStorage.getItem(ipv[a]))+1);
  }
  */
  //p1_define II box 
  for(a1=0;a1<13;a1++)
  {
	if(document.getElementById(chk[a1]).checked)
	{
		localStorage.setItem(chkv[a1],parseInt(localStorage.getItem(chkv[a1]))+1);
		p1=1;
	}
  }
  if(p1==1)
  localStorage.party1++;
  
  //p2_define III box
  for(a2=0;a2<15;a2++)
  {
	if(document.getElementById(uni[a2]).checked)
	{
		localStorage.setItem(univ[a2],parseInt(localStorage.getItem(univ[a2]))+1);
		p2=1;
	}
  }
  if(p2==1)
  localStorage.party2++;
  
  //p3_define IV box
  for(a3=0;a3<15;a3++)
  {
	if(document.getElementById(dhm[a3]).checked)
	{
		localStorage.setItem(dhmv[a3],parseInt(localStorage.getItem(dhmv[a3]))+1);
		p3=1;
	}
  }
  if(p3==1)
  localStorage.party3++;


//p4_define I box
  for(a4=0;a4<6;a4++)
  {
	if(document.getElementById(r[a4]).checked)
	{
		localStorage.setItem(rsv[a4],parseInt(localStorage.getItem(rsv[a4]))+1);
		p4=1;
	}
  }
  if(p4==1)
  localStorage.party4++;


//p5_define V box
var is=['111','112','113','114'];
var isv=['c1p5','c2p5','c3p5','c4p5'];
  for(a5=0;a5<4;a5++)
  {
	if(document.getElementById(is[a5]).checked)
	{
		localStorage.setItem(isv[a5],parseInt(localStorage.getItem(isv[a5]))+1);
		p5=1;
	}
  }
  if(p5==1)
  localStorage.party5++;
  
  //for nota
  if(document.getElementById('i4').checked)
	localStorage.setItem('ip4',parseInt(localStorage.getItem('ip4'))+1);
}


 function cl()
 {
 var i,flag=0;
 var arr=['s1','s2','s3','s4','s5','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','r1','r2','r3','r4','r5','r6','111','112','113','114','i4'];
 for(i=0;i<59;i++)
 {
   if(document.getElementById(arr[i]).checked==true)
   flag=1;
 }
 if(flag==0)
 alert("Please vote");
 else
 {
  vote();
  window.location.replace("Thanks.html"); //to be changed
 } 
 }
 
 
 //function to select the complete list
 function asc() //ashoka chakra
 {
  var asc=['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13'];
  for(var a=0;a<13;a++)
  if(document.getElementById('s1').checked)
  document.getElementById(asc[a]).checked=true;
  else
  document.getElementById(asc[a]).checked=false;
 }
 //to make disappear

 function assm()
 {
  var all=['s2','s3','s4','s5','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','r1','r2','r3','r4','r5','r6','111','112','113','114','i4'];
  var asc=['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13'];
  var f=0;
  for(var a=0;a<13;a++)
  {
	if(document.getElementById(asc[a]).checked)
	f=1;
  }
   if(f==1)
   {
    for(var v=0;v<49;v++)
	document.getElementById(all[v]).hidden=true;
   }
   else 
   {
    for(var v=0;v<49;v++)
	document.getElementById(all[v]).hidden=false;
   }
 }

 
//united ashoka
function uni()
{
var un=['11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
for(var a=0;a<15;a++)
if(document.getElementById('s2').checked)
  document.getElementById(un[a]).checked=true;
  else
  document.getElementById(un[a]).checked=false;
}
//to make disappear
function uni1()
{
 var all=['s1','s3','s4','s5','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','r1','r2','r3','r4','r5','r6','111','112','113','114','i4'];
 var uni=['11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
 var f=0;
  for(var a=0;a<15;a++)
  {
	if(document.getElementById(uni[a]).checked)
	f=1;
  }
   if(f==1)
   {
    for(var v=0;v<43;v++)
	document.getElementById(all[v]).hidden=true;
   }
   else 
   {
    for(var v=0;v<43;v++)
	document.getElementById(all[v]).hidden=false;
   }
 }


//dhhama
function dhm()
{
 var dhm=['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15'];
 for(var a=0;a<15;a++)
 if(document.getElementById('s3').checked)
  document.getElementById(dhm[a]).checked=true;
  else
  document.getElementById(dhm[a]).checked=false;
}
//to make dissapear
function dhm1()
{
 var all=['s1','s2','s4','s5','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','r1','r2','r3','r4','r5','r6','111','112','113','114','i4'];
 var dhm=['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15'];
 var f=0;
  for(var a=0;a<15;a++)
  {
	if(document.getElementById(dhm[a]).checked)
	f=1;
  }
   if(f==1)
   {
    for(var v=0;v<43;v++)
	document.getElementById(all[v]).hidden=true;
   }
   else 
   {
    for(var v=0;v<43;v++)
	document.getElementById(all[v]).hidden=false;
   }
}

//rss
function rss()
{
 var rss=['r1','r2','r3','r4','r5','r6'];
 for(var a=0;a<6;a++)
 if(document.getElementById('s4').checked)
  document.getElementById(rss[a]).checked=true;
  else
  document.getElementById(rss[a]).checked=false;
}
//to make dissapear
function rssm()
{
 var all=['s1','s2','s3','s5','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','111','112','113','114','i4'];
 var rss=['r1','r2','r3','r4','r5','r6'];
 var f=0;
  for(var a=0;a<6;a++)
  {
	if(document.getElementById(rss[a]).checked)
	f=1;
  }
   if(f==1)
   {
    for(var v=0;v<52;v++)
	document.getElementById(all[v]).hidden=true;
   }
   else 
   {
    for(var v=0;v<52;v++)
	document.getElementById(all[v]).hidden=false;
   }
}

//isis
function is()
{
 var rss=['111','112','113','114'];
 for(var a=0;a<4;a++)
 if(document.getElementById('s5').checked)
  document.getElementById(rss[a]).checked=true;
  else
  document.getElementById(rss[a]).checked=false;
}
//to make dissapear
function ism()
{
 var all=['s1','s2','s3','s4','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','r1','r2','r3','r4','r5','r6','i4'];
 var is=['111','112','113','114'];
 var f=0;
  for(var a=0;a<4;a++)
  {
	if(document.getElementById(is[a]).checked)
	f=1;
  }
   if(f==1)
   {
    for(var v=0;v<54;v++)
	document.getElementById(all[v]).hidden=true;
   }
   else 
   {
    for(var v=0;v<54;v++)
	document.getElementById(all[v]).hidden=false;
   }
}


//for nota
var mem;
function indp(mem)
{
 var all=['s1','s2','s3','s4','s5','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','r1','r2','r3','r4','r5','r6','111','112','113','114'];
 for(var v=0;v<58;v++)
 {
  if(all[v]!=mem)
  document.getElementById(all[v]).hidden=!(document.getElementById(all[v]).hidden);
 } 
}
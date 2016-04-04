function vote()
{
 var ip=['i1','i2','i3','i4'];
 var chk=['p1','p2','p3','p4','p5','p6','p7','p8','p9'];
 var uni=['11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
 var dhm=['d1','d2','d3','d4'];
 var ipv=['ip1','ip2','ip3','ip4']; //localstorage independent
 var chkv=['c1p1','c2p1','c3p1','c4p1','c5p1','c6p1','c7p1','c8p1','c9p1'];//ls party 1 
 var univ=['c1p2','c2p2','c3p2','c4p2','c5p2','c6p2','c7p2','c8p2','c9p2','c10p2','c11p2','c12p2','c13p2','c14p2','c15p2'];
 var dhmv=['c1p3','c2p3','c3p3','c4p3'];
 flag p1=0,p2=0,p3=0;
  for(var a=0;a<4;a++)
  {
	if(document.getElementById(ip[a]).checked)
	localStorage.setItem(ipv[a],localStorage.getItem(ipv[a])++);
  }
}
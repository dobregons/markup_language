
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new 3("Microsoft.XMLHTTP");
  }
//xmlhttp.open("GET","http://sites.google.com/site/kmlfilesdavid/kmlfiles/Points.xml",false);
xmlhttp.open("GET","gml/Points.gml",false);

xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
var coords = new Array();
var title = new Array();
var description = new Array();
var x=xmlDoc.getElementsByTagName("gml:featureMember");
for (i=0;i<x.length;i++)
  { 
    coords[i] =  (x[i].getElementsByTagName("gml:coordinates")[0].firstChild.nodeValue);
    title[i] = (x[i].getElementsByTagName("ogr:Name")[0].firstChild.nodeValue);
    description[i] = (x[i].getElementsByTagName("ogr:Description")[0].firstChild.nodeValue);

  }

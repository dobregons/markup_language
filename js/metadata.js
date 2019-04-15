var y;
if(document.title == "Metadatos"){

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","metadata.xml",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  document.write("<table><tr><th>Tipo de Geometría</th><th>Titulo</th><th>Descripción</th><th>Fecha</th><th>Ubicación</th><th>Creador</th><th>Informacioón</th></tr>");
  var x=xmlDoc.getElementsByTagName("site");
for (i=0;i<x.length;i++)
  { 
    document.write("<tr><td>");
    document.write(x[i].getElementsByTagName("geometry")[0].childNodes[0].nodeValue);
    document.write("</td><td>");
    document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    document.write("</td><td>");
    document.write(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);    
    document.write("</td><td>");
    document.write(x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue);    
    document.write("</td><td>");
    document.write(x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue);    
    document.write("</td><td>");
    document.write(x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue);    
    document.write("</td><td>");
    document.write(x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue);    
    document.write("</td></tr>");
  }
  document.write("</table>");
}else{
    
    function showMetadata(element){
      y  = element;      
      window.location.assign("metadata.html")
      meter();

  }
}




	$( document ).ready(function() {
	    var height = $(".right_block").height();
	    $("#iframe").css("height", height + 30);
	});
    function showMetadata(element){
    	var file = element;
    	 $('#dialog').empty();
		$.get( "xml/"+file, function( data ) {
		  
		  var geometry = data.firstElementChild.firstElementChild.childNodes[1].firstChild.nodeValue;
		  var title = data.firstElementChild.firstElementChild.childNodes[3].firstChild.nodeValue;
		  var description = data.firstElementChild.firstElementChild.childNodes[5].firstChild.nodeValue;
		  var year = data.firstElementChild.firstElementChild.childNodes[7].childNodes[1].firstChild.nodeValue;
		  var month = data.firstElementChild.firstElementChild.childNodes[7].childNodes[3].firstChild.nodeValue;
		  var day = data.firstElementChild.firstElementChild.childNodes[7].childNodes[5].firstChild.nodeValue;
		  var date = year +"/"+month+"/"+day;
		  var postalCode = data.firstElementChild.firstElementChild.childNodes[9].childNodes[1].firstChild.nodeValue;
		  var city = data.firstElementChild.firstElementChild.childNodes[9].childNodes[3].firstChild.nodeValue;
		  var name = data.firstElementChild.firstElementChild.childNodes[11].childNodes[1].firstChild.nodeValue;
		  var surname = data.firstElementChild.firstElementChild.childNodes[11].childNodes[3].firstChild.nodeValue;
		  var nombreCompleto = name +" " + surname;

		  $('#dialog').append('<table><tr><th>Tipo de Geometría</th><th>Titulo</th><th>Descripción</th><th>Fecha</th><th>Codigo Postal</th><th>Ciudad</th><th>Creador</th></tr><tr><td>'+geometry+'</td><td>'+title+'</td><td>'+description+'</td><td>'+date+'</td><td>'+postalCode+'</td><td>'+city+'</td><td>'+nombreCompleto+'</td></tr>');
    	   $("#dialog").dialog({modal: true, height: 270, width: 1005,position: ['center',20]  });
    	    $('html, body').animate({
                scrollTop: $("#dialog").offset().top
            }, 2000);
		}); 

	}

	function resizeIframe(){
		var height = $(".right_block").height();
	    $("#iframe").css("height", height + 30);
	}
/**
 * 
 */
google.maps.event.addDomListener(window, 'load',function(){
	var map= new google.maps.Map(document.getElementById('map'),{
				zoom: 5,
				center: new google.maps.LatLng(24.0, -102.6),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
	
	var info1= new google.maps.InfoWindow;
	var onMouseOver =function(){
		var ll= this.getPosition();
		info1.setContent('<h3>Dolores Hidalgo</h3>'+
				"latitude:"+ll+
				"<br /><br />"+
				"<a href='https://es.wikipedia.org/"+
				"wiki/Dolores_Hidalgo'>Link of site</a>");
		info1.open(map, this);
	};
	var marke1=new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(21.1561, -100.9308)
	});
	
	
	
	/*añadir otro marquer*/
	
	google.maps.event.addListener(marker1, 'mouseover', onMouseOver);
	var onMOuseOut=function(){
		info1.close();
	}
	
	/*google.maps.event.addListener(marker1, 'mouseout', onMouseOut);*/
	google.maps.event.addListener(marker1, 'mouseout', function(){
		info1.close(); 
		});
	
	/*var marke2=new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(19.434, -99.138)
	});*/
	
	var marker2=new google.maps.Marker({
		map:map,
	position:new goole.maps.LatLng(19.434, -99.138)
		});
	
	var info2= new google.maps.InfoWindow;
	
	var onMouseOverMarker2=function(){
		var latLng=this.getPosition();
		info2.setContent('<h3> Ciudad de México</h3>');
		info2.open(map, this);
	}
	google.maps.event.addListener(marker2, 'mouseover',onMouseOverMarker2);
	 
	google.maps.event.addListener(marker2, 'click',onMouseOverMarker2);
});
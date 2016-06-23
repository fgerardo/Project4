var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
//var map;
/* function initialize(){
	var directionsRerenderOptions = {
			markerOptions:{
			icon: new google.maps.MarkerImage("img/Oil-Barrel-icon.png")
	
			}

	};
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	var mexico_city = new google.maps.LatLng(19.434, -99.138);
	var my_options = {zoom: 5, mapTypeId:google.maps.MapTypeId.ROADMAP, center: mexico_city};
	var map = new google.maps.Map(document.getElementById('div_map'), my_options);
			directionsDisplay.setMap(map);
  }*/
  
  function handleDirectionsResponse(start, end, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
	}

	  var info1=new google.maps.InfoWindow;
		var clickMarker1= function(){
			var marker= this;
			var latLng= marker.getPosition();
			info1.setContent('<h3>Dolores Hidalgo </h3><img src="img/doloresH.png"/>'+"latitude "+latLng+
					"<a href='http://doloreshidalgo.gob.mx/'>Link of site Dolores</a>");
			info1.open(map, marker);
		};
		
		google.maps.event.addListener(map, 'mouseout',function(){
				info1.close();
		});
		
		var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
			
		var marker1=new google.maps.Marker({
			map:map,//elemento
			position:new google.maps.LatLng(21.1561, -100.9308),
			icon:iconMarker
		});
		google.maps.event.addListener(marker1,'mouseover',clickMarker1);


	
  }
  function calcRoute(){
	var start = document.getElementById("start").value;
	var end = document.getElementById("end").value;
	var request = { origin: start, destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					start, end, directionsResult);
		}
	});
	

	
  }
  function calcRoute1(){
		var escale1 = document.getElementById("Between").value;
		var end1 = document.getElementById("end").value;
		var request = { origin: escale1, destination: end1,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(directionsResult, status){
			if(status==google.maps.DirectionsStatus.OK){
				handleDirectionsResponse(
						escale1, end1, directionsResult);
			}
		});
		

		
	  }
  

 
  

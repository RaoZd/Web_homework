function init() {
    var mapOption={
        center:new google.maps.LatLng(40.78270,-73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom:13
    };
    var venueMap;
    venueMap=new google.maps.Map(document.getElementById('map'),mapOption);
}

function loadScript() {
    var script=document.createElement('script');
    script.src='http://maps.googleapis.com/maps.api/js?sensor=false&callback=initialize';
    document.body.appendChild(script);
}

window.onload=loadScript;
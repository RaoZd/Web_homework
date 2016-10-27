function init() {
    var mapOption={
        center:new google.maps.LatLng(23.048180,113.404039),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom:13
    };
    var venueMap;
    venueMap=new google.maps.Map(document.getElementById('map'),mapOption);
}

function loadScript() {
    var script=document.createElement('script');
    script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAGibUo7pRTyc_ppN__CqDmT84HFB7xjYU&callback=init';
    document.body.appendChild(script);
}

window.onload=loadScript;
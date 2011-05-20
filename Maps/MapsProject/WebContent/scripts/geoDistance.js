/**Written by:George Foncea
 * Date: May 10/2011
 * 
 * Taken from http://www.movable-type.co.uk/scripts/latlong.html
 * 
 */


/*Excerpt "This uses the 'haversine' formula to calculate great-circle 
 * distances between the two points – that is, the shortest 
 * distance over the earth’s surface – giving an 'as-the-crow-flies'
 * distance between the points (ignoring any hills!).

Haversine formula:

R = earth's radius (mean radius = 6,371km)
dlat = lat2-lat1
dlong = long2-long1
a = sin^2(dlat/2) + cos(lat1).cos(lat2).sin^2(dlong/2)
c = 2.atan2(sqrt(a), sqrt((1-a)))
d = R.c"
 * */
function geoDistance(geoPoint1, geoPoint2){
	var R = 6371; // km
	var dLat = (geoPoint2.lat-geoPoint1.lat).toRad();
	var dLng = (geoPoint2.lng-geoPoint1.lng).toRad(); 
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.cos(geoPoint1.lat.toRad()) * Math.cos(geoPoint2.lat.toRad()) * 
	        Math.sin(dLng/2) * Math.sin(dLng/2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var distance = R * c;
	return distance;
}
/** Converts numeric degrees to radians */
/*Number.prototype.toRad = function() {
    return this * Math.PI / 180;
};

Number.protype.t*/


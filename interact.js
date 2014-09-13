(function(){
var colors = "#4c89c5,#50aa0e,#BE90D4,#87D37C,#EB9532,#BF55EC".split(',');
// console.log(colors);
function lookForChange(){
	console.log('looking for change');	
}

if(thehash=window.location.hash){
	//if that's an existing document
	// thehash=thehash.slice(1,thehash.length);
	// var doc = getDocument(thehash);
	// var hashes = doc.markers;
	// for(marker in markers){
	// 	renderMarker(marker);
	// }
}
$('.dropboxurl').keydown(function(e){
	if(e.keyCode==13)
		$('.button').click();
});
function refreshMarker(x,y){
	var allmarkers = document.querySelectorAll('.marker');
}
function updateMarkers(){
	var allmarkers = document.querySelectorAll('.marker');
}
$('.button').click(function(){
var lfchange = setInterval(lookForChange,5000);
var realmdel= $('.markerdetail').get(0);
var dropbox;
var current=null;
var addMarker = function(x,y){
	var marker = document.createElement('div');
	marker.className="marker";
	marker.style.left=x-10; //assuming a 10x10 marker
	marker.style.top=y-10;
	marker.id="mrk"+document.querySelectorAll('.marker').length;
	marker.style.backgroundColor=colors[Math.ceil(Math.random()*5)];
	$(marker).attr('data-detail','');
	document.querySelector('body').appendChild(marker);
	showDetailWindow(marker);
	marker.addEventListener('click',function(){
		//alert('yo');
		showDetailWindow(this);
	})
}
var renderMarker = function(markerobj){
	var marker = document.createElement('div');
	marker.className="marker";
	marker.style.left=markerobj.x; //assuming a 10x10 marker
	marker.style.top=markerobj.y;
	marker.id=markerobj.id;
	marker.style.backgroundColor=markerobj.color;
	$(marker).attr('data-detail',markerobj.details);
	document.querySelector('body').appendChild(marker);
	
	marker.addEventListener('click',function(){
		//alert('yo');
		showDetailWindow(this);
	})
};
var showDetailWindow = function(el){
		//console.log(el);
		$('.markerdetail').val(el.getAttribute('data-detail'));
		realmdel.style.top=parseInt(el.style.top)-70; // need wotk on positioniong
		realmdel.style.left=parseInt(el.style.left)+25;
		current=el;
		$('.markerdetail').show().get(0).focus();
}

$('.markerdetail').get(0).addEventListener('blur',function(){
	if(!this.value){
		$('body').get(0).removeChild(current);
		$(this).hide();
	}
	else{
	$(current).attr('data-detail',$(this).val());
	$(this).hide();
	}
	current=null;
	//checkmarkers();

});
var img = $('.clientimage');
if(dropbox = $('.dropboxurl').val()){
	dropbox = dropbox.slice(0,dropbox.length-1)+"1";
	$('.homepage').hide();
	$('.url-holder').css('display','none');
	$("header .done").show();
	img.attr('src',dropbox);
}
//$('.homepage').hide();
	img.click(function(e){
		if(!current){
		var x = e.pageX;
		var y = e.pageY;
		addMarker(x,y);
		}
	});
});
document.addEventListener('keydown',function(e){
	if(e.keyCode==27 || e.keyCode==13){
		document.querySelector('.markerdetail').blur();
	}
});
})();

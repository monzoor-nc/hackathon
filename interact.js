(function(){
	var colors = "#4c89c5,#50aa0e,#BE90D4,#87D37C,#EB9532,#BF55EC".split(',');
	console.log(colors);
$('.button').click(function(){
var realmdel= $('.markerdetail').get(0);
var dropbox;
var current=null;
var addMarker = function(x,y){
	var marker = document.createElement('div');
	marker.className="marker";
	marker.style.left=x-10; //assuming a 10x10 marker
	marker.style.top=y-10;
	marker.style.backgroundColor=colors[Math.ceil(Math.random()*5)];
	$(marker).attr('data-detail','');
	document.querySelector('body').appendChild(marker);
	showDetailWindow(marker);
	marker.addEventListener('click',function(){
		//alert('yo');
		showDetailWindow(this);
	})
}
var showDetailWindow = function(el){
		//console.log(el);
		$('.markerdetail').val(el.getAttribute('data-detail'));
		realmdel.style.top=el.style.top; // need wotk on positioniong
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
	if(e.keyCode==27){
		document.querySelector('.markerdetail').blur();
	}
});
})();
(function(){
$('.button').click(function(){
var dropbox;
var current=null;
var realmdel= $('.markerdetail').get(0);
var addMarker = function(x,y){
	var marker = document.createElement('div');
	marker.className="marker";
	marker.style.left=x-10; //assuming a 10x10 marker
	marker.style.top=y-10;
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
		$('.markerdetail').show().get(0).focus();
		realmdel.style.top=el.style.top; // need wotk on positioniong
		realmdel.style.left=parseInt(el.style.left)+25;
		current=el;
}

$('.markerdetail').get(0).addEventListener('blur',function(){
	if(!this.value){
		$('body').get(0).removeChild(current);
	}
	$(current).attr('data-detail',$(this).val());
	$(this).hide();
	current=null;
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
})();
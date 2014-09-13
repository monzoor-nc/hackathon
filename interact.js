//don't forget to add closure later
$('.button').click(function(){
var dropbox;
if(dropbox = $('.dropboxurl').val()){
	dropbox = dropbox.slice(0,dropbox.length-1)+"1";
	$('.homepage').hide();
	$('.clientimage').attr('src',dropbox);
}
//$('.homepage').hide();

});
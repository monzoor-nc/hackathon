
var ref = new Firebase("https://designly.firebaseio.com/doc");


function testing(){
    var url = "www.nesting.com";
    //var doc = newDoc(url);

    var marker = {
        x:22,
        y:32,
        description:"awesome description",
        user:"user 5"
    }
    //doc.add(marker);
    var query = fetchDoc("-JWiYJgmdv46V64XEU7W");

    console.log("fetced doc", query);
}

function newDoc(url){
   var input = {url:url,markers:[]}
   var data = ref.push(input);

   return {
       add:function(marker){
            var docFirebaseUrl = ref.child(data.name() + "/markers");
            return docFirebaseUrl.push(marker);
        }
    }
}

function fetchDoc(docId){
    var data =  ref.child(docId).once('value',function(snap){
        console.log("snap is ",snap.val());
        return snap;
    });
    return data;
}

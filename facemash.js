var imgUrl = [
  { url: "김태희.jpg", rank: 0 },
  { url: "다현.jpg", rank: 0 },
  { url: "배수지.jpg", rank: 0 },
  { url: "송혜교.jpg", rank: 0 },
  { url: "수지.jpg", rank: 0 },
  { url: "아이유.jpg", rank: 0 },
  { url: "이효리.jpg", rank: 0 },
  { url: "쯔위.jpg", rank: 0 },
  { url: "표예지.jpg", rank: 0 },
  { url: "황정음.jpg", rank: 0 },
];

var face = new Array;
face[0] = document.getElementById('1');
face[1] = document.getElementById('2');

var insertImgUrl = new Array();

function setFace(imgUrl){
	
	var mRandom = Math.random();
    var ran1 = Math.floor( mRandom * 10 );
    mRandom = Math.random();
    var ran2 = Math.floor( mRandom * 10 );
    while(ran1 == ran2) {
    	mRandom = Math.random();
        ran2 = Math.floor( mRandom * 10 );
    }

    insertImgUrl[0] = "<img src='" + imgUrl[ran1].url + "'" + "width='230' height='200'>";
    insertImgUrl[1] = "<img src='" + imgUrl[ran2].url + "'" + "width='230' height='200'>";
    face[0].innerHTML = insertImgUrl[0];
    face[1].innerHTML = insertImgUrl[1];

    insertImgUrl[0] = imgUrl[ran1].url;
    insertImgUrl[1] = imgUrl[ran2].url;
}

function selectFace(face_id){
	var count = 0;
	for(var i = 0; i < imgUrl.length; i++){
		if(insertImgUrl[face_id - 1] == imgUrl[i].url){
			imgUrl[i].rank++;
		}
	}

    setFace(imgUrl);
}

function setResult(){
	imgUrl.sort(function (a,b){ 
		return b.rank - a.rank	 
	});

    var quiz_div = document.getElementById('quiz');
    var txt = "<h1>Ranking</h1> <br> <br>"
    quiz_div.innerHTML = txt;
    
    for(var i = 0; i < imgUrl.length; i++){
    	quiz_div.innerHTML += "<img src='" + imgUrl[i].url+ "'" + "width='230' height='200'> <br>";
    }

}

setFace(imgUrl);

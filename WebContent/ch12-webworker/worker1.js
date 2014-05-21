//포그라운드에서 데이터 도착
onmessage=function(event){
	//백그라운드로 처리될 코드 작성
	var result = "";
	var dan = event.data; // 인자로 넘어온 데이터 호출
	
	for(var i=1;i<100000;i++){
		result += dan + '*' + i + '=' + dan*i + '<br>';				
	}
	//ui쪽에 데이터전달
	postMessage(result);
		
	/*for(var i=1;i<10;i++){
		result = dan + '*' + i + '=' + dan*i + '<br>';	
		postMessage(result);
	}*/
};
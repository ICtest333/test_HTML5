//���׶��忡�� ������ ����
onmessage=function(event){
	//��׶���� ó���� �ڵ� �ۼ�
	var result = "";
	var dan = event.data; // ���ڷ� �Ѿ�� ������ ȣ��
	
	for(var i=1;i<100000;i++){
		result += dan + '*' + i + '=' + dan*i + '<br>';				
	}
	//ui�ʿ� ����������
	postMessage(result);
		
	/*for(var i=1;i<10;i++){
		result = dan + '*' + i + '=' + dan*i + '<br>';	
		postMessage(result);
	}*/
};
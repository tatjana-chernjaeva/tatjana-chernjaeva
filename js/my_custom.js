function send_msg() {
	// alert("Пришли сюда 555");
	//var frm;
	//frm = document.getElementById("IFrame1");
	//alert("Пришли сюда 555");
	// alert(frm);
	//var aaa = frm.contentWindow.document.getElementById("from_domen").value;  
	//alert("Пришли сюда 555");
	//alert(aaa);
	frm = document.getElementById("IFrame1");

	frm.contentWindow.document.getElementById('sender_name').value = 'Вася Пупкин';
	frm.contentWindow.document.getElementById('from_domen').value = 'Tanjana-Chernyaeva';
	frm.contentWindow.document.getElementById("send_btn").click();
	
	alert('Сообщение2 отправлено, спасибо!');
		
	}

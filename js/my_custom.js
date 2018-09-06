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

	frm.contentWindow.document.getElementById('sender_name').value = document.getElementById('send_name').value;
	frm.contentWindow.document.getElementById('sender_email').value = document.getElementById('send_email').value;
	frm.contentWindow.document.getElementById('sender_phone').value = document.getElementById('send_phone').value;;
	frm.contentWindow.document.getElementById('sender_topic').value = document.getElementById('send_object').value;
	frm.contentWindow.document.getElementById('sender_message').value = document.getElementById('send_message').value;
	frm.contentWindow.document.getElementById('from_domen').value = 'Tanjana-Chernyaeva';
	frm.contentWindow.document.getElementById("send_btn").click();
	
	alert('Сообщение4 отправлено, спасибо!');
		
	}

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
	frm.contentWindow.document.getElementById('sender_email').value = 'pup@mail.ru';
	frm.contentWindow.document.getElementById('sender_phone').value = '+79161148255';
	frm.contentWindow.document.getElementById('sender_topic').value = 'Привет Мир!';
	frm.contentWindow.document.getElementById('sender_message').value = 'Добрый день всем привет!';
	frm.contentWindow.document.getElementById('from_domen').value = 'Tanjana-Chernyaeva';
	frm.contentWindow.document.getElementById("send_btn").click();
	
	alert('Сообщение2 отправлено, спасибо!');
		
	}

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
	// document.getElementById('IFrame1').contentWindow.document.getElementById('from_domen').value = 'Tanjana-Chernyaeva';
	frm.contentWindow.document.getElementById('from_domen').value = 'Tanjana-Chernyaeva';
	frm.contentWindow.document.getElementById("send_btn").click();
	
	alert('Сообщение отправлено, спасибо!');
		
	}

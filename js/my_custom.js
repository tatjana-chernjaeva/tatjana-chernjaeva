function send_msg() {
	// alert("Метка 5");
	frm = document.getElementById("IFrame1");
	frm.contentWindow.document.getElementById('sender_name').value = document.getElementById('send_name').value;
	frm.contentWindow.document.getElementById('sender_email').value = document.getElementById('send_email').value;
	frm.contentWindow.document.getElementById('sender_phone').value = document.getElementById('send_phone').value;;
	frm.contentWindow.document.getElementById('sender_topic').value = document.getElementById('send_object').value;
	frm.contentWindow.document.getElementById('sender_message').value = document.getElementById('send_message').value;
	frm.contentWindow.document.getElementById('from_domen').value = 'Tanjana-Chernyaeva';
	frm.contentWindow.document.getElementById("send_btn").click();
	
	alert('Сообщение отправлено, спасибо!');
	location.reload();
		
	}

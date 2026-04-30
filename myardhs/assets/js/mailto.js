function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById('message').value,
  }

  emailjs.send("service_ow57jjq", "template_xjop7rx", params).then(alert('Email sent!'));

  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById('message').value = '';

}
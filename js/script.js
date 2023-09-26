function sendMail() {
  (function () {
    emailjs.init("jECF_ZLGmYG-epBQD");
  })();

  let params = {
    sender: document.getElementById("sender").value,
    reply: document.getElementById("reply").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_wsdeol4";
  const templateID = "template_3rqo94f";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Sent Successfully!");
    })
    .catch();
}

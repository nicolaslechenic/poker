

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "test478369",
	Password : "2013022015478369test!",
	To : 'sylvain.mj.conan@gmail.com',
	From : "test478369@gmail.com",
	Subject : "Test Email",
	Body : "This a test to test SMTP.",
	}).then(
		message => alert("mail sent successfully")
	);
}
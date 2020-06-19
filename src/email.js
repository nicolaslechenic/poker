

function sendEmail() {

	Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host: "smtp.gmail.com",
        port : "465",
        ssl : true,
        Username : "test478369",
        Password : "2013022015478369test!",
        To : 'sylvain.mj.conan@gmail.com',
        From : "test478369@gmail.com",
        Subject : "Test Email",
        Body : "This a test for SMTP.",
	}).then(
		message => alert("mail sent successfully")
    );
    
}
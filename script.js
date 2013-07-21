String.prototype.getBytes = function () {
	var bytes = [];
	for (var i = 0; i < this.length; ++i) {
		bytes.push(this.charCodeAt(i));
	}
	return bytes.length;
};

$(document).ready(function() {
	$("#submit").click(function(evt) {
  		evt.preventDefault();
		
		var hash = CryptoJS.AES.encrypt($("#website").val(), $("#passphrase").val()).toString();
		hash = CryptoJS.SHA3(hash).toString();
		
		$("#password").removeAttr("disabled").val(hash);

		$("#bytes").html("<b>"+hash.getBytes()+" bytes</b>");
	});	
});

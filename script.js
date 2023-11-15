$(function () {
	let article = $("article");

	$("#new").click(function () {
		let template = $("#template").clone();
		template.removeAttr("id");

		template.appendTo(article);
	});
})

function checkIfCorrect(event) {
	console.log(event);w
}
function eatButton(id) {
	$.ajax({ url: "/api/eat/" + id, type: "PUT" }).then((data) => {
		location.reload();
	});
}
function newBurger() {
	let newBurger = $("#new").val();
	$.ajax({ url: "/api/add/", type: "POST", data: { newBurger } }).then(
		(data) => {
			location.reload();
		}
	);
}

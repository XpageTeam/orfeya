import $ from "jquery";

window.jQuery = $
window.$ = $
// window.is = is

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});
});


const inputs = document.querySelectorAll(".input-file__file");

for (const input of inputs){

	input.addEventListener("change", function() {
		let files = [];
		console.log(files)
		const textInput = this.closest(".input-file")
							.querySelector(".input-file__name");
		for (let i = 0; i < input.files.length; i++)
			files.push(input.files[i].name)
		if (!files.length)
			textInput.value = ""
		else{
			textInput.value = files.join(",     ")
		}
	})
}

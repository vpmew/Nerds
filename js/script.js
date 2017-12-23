var overlay = document.querySelector(".overlay");
var google_map_trigger = document.querySelector(".map");
var google_map = document.querySelector(".google-map");
var feedback_form_trigger = document.querySelector(".contacts .btn");
var feedback_form = document.querySelector(".write-us");
var google_map_exit_btn = document.querySelector(".google-map .close-btn");
var feedback_form_exit_btn = document.querySelector(".write-us .close-btn");

google_map_trigger.addEventListener("click", function(event) {
	event.preventDefault();
	google_map.classList.add("pop-up-visible");
	overlay.classList.add("pop-up-visible");
});

google_map_exit_btn.addEventListener("click", function(event) {
	event.preventDefault();
	google_map.classList.remove("pop-up-visible");
	overlay.classList.remove("pop-up-visible");
});

feedback_form_exit_btn.addEventListener("click", function(event) {
	event.preventDefault();
	feedback_form.classList.remove("pop-up-visible");
	overlay.classList.remove("pop-up-visible");
});

overlay.addEventListener("click", function(event) {
	event.preventDefault();
	google_map.classList.remove("pop-up-visible");
	feedback_form.classList.remove("pop-up-visible");
	overlay.classList.remove("pop-up-visible");
});

feedback_form_trigger.addEventListener("click", function(event) {
	event.preventDefault();
	feedback_form.classList.add("pop-up-visible");
	overlay.classList.add("pop-up-visible");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (overlay.classList.contains("pop-up-visible") || google_map.classList.contains("pop-up-visible") || feedback_form.classList.contains("pop-up-visible")) {
			overlay.classList.remove("pop-up-visible");
			google_map.classList.remove("pop-up-visible");
			feedback_form.classList.remove("pop-up-visible");
		}
	}	
});


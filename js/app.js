$(document).ready(function() {
    // User can use "enter" key to work as a submit button
	function getItem() {
		$('#add-items').keydown(function(e) {
			if (e.keyCode == 13) {
				postItem();
			}
		});
	}
	getItem();
	// posts input from user
	function postItem() {
		var item = $('input#add-items').val();
		var work = '<li class="item"><button class="done"><i class="fa fa-check"></i></button>' + item + '<button class="remove"><i class="fa fa-times"></i></button>' + '</li>';
		$('.list-area').prepend(work);
		$('.add-items').val('');
		$('.list-area li:first-child')
        .css("opacity", "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 200 }
        )
        .animate(
            { marginTop: "0px" },
            { queue: false, duration: 200 }
        );
	}
	// changes class of list item
	$('.list-area').on('click', '.done', function() {
		$(this).closest('li').toggleClass('item item-bought');
		$(this).remove();
	});
	// allows user to delete items
	$('.list-area').on('click', '.remove', function() {
		$(this).closest('li').fadeOut(200);
	});
});
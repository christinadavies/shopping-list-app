$(document).ready(function() {
    // User can press "enter" to submit new item
	function getItem() {
		$('input#add-items').keydown(function(e) {
			if (e.keyCode == 13) {
				postItem();
			}
		});
	}
	getItem();
	// Posts input from user
	function postItem() {
		var item = $('input#add-items').val();
		var create = '<li class="item"><button class="done"><i class="fa fa-check"></i></button>' + item + '<button class="remove"><i class="fa fa-times"></i></button>' + '</li>';
		$('.list-area').prepend(create);
		$('input#add-items').val('');
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
	// Changes class of list item
	$('.list-area').on('click', '.done', function() {
		$(this).closest('li').toggleClass('item item-bought');
		$(this).remove();
	});
	// Allows user to delete items
	$('.list-area').on('click', '.remove', function() {
		$(this).closest('li').fadeOut(200);
	});
});
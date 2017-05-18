(function($){

	function addNode(node){
		$ol = $('#target');
		var $li = $('<li></li>').append(node);
		addBtn($li, 'up');
		addBtn($li, 'down');
		addDeleteBtn($li);
		$ol.append($li);
	}

	
	function addBtn(node, direction){

		var $btn = $('<a>' + direction + '</a>');
		$btn.addClass(direction);
		$(node).append($btn);
	}

	function addDeleteBtn(node){
		var $btn = $('<a>DELETE</a>');
		$(node).append($btn);

		$btn.on('click', function(){
			$(this).parent().remove();
		});

	}

	$(document).ready(function(){
	/**
	 *	On ecoute l'evenement de validation du formulaire.
	 */
	 $('form').on('submit', function(evt){
	 	evt.preventDefault();
	 	addNode($('#input_field').val());
	 });


	 $(document).on('click', '.up', function(){	 
	 	node = $(this).parent();
	 	$(node).insertBefore($(node).prev());
	 });


	 $(document).on('click', '.down', function(){
	 	
	 	node = $(this).parent();
	 	$(node).insertAfter($(node).next());
	 });


	});	
})(jQuery); // Fully reference jQuery after this point.
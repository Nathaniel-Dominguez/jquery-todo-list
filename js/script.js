function addTodoItem() {
	console.log($("#new-todo-item").val());
	var todoItem = $("#new-todo-item").val();
	console.log(todoItem)
	$("#todo-list").append("<li><input type='checkbox'" + 
                         " name='todo-item-done'" + 
                         " class='todo-item-done'"+ 
                         " value='" + todoItem + "' /> " + 
                         todoItem +
                         " <button class='todo-item-delete'>"+
                         "Delete</button></li>");
	$("#new-todo-item").val("");
}

function deleteTodoItem(e, item) {
	e.preventDefault();
	$(item).parent().fadeOut('slow', function() {
		$(item).parent().remove();
	});
}

function completeTodoItem() {
	$(this).parent().toggleClass("strike");
}

$(function() {

	$("#add-todo-item").on('click', function(e) {
		e.preventDefault();
		addTodoItem()
	});

	// #todo-list is the event handler since ,todo-tiem-delete doesn't exist when the document loads
	
	$("#todo-list").on('click', 'todo-item-delete', function(e) {
		var item = this;
		deleteTodoItem(e, item)
	})	

	$(document).on('click', ".todo-item-done", completeTodoItem)
});

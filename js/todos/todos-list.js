var TodosList = (function () {

    var selectors = {
        list: '.todos__list'
    }

    return {
        init: function () {
            var self = this;
            $(window).on('addTodo', self.addNewTodo)
        },
        addNewTodo: function (e, text) {
            $(selectors.list).append('<div>' + text + '</div>');
        }
    }
}());
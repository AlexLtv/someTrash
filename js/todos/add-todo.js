var AddTodo = (function () {

    var selectors = {
        addBtn: '.add-todo__add-btn',
        field: '.add-todo__field'
    }

    return {
        init: function () {
            var self = this;
            $(selectors.addBtn).click(self.onClick)
        },
        onClick: function () {
            var text = $(selectors.field).val();

            $(window).trigger('addTodo', text);
            // console.log(text);
        }
    }
}());
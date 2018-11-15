var TodosModule = (function () {
    return {
        init: function () {
            AddTodo.init();
            TodosList.init();
        }
    }
}());
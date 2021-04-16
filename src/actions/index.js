
let nextTodoId = 0;

export const inputTodo = text => ({
    type: 'INPUT_ITEM',
    id : nextTodoId++,
    text
})
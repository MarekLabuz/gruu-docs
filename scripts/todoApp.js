const store = Gruu.createComponent({
  state: {
    todo: ['buy milk', 'walk the dog']
  }
})

const input = Gruu.createComponent({
  _type: 'input',
  oninput (e) {
    this.value = e.currentTarget.value
  }
})

const addButton = Gruu.createComponent({
  _type: 'button',
  textContent: 'ADD',
  $disabled: () => store.state.todo.length > 5,
  onclick () {
    store.state.todo = [...store.state.todo, input.value]
    input.value = ''
  }
})

const todo = Gruu.createComponent({
  _type: 'ul',
  $children: () => store.state.todo.map((item, index) => ({
    _type: 'li',
    _key: item,
    textContent: item,
    onclick () {
      store.state.todo = [
        ...store.state.todo.slice(0, index),
        ...store.state.todo.slice(index + 1)
      ]
    }
  }))
})

const todoApp = Gruu.createComponent({
  _type: 'div',
  children: [{ _type: 'div', textContent: 'TODO' },
    input, addButton, todo
  ]
})

const todoContainer = document.querySelector('#todo-app')
Gruu.renderApp(todoContainer, [codepenCounterApp('https://codepen.io/MarekLabuz/pen/WErGQQ'), todoApp])

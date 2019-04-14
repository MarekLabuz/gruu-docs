const counter = Gruu.createComponent({
  _type: 'div',
  textContent: 10
})

const button = (text, diff) => Gruu.createComponent({
  _type: 'button',
  className: 'button',
  textContent: text,
  onclick () {
    counter.textContent += diff
  }
})

const buttonInc = button('+', 1)
const buttonDec = button('-', -1)

const counterApp = Gruu.createComponent({
  _type: 'div',
  children: [
    'Counter',
    {
      _type: 'div',
      children: [buttonDec, counter, buttonInc]
    }
  ]
})

const counterContainer = document.querySelector('#counter-app')
Gruu.renderApp(counterContainer, [codepenCounterApp('https://codepen.io/MarekLabuz/pen/MvaZVO'), counterApp])

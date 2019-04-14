const a = (href, image, style) => Gruu.createComponent({
  _type: 'a',
  href,
  target: '_blank',
  style: Object.assign({
    backgroundImage: `url(${image})`,
  }, style)
})

const github = a('https://github.com/MarekLabuz/gruu', '/images/github.png')
const npm = a('https://www.npmjs.com/package/gruujs', '/images/npm.png', { width: '45px' })

const navContainer = document.querySelector('#nav-container')
Gruu.renderApp(navContainer, [
  github,
  npm
])

const menuItem = (text, href) => Gruu.createComponent({
  _type: 'div',
  children: [{
    _type: 'a',
    href,
    textContent: `${text.padEnd(30, '.')}`
  }]
})

const componentSection = menuItem('Component', '#component')
const domVsPhantomSection = menuItem('DOM vs Phantom Components', '#dom-vs-phantom')
const cpSection = menuItem('Changing properties', '#changing-properties')
const stateSection = menuItem('State', '#state')
const subscriptionsSection = menuItem('Subscriptions', '#subscriptions')
const renderingSection = menuItem('Rendering', '#rendering')
const usageSection = menuItem('Usage', '#usage')
const widgetsSection = menuItem('Widgets', '#widgets')
const routingSection = menuItem('Routing', '#routing')
const jsxSection = menuItem('JSX', '#jsx')

const websiteContent = document.querySelector('#website-content')
Gruu.renderApp(websiteContent, [{
  _type: 'div',
  children: [
    componentSection,
    domVsPhantomSection,
    cpSection,
    stateSection,
    subscriptionsSection,
    renderingSection,
    usageSection,
    widgetsSection,
    routingSection,
    jsxSection
  ]
}])

const codepenCounterApp = href => Gruu.createComponent({
  _type: 'div',
  className: 'codepen',
  children: [{
    _type: 'a',
    target: '_blank',
    href
  }]
})

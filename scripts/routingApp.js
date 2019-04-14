const data = [
  {
    "id": "dcb17aa9f",
    "age": 37,
    "name": "Acosta Massey",
    "eye color": "brown",
    "gender": "male",
    "company": "TETAK",
    "phone": "+1 (885) 522-3228",
    "address": "222 Newport Street, Bodega"
  },
  {
    "id": "37f0bfaa4",
    "age": 32,
    "name": "Duran Sawyer",
    "eye color": "green",
    "gender": "male",
    "company": "KOG",
    "phone": "+1 (945) 546-2598",
    "address": "490 Newel Street, Tyro"
  },
  {
    "id": "041589951",
    "age": 35,
    "name": "Brandi Gill",
    "eye color": "green",
    "gender": "female",
    "company": "EQUITAX",
    "phone": "+1 (858) 406-2281",
    "address": "630 Tilden Avenue, Forestburg"
  },
  {
    "id": "c97b79beb",
    "age": 39,
    "name": "Roth Bernard",
    "eye color": "blue",
    "gender": "male",
    "company": "MAROPTIC",
    "phone": "+1 (987) 467-2976",
    "address": "886 Bay Avenue, Roberts"
  },
  {
    "id": "f5cc7b957",
    "age": 24,
    "name": "Ida Briggs",
    "eye color": "green",
    "gender": "female",
    "company": "ISOSWITCH",
    "phone": "+1 (957) 545-3476",
    "address": "493 Borinquen Pl, Sanford"
  },
  {
    "id": "e9cb38573",
    "age": 35,
    "name": "Stout Rosario",
    "eye color": "blue",
    "gender": "male",
    "company": "NUTRALAB",
    "phone": "+1 (883) 420-2101",
    "address": "783 Norwood Avenue, Coventry"
  },
  {
    "id": "3d275c1c6",
    "age": 34,
    "name": "Velazquez Weiss",
    "eye color": "brown",
    "gender": "male",
    "company": "GEEKY",
    "phone": "+1 (884) 553-2572",
    "address": "208 Barwell Terrace, Cliff"
  },
  {
    "id": "515b4308f",
    "age": 24,
    "name": "Judy Booker",
    "eye color": "blue",
    "gender": "female",
    "company": "PORTALIS",
    "phone": "+1 (866) 571-2024",
    "address": "245 Aberdeen Street, Hampstead"
  },
  {
    "id": "858d5bd7f",
    "age": 32,
    "name": "Davis Parsons",
    "eye color": "blue",
    "gender": "male",
    "company": "EBIDCO",
    "phone": "+1 (960) 476-2007",
    "address": "164 Greenpoint Avenue, Tampico"
  },
  {
    "id": "878b1963d",
    "age": 20,
    "name": "Nettie Farley",
    "eye color": "blue",
    "gender": "female",
    "company": "VELITY",
    "phone": "+1 (979) 582-3402",
    "address": "644 Dictum Court, Twilight"
  },
  {
    "id": "dbc180300",
    "age": 33,
    "name": "Wilcox Palmer",
    "eye color": "brown",
    "gender": "male",
    "company": "ENAUT",
    "phone": "+1 (978) 424-3717",
    "address": "161 Broome Street, Darrtown"
  },
  {
    "id": "03ac8d002",
    "age": 34,
    "name": "Dina Larson",
    "eye color": "brown",
    "gender": "female",
    "company": "ORBIN",
    "phone": "+1 (864) 445-3321",
    "address": "616 Bath Avenue, Riceville"
  }
]

const link = (id, name) => Gruu.createComponent({
  _type: 'div',
  textContent: name,
  onclick () {
    GruuRouter.router.goTo(`/user/${id}`)
  }
})

const row = ([key, value]) => Gruu.createComponent({
  _type: 'tr',
  children: [
    { _type: 'td', textContent: key },
    { _type: 'td', textContent: value }
  ]
})

const routingApp = Gruu.createComponent({
  _type: 'div',
  className: 'routing-app',
  children: [
    {
      _type: 'div',
      children: data.map(({ id, name }) => link(id, name))
    },
    {
      _type: 'div',
      children: [
        GruuRouter.route('/user/:id', ({ id }) => {
          const user = data.find(u => u.id === id)
          return user && {
            _type: 'table',
            children: Object.entries(user).map(row)
          }
        }),
        GruuRouter.route('^/(?!(user))', {
          _type: 'div',
          textContent: 'Select user'
        })
      ]
    }
  ]
})

const routingContainer = document.querySelector('#routing-app')
Gruu.renderApp(routingContainer, [codepenCounterApp('https://codepen.io/MarekLabuz/pen/NvLEje'), routingApp])

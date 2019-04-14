var clockStore = Gruu.createComponent({
  state: { date: new Date() }
});

var hand = function hand(height, width, deg) {
  return Gruu.createComponent({
    _type: "div",
    className: "hand",
    style: {
      height: height + "px",
      width: width + "px",
      borderRadius: width + "px",
      top: 115 - height + "px",
      transform: "translate(-50%, 0) rotate(" + deg + "deg)"
    }
  });
};

var tick = function tick(deg) {
  return Gruu.createComponent({
    _type: "div",
    className: "tick",
    style: {
      transform: "translate(-50%, -50%) rotate(" + deg + "deg)"
    }
  });
};

var clockApp = Gruu.createComponent({
  _type: "div",
  children: [Gruu.createComponent({
    _type: "div",
    className: "clock"
  }), Gruu.createComponent({
    _type: "div",
    className: "disc"
  }), Gruu.createComponent({
    _type: "div",
    className: "whiteDisc"
  }), Gruu.createComponent({
    children: [0, 30, 60, 90, 120, 150].map(tick)
  }), Gruu.createComponent({
    $children: function $children() {
      var seconds = clockStore.state.date.getSeconds();
      var minutes = clockStore.state.date.getMinutes();
      var hours = clockStore.state.date.getHours();
      return [
        hand(100, 1, 360 * (seconds / 60)),
        hand(85, 3, 360 * (minutes + seconds / 60) / 60),
        hand(55, 6, 360 * (hours + minutes / 60) / 12)
      ];
    }
  })]
});

var container = document.querySelector('#clock-app')
Gruu.renderApp(container, [clockApp])

setInterval(function () {
  clockStore.state.date = new Date()
}, 1000)

class WaveMgr {


  constructor(g, o) {
    this.g = g;
    this.p = o.p;
    this.robos = $.H.shuffle (['hostage', 'hostage2', 'stompV', 'stompH', 'sprintV', 'drone', 'stampede']);


  }

  nextWave() {

    this.wave = {
      num: 10,
      freq: 0.6,
      groups: [this.robos[this.p.wave - 1]]
    };
    console.log(this.wave);

    this.p.inWave = this.wave.num;

  }

  spawn() {


    this[$.H.rndArray(this.wave.groups)].call(this);

    this.g.addEvent({
      time: this.wave.freq,
      cb: () => {
        this.p.inWave -= 1;
        this.p.spawn();
      }
    });
  }


  stompV() {

    let x = $.H.rnd(20, this.g.w - 30),
        master = new Robo(this.g, {p: this.p, i: 'stomper', x: x,  y: 0});
    this.g.ents.push(master);
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'stomper', x: x, y: -60}));
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'stomper', x: x, y: -120}));

    this.g.ents.push(new Human(this.g, {p: this.p, master: master, offX: 0, offY:-50 }));

  }


  stompH() {

    let x = $.H.rnd(20, this.g.w - 150);

    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'stomper', x: x,  y: -50}));
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'stomper', x: x + 50, y: -50}));
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'stomper', x: x + 100, y: -50}));

    this.g.ents.push(new Human(this.g, {p: this.p, x: x + 50, y: 20}));

  }

  sprintV() {

    let x = $.H.rnd(40, this.g.w - 40);

    this.g.ents.push(new Human(this.g, {p: this.p, x: x, y: 0}));

    if (this.p.wave > 4) {
      this.g.ents.push(new Robo(this.g, {p: this.p, i: 'mono', x: x, y: -150}));
    }
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'mono', x: x, y: -180}));
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'mono', x: x - 30, y: -190}));
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'mono', x: x + 30, y: -190}));
  }

  hostage() {
    let x = $.H.rnd(20, this.g.w - 150),
        master = new Robo(this.g, {p: this.p, i: 'robo', x: x,  y: 0});
    this.g.ents.push(master);
    this.g.ents.push(new Human(this.g, {p: this.p, master: master, offX: 35, offY:0 }));
  }


  hostage2() {
    let x = $.H.rnd(20, this.g.w - 150),
        master = new Robo(this.g, {p: this.p, i: 'robo', x: x,  y: 0});
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'robo', x: x + 100}));
    this.g.ents.push(master);
    this.g.ents.push(new Human(this.g, {p: this.p, master: master, offX: 35, offY:0 }));
  }

  drone() {
    let x = $.H.rnd(20, this.g.w - 150);
    this.g.ents.push(new Robo(this.g, {p: this.p, i: 'drone', x: x, y: -10}));
  }

  stampede() {

    for (let i = 0; i < 10; i ++) {
      this.g.ents.push(new Human(this.g, {p: this.p, x: $.H.rnd(40, this.g.w, - 40), y: $.H.rnd(0, 100) * -1}));
    }

    for (let i = 0; i < 3; i ++) {
      this.g.ents.push(new Robo(this.g, {p: this.p, i: 'stomper', x: $.H.rnd(60, this.g.w, - 80), y: -140}));
    }


  }








}

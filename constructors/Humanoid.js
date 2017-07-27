const NPC = require('./constructors');

class Humanoid extends NPC {

};

class Human extends Humanoid {
  constructor(props) {
    super(props);

  }
};

class Elf extends Humanoid {
  constructor(props) {
    super(props);
    this.align = props.align ? props.align : 'neutral';
  }
};
class Orc extends Humanoid {
  constructor(props) {
    super(props);
    this.align = props.align ? props.align : 'evil';
  }
};

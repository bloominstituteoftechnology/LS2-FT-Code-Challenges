const Human = require('./Humanoid');

class Peasant extends Human {
  constructor(props){
    super(props);
    this.align = props.align ? props.align : 'good';
  }
};

class Soldier extends Human {
  constructor(props){
    super(props);
    this.align = props.align ? props.align : 'good';
  }
};

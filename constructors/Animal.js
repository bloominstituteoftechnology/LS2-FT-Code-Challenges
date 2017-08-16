class Animal extends NPC {

};
class Bear extends Animal {
  constructor(props){
    super(props);
    this.align = 'neutral';
  }
};
class Wolf extends Animal {
  constructor(props){
    super(props);
    this.align = 'neutral';
  }
};

export {
  Animal,
  Bear,
  Wolf
}

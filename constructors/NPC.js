class NPC {
  constructor(props) {
    this.strength = props.strength ? props.strength : 100;
    this.dexterity = props.dexterity ? props.dexterity : 100;
    this.inteligence = props.inteligence ? props.inteligence : 25;
    this.hp = this.strength * 2 + (this.dexterity / 4);
  }
};
export default { NPC };

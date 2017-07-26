
/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */

 class NPC {
   constructor() {
     this.hp = 100;
     this.speed = 300;
     this.strength = 10;
     this.dexterity = 10;
     this.constitution = 10;
     this.intelligence = 10;
     this.wisdom = 10;
     this.charisma = 10;
   }
 }

 class Humanoid extends NPC {
   constructor() {
     super();

     this.hp = 115;
     this.speed = 320;
     this.strength = 12;
     this.constitution = 11;
     this.wisdom = 9;
     this.charisma = 9;
   }
 }

 class Human extends Humanoid {
   constructor() {
     super();
   }
 }

 class Soldier extends Human {
   constructor() {
     super();

     this.strength = 14;
     this.dexterity = 13;
     this.intelligence = 9;
     this.charisma = 8;
   }
 }

 class Peasant extends Human {
   constructor() {
     super();

     this.speed = 310;
     this.strength = 11;
     this.constitution = 13;
     this.charisma = 8;
     this.charisma = 8;
   }
 }

 class Bandit extends Human {
   constructor() {
     super();

     this.speed = 330;
     this.dexterity = 14;
     this.wisdom = 13;
     this.intelligence = 9;
     this.constitution = 8;
   }
 }

class Elf extends Humanoid {
  constructor() {
    super();
  }
}

class Orc extends Humanoid {
  constructor() {
    super();
  }
}

class Animal extends NPC {
  constructor() {
    super();

    this.hp = 200;
    this.speed = 280;
    this.strength = 16;
    this.dexterity = 12;
    this.constitution = 13;
    this.intelligence = 5;
    this.wisdom = 4;
    this.charisma = 5;
  }
}

class Bear extends Animal {
  constructor() {
    super();
  }
}

class Wolf extends Animal {
  constructor() {
    super();
  }
}

class Plant extends NPC {
  constructor() {
    super();

    this.hp = 10;
    this.speed = 0;
    this.strength = 1;
    this.dexterity = 1;
    this.constitution = 1;
    this.intelligence = 1;
    this.wisdom = 1;
    this.charisma = 1;
  }
}

class FleshEatingDaisy extends Plant {
  constructor() {
    super();
  }
}

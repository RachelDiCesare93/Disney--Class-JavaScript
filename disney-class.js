class Character {
  constructor(magic){
    this.name = magic.name;
    this.location = magic.location;
    this.gender = magic.gender;
  }
  speak(){
    return `It's me ${this.name} and it's a magical day here at ${magic.location}!`;
  }
}

// End of Character


class Mouse extends Character {
  constructor(mouseMagic){
    super(mouseMagic);
    this.catchPhrase = mouseMagic.catchPhrase;
    this.wife = mouseMagic.wife;
    this.pet = mouseMagic.pet;
  }
  greet(){
    return  `Hello friend! it's ${this.name} , have fun and ${this.catchPhrase}!`;
  }

  command(){
    return `Hey ${this.pet} , fetch!`;
  }
}

// End of Mouse


class Puppet extends Character {
  constructor(puppetMagic){
    super(puppetMagic);
    this.catchPhrase = puppetMagic.catchPhrase;
    this.parent = puppetMagic.parent;
    this.conscience = puppetMagic.conscience;
    }
 debate(){
   return `But ${this.parent} ,${this.catchPhrase}!`;
 }

 rightThing(){
   return `Hello ${this.name}, I'm ${this.conscience}! I'm here to make sure you're being a good boy!}`;
 }
}

// End of Puppet

class Princess extends Character {
  constructor(princessMagic){
    super(princessMagic);
    this.catchPhrase = princessMagic.catchPhrase;
    this.villian = princessMagic.villian;
    this.prince = princessMagic.prince;
  }
  timeToSing(song){
    return `'I know you, I walked with you once upon a dream I know you, that look in your eyes is so familiar a gleam
And I know it's true that visions are seldom all they seem But if I know you, I know what you'll do You'll love me at once, the way you did once upon a dream
'`;
  }
  defeat(){
    return ` In order to save ${this.name} , I must go defeat ${this.villian}, I am ${this.prince} and this is my duty`;
  }
}


// End of Princess





















// Objects

const mickey = new Mouse ({
name : 'Mickey',
location : 'Disney',
gender : 'Male',
catchPhrase: ' See ya real soon!',
wife:'Minnie',
pet : 'Pluto'
});


const pinnochio = new Puppet ({
  name : 'Pinnochio',
  location: 'Italy',
  gender : 'Male',
  catchPhrase: 'I am a real boy!',
  parent : 'Papa Gepetto',
  conscience: 'Jiminy Cricket'
});


const princessaurora = new Princess({
name : 'Princess Aurora',
location:'Castle',
gender: 'Female',
catchPhrase: 'If you dream a thing more than once, it is sure to come true.',
villian:'Maleficent',
prince: 'Phillip'
});

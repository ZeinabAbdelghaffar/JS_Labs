//Using Constructor functions:
function PersonConstructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}
PersonConstructor.prototype.sleep = function(hours) {
    if (hours === 7) {
        this.sleepMood = 'happy';
    } else if (hours < 7) {
        this.sleepMood = 'tired';
    } else {
        this.sleepMood = 'lazy';
    }
};
PersonConstructor.prototype.eat = function(meals) {
    if (meals === 3) {
        this.healthRate = 100;
    } else if (meals === 2) {
        this.healthRate = 75;
    } else if (meals === 1) {
        this.healthRate = 50;
    }
};
PersonConstructor.prototype.buy = function(items) {
    this.money -= items * 10;
};
const person1 = new PersonConstructor("John Doe", 100, 'neutral', 80);
person1.sleep(7);
person1.eat(3);
person1.buy(2);
console.log(person1);

//Using Classes:
class PersonClass {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }
    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    }
    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }
    buy(items) {
        this.money -= items * 10;
    }
}
const person2 = new PersonClass("Jane Doe", 150, 'neutral', 90);
person2.sleep(8);
person2.eat(2);
person2.buy(3);
console.log(person2);

//Using Objects Linking to Other Objects (OLOO):
const PersonOLOO = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },
    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    },
    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },
    buy(items) {
        this.money -= items * 10;
    }
};
const person3 = Object.create(PersonOLOO).init("Bob Doe", 200, 'neutral', 95);
person3.sleep(6);
person3.eat(3);
person3.buy(1);
console.log(person3);

//Using Factory functions:
function createPerson(fullName, money, sleepMood, healthRate) {
    const person = {
        fullName,
        money,
        sleepMood,
        healthRate,
        sleep(hours) {
            if (hours === 7) {
                this.sleepMood = 'happy';
            } else if (hours < 7) {
                this.sleepMood = 'tired';
            } else {
                this.sleepMood = 'lazy';
            }
        },
        eat(meals) {
            if (meals === 3) {
                this.healthRate = 100;
            } else if (meals === 2) {
                this.healthRate = 75;
            } else if (meals === 1) {
                this.healthRate = 50;
            }
        },
        buy(items) {
            this.money -= items * 10;
        }
    };
    return person;
}
const person4 = createPerson("Alice Doe", 120, 'neutral', 85);
person4.sleep(7);
person4.eat(2);
person4.buy(4);
console.log(person4);

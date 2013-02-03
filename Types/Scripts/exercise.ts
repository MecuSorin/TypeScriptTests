/// <reference path="proportion.ts"/> 
//build with: tsc --out Types/Scripts/types.js Types/Scripts/exercise.ts
class Exercise {
    constructor(previousKmIndex: number, newKmIndex: number, public proportion: Proportion) {
        this.proportion = proportion;
        this.KmIndexWhenDone = newKmIndex - previousKmIndex;
    }
    KmIndexWhenDone: number;
    
    Cristina() { return this.KmIndexWhenDone * this.proportion.Cristina; }
    Stefan() { return this.KmIndexWhenDone * this.proportion.Stefan; }
    
    Show() {
        var button = document.createElement('button');
        button.innerText = "Cristina: " + this.Cristina() + "   Stefan: " + this.Stefan() ;
        document.body.appendChild(button);
    }
}



var proportions = [new Proportion(5, 2.5), new Proportion(-3, -1)];
var indexCristina = 0;
var indexSorin = 1;
var exercises = [
    new Exercise(0, 10, proportions[indexCristina]),
    new Exercise(0, 10, proportions[indexSorin])
];

exercises[0].Show();
exercises[1].Show();

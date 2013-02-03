var Proportion = (function () {
    function Proportion(Cristina, Stefan) {
        this.Cristina = Cristina;
        this.Stefan = Stefan;
    }
    return Proportion;
})();
var Exercise = (function () {
    function Exercise(previousKmIndex, newKmIndex, proportion) {
        this.proportion = proportion;
        this.proportion = proportion;
        this.KmIndexWhenDone = newKmIndex - previousKmIndex;
    }
    Exercise.prototype.Cristina = function () {
        return this.KmIndexWhenDone * this.proportion.Cristina;
    };
    Exercise.prototype.Stefan = function () {
        return this.KmIndexWhenDone * this.proportion.Stefan;
    };
    Exercise.prototype.Show = function () {
        var button = document.createElement('button');
        button.innerText = "Cristina: " + this.Cristina() + "   Stefan: " + this.Stefan();
        document.body.appendChild(button);
    };
    return Exercise;
})();
var proportions = [
    new Proportion(5, 2.5), 
    new Proportion(-3, -1)
];
var indexCristina = 0;
var indexSorin = 1;
var exercises = [
    new Exercise(0, 10, proportions[indexCristina]), 
    new Exercise(0, 10, proportions[indexSorin])
];
exercises[0].Show();
exercises[1].Show();

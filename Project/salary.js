import choice from 'readline-sync'

const salaryCollection = [
    {salary:510.00,   year: 2010},
    {salary:545.00,   year: 2011},
    {salary:622.00,   year: 2012},
    {salary:678.00,   year: 2013},
    {salary:724.00,   year: 2014},
    {salary:788.00,   year: 2015},
    {salary:880.00,   year: 2016},
    {salary:937.00,   year: 2017},
    {salary:954.00,   year: 2018},
    {salary:998.00,   year: 2019},
    {salary:1045.00,  year: 2020}
];

const inflationCollection = [
    {inflation:5.91,       year:2010},
    {inflation:6.50,       year:2011},
    {inflation:5.84,       year:2012},
    {inflation:5.91,       year:2013},
    {inflation:6.41,       year:2014},
    {inflation:10.67,      year:2015},
    {inflation:6.29,       year:2016},
    {inflation:2.95,       year:2017},
    {inflation:3.75,       year:2018},
    {inflation:4.31,       year:2019},
    {inflation:4.52,       year:2020}
];

console.log("App Salario x Inflação");

console.log("Escolha uma das alternativas!!!")
console.log("1- Listar salários mínimos de 2010 a 2020");
console.log("2- Listar o índice IPCA (inflação) de 2010 a 2020");
console.log("3- Comparação entre o percentual de aumento salarial e inflação(IPCA)");

let userChoice = choice.question('Digite o numero correspondente a sua escolha:');

var numberChoice = Number(userChoice);

function choices(number) {
    number = numberChoice;
    if(number == 1){
        for(let salarys of salaryCollection) {
            console.log(salarys.salary)
        }
    } else if(number == 2) {
        for(let inflations of inflationCollection) {
            console.log(inflations.inflation)
        }
    }
    return number
}

choices(numberChoice)
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

    
for(let count = 0; count <= salaryCollection.length-1; count++) {
    let salarioAnterior = salaryCollection[count-1].salary
    console.log(salarioAnterior)
}
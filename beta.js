const polynomialStr1 = process.argv[2].split("=")[0].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0);
const polynomialStr2 = process.argv[2].split('=')[1].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0);
const polynomialFactors = [{coeff: 0, power: 0}, {coeff: 0, power: 1}, {coeff: 0, power: 2}];

polynomialStr1.forEach(e => {
    const power = Number(e.replace(' ', '').split(/[*]/)[1].split('^')[1]);
    polynomialFactors.map(element =>{
        if(element.power  === power){
            element.coeff += Number(e.replace(' ', '').split(/[*]/)[0]);
        }
    })
});

polynomialStr2.forEach(e => {
    const power = Number(e.replace(' ', '').split(/[*]/)[1].split('^')[1]);
    polynomialFactors.map(element =>{
        if(element.power  === power){
            element.coeff += Number(e.replace(' ', '').split(/[*]/)[0]) * (-1);
        }
    })
});



let a, b,c;

polynomialFactors.map(e => {
    if (e.power === 0)
    c = e.coeff;
    else if (e.power === 1)
    b = e.coeff;
    else if (e.power === 2)
    a = e.coeff;
})
console.log('a b c', a , b , c);
console.log(`Reduced form: ${c} * X^0 + ${b} * X^1 + ${a} * X^2 = 0`)
let discriminant = b * b - 4 * a * c;
console.log('discriminant', discriminant)
    let x1, x2;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`Discriminant is strictly positive, the two solutions are: \n${x1}\n ${x2}`);
    }
    else if (discriminant === 0) {
        x1 = -b / (2 * a);
        console.log(`The solution is: ${x1}`);
    }
    else {
        console.log(`The Discriminant is strictly negative, there is no possible solution in R`);
    }

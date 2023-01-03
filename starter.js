const { exit } = require("process");

const firstPart = process.argv[2].split("=")[0].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0);
const secondPart = process.argv[2].split('=')[1].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0);
let firstPartArr = [];
let secondPartArr = [];
firstPart.map((e) => {
    firstPartArr.push({
        coeff: Number(e.replace(' ', '').split(/[*]/)[0]),
        puissance: Number(e.replace(' ', '').split(/[*]/)[1].split('^')[1])
    })
})
secondPart.map((e) => {
    secondPartArr.push({
        coeff: Number(e.replace(' ', '')?.split(/[*]/)[0]) * (-1),
        puissance: Number(e.replace(' ', '')?.split(/[*]/)[1]?.split('^')[1])
    })
})
const equationElement = firstPartArr.concat(secondPartArr);

equationElement.sort((a, b) => (a.puissance > b.puissance) ? 1 : (a.puissance <= b.puissance) ? -1 : 0);

console.log('equation element: ', equationElement)

let a = 0 , b = 0, c = 0;


if (!equationElement.filter(e => e.puissance > 2)) {
    console.log('hbes hna', equationElement.filter(e => e.puissance > 2));
}
else {
    equationElement.map(e => {
        if (e.puissance === 0) c += e.coeff;
        else if (e.puissance === 1) b += e.coeff;
        else if (e.puissance === 2) a += e.coeff;
    })
    console.log('a', a, 'b', b, 'c', c);
    let discriminant = b * b - 4 * a * c;
    let x1, x2;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log('the solutions are x1 =', x1, 'and x2 =', x2);
    }
    else if (discriminant === 0) {
        x1 = -b / (2 * a);
        console.log('the solution is x1 =', x1);
    }
    else {
        console.log('there is no possible solution here');
    }
}




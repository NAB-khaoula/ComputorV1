const firstPart = process.argv[2].split("=")[0].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0 );
const secondPart = process.argv[2].split('=')[1].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0);
const equationElement = firstPart.concat(secondPart);
console.log('first part', firstPart);
console.log('second part', secondPart);
console.log('equation Elements', equationElement);
let arr = [];
const test = equationElement.map((e) => {
    arr.push({
        coeff: e.split(/[*]/)[0],
        puissance: e.split(/[*]/)[1].split('^')[1]
    })
})
console.log(arr)
// const arrayElement = {Coeff: }


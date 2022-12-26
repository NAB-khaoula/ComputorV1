const firstPart = process.argv[2].split("=")[0].replace(/[-]/g, '+-').split(/[+]/).filter((e) => e.trim().length > 0 );
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
        coeff: Number(e.replace(' ', '').split(/[*]/)[0]) * (-1),
        puissance: Number(e.replace(' ', '').split(/[*]/)[1].split('^')[1])
    })
})
const equationElement = firstPartArr.concat(secondPartArr);

equationElement.sort((a, b) => (a.puissance > b.puissance) ? 1 : (a.puissance <= b.puissance) ? -1 : 0);



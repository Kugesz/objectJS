let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920
}

let osszeg = 0;

for (const key in fizetes) {
    console.log(fizetes[key]);
    osszeg += fizetes[key];
}

console.log("Osszeg: ", osszeg);

function makeCar(brand){
    return function(type, motor) {
        if (brand === 'Toyota') {
            console.log(`You have a Toyota car, type ${type} motor ${motor}`);
        }
        if (brand === 'Nissan') {
            console.log(`You have a Nissan car, type ${type} motor ${motor}`);
        }
    }
}

var corolla = makeCar('Toyota');
var nissan  = makeCar('Nissan')

corolla('Sedan', '1.8L');
nissan('Sedan', '1.3L')
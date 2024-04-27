export const emailGenerator = emailLength => {
    const chars = 'abcdefjhijklmnopqrstuvwxyz0123456789';
    let res = '';
    let randIndex;
    for(let i = 0; i < emailLength; i++) {
        if(i === 0) {
            randIndex = Math.floor(Math.random() * chars.indexOf('0'));
        } else {
            randIndex = Math.floor(Math.random() * chars.length)
        }
        res += chars[randIndex];
    }
    return `${res}@gmail.com`;
}

const getCurrentDate = (format) => {
    const today = new Date();
    if(format === 'dd.mm.yyyy') {
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return dd + '.' + mm + '.' + yyyy;
    } else if(format === 'yyyy-mm-dd') {
        return today.toISOString().split('T')[0];
    }

}

export const car = {
    brand: 'Ford',
    model: 'Fusion',
    reportDate: getCurrentDate('dd.mm.yyyy'),
    mileage: 100,
    expenseMileage: 101,
    liters: 20,
    totalCost: 20
}

export const carPorsche = {
    brand: 'Porsche',
    model: 'Cayenne',
    reportDate: getCurrentDate('dd.mm.yyyy'),
    mileage: 100,
    expenseMileage: 101,
    liters: 20,
    totalCost: 20
}

export const fuelExpenses = {
    carId: 0,
    reportedAt: getCurrentDate('yyyy-mm-dd'),
    mileage: 111,
    liters: 11,
    totalCost: 11,
    forceMileage: false
}
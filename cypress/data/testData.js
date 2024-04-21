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

const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '.' + mm + '.' + yyyy;
}

export const car = {
    brand: 'Ford',
    model: 'Fusion',
    reportDate: getCurrentDate(),
    mileage: 100,
    expenseMileage: 101,
    liters: 20,
    totalCost: 20
}
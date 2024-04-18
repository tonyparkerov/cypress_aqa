let emailGenerator = emailLength => {
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

export const user = {
    name: 'Anton',
    lastName: 'Test',
    password: 'Qwerty123!',
    email: emailGenerator(7)
}

export const car = {
    brand: 'Ford',
    model: 'Fusion',
    reportDate: '18.04.2024',
    mileage: 100,
    expenseMileage: 101,
    liters: 20,
    totalCost: 20
}
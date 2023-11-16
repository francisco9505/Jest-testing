



test('one euro should be 1.07 dollars',function () {
    const { fromEuroToDollar } = require('./app.js');

    

    

    expect(fromEuroToDollar(3.5)).toBe(3.745);

    
});


test('one Dollar should be 156.5 Yen',function () {
    const { fromDollarToYen } = require('./app.js');

    

    

    expect(fromDollarToYen(2)).toBe(313);

    
});

test('156 Yen should be 0.87 Pound',function () {
    const { fromYenToPound } = require('./app.js');

    

    

    expect(fromYenToPound(156)).toBe(135.72);

    
});
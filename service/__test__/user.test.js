const userService = require('../user');

describe('user service', () => {
  test('does nothing if separation is already correct', () => {
    const { fName, mNames, lName } = userService.sanitizeNames(
      'John',
      'Alexander Brian',
      'Smith'
    );

    expect(fName).toEqual('John');
    expect(mNames).toEqual('Alexander Brian');
    expect(lName).toEqual('Smith');
  });

  
    const { fName, mNames, lName } = userService.sanitizeNames(
      'John Alexander',
      'Brian',
      'Smith'
    );

    
    expect(mNames).toEqual('Alexander Brian');
    expect(lName).toEqual('Smith');
  });
});

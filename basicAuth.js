const expressBasicAuth = require('express-basic-auth');

const basicAuth = expressBasicAuth({
  challenge: true,
  unauthorizedResponse: 'unauthorized',
  authorizer: (username, password) => {
    const userMatch = expressBasicAuth.safeCompare(username, process.env.BASIC_AUTH_USER);
    const passMatch = expressBasicAuth.safeCompare(password, process.env.BASIC_AUTH_PASSWORD);
    return userMatch && passMatch;
  },
});

module.exports = basicAuth;

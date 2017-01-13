module.exports = (vendor, auth) => {
  let username = getUsername(auth);
  let password = getPassword(auth);

  if (username === process.env[`${vendor.toUpperCase()}_USERNAME`] && password === process.env[`${vendor.toUpperCase()}_PASSWORD`]) {
    console.log(' [i] Request Authorized'); 
    return true;
  } else {
    console.log(' [X] Request Not Authorized');
    console.log(`username: ${username}, password: ${password}`);
    return false;
  }
}

const getUsername = (auth) => {
  let userInfoBase64 = auth.substr(5);
  let userInfo = (new Buffer.from(userInfoBase64, 'base64')).toString();

  let extractedCredentials = userInfo.split(':');
  return extractedCredentials[0];
}

const getPassword = (auth) => {
  let userInfoBase64 = auth.substr(5);
  let userInfo = (new Buffer.from(userInfoBase64, 'base64')).toString();

  let extractedCredentials = userInfo.split(':');
  return extractedCredentials[1];
}
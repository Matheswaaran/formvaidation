const chkEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email) || email === "";
};

const chkUsername = username => {
  let usernames = ["mat", "mathesh96", "matheswaaran", "mathesh"];
  if (usernames.includes(username)) {
    return false;
  }
  return true;
};

const chkPassword = password => {
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}/;
  return re.test(password) || password === "";
};

export { chkUsername, chkPassword, chkEmail };

let register = (req, res, next) => {
  res.send("Register");
};

let login = (req, res, next) => {
  res.send("Login");
};

export  {
  register,login
};

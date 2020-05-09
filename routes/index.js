const issuesRoutes = require("./issues");
const usersRoutes = require("./users");
const express = require('express');
const outRoutes = require('./loginRoutes')

const constructorMethod = app => {
  app.use("/issues", issuesRoutes)
  app.use("/users", usersRoutes)
  app.use("/", outRoutes)

  // app.post('/test', async (req, res) => {
  //   try{
  //       let data = req.body;
  //       console.log(data)
  //       res.render('grievances/test');
  //   }
  //   catch (e) {
  //   res.sendStatus(400);
  // }
  // });


};


module.exports = constructorMethod

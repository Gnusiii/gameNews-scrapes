"use strict";
const express = require('express');
const app = express(); 
const xRay = require('x-ray');
const x = xRay({
 filters: {
   trim: function (value) {
     return typeof value === 'string' ? value.trim() : value
   },
   reverse: function (value) {
     return typeof value === 'string' ? value.split('').reverse().join('') : value
   },
   slice: function (value, start , end) {
     return typeof value === 'string' ? value.slice(start, end) : value
   }
 }
});

let gamespc;
const getGamePc = ()=>{
  x('https://games.gamepressure.com/?PLA=1&CZA=3', '.box', [{
    title: 'h5',
    link: 'a@href',
    image: 'img@src',
    type: 'b',
    date: 'p',
    about: 'p:nth-child(4)'

  }])((err, obj)=>{
    gamespc = obj;
    console.log("PC is ready");
  });
}
getGamePc();
setInterval(getGamePc, 1000000);
app.get('/gamespc', (req, res)=> {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Content-Type", "application/json; charset=utf-8");
 res.json(gamespc);
});

let gamesps4;
const getGamePs4 = ()=>{
  x('https://games.gamepressure.com/?PLA=15&CZA=3', '.box', [{
    title: 'h5',
    link: 'a@href',
    image: 'img@src',
    type: 'b',
    date: 'p',
    about: 'p:nth-child(4)'

  }])((err, obj)=>{
    gamesps4 = obj;
    console.log("PS4 is ready");
  });
}
getGamePs4();
setInterval(getGamePs4, 1000000);
app.get('/gamesps4', (req, res)=> {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Content-Type", "application/json; charset=utf-8");
 res.json(gamesps4);
});

let gamesxbox;
const getGameXbox = ()=>{
  x('https://games.gamepressure.com/?PLA=16&CZA=3', '.box', [{
    title: 'h5',
    link: 'a@href',
    image: 'img@src',
    type: 'b',
    date: 'p',
    about: 'p:nth-child(4)'

  }])((err, obj)=>{
    gamesxbox = obj;
    console.log("XBOX is ready");
  });
}
getGameXbox();
setInterval(getGameXbox, 1000000);
app.get('/gamesxbox', (req, res)=> {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Content-Type", "application/json; charset=utf-8");
 res.json(gamesxbox);
});


app.listen(3088);
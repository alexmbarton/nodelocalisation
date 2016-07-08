"use strict";

let Localize = require('localize');
 
let myLocalize = new Localize("./lang");

let myLang = "fr";
 
console.log(myLocalize.translate("$[1] $[2]: $[3] at $[4]. You in?","Bill","Frank","Let's hang out","Star Wars")); 
 
myLocalize.setLocale(myLang);

console.log(myLocalize.translate("$[1] $[2]: $[3] at $[4]. You in?","Bill","Frank","Let's hang out","Star Wars")); 
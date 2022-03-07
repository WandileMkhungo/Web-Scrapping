const { echo } = require("shelljs");

class Car {


    constructor() {
      
      
  
    }
    
    
    age() {
        const request = require('request');
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const { data } = require('cheerio/lib/api/attributes');


const prompt = require("prompt-sync")({ sigint: true });
let link = prompt("Enter your link for lyrics: ");
request(link, (error,
    response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('.widget-title');
        const songLyrics = $('.row');

      
       
       console.log('Lyrics Saved');
    }
});
    }
    
  }
  
  let myCar = new Car();
   myCar.age(); 
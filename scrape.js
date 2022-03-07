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

        //https://afrikalyrics.com/makhadzi-dikuku-lyrics
      
        const fs = require('fs')
        const dirPath = "./LyricsDir/";      
        const filePath = "./LyricsDir/helloworld.txt";

        if (fs.existsSync(dirPath)) {
            fs.writeFileSync(dirPath + "/Lyrics.txt", songLyrics.text()); 
        } else {
            console.log('${filePath} not found');
        }
        
       
       console.log('Lyrics Saved');
    }
});
//Puppeteer will helps to use Robot browser
const puppeteer = require("puppeteer");

//It will helps to create file
const fs = require("fs")

//This is main function
async function projectwebsite() {

    //1.projectwebsite URL
    const url = "https://kirthika-25.github.io";

    //2.Then open the browser 
    const Instancebrowser = await puppeteer.launch({headless: true});

    //3.Open a new tab
    const webpage = await Instancebrowser.newPage();

    //4.Write a program for website
    await webpage.goto(url);

    //5.Title of the Webpage
    const title = await webpage.title();

    //6.Main Heading of the webpage
    const mainheading = await webpage.$eval("h1", el => el.textContent);

    //7.create a data object
    const data = {
        projectwebsite: url,
        titleText: title,
        mainheading: mainheading
    };

    //8.Save the JSON file
fs.writeFileSync("scraped_data.json",JSON.stringify(data, null,2));

    //9.Close the browser
    await Instancebrowser.close();
    
    console.log("scraping is successfully completed!");
}

// Call the function
projectwebsite();


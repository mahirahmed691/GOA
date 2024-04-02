const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape data from a single page
async function scrapePage(url) {
    try {
        // Send a GET request to the URL
        const response = await axios.get(url);

        // Load the HTML content of the webpage using Cheerio
        const $ = cheerio.load(response.data);

        // Array to store the scraped data
        const shots = [];

        // Iterate over each shot on the page
        $('.shot-thumbnail').each((index, element) => {
            const name = $(element).find('.shot-title').text().trim();
            const description = $(element).find('.shot-description').text().trim();

            // Push the extracted data to the array
            shots.push({ name, description });
        });

        return shots;
    } catch (error) {
        console.error('Error scraping page:', error);
        return []; // Return an empty array if an error occurs
    }
}

// Function to scrape data from multiple pages (pagination support)
async function scrapeWebsite(url, pageCount) {
    try {
        // Array to store all scraped shots
        let allShots = [];

        // Iterate over each page
        for (let i = 1; i <= pageCount; i++) {
            const pageUrl = `${url}?page=${i}`;
            console.log(`Scraping page ${i}: ${pageUrl}`);

            // Scrape data from the current page
            const shots = await scrapePage(pageUrl);

            // Add the scraped shots to the array
            allShots = [...allShots, ...shots];
        }

        return allShots;
    } catch (error) {
        console.error('Error scraping website:', error);
        return []; // Return an empty array if an error occurs
    }
}

// URL of the website you want to scrape
const websiteUrl = 'https://www.lego.com/en-gb/bestsellers';

// Number of pages to scrape (adjust as needed)
const pageCount = 3; // Scraping first 3 pages

// Call the function to scrape the website
scrapeWebsite(websiteUrl, pageCount)
    .then((shots) => {
        console.log('Total scraped shots:', shots.length);
        console.log('Scraped Shots:', shots);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

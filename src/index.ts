import axios from 'axios';
import cheerio from 'cheerio';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {

    // Get ip address from google's what is my ip search with and without proxycrawl
    // try {
    //     await whatIsMyIPGoogle();
    // }
    // catch (e) {
    //     console.log('An error when trying to call whatIsMyIPGoogle', e);
    // }

    // try {
    //     await whatIsMyIPGoogleWithProxyCrawl();
    // }
    // catch (e) {
    //     console.log('An error when trying to call whatIsMyIPGoogleWithProxyCrawl', e);
    // }

    // Speed test
    // try {
    //     console.time('withoutProxyCrawl');
    //     await jsWebScrapingGuy();
    //     console.timeEnd('withoutProxyCrawl');
    // }
    // catch (e) {
    //     console.log('An error when trying to call jsWebScrapingGuy', e);
    // }

    // try {
    //     console.time('withProxyCrawl');
    //     await jsWebScrapingGuyWithProxyCrawl();
    //     console.timeEnd('withProxyCrawl');
    // }
    // catch (e) {
    //     console.log('An error when trying to call jsWebScrapingGuyWithProxyCrawl', e);
    // }

    // JS page test
    try {
        console.time('withoutProxyCrawl');
        await cobaltIntelligence();
        console.timeEnd('withoutProxyCrawl');
    }
    catch (e) {
        console.log('An error when trying to call cobaltIntelligence', e);
    }

    try {
        console.time('withProxyCrawl');
        await cobaltIntelligenceWithProxyCrawl();
        console.timeEnd('withProxyCrawl');
    }
    catch (e) {
        console.log('An error when trying to call cobaltIntelligenceWithProxyCrawl', e);
    }

})();

export async function whatIsMyIPGoogle() {
    const url = `https://www.google.com/search?q=what+is+my+ip`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const ip = $('.NEM4H.VL3Jfb.BmP5tf:nth-of-type(1) span span').text();

    console.log('ip address without proxycrawl', ip);
}

export async function whatIsMyIPGoogleWithProxyCrawl() {
    const url = `https://api.proxycrawl.com/?token=${process.env.proxycrawlCrawlerToken}&url=https://www.google.com/search?q=what+is+my+ip`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const ip = $('.NEM4H.VL3Jfb.BmP5tf:nth-of-type(1) span span').text();

    console.log('ip address with proxycrawl', ip);
}

export async function jsWebScrapingGuy() {
    const url = `https://javascriptwebscrapingguy.com/`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const title = $('title').text();

    console.log('Title without proxycrawl', title);

    return title;
}

export async function jsWebScrapingGuyWithProxyCrawl() {
    const url = `https://api.proxycrawl.com/?token=${process.env.proxycrawlCrawlerToken}&url=https://javascriptwebscrapingguy.com/`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const title = $('title').text();

    console.log('Title with proxycrawl', title);

    return title;
}

export async function cobaltIntelligence() {
    const url = `https://cobaltintelligence.com/`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const homeIntroDesc = $('.home-intro-desc').text();


    console.log('homeIntroDesc without proxycrawl', homeIntroDesc);

    return homeIntroDesc;    
}

export async function cobaltIntelligenceWithProxyCrawl() {
    const url = `https://api.proxycrawl.com/?token=${process.env.proxycrawlCrawlerJSToken}&url=https://cobaltintelligence.com/&country=us`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const homeIntroDesc = $('.home-intro-desc').text();

    console.log('homeIntroDesc with proxycrawl', homeIntroDesc);

    return homeIntroDesc;
}

// Not sure how this works yet
// How does a child selector work (there is a space, won't this get url encoded?)
export async function cobaltIntelligenceClickStuff() {
    const url = `https://api.proxycrawl.com/?token=${process.env.proxycrawlCrawlerJSToken}&url=https://cobaltintelligence.com/&css_click_selector=#home-header button:nth-of-type(2)`;

    const axiosResponse = await axios.get(url);

    const $ = cheerio.load(axiosResponse.data);

    const header1 = $('h1:nth-of-type(1)').text();

    console.log('header1 with clicking stuff', header1);

    return header1;    
}



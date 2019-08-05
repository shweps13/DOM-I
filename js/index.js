const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// This is the circle img in center
const slogan = document.getElementById("cta-img");
slogan.setAttribute('src', siteContent["cta"]["img-src"]);

// Nav titles is here
const links = document.querySelectorAll("nav > a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

// Upper sign and button
const ctaSign = document.querySelector("h1");
ctaSign.textContent = siteContent["cta"]["h1"]

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// Main text here

const mainHeaders = document.querySelectorAll(".text-content > h4");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const mainText = document.querySelectorAll(".text-content > p");
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

// Bottom img here

const botimg = document.getElementById("middle-img");
botimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Copyright is here

const contactH4 = document.querySelector(".contact > h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact > p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// Footer will be here

const footerP = document.querySelector("footer > p");
footerP.textContent = siteContent["footer"]["copyright"];

// New content will be added here

// Green color
links[0].style.color = 'green';
links[1].style.color = 'green';
links[2].style.color = 'green';
links[3].style.color = 'green';
links[4].style.color = 'green';
links[5].style.color = 'green';

// New element [with prepend and append]
const newContent = document.createElement("text-content");
const h4 = document.createElement("h4");
const p = document.createElement("p");

newContent.prepend("Some Extra", h4);
newContent.append(siteContent["main-content"]["vision-content"], p);

const nav = document.querySelector('.top-content');
nav.prepend(newContent);
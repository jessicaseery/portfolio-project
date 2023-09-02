import himympic from '../components/HIMYM.PNG'
import nyancat from './nyancat.png'
import menupic from './menu.png'
import fruitshop from './fruitshop.png'
import hangmanpic from './hangmangame.png'
import searchbarpic from './searchbar.png'
import cookieclicker from './cookieclicker.png'
import ronypizza from './pizzeriaRony.png'
import signuppic from './signupform.png'
import certihtmlcss from './CertificateHTMLCSS.png'
import diplomaWebApp from './DiplomaWebApp.png'
import certiLogoScratch from './certificateLogoandScratch.png'
import diplomaAppDesign from './diplomaAppDesign.png'
import certiAdobe from './CertificateAdobe.png'
import awardOfMerit from './AwardofMerit.png'
import purpleflower from './purpleflower.png'
import blueflower from './blueflower.png'
import redflower from './redflower.png'
import whiteflower from './whiteflower.png'
import sunflower from './sunflower.png'
import beachroseorange from './beachroseorange.png'
import whitelily from './whitelily.png'
import pinkcarnation from './pinkcarnation.png'
import purplerose from './purplerose.png'
import redtropical from './redtrpoical.png'
import yellowdaisy from './yellowdaisy.png'
import stars from './stars.png'
import trailstars from './trailstars.png'

export const floweroptions = [
    purpleflower ,
    redflower ,
    blueflower ,
    whiteflower,
    sunflower,
    beachroseorange,
    whitelily,
    pinkcarnation,
    purplerose,
    redtropical,
    yellowdaisy,
];

export const staroptions = [
    stars,
    trailstars,
];

export const programmingLanguages = {
    htmlcss: {
        id: 'htmlcss',
        imageSrc: certihtmlcss,
    },
    webapp: {
        id: 'webapp',
        imageSrc: diplomaWebApp,
    },
    logoscratch: {
        id: 'logoscratch',
        imageSrc: certiLogoScratch,
    },
    appdesign: {
        id: 'appDesign',
        imageSrc: diplomaAppDesign,
    },
    adobe: {
        id: 'adobe',
        imageSrc: certiAdobe,
    },
    award: {
        id:'awardofmerit',
        imageSrc: awardOfMerit,
    }

};

export const projects = {
    himym: {
        id: 'himym',
        name: 'How I Met Your Mother Webpage',
        description: `Page that displays an episode's information and images, it also contains a link to the source of the episode's information and cast.`,
        imageSrc: himympic,
    },
    signup: {
        id: 'signupform',
        name: 'Sign Up',
        description: `A sign up form that alerts the user when a field is incorrectly filled and properly submits when there is no error. There is also a feature that confirms the password (which must contain a certain amount of characters) is the same in both password inputs.`,
        imageSrc: signuppic,
    },
    nyancat: {
        id: 'nyancat',
        name: 'Nyan Cat',
        description: 'A game where enemies are falling from the sky. The user must dodge them to keep earning points. There is a lives system using oop, a variety of music per skin option along with matching characters and backgrounds.',
        imageSrc: nyancat,
    },
    menu: {
        id: 'menu',
        name: `Rony's Restaurant Menu`,
        description: `A webpage that displays all the contents and prices of a menu from a data page.`,
        imageSrc: menupic,
    },  
    fruitshop: {
        id: 'fruitshop',
        name: 'Fruit Emporium Shop',
        description: `An E-commerce website that displays fruits available, once the user clicks on a fruit they can obtain the details on the seller(photo, location, name), view the price, a description of the product, and if it is out of stock.`,
        imageSrc: fruitshop,
    },
    hangman: {
        id: 'hangman',
        name: `Hangman Game`,
        description: `A game that selects a random word, and accepts matching letters, prints the proper amount of blanks per random word, and has a pause and resume feature.`,
        imageSrc: hangmanpic,
    },
    searchbar: {
        id: 'searchbar',
        name: 'Search Bar',
        description: `A search bar that makes book suggestions and shows the filled suggestions in bold and the category of book in purple`,
        imageSrc: searchbarpic,
    },
    cookieclicker: {
        id:'cookieclicker',
        name: 'Cookie Clicker',
        description: `A recreation of a popular game! The user can click on the big cookie or the items list to obtain a certain amount of cookies!`,
        imageSrc: cookieclicker,
    },
    ronyPizzaria: {
        id:'ronypizzamenu',
        name: `Rony's Pizzeria`,
        description: `A pizzeria menu! Using React fetch, this webpage obtains all the pizzas sold by the company, has individual pizza detail pages showing the variety of prices per pizza depending on the size and also allows customers to place an order with an order confirmation number page!`,
        imageSrc: ronypizza,
    }
};
/* export const quotes = {
    a: {
        id: 'a',
        quote: `I'm not superstitious but I am a little stitious`,
        author: `Michael Scott(Steve Carrell) in The Office`
    },

}; */
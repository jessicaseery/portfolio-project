# Jessica Seery - My personal web-development portfolio
website link: https://jessicaseery-portfolio.netlify.app/

For this Concordia University Bootcamp project, I created a 6 page protfolio website containing several of my previous assignements!

## what I have accomplished so far
- creating all the components
- adding content to pages
- adding a background on all the pages
- text animation for my name on the first page
- adding content to pages
- created a sign up form
- animated sun / moon on the header
- adding all pictures of certificates
- making all pages render properly on all types of formats
- adding a popout function which allows the user to view the picture fullscreen 
- adding a dark mode and modifying all colors and images accordingly
- made arrays of all my star pictures and flower pictures on my data page to clean up my code

## thought process
- React Router, Routes, and Route to link all the components --> to link all my pages together I decided to use the clasic Route techniques as I am more familiar with these and greatly love using component routes to link together my work
- since the images weren't rendering I had to import them at the top of the appropriate component file. This really simplified adding images to my website!
- Desktop first approach, it took quite a long time but I made sure each aspect of my website would be properly rendered on any device that views my website.
- I decided to change the navigation menu to one that shows only if the user clicks on the hamburger icon. Once the user clicks on it the navigation menu will appear and the user will be able to navigate through pages or close the navigation bar to their liking
- Created a data.js file to contain a variety of src links, ids and other information to call each desired item through .map() on their respective components. I implemented this to my website to facilitate the process of adding more projects and certificates to the webpage in the future!
- Using a useState I created a toggle effect to convert the page from dark mode to light mode when the user clicks on the sun icon or moon icon. This darkmode state is then transfered to each component to apply the same logic of a dark mode when the sun/moon is clicked. I did this by creating a toggleDarkMode function on my App component. This allowed me to toggle the status accordingly on my Header component.
- Furthermore I created a handleDarkModeToggle function to handle all the changes necessary in the original code (not including styling) once the user sets the page to Dark or Light mode. For example, to change the state of the imageSrc used for the sun or moon and the text that goes with it.
- I implemented a useEffect and useState techniques to render my stars and flower properly by setting their positions through this function. Without this, the stars and flowers would render the same positions and would cause an overlap of flowers on Dark theme and stars on Light theme. This way, each has their own positions and refreshes when the user changes between light and dark mode. I thought this little interaction with the user and attention to detail would definitely be eye catching (along with my coloring choices) making users unexpectedly spend more time on the page!
- I created arrays of flower and star options to add a variety to what is being shown to the user along with showing users my ability to create functions that will execute random results along with my ability to make handleClick functions.
- I added a popout function to my project page and my certificates to allow users to see the pictures in fullscreen. This allows users to further analyze my previous works and helps mobile and tablet users to have a bigger picture to view or zoom on!

## things i'd like to add in the future
- french and english version
- work qualities about me
- pictures of my life
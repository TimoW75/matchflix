<section align="center">
 <img src="https://user-images.githubusercontent.com/60609760/159242521-5cf9800b-5134-4ef1-a91f-3c493d40de34.svg" width="500">
</section>

<section>
 <h1>ℹ️ About the project</h1>
 <p>Matchflix is an mobile application that matches users based on their favorite Netflix shows. Before you can start you will need to make an account and fill in some information. After that you have to pick a few of your favorite Netflix shows. The application will create matches for you based on these shows. When matched with another user you can start chatting with them.</p>
 
 <h3>📱 Features:</h3>
 <ul>
  <li>Matching based on your favorite Netflix shows</li>
  <li>Personal profile (which you can edit freely anytime)</li>
  <li>Chatting with other users you match with</li>
 </ul>
 
 <h3>🧰 Made with:</h3>
 <ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Express-Handlebars</li>
  <li>Socket.io</li>
  <li>Mongoose</li>
  <li>and more (check our package.json)</li>
 </ul>
</section>

<section>
 <h2>⚙️ Installation</h2>
 <p>In order to use and be able to use our application you need to follow a few steps. Underneath this we have provided a quick and easy guide to do this. Make sure to follow every step and do not skip one because this can result in failing to use the application.</p>
 
 Clone our repository to your local machine using the following command
 ````bash
 git clone https://github.com/TimoW75/matchflix.git  
 cd matchflix  
 ````
 Install all the necessary dependecies to make it work
 ````bash
  npm install  
 ````
 Create a new .env file in the project's folder
 ````bash
  touch .env  
 ````
 Open up the .env in a text editor copy and paste the following with your database string  
 ````bash
 CONNECTION_STRING=<connection_string_here>
 ````
 Use the following command to start your local server for the application
 ````bash 
 npm start  
 ````
 If you want to run it in development mode use this command
 ````bash
 npm run dev
 ````
 When you are done and started the server, you can go to localhost:3000 in your browser.
</section>

<section>
 <h2>🔨 Most important commits</h2>
 <p>For all the members that maintained this project we need have to collect our most important commits for the evaluation from our school. Here is a list of all our most important commits, categorized per member.</p>
  
 <h3>Timo</h3>
 <ul>
  <li><a href="https://github.com/TimoW75/matchflix/commit/45a754d9bb6a54a150263b794ead7279187ce05b">45a754d</a>: Added the series.js file and series API. Added the series.hbs file with test variables.</li>
  <li><a href="https://github.com/TimoW75/matchflix/commit/e1ac4dcd411c7bfd9c6380a0c7953e239ce6ed32">e1ac4dc</a>: Series API now renders series data to HBS. Styling for series.hbs and series.hbs update to show series.</li>
  <li><a href="hhttps://github.com/TimoW75/matchflix/commit/eac71b34540faf1b9a0600f05f51aad8c02ebe03">eac71b3</a>: Fixed the redirect to series.js. Added if statements to see if the checkbox for the selected show is on. If so, add the show to the shows array in the database. Added function to see which user is logged in with sessions. Small styling changes.</li>
 <li><a href="https://github.com/TimoW75/matchflix/commit/3ad51eea561eb169dcc7b7b4edfc058b0e05119a">3ad51ee</a>:created a function that empties the shows array in the database (in comments).</li>
 <li><a href="https://github.com/TimoW75/matchflix/commit/cb093c2962352b219addb9b697d11f2ecb36f636">cb093c2</a>: Fixed the user.find statement in home.js. Fixed session function in series.js. Fixed async function in series.js. Added styling id's for background image for selected shows. Added #each in hbs to show all the selected shows in the array.</li>
 <li><a href="https://github.com/TimoW75/matchflix/commit/a5efa9e59f92b7c4c117c45fd198d749c19570a5">a5efa9e</a>: Added function to replace the add show to array function with help from Teun.</li>
 <li><a href="https://github.com/TimoW75/matchflix/commit/a3d2b4b954bd338c78c3e900cd9abf593c295c15">a3d2b4b</a>: Created the navigation bar in the footer.</li>
 <li><a href="https://github.com/TimoW75/matchflix/commit/b9f6586b95c7a4d8e9623e9067433a0668a92a31">b9f6586</a>: Small styling changes to the footer..</li>
 <li><a href="https://github.com/TimoW75/matchflix/commit/a4a7e97ef97f03cec44236daea31a8bef513dc84">a4a7e97</a>: Added `postcss and cssnano`, config file and run command.</li>




  <li></li>
  <li></li>
  <li></li>
  <li></li>
 </ul>
 
 <h3>Teun</h3>
 <ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
 </ul>
 
 <h3>Lina</h3>
 <ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
 </ul>
 
 <h3>Robin</h3>
 <ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
 </ul>
 
 <h3>Casper</h3>
 <ul>
  <li><a href="https://github.com/TimoW75/matchflix/commit/533d1adf5e152d73998067ac7b946fdd62cb00eb">533d1ad</a>: Basis inloggen, registreren en uitloggen</li>
  <li><a href="https://github.com/TimoW75/matchflix/commit/0ef621f5fff436ecf0cf901823cbc80b9eecc84e">0ef621f</a>: Test email versturen bij registratie</li>
  <li><a href="https://github.com/TimoW75/matchflix/commit/afbfa4dd1152cef8a246abf0988170f4085e1a15">afbfa4d</a>: Aangepast naar nieuwe model</li>
  <li><a href="https://github.com/TimoW75/matchflix/commit/4c388b36320caca9b4841b743427470a2cc0d2fa">4c388b3</a>: Styling voor inloggen en registreren</li>
 </ul>
</section>
 
<section>
 <h2>📄 License & usage of our code</h2>
 <p>Our project is licensed under the MIT License, you are free to make us of our code as long as you follow the guidelines stated in this license</p>
</section>
and go to "localhost:/3000"  




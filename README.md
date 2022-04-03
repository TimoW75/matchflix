# Matchflix

![Matchflix_No_Glow](https://user-images.githubusercontent.com/60609760/159242521-5cf9800b-5134-4ef1-a91f-3c493d40de34.svg)

Clone this repo with
````bash
git clone https://github.com/TimoW75/matchflix.git  
cd matchflix  
````
Install the dependencies
````bash
 npm install  
````
Create a .env file
````bash
 touch .env  
````
  
Open up the .env in a text editor copy and paste the following with your database string  
````bash
CONNECTION_STRING=<connection_string_here>
````
Run the server with
````bash 
npm start  
````

or for developing purposes with
````bash
npm run dev
````

and go to "localhost:/3000"  


Most important commits for evaluation:

Casper:
    *

Casper:
    *

Timo:
* <B>commit 45a754d9bb6a54a150263b794ead7279187ce05b</B>: Added the series.js file and series API. Added the series.hbs file with test variables.
* <B>commit e1ac4dcd411c7bfd9c6380a0c7953e239ce6ed32</B>: Series API now renders series data to HBS. Styling for series.hbs and series.hbs update to show series.
* <B>commit eac71b34540faf1b9a0600f05f51aad8c02ebe03</B>: Fixed the redirect to series.js. Added if statements to see if the checkbox for the selected show is on. If so, add the show to the shows array in the database. Added function to see which user is logged in with sessions. Small styling changes.
* <B>commit 3ad51eea561eb169dcc7b7b4edfc058b0e05119a</B>: created a function that empties the shows array in the database (in comments). 
* <B>commit cb093c2962352b219addb9b697d11f2ecb36f636</B>: Fixed the user.find statement in home.js. Fixed session function in series.js. Fixed async function in series.js. Added styling id's for background image for selected shows. Added #each in hbs to show all the selected shows in the array.
* <B>commit a5efa9e59f92b7c4c117c45fd198d749c19570a5</B>: Added function to replace the add show to array function with help from Teun.
* <B>commit a3d2b4b954bd338c78c3e900cd9abf593c295c1</B>: Created the navigation bar in the footer.
* <B>commit b9f6586b95c7a4d8e9623e9067433a0668a92a31</B>: Small styling changes to the footer.
* `commit a4a7e97ef97f03cec44236daea31a8bef513dc84`: Added `postcss and cssnano`, config file and run command.

Lina:
    *

Robin:
*
# Spot On

Spot On is a web application where users can report information about lost animals as well as strays that have been found with the hope that the animals and their respective owners can reunite. 

## Installation and Getting Started

Using Git for Windows/Terminal for Mac, clone the repository into your local machine using the following command:

```bash
git clone [repository]
```

After it is downloaded, change directories into the project folder and install its necessary dependecies

```bash
npm install
```

Then, insert the following schema into your MySQL workbench. The schema will generate the database necessary for the project. Do not worry about creating tables for it at this point.

```mysql
DROP DATABASE IF EXISTS animals_db;
CREATE DATABASE animals_db;
```

Next, change directories into the CONFIG folder, and exchange the information in the DEVELOPMENT section to match your local MySQL configuration

```javascript
  "development": {
    "username": [your username],
    "password": [your username],
    "database": "animals_db",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },
```
Then, change back to the main project folder and execute the node server

```bash
node ./server.js
```

If done correctly, your bash/terminal will log hard coded Sequelize syntax, which will generate the tables for both lost and found animals into your recently made animals_db database. You can now technically run the application, but if you wish to have some data already logged into the lost and found animals table, insert these schemas into your MySQL workbench.

```mysql
USE animals_db;
INSERT INTO Lost_Animals (animal_name, species, breed, picture, color, animal_description, lost_date, lost_where, still_lost, zip_code, contact_email, createdAt, updatedAt) 
VALUES ("Max", "dog", "husky", "https://thehappypuppysite.com/wp-content/uploads/2017/12/siberian6.jpg", "black and white", "Big eyes and very small", "2019-11-05", "Riverside", TRUE, 90005,"dodgers2@gmail.com", 0, 0),
​
("Spot", "dog", "terrier", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg", "brown", "small and fuzzy", "2019-11-01", "Menifee", TRUE, 92585,"SD123@gmail.com", 0, 0),
​
("Raven", "cat", "siamese", "https://www.thesprucepets.com/thmb/yKUS9NTSH9UxwNXlboSR9dmqzRY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37348687_179210919505845_8579658165484781568_n-5b69b1b346e0fb00500b0880.jpg", "black and gray", "short hair and playful", "2019-11-02", "Riverside", TRUE, 92585,"catlover@gmail.com", 0, 0),
​
("Simba", "dog", "retriever", "https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg", "golden brown", "Happy and jumps alot!", "2019-11-02", "Riverside", TRUE, 90005,"lionking@gmail.com", 0, 0),
​
("Felix", "cat", "unknown", "https://www.thesprucepets.com/thmb/0tFhy7gu82dgMGL_j5SQvCHXZes=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-cat-lying-on-floor-at-home-908763830-1d61bee6961b45ee8a55bdfa5da1ebb3.jpg", "black", "Big eyes, likes to scratch", "2019-11-10", "Riverside", TRUE, 90005,"felixowner@gmail.com", 0, 0),
​
("Powder", "cat", "dont know", "https://www.rover.com/blog/wp-content/uploads/2019/03/white-cat-4025572_1920-960x540.jpg", "white", "lazy, likes to sleep", "2019-11-07", "Menifee", TRUE, 92585,"lightning999@gmail.com", 0, 0),
​
("Jack", "dog", "pitbull", "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555296004/shape/mentalfloss/istock_86999965_small.jpg", "white and black", "gets into the trash alot", "2019-11-06", "Menifee", TRUE, 92585,"colorodo999@gmail.com", 0, 0),
​
("Fuzzy", "dog", "poodle mix", "https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle.jpg", "brown", "likes to play fetch", "2019-11-03", "Riverside", TRUE, 90005,"flash155@gmail.com", 0, 0),
​
("Trixie", "cat", "not sure", "https://www.thehappycatsite.com/wp-content/uploads/2018/03/havana-brown-cat.jpg", "brown", "likes to play", "2019-11-03", "Riverside", TRUE, 90005,"catz155@gmail.com", 0, 0),
​
("Lady", "dog", "poodle", "https://www.rover.com/blog/wp-content/uploads/2018/11/poodle-960x540.jpg", "white", "Scares easily", "2019-11-02", "Riverside", TRUE, 90005,"tree123@gmail.com", 0, 0);
​
```
```mysql
USE animals_db;
INSERT INTO Found_Animals (animal_name, species, breed, picture, color, animal_description, found_date, found_where, zip_code, contact_email, createdAt, updatedAt) 
VALUES ("Dont Know", "dog", "Dont Know", "https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg", "black and brown", "short and happy", "2019-11-01", "Riverside", 90005,"dodgers55@gmail.com", 0, 0),
​
("Beast", "dog", "Lab", "https://www.guidedogs.org/wp-content/uploads/2019/08/website-donate-mobile.jpg", "white", "Barks alot", "2019-11-02", "Riverside", 90005,"red42@gmail.com", 0, 0),
​
("Shorty", "dog", "pug", "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg", "black and brown", "Big eyes", "2019-11-03", "Menifee", 92585,"blue86@gmail.com", 0, 0),
​
("Friendly", "dog", "Dont Know", "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs", "Light Brown", "Likes to growl", "2019-11-03", "Menifee", 92585,"yellow55@gmail.com", 0, 0),
​
("Dont Know", "dog", "Chihuahua", "https://parade.com/wp-content/uploads/2018/05/Chihuahua-Appreciation-Day-FTR.jpg", "whitish borwn", "Big eyes and yappy", "2019-11-01", "Riverside", 90005,"green99@gmail.com", 0, 0),
​
("Tabs", "cat", "tabby", "https://cdn.kinsights.com/cache/c5/9b/c59b6e25940f1642fa5af42c1828c38d.jpg", "black and brown", "Big eyes and fluffy", "2019-11-01", "Riverside", 90005,"blue444@gmail.com", 0, 0),
​
("Garfield", "cat", "unknown", "https://38oaizxk9r32v4vd3id0mm1a-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/orange-cat-names-768x432.jpg", "orange", "Lazy and hates mondays", "2019-11-02", "Riverside", 90005,"purple98@gmail.com", 0, 0),
​
("Nala", "cat", "mix", "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg", "black and gray", "Sleeps alot", "2019-11-11", "Menifee", 92585,"brown888@gmail.com", 0, 0),
​
("Stormy", "cat", "gray", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETeYfZRJfZzIRyA_S49mdig7L3JM9gETojvbTdP1Waf7LbEor&s", "gray", "likes to scratch couches", "2019-11-04", "Riverside", 90005,"pink865@gmail.com", 0, 0),

("Dont Know", "cat", "dont know", "https://www.washingtonian.com/wp-content/uploads/2019/07/Sapphire-2-2048x2048.jpg", "gray and white", "Meows alot", "2019-11-02", "Menifee", 92585,"white123@gmail.com", 0, 0);
```
​

* Copy the entire folder to another location on your computers &mdash; wherever you would like your local copy of the group project to be.

* Rename the copied "Unsolved" folder to the name of your project.

* Open the copied project folder's `package.json` file and change its `name` property to the name of your project.

* CD to the root of the copied project folder with your terminal and run the following commands:

  ```
  git init
  git add .
  git commit -m "Initial commit"
  ```

* Then copy the GitHub repo's remote SSH URL (the same URL you'd use to clone the repo).

* Run the following commands in your terminal, replacing <remote-url> with your GitHub repo's remote SSH URL.

  ```
  git remote add origin <remote-url>
  git push origin master
  ```

* If completed successfully you should see all of the files uploaded to GitHub.

* All other group members should now clone the repo.

* Discuss as a group:

  * How would you now add changes to this project?

---
title: "Your Wordle Web App"
context: "My first web app project that lets you play Wordle with a twist. Included database management, API calls, routing, and users."
contextShort: "Personal Project"
coverImage: "/images/your-wordle/wordleScreenshot.jpeg"
category: "Programming"
date: "Summer 2023"
tags: ["Database Management", "Web App Security", "User Authentication", "Routing"]
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
published: "2023-07-01"
---

During COVID, it seemed like everybody's daily routine involved the mastermind-like word game Wordle. My whole family played the game and sent their scores everyday to each other which gave my grandfather an idea. He talked about a version of Wordle where the players can choose a day in the near future, and a 5-letter word, and everyone who plays Wordle on that day will be trying to guess that word. That's exactly what this game is! Players login, see who wrote the word of the day, play Wordle, and have the option to view their statistics and send their score.

![Image](/images/your-wordle/wordleScreenshot.jpeg "Screenshot of app")
*Screenshot of the main page where users play the game*

## The Details

The project is run on Replit - an all-in-one IDE, hosting platform, and database provider - and uses Node.js and Express for the backend. For my first web project ever, Replit was a fantastic tool that allowed me to spend less time installing and managing packages, and more time implementing the project. I started with a Wordle game template from WebDevSimplified that offered a basic interface, a JSON file of all 5-letter words in the dictionary, and the core functionality of typing in guesses and revealing the different colors associated with each letter. From this foundation, I added user authentication and saving user data, a page dedicated to word submission, a score sharing feature, a maintenance mode, and fixed some gameplay bugs and reconfigured code that was part of the template.

Player login is faciliated using Auth0 by Okta as a third party authentication tool and then translated into sessions by Passport (a Node.js middleware) and Express Sessions. User data is stored using Replit Database which provides its own methods for updating the key-value data. The word submission page is just a simple HTML form that makes a call to the server to verify the validity of the request before updating a server-side JSON file that holds data related to word submissions. HTTPS API calls are used for all communication between the client and server, but is also used to make an HTTPS request to the New York Times' Wordle API. That way, if no one has submitted a word for that day, the regular NYT Wordle word will be supplemented to the player.

## My Experience

![Image](/images/your-wordle/wordle-score-mockup.png "Screenshot of app")
*Users sharing their score for the day*

This being my first ever web project, I encountered plenty of hurdles in the process. One of the biggest challenges came from managing player data; the state of the game and how that data was displayed varied depending on how the player had last left the site. This required having a dynamic system that could start a new game, load that day's game progress, or show your statistics alongside the score you got earlier that day. Another challenge that I had to overcome was making the web app usable for all types of devices. It was always easy to test the game on my computer, but mobile devices proved harder to test and develop for. Without any kind of CSS libraries or frameworks, it took a lot of fine tuning to make sure the application looked good and functioned on all devices.

Looking back, there are countless things I would change (and add) to this project. I was learning how to develop a web app as I built this project and the organization and structure of the project is a reflection of that. I constantly found myself using a simple method of implementation for a feature (like a JSON file for player data), and then upgrading that infrastructure later down the line (moving JSON file data to Replit Database). As the scope of the project grew, I constantly found myself struggling to integrate new mechanics with outdated code that held up the project. If I were to rebuild the project, I would probably switch to a framework like React that is more suited for dynamic, interactive projects. I would also spend more time planning out the supporting infrastructure like API calls, the database model, and basic player functions.
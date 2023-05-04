# Demo Website

https://anjiayu9.github.io/connector-demo/index.html

# Objective
The goal is to promote connections among non-profit and non-governmental organizations and help them find sponsors. The project consists of three parts: information extraction, content mining, and hosting web app. </br></br>

# Methodology & Project Scope
## Method One: Information Extraction
**Algorithm Search**</br>
Automatically searched for all web pages in recent 6 months that included ALL NGO organization names. Note that this search system was complicated and required a good deal of  time to run for all organizations. </br></br>
**Activeness Assessment**</br>
When more than one webpage was found, the algorithm extracted information from the official website, Facebook and INS. If relevant webpage is not found, the listings returned a ‘suspect’ warning. </br></br>
**Limitations**</br>
Note that the automatic extractor is hosted by google search. Non-English websites cannot be assessed for activeness. Also, organizations that didn’t post any events online ould also not be identified. Manual efforts required.</br></br>

## Method Two: Content Mining
**Data Cleaning**</br>
Convert an HTML page into a plain text. Convert all texts to lower-case, lemmatize and stem work tokens and remove stopwords from the collection of words.</br></br>
**Information Extraction**</br>
Take out NGOs’ organization name, location, contact information, Sustainable goals, and link to official website (if found). Also, keep track of the most frequently-used words for further analysis.</br></br>
**Limitation**</br>
Not all information can be extracted by our engine. Manual edition and check are also required for some NGO that lacks of details. </br></br>

## Method Three: Web App
**Search Engine**</br>
Hosting a static website to allow users to search Among UN DGC-Associated NGOs</br></br>
**AI Chatbot**</br>
Use AWS Lex to prepare for an AI assistant that could answers users' questions and provide them with guidances.</br></br>
**Full-stack techniques**</br>
The Web App contains frontend, backend, and database. Frontend is written in HTML/CSS/JavaScript. Backend incorporates functions in Amazon Web Service. DynamoDB and EC2 are utilized for database storage and query. </br></br>


# Project Updates

Week 1: Define the goals and requirements of the website. The ultimate goal is to advance the UN sustainable goal and provide a better platform to gather information about NGO. 

Week 2: Communicate with the affiliate of the UN. Design the user interface and create more visual components of the website.

Week 3: Design an information retrieval engine to collect the official website links of NGOs on the list, and determine which of them are inactive on website hosting (if so, remove them from the list).

Week 4: Database design and development: Create the database schema and develop the data storage and retrieval functionality of the website using a database management system.

Week 4: Utilized the collection of website links to gather more information about NGOs, including sponsors, location, SDG goals and founding year.

Week 5: Update the current information retrieval engine to adopt GPT and google search API. 

Week 6: Continue working on the information retrieval engine and compare the results with the traditional engine. 

Week 7: Prepare for midterm check-in presentation. 

Week 8: Front-end development: Create user interface and add more visual components using HTML, CSS, JavaScript.

Week 9: API development: Build APIs to allow communication between the front-end and back-end components of the website

Week 10: Integration and testing: Integrate all components of the website and thoroughly test its functionality and performance. 

Week 11: Design an AI chatbot to better present the notions. Allow users to search for NGOs' info and guide them to use the website. 

Week 12: Maintenance and updates: Continuously monitor and maintain the website to ensure its functionality and security, and update it with new features or improvements as necessary. 

Week 13: Prepare for final presentation. Record a video for back-up, but preferably utilize a live demo. 

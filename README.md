# Project Proposal

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

# **Trump Tweet Bot**
 
## **DATASET AQUISITION**
I started by looking for Python libraries that could either utilize the Twitter API or Twitter Front-End to scrape all of Donald Trump's tweets that are publicaly available. However, I encountered multiple problems either with the libraries themselves or the Twitter rate-limiting systems.

In the end, I resorted to downloading the JSON and CSV versions of the [Trump Twitter Archive](http://www.trumptwitterarchive.com/archive). Using the archive, I was able to retrieve 32,985 Tweets made by Donald Trump. This dataset includes recent tweets up until 4/17/2020 10AM (when I downloaded the dataset) and old tweets made 11 years ago (the oldest tweet is from May 4, 2009).

Here are a few Twitter scraping libraries I tried:
- https://github.com/bpb27/twitter_scraping
- https://github.com/bisguzar/twitter-scraper
- https://github.com/taspinar/twitterscraper
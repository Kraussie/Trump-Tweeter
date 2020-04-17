# **Trump Tweet Bot**
> This project is an assignment in Choate Rosemary Hall's Machine Learning class (CS580-HO). Individually, we each were supposed to create a browser-based ML project hosted on Github Pages.

## **DATASET AQUISITION**
I started by looking for Python libraries that could either utilize the Twitter API or Twitter Front-End to scrape all of Donald Trump's tweets that are publicaly available. However, I encountered multiple problems either with the libraries themselves or the Twitter rate-limiting systems.

In the end, I resorted to downloading the JSON and CSV versions of the [Trump Twitter Archive](http://www.trumptwitterarchive.com/archive). Using the archive, I was able to retrieve 32,985 Tweets made by Donald Trump. This dataset includes recent tweets up until 4/17/2020 10AM (when I downloaded the dataset) and old tweets made 11 years ago (the oldest tweet is from May 4, 2009).

Here are a few Twitter scraping libraries I tried:
- https://github.com/bpb27/twitter_scraping
- https://github.com/bisguzar/twitter-scraper
- https://github.com/taspinar/twitterscraper

## **TEXT GENERATION BOT**
### **Research:**
I began by researching how similar bots automatically generate text based on a large dataset of writing. I found one project by OpenAI called [GPT-2](https://github.com/openai/gpt-2). However, the version that OpenAI released to the public is a boiled down version of their original program because they were concerned with bad actors attempting to use their program maliciously. One use-case they cited was to generate heaps of fake news.

I found another neural network by minimaxir called [textgenrnn](https://github.com/minimaxir/textgenrnn). The project is a Python 3 module built on top of [Keras](https://github.com/keras-team/keras)/[TensorFlow](https://www.tensorflow.org/).

One difference of note between the two projects is that [GPT-2](https://github.com/openai/gpt-2) is known to be more gramatically correct and conversational than other machine learning algorithms. One article noted that it took into account the context of the entire sentence/paragraph allowing it to be more realistic.

### **Implementation:**
I'll be following [this tutorial](https://minimaxir.com/2020/01/twitter-gpt2-bot/) to build my Text-Generating Bot using President Donald Trump's Tweets.
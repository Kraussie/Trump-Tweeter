# **Trump Tweet Bot**
> This project is an assignment in Choate Rosemary Hall's Machine Learning class (CS580-HO). Individually, we each were supposed to create a browser-based ML project hosted on Github Pages.

## **DATASET AQUISITION**
I started by looking for Python libraries that could either utilize the Twitter API or Twitter Front-End to scrape all of Donald Trump's tweets that are publicaly available. However, I encountered multiple problems either with the libraries themselves or the Twitter rate-limiting systems.

In the end, I resorted to downloading the JSON and CSV versions of the [Trump Twitter Archive](http://www.trumptwitterarchive.com/archive). Using the archive, I was able to retrieve 32,985 Tweets made by Donald Trump. This dataset includes recent tweets up until 4/17/2020 10AM (when I downloaded the dataset) and old tweets made 11 years ago (the oldest tweet is from May 4, 2009).

Here are a few Twitter scraping libraries I tried, but wasn't able to use properly:
- https://github.com/bpb27/twitter_scraping
- https://github.com/bisguzar/twitter-scraper
- https://github.com/taspinar/twitterscraper

## **TEXT GENERATION BOT**
### **Research:**
I began by researching how similar bots automatically generate text based on a large dataset of writing. I found one project by OpenAI called [GPT-2](https://github.com/openai/gpt-2). However, the version that OpenAI released to the public is a boiled down version of their original program because they were concerned with bad actors attempting to use their program maliciously. One use-case they cited was to generate heaps of fake news.

I found another neural network by minimaxir called [textgenrnn](https://github.com/minimaxir/textgenrnn). The project is a Python 3 module built on top of [Keras](https://github.com/keras-team/keras)/[TensorFlow](https://www.tensorflow.org/).

One difference of note between the two projects is that [GPT-2](https://github.com/openai/gpt-2) is known to be more gramatically correct and conversational than other machine learning algorithms. One article noted that it took into account the context of the entire sentence/paragraph allowing it to be more realistic.

### **Implementation:**
I'll be following the tutorial given on [minimaxir](https://github.com/minimaxir)/[gpt-2-simple](https://github.com/minimaxir/gpt-2-simple) to build my Text-Generating Bot using President Donald Trump's Tweets.

#### **Installation:**
Figuring out the propper dependencies and installation procedures was one of the hardest parts of this project. Here is a list of project requirements

|Dependency|Version|
|-------------|:-------------:|
|Python|3.5-3.7|
|pip|19.0 or later|
|Windows|7 or later (64-bit)|
|TensorFlow|1.14 or 1.15|
|GPT-2-Simple|n/a|

#### **Dataset Prep:**
The CSV file from the Trump Archive didn't deliniate between tweets using commas properly, but I was able to reformat the data so the GPT-2-Simple model could properly load the dataset.

According to GPT-2-Simple, my dataset contained 1,587,807 tokens.

#### **Training:**
While performing the model training, my CPU usage shot up to 100% utilization. My processer, which usually clocks in at 3.3GHz, was noting speeds of up to 4.2GHz. This resulted in my CPU hitting temperatures between 141 and 190 degrees Farhrenheit. In addition, my RAM usage also shot up to ~60% (roughly 6GB).

My computer's efficiency while performing the model training is much worse in comparison to the Google Colaboratory notebook I tried to use before. This is likely because they use much higher performance GPUs in comparison to my CPU (an Intel Core i7-5820K). 

To supplement my computer's lack of computational power, I used [this Google Colaboratory notebook]() to train a full model with 2000 steps. My computer could complete 200 steps in around 2.5 hrs, but the Google Colab notebook could train 2000 steps in around 1.3 hrs. In addition, I used the 355M model instead of the 124M model because it suited the size of my data better.

## **Conclusion:**
I thought that my computer was generally pretty powerful as it runs video games pretty well. However, ML training seems to have a whole different set of system requirements. I'm glad that Google provides a free service with powerful GPUs in the backend.
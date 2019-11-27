# -*- coding: utf-8 -*-
"""
Created on Fri Oct 27 12:25:28 2017

@author: mdlayeeque.urrehman
"""
#importing the library required for url
import urllib.request
from bs4 import BeautifulSoup
articleURL="http://www.indiacelebrating.com/essay/india-essay/"
from urllib.request import urlopen

page=urllib.request.urlopen(articleURL).read().decode('utf8','ignore')
soup=BeautifulSoup(page,"lxml")
#finding the content in <p> and joining them
text=''.join(map(lambda p:p.text,soup.find_all('p')))


from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from string import punctuation

#spliting the sentences
sents=sent_tokenize(text)

#splitting the words
word_sent=word_tokenize(text.lower())

#removing all the stopwords

stopwords=set(stopwords.words('english')+list(punctuation))
word_sent=[word for word in word_sent if word not in stopwords]
#print(word_sent)

#finding the probability of the words and assigning them the score depending upon its occurrence
from nltk.probability import FreqDist
freq=FreqDist(word_sent)
#finding the sentence and allocating them score depending upon the scores of the words it is containing

from heapq import nlargest
#printing top 10 sentences having maximum probability 
print(nlargest(10,freq,key=freq.get))


from collections import defaultdict
ranking = defaultdict(int)
for i,sent in enumerate(sents):
    for w in word_tokenize(sent.lower()):
        if w in freq:
            ranking[i]+= freq[w]
            
print(ranking)

#top 4 sentences are printed
sents_idx=nlargest(4,ranking,key=ranking.get)
print(sents_idx)  
for j in sorted(sents_idx):
      print(sents[j])
print("==============================")
print(text)    
            
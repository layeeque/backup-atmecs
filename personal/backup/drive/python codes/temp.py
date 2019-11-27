# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import nltk
#breaking into sentences
text="india is my country. i am its citizen. I was running here and there"
from nltk.tokenize import word_tokenize, sent_tokenize
sents=sent_tokenize(text)
print(sents)

#breaking into words
senta=word_tokenize(text)
print(senta)


#removing stop words
from nltk.corpus import stopwords
from string import punctuation
customStopWords=set(stopwords.words('english')+list(punctuation))
listofstopwords=[word for word in word_tokenize(text) if word not in customStopWords]
print(listofstopwords)


#join words and its occurrence
from nltk.collocations import *
bigram_measure=nltk.collocations.BigramAssocMeasures()
finder=BigramCollocationFinder.from_words(listofstopwords)
print(sorted(finder.ngram_fd.items()))


#getting root words
textq="mary closed on closing night when she was in the mood to close."
from nltk.stem.lancaster import LancasterStemmer
st=LancasterStemmer()
stemmedWords=[st.stem(word) for word in word_tokenize(textq)]
print(stemmedWords)

#get parts of speech
print(nltk.pos_tag(word_tokenize(textq)))

#multiple meaning of same words
from nltk.corpus import wordnet as wn
for ss in wn.synsets('leave'):print(ss,ss.definition())
    
    
#get the exact meaning of word by providing a sentence
from nltk.wsd import lesk
sensel= lesk(word_tokenize("I want a leave for tomorrow"),"leave")
print("sensel, sensel.definition()")
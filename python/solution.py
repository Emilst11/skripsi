import os
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.stem import LancasterStemmer
nltk.download('stopwords')
nltk.download('punkt')
import rabin_karp
import numpy as np
import json
from os.path import dirname, join
import re


class PlagiarismChecker:
    def __init__(self, file_a, file_b):
        self.file_a = file_a
        self.file_b = file_b
        self.hash_table = {"a": [], "b": []}
        self.k_gram = 5
        content_a = self.get_file_content(self.file_a)
        content_b = self.get_file_content(self.file_b)
        self.calculate_hash(content_a, "a")
        self.calculate_hash(content_b, "b")

    # calaculate hash value of the file content
    # and add it to the document type hash table
    def calculate_hash(self, content, doc_type):
        text = self.prepare_content(content)
        text = "".join(text)
        # print(text)

        text = rabin_karp.rolling_hash(text, self.k_gram)
        for _ in range(len(content) - self.k_gram + 1):
            self.hash_table[doc_type].append(text.hash)
            if text.next_window() == False:
                break
        # print(self.hash_table)

    def get_rate(self):
        return self.calaculate_plagiarism_rate(self.hash_table)

    # calculate the plagiarism rate using the plagiarism rate formula
    def calaculate_plagiarism_rate(self, hash_table):
        th_a = len(hash_table["a"])
        th_b = len(hash_table["b"])
        a = hash_table["a"]
        b = hash_table["b"]
        sh = len(np.intersect1d(a, b))
        # print(sh, a, b)
        # print(sh, th_a, th_b)

        # Formular for plagiarism rate
        # P = (2 * SH / THA * THB ) 100%
        p = (float(2 * sh)/(th_a + th_b)) * 100
        return p

    # get content from file
    def get_file_content(self, filename):
        file = open(filename, 'r+')
        return file.read()

    # Prepare content by removing stopwords, steemming and tokenizing
    def prepare_content(self, content):
        # STOP WORDS
        stop_words = set(stopwords.words('english'))
        # TOKENIZE
        word_tokens = word_tokenize(content)

        filtered_content = []
        # STEMMING
        porter = PorterStemmer()
        for w in word_tokens:
            if w not in stop_words:
                w = w.lower()
                word = porter.stem(w)
                filtered_content.append(word)

        return filtered_content


current_dir = dirname(__file__)
files_entries = os.listdir("plagiarism-checker/docs/txt/")

record = []
maximum = []
i = 0
while i < len(files_entries) - 1:
    temp = []
    j = i + 1
    while j < len(files_entries):
        path_files = '../docs/txt/' + files_entries[i]
        path_files1 = '../docs/txt/' + files_entries[j]
        checker = PlagiarismChecker(
            join(current_dir, path_files),
            join(current_dir, path_files1)
        )
        iteration = {
            "iteration": i + 1,
            "data1": path_files,
            "data2": path_files1,
            "precentage": '{:6.2f}%'.format(checker.get_rate())
        }
        j += 1
        temp.append(iteration)
        record.append(iteration)
    max = temp[0]["precentage"]
    for x in temp:
        if x["precentage"] > max:
            data_1 = x["data1"]
            data_2 = x["data2"]
            max = x["precentage"]

            maximum.append({
                "data1": data_1,
                "data2": data_2,
                "precentage": max
            })

        i += 1

print("Ini json record \n")
print(json.dumps(record, indent = 4))

print("Ini list max \n")
print(json.dumps(maximum, indent = 4))

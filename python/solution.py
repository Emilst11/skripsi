import os
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.stem import LancasterStemmer
# nltk.download('stopwords')
# nltk.download('punkt')
import rabin_karp
import numpy as np
import filecutting
from os.path import dirname, join


class PlagiarismChecker:
    def __init__(self, file_a, file_b):
        self.file_a = file_a
        self.file_b = file_b
        self.hash_table = {"a": [], "b": []}
        self.k_gram = 7
        content_a = self.file_a
        content_b = self.file_b
        self.calculate_hash(content_a, "a")
        self.calculate_hash(content_b, "b")

    # calaculate hash value of the file content
    # and add it to the document type hash table
    def calculate_hash(self, content, doc_type):
        text = self.prepare_content(content)
        text = "".join(text)

        text = rabin_karp.rolling_hash(text, self.k_gram)
        for _ in range(len(content) - self.k_gram + 1):
            self.hash_table[doc_type].append(text.hash)
            if text.next_window() == False:
                break

    def get_rate(self):
        return self.calaculate_plagiarism_rate(self.hash_table)

    # calculate the plagiarism rate using the plagiarism rate formula
    def calaculate_plagiarism_rate(self, hash_table):
        th_a = len(hash_table["a"])
        th_b = len(hash_table["b"])
        a = hash_table["a"]
        b = hash_table["b"]
        sh = len(np.intersect1d(a, b))

        # Formular for plagiarism rate
        p = (float(2 * sh)/(th_a + th_b)) * 100
        return p

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


def filecleaning():
    path_load = "../docs/words/"
    file_load = os.listdir(path_load)

    path_save = "./docs/txt/"
    file_save = os.listdir(path_save)
    x = 0
    while x < len(file_save):
        os.remove(path_save + file_save[x])
        x += 1
        # try:
        #     os.remove(path_save + file_save[x])
        #     x += 1
        # except FileNotFoundError:
        #     x += 1
    while x < len(file_load):
        os.remove(path_load + file_load[x])
        x += 1
        # try:
        #     os.remove(path_load + file_load[x])
        #     x += 1
        # except FileNotFoundError:
        #     x += 1
    
record = []

def processing():
    files = filecutting.runfilecutting()
    # current_dir = dirname(__file__)
    # files_entries = os.listdir("./docs/txt/")
    i = 0
    while i < len(files)-1:
        data = []
        j = i + 1
        while j < len(files):
            # path_files = '../docs/txt/' + files_entries[i]
            # path_files1 = '../docs/txt/' + files_entries[j]
            # checker = PlagiarismChecker(
            #     join(current_dir, path_files),
            #     join(current_dir, path_files1)
            # )
            checker = PlagiarismChecker(
                join(files[i]['text']),
                join(files[j]['text'])
            )
            temp = {
                "compared": files[j]['name'],
                "precentage": '{:6.2f}%'.format(checker.get_rate())
            }
            data.append(temp)
            j += 1
            # try:
            #     checker = PlagiarismChecker(
            #         join(current_dir, path_files),
            #         join(current_dir, path_files1)
            #     )
            #     temp = {
            #         "compared": files_entries[j],
            #         "precentage": '{:6.2f}%'.format(checker.get_rate())
            #     }
            #     data.append(temp)
            #     j += 1
            # except FileNotFoundError:
            #     j += 1
        record.append({
            "iteration" : i+1,
            "document": files[i]['name'],
            "data": data
        })
        i += 1
    return record
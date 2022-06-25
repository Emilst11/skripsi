import os
import docx2txt
import json
import re

file_path = os.listdir("plagiarism-checker/docs")
path = "plagiarism-checker/docs/Laporan_Magang_Emil_Setiawan.docx"
txt = docx2txt.process(path)
data = []
f = open('plagiarism-checker/docs/' + file_path[4], 'r')
text = f.read()

def cuttingFiles(files, file_text):

    new_text = re.search("(?!\+)\s\s(PENDAHULUAN)([\s\S]*)(?=\sDAFTAR\sPUSTAKA)", file_text)
    x = new_text.group()
    # stores = {
    #     "name" : files,
    #     "text" : file_text
    # }

    # data.append(stores)
    return x

# cuttingFiles(file_path[4], text)
# print(json.dumps(data, indent = 4))
print(cuttingFiles(file_path[4], text))
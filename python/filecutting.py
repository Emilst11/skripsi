from importlib.resources import path
from pathlib import Path
import os
import docx2txt
import re
import json

data_text = []
file_load = os.listdir("plagiarism-checker/docs/words/")
path_load = "plagiarism-checker/docs/words/"

file_save = os.listdir("plagiarism-checker/docs/txt/")
path_save = "plagiarism-checker/docs/txt/"

def files_name(name):
    split_name = name.split("/")
    txt_name = split_name[len(split_name)-1].split(".")
    new_name = re.sub("\s", '_', txt_name[0])
    return new_name  

def cuttingFiles(file_name, file_text):
    pattern = "(PENDAHULUAN\sLatar)([\s\S]*)(?=\sDAFTAR\sPUSTAKA)"
    try:
        string = re.sub("\s\s+", ' ', file_text)
        entry = re.search(pattern, string).group()
        new = files_name(file_name)
        location = path_save + new

        path = Path(location + ".txt")
        if path.is_file():
            print("exist")
        else:
            f = open(location + ".txt", 'w', encoding="utf-8")
            f.write(entry)
            f.close()
            store = {
                "name" : new,
                "status" : "Success"
            }

            data_text.append(store)
    except AttributeError:
        store = {
            "name" : file_name,
            "status" : "Error"
        }
        data_text.append(store)
    

def runfilecutting():
    for x in file_load:
        convertTotxt = docx2txt.process(path_load + x)
        cuttingFiles(path_load + x, convertTotxt)
    return data_text
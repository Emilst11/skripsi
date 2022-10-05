from importlib.resources import path
from pathlib import Path
import os
import docx2txt
import re

data_text = []
file_load = os.listdir("../docs/words/")
path_load = "../docs/words/"

file_save = os.listdir("../docs/txt/")
path_save = "../docs/txt/"

def files_name(name):
    split_name = name.split("/")
    txt_name = split_name[len(split_name)-1].split(".")
    new_name = re.sub("\s", '_', txt_name[0])
    return new_name  

def cuttingFiles(file_name, file_text):
    pattern = "(PENDAHULUAN\sLatar)([\s\S]*)(?=\sDAFTAR\sPUSTAKA)"
    string = re.sub("\s\s+", ' ', file_text)
    try:
        entry = re.search(pattern, string).group()
        store = {
            "name" : file_name,
            "text" : entry,
            "status" : "Success"
        }
        data_text.append(store)
    except AttributeError:
        print("No text")
    

def runfilecutting():
    x = 0
    while x < len(file_load):
        convertTotxt = docx2txt.process(path_load + file_load[x])
        cuttingFiles(path_load + file_load[x], convertTotxt)
        os.remove(path_load + file_load[x])
        x += 1
    return data_text

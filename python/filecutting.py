from importlib.resources import path
from pathlib import Path
import os
import docx2txt
import re
import json

data_text = []
file_load = os.listdir("./docs/words/")
path_load = "./docs/words/"

file_save = os.listdir("./docs/txt/")
path_save = "./docs/txt/"

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
        # entry = re.search("(PENDAHULUAN\sLatar)([\s\S]*)", string).group()
        # new = files_name(file_name)
        # location = path_save + new

        # path = Path(location + ".txt")
        # if path.is_file():
        #     print("exist")
        # else:
        #     f = open(location + ".txt", 'w', encoding="utf-8")
        #     f.write(entry)
        #     f.close()
        #     store = {
        #         "name" : new,
        #         "status" : "Success"
        #     }
        store = {
            "name" : file_name,
            "status" : "error"
        }

        data_text.append(store)
    

def runfilecutting():
    # convertTotxt = docx2txt.process("plagiarism-checker/docs/words/201831198_AS.  Suci Asriana_Laporan Magang_proses_fix.docx")
    # cuttingFiles("plagiarism-checker/docs/words/201831198_AS.  Suci Asriana_Laporan Magang_proses_fix.docx", convertTotxt)
    for x in file_load:
        convertTotxt = docx2txt.process(path_load + x)
        cuttingFiles(path_load + x, convertTotxt)
        os.remove(path_load + x)
    return data_text

print(runfilecutting())
from importlib.resources import path
from pathlib import Path
import os
import docx2txt
import re

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
        # new = files_name(file_name)
        # location = path_save + new

        # path = Path(location + ".txt")
        # if path.is_file():
        #     print("exist")
        store = {
            "name" : file_name,
            "text" : entry,
            "status" : "Success"
        }
        # else:
        #     # f = open(location + ".txt", 'w', encoding="utf-8")
        #     # f.write(entry)
        #     # f.close()
        #     store = {
        #         "name" : file_name,
        #         "text" : entry,
        #         "status" : "Success"
        #     }
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
        print("No text")
    

def runfilecutting():
    # convertTotxt = docx2txt.process("plagiarism-checker/docs/words/201831198_AS.  Suci Asriana_Laporan Magang_proses_fix.docx")
    # cuttingFiles("plagiarism-checker/docs/words/201831198_AS.  Suci Asriana_Laporan Magang_proses_fix.docx", convertTotxt)
    x = 0
    while x < len(file_load):
        convertTotxt = docx2txt.process(path_load + file_load[x])
        cuttingFiles(path_load + file_load[x], convertTotxt)
        os.remove(path_load + file_load[x])
        x += 1
        # try:
        #     convertTotxt = docx2txt.process(path_load + file_load[x])
        #     cuttingFiles(path_load + file_load[x], convertTotxt)
        #     x += 1
        # except FileNotFoundError:
        #     x += 1
    return data_text

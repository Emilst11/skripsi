from flask import Flask, request, jsonify
import zipfile
import os
import filecutting
import solution

app = Flask (__name__)
UPLOAD_FOLDER = 'plagiarism-checker/python/upload_zip/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def main():
    return 'Hello EMIL'

@app.route('/api/uploader', methods=['POST'])
def uploader():
    file = request.files['file']
    if file:
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    
    items = os.listdir(UPLOAD_FOLDER)
    with zipfile.ZipFile(UPLOAD_FOLDER + items[0], "r") as zip_ref:
        zip_ref.extractall("plagiarism-checker/docs/words/")
    
    for x in items:
        os.remove(UPLOAD_FOLDER + x)
    
    file_status = filecutting.runfilecutting()
    records = solution.processing()

    return jsonify(status = file_status, record = records)


if __name__ == '__main__':
    app.run(debug = True)
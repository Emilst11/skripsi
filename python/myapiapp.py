from flask import Flask, request, jsonify
from flask_cors import CORS
import zipfile
import os
import filecutting
import solution

app = Flask (__name__)
CORS(app)
UPLOAD_FOLDER = 'python/upload_zip/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def main():
    return 'Hello EMIL'

@app.route('/api/uploader', methods=['POST'])
def uploader():
    period = request.form['period']
    year = request.form['year']
    file = request.files['file']
    if file:
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    
    items = os.listdir(UPLOAD_FOLDER)

    if len(items) != None:
        with zipfile.ZipFile(UPLOAD_FOLDER + items[0], "r") as zip_ref:
            zip_ref.extractall("docs/words")
        
        for x in items:
            os.remove(UPLOAD_FOLDER + x)
            
        filecutting.runfilecutting()
        records = solution.processing()

        return jsonify(record = records)
    else:
        filecutting.runfilecutting()
        records = solution.processing()
        return jsonify(period, year, records)
    
if __name__ == '__main__':
    app.run(port=5000, debug = True)
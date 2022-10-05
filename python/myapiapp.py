from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_caching import Cache
import zipfile
import os
import filecutting
import solution

config = {
    "DEBUG": True,          # some Flask specific configs
    "CACHE_TYPE": "SimpleCache",  # Flask-Caching related configs
    "CACHE_DEFAULT_TIMEOUT": 300
}

app = Flask (__name__)
app.config.from_mapping(config)

CORS(app)
UPLOAD_FOLDER = 'upload_zip/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def main():
    return 'Hello EMIL'

@app.route('/api/uploader', methods=['POST'])
def uploader():
    file = request.files['file']
    # if file:
    #     file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    
    items = os.listdir(UPLOAD_FOLDER)

    with zipfile.ZipFile(file, "r") as zip_ref:
            zip_ref.extractall("../docs/words")
            records = solution.processing()
        
    for x in items:
        os.remove(UPLOAD_FOLDER + x)
        
    return jsonify(record = records)
    
if __name__ == '__main__':
    app.run(debug = True)
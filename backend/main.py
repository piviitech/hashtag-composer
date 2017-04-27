import json

from flask import Flask
app = Flask(__name__)

@app.route("/api/v1/search")
def search():
    response = {
        "tags": [
           {
                "name": "something",
                "count": 5 
           }
        ]
    }

    return json.dumps(response)

@app.route("/api/v1/related")
def related():
    response = {
        "tags_large": [
           {"name": "something", "count": 5}
        ],
        "tags_medium": [
           {"name": "something", "count": 5}
        ],
        "tags_small": [
           {"name": "something", "count": 5}
        ]
    }

    return json.dumps(response)

if __name__ == "__main__":
    app.run()

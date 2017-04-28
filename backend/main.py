import json

from flask import Flask
from flask import request
app = Flask(__name__)

dummy = ["A","B","C"]

@app.route("/api/v1/search")
def search():
    q = request.args.get('q', '')
    response = {
        "tags": dummy_item_list('', q, dummy)
    }

    return json.dumps(response)

def dummy_item_list(prefix, content, suffices):
    return map(lambda x: {
                "name": "{}{}{}".format(prefix,content,x),
                "count": 5 
           }, suffices)

@app.route("/api/v1/related")
def related():
    q = request.args.get('q', '')
    response = {
        "tags_large": dummy_item_list("l_", q, dummy),
        "tags_medium": dummy_item_list("m_", q, dummy),
        "tags_small": dummy_item_list("s_", q, dummy)
    }

    return json.dumps(response)

if __name__ == "__main__":
    app.run()

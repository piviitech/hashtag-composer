import json

from flask import Flask
app = Flask(__name__)

dummy = ["a","b","c"]

@app.route("/api/v1/search")
def search():
    response = {
        "tags": dummy_item_list("try ", dummy)
    }

    return json.dumps(response)

def dummy_item_list(prefix, suffices):
    return map(lambda x: {
                "name": "{}something{}".format(prefix,x),
                "count": 5 
           }, suffices)

@app.route("/api/v1/related")
def related():
    response = {
        "tags_large": dummy_item_list("l ", dummy),
        "tags_medium": dummy_item_list("m ", dummy),
        "tags_small": dummy_item_list("s ", dummy)
    }

    return json.dumps(response)

if __name__ == "__main__":
    app.run()

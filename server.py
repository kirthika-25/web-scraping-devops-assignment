from flask import Flask,jsonify
import json 
my_server = Flask(__name__)
@my_server.route("/records")
def display_json():
    json_file = open("scraped_data.json")
    server_records = json.load(json_file)
    json_file.close()
    return jsonify(server_records)
if __name__ == "__main__":
    my_server.run(host="0.0.0.0",port=8000)
from flask import Flask, send_file, make_response, after_this_request, request
from flask_cors import CORS

import time
from endpoints import pokemon_endpoint, art_endpoint

app = Flask(__name__)
CORS(app)

@app.route('/pokemon')
# @limiter.limit("1 per second")
def get_pokemon():
    speed = int(request.args.get('speed'))
    if speed is not None:
        speed = int(speed)
    else:
        print("Erorr string is " + speed)
    return pokemon_endpoint(speed)

@app.route('/art')
def get_art():
    return art_endpoint()

if __name__ == '__main__':
    app.run()
    
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address
# from flask_limiter.util import get_remote_address

# limiter = Limiter(
#     get_remote_address,
#     app=app,
#     default_limits=["1 per second"],
# )

# def download_file():
#     start_time = time.time()
#     file_path = 'image.jpg'
#     with open(file_path, 'rb') as f:
#         image_data = f.read()
    
#     response = make_response()
#     response.headers.set('Content-Type', 'image/jpeg')
    
#     chunk_size = 1024
#     for i in range(0, len(image_data), chunk_size):
#         chunk = image_data[i:i+chunk_size]
#         response.data += chunk
#         time.sleep(0.001)  # Add a delay of 0.1 seconds between sending each chunk
    
#     @after_this_request
#     def add_header(response):
#         elapsed_time = time.time() - start_time
#         response.headers['X-Download-Time'] = str(elapsed_time)
#         return response
    
#     return response

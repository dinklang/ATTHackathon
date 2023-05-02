import requests
import time

# Latency * 3 per 
def pokemon_endpoint(speed):

    url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
    response = requests.get(url)

    time.sleep(speed/1000)

    data = response.json()

    return data

# def art_endpoint():
#     url = 'https://api.artic.edu/api/v1/artworks'
#     response = requests.get(url)

#     # Do something with the response
#     data = response.json()

#     return data["data"]
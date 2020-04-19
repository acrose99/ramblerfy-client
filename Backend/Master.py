import time

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# connects to the API using the official RamblerFy api credentials I set up
import audio_features
import search


def main():
    client_credentials_manager = SpotifyClientCredentials(client_id="318bd146dc0b46bd9e41e990bbe4ce2a",
                                                          client_secret="c56fe1ad00454247b966648148405c19",
                                                          proxies=None,
                                                          requests_timeout=None)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    # Turn this to TRUE to see all the HTTP exchanges between us and the API
    # Turn this to False for pretty output
    sp.trace = False
    search_string = str(input("What would you like to search for?"))
    search_type = str(input("Is this an artist, song, album, playlist?"))

    # For seeing how long each call takes
    start = time.time()

    search.main(sp, search_string, search_type)
    audio_features.print_json(search_string)

    delta = time.time() - start
    print("Data retrieved in %.2f seconds" % (delta,))


def script():
    client_credentials_manager = SpotifyClientCredentials(client_id="318bd146dc0b46bd9e41e990bbe4ce2a",
                                                          client_secret="c56fe1ad00454247b966648148405c19",
                                                          proxies=None,
                                                          requests_timeout=None)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    # Turn this to TRUE to see all the HTTP exchanges between us and the API
    # Turn this to False for pretty output
    sp.trace = False
    search_type = "artist"
    with open('output.txt') as f:
        artists = []
        for line in f:
            artists.append(line)
    # you may also want to remove whitespace characters like `\n` at the end of each line
    artists = [x.strip() for x in artists]
    search.search_multiples(sp, artists, search_type)


# main()
script()

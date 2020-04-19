import json

track_audio_features_wrapper = {
    'tracks': [

    ]
}


def main(sp, api_key):
    # Get the audio features for a sample/test track
    '''  We can use the search function of the API:
    (https://developer.spotify.com/documentation/web-api/reference/search/search/)'''
    try:
        track_features = sp.audio_features(api_key)
        # audio_analysis = sp.audio_analysis("11dFghVXANMlKmJXsNCbNl")
        duration_ms = track_features[0]["duration_ms"]
        loudness = track_features[0]["loudness"]
        tempo = track_features[0]["tempo"]
        key = track_features[0]["key"]
        danceability = track_features[0]["danceability"]
        energy = track_features[0]["energy"]
        valence = track_features[0]["valence"]
        track_id = track_features[0]["uri"]
        track_info = sp.track(track_id)
        uri = track_info["uri"]
        spotify_url = track_info["external_urls"]["spotify"]
        # 3 different sizes for images
        cover_image_url = track_info["album"]["images"][1]["url"]
        track_name = track_info["name"]
        track_artist = track_info["artists"][0]["name"]
        track_album = track_info["album"]["name"]
        tract_audio_features_dict = {
            "uri": uri,
            "spotify_url": spotify_url,
            "cover_image_url": cover_image_url,
            "track_name": track_name,
            "track_artist": track_artist,
            "track_album": track_album,
            "duration_ms": duration_ms,
            "loudness": loudness,
            "tempo": tempo,
            "key": key,
            "danceability": danceability,
            "energy": energy,
            "valence:": valence
    }
        track_audio_features_wrapper['tracks'].append(tract_audio_features_dict)
        print("Track is " + track_name)
        print("Artist is " + track_artist)
        print("---------------------\nAudio Features we want \n---------------------")
        print(json.dumps(tract_audio_features_dict, indent=4))
    except:
        if TypeError:
            print("Skipping!")
        if IndexError:
            print("Skipping")



def write_json():
    with open('songs.json', 'w') as file_out:
        json.dump(track_audio_features_wrapper, file_out, indent=4, sort_keys=True)


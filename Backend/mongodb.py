import pymongo as pymongo

client = pymongo.MongoClient(
    "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority")
db = client.test

# {tracks: {$ne: '{tracks: {"danceabilty>0.7"}'}}
# $filter: {input: "$items",as: "item", cond: { $gte: [ "$$item.price", 100 ] }

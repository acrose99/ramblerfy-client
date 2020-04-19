## RamblerPy

## Getting Started

### Getting the data
Simply run master.py and follow the instructions 

### Setting up MongoDB
1. Install MongoDB Community Edition[https://docs.mongodb.com/manual/installation/]
2. Connect to the server using a GUI, Driver, or a CLI[https://docs.atlas.mongodb.com/connect-to-cluster/#connect-to-a-cluster]
    * The connection string is `mongodb+srv://<username>:<password>@ramblerpy-5rd9x.mongodb.net/test`
3. In mongoDB.py, connect using 

* `import pymongo`
* `client = pymongo.MongoClient("mongodb+srv://<username>:<password>@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority")`
* `db = client.test`

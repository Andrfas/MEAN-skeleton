var db;

exports.connect = function(callback) {
    MongoClient.connect('mongodb://localhost:27017/blog', function(err, dbInst) {
        db = dbInst;
        callback();
    }
}

exports.getDb = function() {
    return db;
}

// module.exports = ExampleDB;

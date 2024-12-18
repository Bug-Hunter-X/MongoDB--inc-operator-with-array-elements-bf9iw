```javascript
// Correct usage of $inc operator with array filters
db.collection.updateOne({"_id":1, "arrayField":{"$elemMatch":{"element":5}}},{"$inc":{"arrayField.$[].element":1}});
```
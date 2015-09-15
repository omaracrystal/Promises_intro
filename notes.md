#STEP BY STEP

1. To incorporate promise library Q with mongoose run this command in terminal:
``npm mongoose-q --save ``

2. In all route folders include this line on top:
    - We change our mongoose variable to use the module mongoose-q.
```
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
```

3. **Comparison**
What we have been doing:
```
//get all users
router.get('/users', function(req, res, next) {
  User.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});
```
**What is becomes:**

```
//get all users
router.get('/users', function(req, res, next) {
  User.findQ()
    .then(function (data) { res.json(data) })
    .catch(function (err) { res.send(err) })
    .done();
});
```


var category=require('./../../models/catelogy');

exports.FindCategoryByID = async (req, res) => {
    var id = req.params.id;
    await category.find({ id : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.FindCategoryByStore = async (req, res) => {
    var id = req.params.id;
    await category.find({ storeID : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.FindCategoryByGroup = async (req, res) => {
    var id = req.params.id;
    await category.find({ groupCateID : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.AddCate = async (req, res) => {
    const {groupCateID,storeID,content,name}=req.body;
    const catelogy=new Catelogy({groupCateID,storeID,content,name});
    await catelogy.save().then(result=>{
        res.send("Added");
    }).catch(err=>{
        res.send("Error");
    });
}
exports.UpdateCate = async (req, res) => {
    const {groupCateID,storeID,content,name}=req.body;
    const catelogy={groupCateID,storeID,content,name};
    await Catelogy.findByIdAndUpdate(req.params.id,catelogy).then(result=>{
        res.send("Added");
    }).catch(err=>{
        res.send("Error");
    })
}
exports.DeleteCate = async (req, res) => {
    console.log(req.params.id);
    await category.findByIdAndRemove(req.params.id).then(result=>{
        res.send("Deleted");
    }).catch(err=>{
        res.send("Error");
    });
}
module.exports.index = function(req, res){
  res.render('html1', { title: 'pageone' });
};

module.exports.index2 = function(req, res){
  res.render('html2', { title: 'pagetwo' });
};


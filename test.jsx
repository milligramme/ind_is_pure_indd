//@target "InDesign"
//@include "./index.jsx"


var paths = [
  "~/Desktop/indd.indd",
  "~/Desktop/indd_save_as.indd",
  
  "~/Desktop/idml.indd",
  "~/Desktop/idml_save_as.indd",
  
  "~/Desktop/new_indd.indd"
]
var new_doc = app.documents.add();
new_doc.save(new File("~/Desktop/new_indd.indd"));
new_doc.close(SaveOptions.NO)

for (var i=0, len=paths.length; i < len ; i++) {
  var ret = is_pure_indd(File(paths[i]));
  $.writeln(ret);
};

// should be
// true
// true
// false
// false
// true
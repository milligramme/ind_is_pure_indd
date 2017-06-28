//@target "InDesign"

// [Extract Metadata with Adobe XMP \[Part 1\] \| IndiSnip \[InDesign® Snippets\]](https://indisnip.wordpress.com/2010/08/13/extract-metadata-with-adobe-xmp/)
(function () {
  var XMPload = Boolean(false);
  if (ExternalObject.AdobeXMPScript == undefined){
      try {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript'); XMPload = true;}
      catch(ex) {alert("Unable to load the AdobeXMPScript library!");}
  }
  if (!XMPload) {
    throw(new Error());
  }
})();

var is_pure_indd = function (path) {
  var pure_indd = true;
  var xmp_file = new XMPFile(path.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ);
  var xmp = xmp_file.getXMP();
  var xmp_str = xmp.serialize();
  xmp_file.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
  
  if (xmp_str.indexOf("xmpMM:OriginalDocumentID") < xmp_str.indexOf("xmpMM:DocumentID")) {
    return false
  }
  return pure_indd
}

// test

var paths = [
  "~/Desktop/indd.indd",
  "~/Desktop/indd_save_as.indd",
  "~/Desktop/idml.indd",
  "~/Desktop/idml_save_as.indd",
  "~/Desktop/new_indd.indd"
]
var new_doc = app.documents.add();
new_doc.save(new File("~/Desktop/new_indd.indd"));
new_doc.close(SaveOptions.NO);

for (var i=0, len=paths.length; i < len ; i++) {
  var ret = is_pure_indd(File(paths[i]))
  $.writeln(ret);
};

// should be
// true
// true
// false
// false
// true
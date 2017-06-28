// [Extract Metadata with Adobe XMP \[Part 1\] \| IndiSnip \[InDesign® Snippets\]](https://indisnip.wordpress.com/2010/08/13/extract-metadata-with-adobe-xmp/)
(function () {
  var XMPload = Boolean(false);
  if (ExternalObject.AdobeXMPScript == undefined){
      try {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript'); XMPload = true;}
      catch(ex) {alert("Unable to load the AdobeXMPScript library!");}
  }
  if (!XMPload) {
    throw(new Error("CS5 or later!!"));
  }
})();

/*
  @param path String
  @return Boolean
*/
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

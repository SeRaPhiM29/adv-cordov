(function(window, undefined) {
  var dictionary = {
    "2e673adc-f7e8-4f44-8818-52911569c34c": "reading",
    "edec912b-9b12-4551-a5c3-a27eb8548328": "sample image",
    "dccbe382-3eb6-4a3f-a75d-b779da7a5a6b": "inhaler mode",
    "56b3da22-5a17-4e53-bcc4-004b23cbabf2": "reading_wrong",
    "65523f66-2134-4586-bf6e-9594f08783d3": "Template 1",
    "a55d4bd2-347b-405a-9c80-ed62283366d5": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
(function(window, undefined) {
  var dictionary = {
    "893ccb3f-2613-47b2-9ee9-69b636dbddd1": "TUTORDISPONIBILIDAD",
    "14a4ff93-25c3-4c65-a837-d5c51fd5632f": " TUTORFICHA",
    "7d574bcc-d9cd-4e24-9ab4-8823f2a7eac5": "COORDINADORDOCENTESTUTORES",
    "3bb22b78-a864-424d-ab62-ba189da6eccc": "TUTORINFORMEQUINCENAL",
    "d0b6e55f-47e9-4294-82f2-042665b4bef5": "COORDINADOR",
    "ea8354a4-f7af-4a75-a48d-c39175c85c3f": "TUTOR1",
    "fa7937c1-6b77-4534-a4fe-ac766cf8c6ed": "COORDINADORAYUDANTES",
    "9a3a4047-009d-4ca2-a3e8-9dfa30aba868": "TUTORINFORMESEMESTRAL",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LOGIN",
    "808c29e3-8031-4876-bd5d-f60ab64de8a8": "COORDINADORINFORMES",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
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
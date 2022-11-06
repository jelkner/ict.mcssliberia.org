window.onload = function() {
/* Tutorial creators should edit the title, author, and list of lesson
   name values appropriately. */
  var title =  "Getting Down with the Unix CLI";
  var author = "Jeffrey Elkner and Adrian Buchholz";
  var lessons = [
                "What is the Unix CLI?", 
                "Files and the file system",
                "Editing files with GNU nano",
                "The rm, cp, and mv commands",
                "Editing files with Vim",
                "Remote connecting with ssh, scp, and sftp",
                "Locating file system resources with find",
                "Searching for text within files using grep",
                "Where to Go from Here"
                ];

  /* Don't touch anything below here unless you really know what you
     are doing! */
  document.querySelector("title").textContent = title;
  document.querySelector("header h1 a").textContent = title;
  document.querySelector("p#author span").textContent = author;

  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  var digit = 'empty'
  if ((filename == '') || (filename == 'index.html')) {
    digit = 'x';
  } else if (filename.slice(0,6) == 'lesson') {
    digit = filename[6];
  }
  if (digit >= '0' && digit <= '9') {
    var changed = "s" + digit;
    var num = parseInt(digit);
    document.getElementById(changed).style.background = "#006";
    document.querySelector("h1#title").textContent = "Lesson " + digit + ": " + 
      lessons[num - 1];
    document.querySelector("p#finished span").textContent = digit;
    if (num < 9) {
      var nlink = "lesson" + (num + 1) + ".html";
      document.querySelector("a#next").setAttribute('href', nlink);
    };
  } else if (digit == 'x') {
    for (var i = 1; i < 10; i++) {
      document.querySelector('li#l' + i + ' span').textContent = lessons[i - 1];
    };
  };
};

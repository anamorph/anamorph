const md = require("markdown-it")({
    html: true, // Enable HTML tags in source
    breaks: true, // Convert '\n' in paragraphs into <br/>
  });
  const fs = require("fs");
   
  (async () => {
    text = `Hello World !\n\nI am Nicolas (Nico) David, a Digital Innovation Senior consultant \n\n![](https://github.com/anamorph/anamorph/workflows/build/badge.svg)`;
  
    const result = md.render(text);
  
    fs.writeFile("README.md", result, function (err) {
      if (err) return console.log(err);
      console.log(`${result} > README.md`);
    });
  })();
  
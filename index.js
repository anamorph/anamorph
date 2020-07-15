const md = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
  });
  
  // details
  const currentRole = "Digital Innovation Senior consultant";
  const currentCompany = "Amazon Web Services";
  const currentCompanyUrl = "https://aws.amazon.com/aws-me/";
  const currentCountry = "Bahrain";

  const fs = require("fs");
   
  (async () => {
    blurb = `Hello World !\n\nI am Nicolas (Nico) David, a ${currentRole} at [${currentCompany}](${currentCompanyUrl}) , based in ${currentCountry}.\n\n![](https://github.com/anamorph/anamorph/workflows/build/badge.svg)`;
  
    const result = md.render(blurb);
  
    fs.writeFile("README.md", result, function (err) {
      if (err) return console.log(err);
      console.log(`${result} > README.md`);
    });
  })();
  
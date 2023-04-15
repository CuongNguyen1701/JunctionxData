const fs = require("fs");
const fs_extra = require("fs-extra");
const dir = "./images";
fs.readdirSync(dir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => {
    let subdir = `${dir}/${dirent.name}`;
    let filenames = fs.readdirSync(`${subdir}`);

    filenames.forEach((file) => {
      //move file to the outer directory:

      fs_extra.move(`${subdir}/${file}`, `${dir}/${dirent.name}_${file}`);
    });
  });

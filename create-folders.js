const fs = require("fs");
const path = require("path");

// Function to copy a folder recursively
const copyFolderSync = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    const stat = fs.statSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
};

// Function to replace <#TODO> in files
const replaceInFiles = (dir, searchValue, replaceValue) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace(new RegExp(searchValue, "g"), replaceValue);
      fs.writeFileSync(filePath, content, "utf8");
    } else if (stat.isDirectory()) {
      replaceInFiles(filePath, searchValue, replaceValue); // Recursively replace in subdirectories
    }
  });
};

const folderName = process.argv[2];
if (!folderName) {
  console.error("Please provide a folder name.");
  process.exit(1);
}

const templateDir = path.join(__dirname, "src", "components", "template"); // Path to your template folder
const targetDir = path.join(__dirname, "src", "components", folderName);

if (fs.existsSync(targetDir)) {
  console.error("Target folder already exists.");
  process.exit(1);
}

// Copy template folder to the new target directory
copyFolderSync(templateDir, targetDir);

// Replace <#TODO> with the first five letters of folderName
const replaceValue = folderName.slice(0, 5);
replaceInFiles(targetDir, "<#TODO>", replaceValue);

console.log(
  `Folder ${folderName} created with all occurrences of <#TODO> replaced with ${replaceValue}`,
);

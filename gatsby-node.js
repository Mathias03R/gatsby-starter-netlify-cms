const fs = require('fs');
const path = require('path');

exports.onPostBuild = () => {
  const jsonFolder = path.join(__dirname, 'src', 'md');
  const peopleJsonPath = path.join(__dirname, 'src', 'people.json');

  // Obtén la lista de archivos .json en src/md
  const jsonFiles = fs.readdirSync(jsonFolder).filter(file => file.endsWith('.json'));

  // Mapea cada archivo .json a su contenido
  const jsonData = jsonFiles.reduce((acc, filename) => {
    const filePath = path.join(jsonFolder, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileData = JSON.parse(fileContent);
    return [...acc, ...fileData];
  }, []);

  // Escribe el contenido combinado en people.json
  fs.writeFileSync(peopleJsonPath, JSON.stringify(jsonData, null, 2));
};

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const csvsDirectory = path.join(process.cwd(), 'csvs')

export function csvJSON(csv){
  //console.log(csv);
  var lines=csv.split("\r\n");
  //console.log(lines);
  var result = [];

  var headers=lines[0].split(",");
  headers[0] = "id";
  //console.log(headers);
  for(var i=1;i<lines.length-1;i++){

      var obj = {};
      var currentline=lines[i].split(",");
	  //console.log(currentline);
      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }
	  //console.log(obj);
      result.push(obj);

  }
  //console.log(result);
  //console.log(JSON.stringify(result));
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

export function getSortedCsvsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(csvsDirectory)
  const allCsvsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.csv$/, '')

    // Read markdown file as string
    const fullPath = path.join(csvsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const jsonResult = csvJSON(fileContents)

    // Combine the data with the id
    return {
      id, jsonResult
    }
  })
  
  return allCsvsData;
  /*
  // Sort posts by date
  return allCsvsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  */
}

export function getAllCsvIds() {
  const fileNames = fs.readdirSync(csvsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.csv$/, '')
      }
    }
  })
}

export async function getCsvData(id) {
  const fullPath = path.join(csvsDirectory, `${id}.csv`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  //const matterResult = matter(fileContents)
  
  //const res = await fetch(' https://saebdlstorageg2.blob.core.windows.net/saeb-dlstorage-filesystem/Performance_Dashboard_Data/AA_Data/' + `${id}.csv`)
  //const csv = await res.text()
  //console.log(csv)
  
  const jsonResult = csvJSON(fileContents)
  console.log(jsonResult)

  // Use remark to convert markdown into HTML string
  /*
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  */
  
  
  const contentHtml = jsonResult;

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml
  }
}

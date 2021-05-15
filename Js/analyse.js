const paths = "/users/download/index.html"
const ifHtml = path => {
    reqString = '.html';
    const reqPath = path.slice(-5);
    
    if (reqPath == reqString) {
        return true
    }  else {
         return false
        }
    }


console.log(ifHtml(path))
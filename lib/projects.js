import fs from 'fs'
import path from 'path'
// import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'public/projects')
const totalProjects = 3

export function getAllProjects() {
    // let fs = require('fs')
    const projects = []
    for (let i = 1; i <= totalProjects; i++) {
        const projectDirectory = rootDirectory + "/" + i;
        // console.log(projectDirectory)
        const fileNames = fs.readdirSync(projectDirectory)
            // console.log(fileNames)
        const aProject = fileNames.reduce((map, x) => {
                let text = '';
                if (x == 'text.json') {
                    const jsonString = fs.readFileSync(projectDirectory + "/" + x)
                    text = JSON.parse(jsonString)
                        // console.log(text)
                } else if (x == 'thumb.PNG') {
                    map['thumbnail'] = x;
                    map['sub_thumbnails'].push(x)
                } else {
                    map['sub_thumbnails'].push(x)
                }
                return ({...text, ...map })
            }, { 'sub_thumbnails': [] })
            // const aProject = 
            // console.log(aProject)
        projects.push(aProject)
    }
    return projects
}
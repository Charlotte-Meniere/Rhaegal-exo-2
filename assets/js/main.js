"use script";
const fullname = ["Pierre", "Julie", "Grégory", "Grégoire", "Appoline", "Philipa", "Christopher", "Aline"];



const nameToObjects = () => {
    const objects = [];
    
    for (const element of fullname) {
      objects.push({firstLetter : element[0],           fullName : element});
      console.log(objects);
    }

    return objects;

}

nameToObjects(fullname);

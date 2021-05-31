class Rover {
   // Write code here!
   constructor(position) {
        this.mode = 'NORMAL'
        this.generatorWatts = 110
        this.position = 123;
    }
    receiveMessage(messageObject) {
      let messageName = messageObject.name; 
      let returnObject = {};
      returnObject("message") = messageName
      let resultsArray =[];
      
      for (let i=0; i < commandObjectArray.length; i++){
       let commandObject = commandObjectArray[i];
       let commandType = commandObject.commandType
       let commandValue = commandObject.commandValue
       let resultsObject ={};
       if (commandType === "STATUS_CHECK"){
        resultsObject["completed"]= true;
        resultsObject["roverStatus"] = {
          position:this.position,
          mode: this.mode,
          generatorWatts: this.generatorWatts
        }
       }
       resultsArray.push(commandObject);
      }
     
     returnObject["results"] = resultsArray;
     return returnObject;
      
      }
        
}

module.exports = Rover;
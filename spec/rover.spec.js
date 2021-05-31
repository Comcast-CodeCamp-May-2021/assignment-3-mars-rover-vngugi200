const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


// 7 tests here!
describe("Rover class", function() {
  let rover = new Rover(123);
  it("constructor sets position and default values for mode and generatorWatts", function() {
    expect(rover.position).toEqual(123);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });


  //TEST 8
  it("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual( 'Test message with two commands')
  });


  //TEST 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);  
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(2);

  });
  // Test 10 will go inside this }); to stay part of the class's describe.

  it("responds correctly to status check command", function() {
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message with STATUS_CHECK commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL");
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);

});

// you don't need to have a describe for each test, just an it. all your tests should be inside the describe for the entire Rover Class. 
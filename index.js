function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string){
    return string.toLowerCase();
  }
  function logShout(string){
    console.log(string.toUpperCase());
  } function logWhisper(string){
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(input){
    if (input === "Let's have dinner together!") {
        return "I would love to!";
    } else if (input === input.toUpperCase()) {
        return "YES INDEED!";
    } else if (input === input.toLowerCase()) {
        return "I can't hear you!";
    }
  }
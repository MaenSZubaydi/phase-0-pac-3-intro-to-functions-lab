function shout(string){
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) { 
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        let s = 'I can\'t hear you!';
        return s;
    } else if(string === string.toUpperCase()){
        let s = 'YES INDEED!';
        return s;
    } else if (string === 'Let\'s have dinner together!'){
        return 'I would love to!';
    }
}
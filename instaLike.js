function getHeartElement() { 
    // CSS class names to select heart
    var knownHeartElementNames = [
        "coreSpriteHeartOpen",
        "coreSpriteLikeHeartOpen",
        "coreSpriteHeartFull"
    ]; 
    // find the element that by trying to select it via querySelector
    for (i = 0; i < knownHeartElementNames.length; i++) { 
        var heartElement = document.querySelector('.' + knownHeartElementNames[i]); 
        if (heartElement != undefined) { 
            break; 
        } 
    }
    return heartElement; 
}

function doLike() { 

    var likeElement = getHeartElement(); 
    var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
    var nextTime = Math.random() * (14000 - 4000) + 4000; 
    

    likeElement.click(); 
    likeCount++; 
    console.log('Liked ' + likeCount);

    // click follow - "_njrw0" is follow button class
    document.querySelector('._njrw0').click();

    // wait one second and click next
    setTimeout(function() {
        nextElement.click();
    }, 1000);
    
    // If likeCount is less than 30 continue the loop
    // If likeCount > 30 reset like counter and wait 5 min before continuing.
    if (likeCount < 30) { 
        setTimeout(doLike, nextTime); 
    } else {
        console.log("break time!");
        likeCount = 0; 
        setTimeout(function(){ 
            doLike();
        }, 300000); 
    } 
}
// start program
var likeCount = 0; doLike();
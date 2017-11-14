function getHeartElement() { 
    var knownHeartElementNames = ["coreSpriteHeartOpen", "coreSpriteLikeHeartOpen"]; 
    for (i = 0; i < knownHeartElementNames.length; i++) { 
        var heartElement = document.querySelector('.' + knownHeartElementNames[i]); 
        if (heartElement != undefined) { 
            break; 
        } 
    } return heartElement; 
}
function doLike() { 
    var likeElement = getHeartElement(); 
    var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
    likeCount++; 
    console.log('Liked ' + likeCount); 
    var nextTime = Math.random() * (14000 - 4000) + 4000; 
    likeElement.click(); 
    document.querySelector('._njrw0').click();
    setTimeout(function() {
        nextElement.click();
    }, 1000); 
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
var likeCount = 0; doLike();
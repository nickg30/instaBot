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
    setTimeout(function() {
        nextElement.click();
    }, 1000); 
    if (likeCount < 25) { 
        setTimeout(doLike, nextTime); 
    } else { 
        console.log('Nice! Time for a break.'); 
    } 
}
var likeCount = 0; doLike();
let mediaArray = function (array)
{
    let media = 0
    array.forEach(element => {
        media += element
    });
    media = media/array.length
    
    return media
}

module.exports = mediaArray;
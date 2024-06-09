const getTheTitles = function(arr) {

    function extract(item){
        return item.title
    }

    let titles = arr.map(extract)
    return titles

};

// Do not edit below this line
module.exports = getTheTitles;

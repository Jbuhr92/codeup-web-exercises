(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split("|")

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsArrayBr = planetsArray.join("<br>");
    console.log(planetsArrayBr)
    const unorderedPlanetsArray = (array) =>{
        let inputArray = array.join("</li><li>")
        let outputArray = "<ul><li>" + inputArray + "</li></ul>"
        return outputArray
    }
    console.log(unorderedPlanetsArray(planetsArray))


})();
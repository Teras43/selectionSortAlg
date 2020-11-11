// let array = [8, 1, 2, 9, 5, 4, 7];
// [1, 2, 4, 5, 7, 8, 9]

function sort(array) {
    // debugger;
    for (let i = 0; i < array.length; i++) {
        // let minimum = array[0];
        // let minimum = array[i];
        let minimum = i;
        for (let n = i + 1; n < array.length; n++) {
            if (array[n] < array[minimum]) {
                // array[minimum] = n;
                // minimum = array[n];
                minimum = n;
            }
        }
        if(array[minimum] !== array[i]) {
            [array[i], array[minimum]] = [array[minimum], array[i]]
        }
        // console.log(minimum);
    }
    return array;
}
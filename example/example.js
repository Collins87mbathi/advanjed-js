function maximum() {
let array = [3,7,1,2,10] ;
let max = array[0];

for(i=0; i<array.length; i++) {
    if(array[i] > max) {
        max = array[i];
    }
}
console.log(max);
}
maximum();
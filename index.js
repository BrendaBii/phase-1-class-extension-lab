// Your code here
class Polygon {
    constructor (array) {
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        let x = this.countSides;
        let sum = 0;
        for(let i = 0; i < x; i++){
            sum += this.array[i];
        }
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let valid = false;
        if((this.array[0]+this.array[1] > this.array[2]) && (this.array[1]+this.array[2] > this.array[0]) && (this.array[0]+this.array[2] > this.array[1])){
            valid = true;
        }
        return valid;
    }
}

class Square extends Polygon {
    get isValid() {
        let valid = false;
        if(this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]){
            valid = true;
        }
        return valid;
    }

    get area() {
        return this.array[0] * this.array[0];
    }
}
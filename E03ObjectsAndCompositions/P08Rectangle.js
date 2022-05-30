function rectangle(width, height, color){
    const rectangleObj = {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea() {
            return this.width * this.height;
        }
    }

    return rectangleObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

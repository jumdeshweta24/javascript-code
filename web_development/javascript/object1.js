let dog = {
    breed: 'Goldenre retriever',
    height: '4ft',
    age: 2,
    // display: function() {
    //     document.write(this.breed + this.height + this.age);
    // }
};
/*document.write(dog.breed);
//document.write(dog.display)();
document.write(dog.height);
document.write(dog.age);
dog.weight = '32kg';
document.write(dog.weight);*/
document.write(dog['breed']);
document.write('<br>')
document.write(dog['age']);
document.write('<br>');
dog['height'] = '5ft'
document.write(dog['height']);
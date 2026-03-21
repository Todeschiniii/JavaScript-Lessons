const myButton = document.getElementById("myButton");
const labels = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3")
];

const min = 1;
const max = 6;

myButton.onclick = function(){
    for(const label of labels)
    {
        label.textContent = Math.floor(Math.random() * max) + min
    }   
}

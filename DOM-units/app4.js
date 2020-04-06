// Event listeners

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     e.preventDefault()
//     console.log('Hello World');
    
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick)
   
function onClick(e){
    //e.preventDefault()
    //console.log('clicked');

    let val;
    val = e.target
    val = e.target.className
    val = e.target.classList

    // Event type
    val = e.type

    // Timestamp
    val = e.timeStamp

    // Coordinates event relative to the window (pixels on Y axis)
    val = e.clientY

    console.log(val);
    
    
}
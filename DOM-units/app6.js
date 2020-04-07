// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
    
// })

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
    
// })

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
    
// })

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
    
// })

// EVENT DELEGATION: the opposite

// const delItem = document.querySelector('.delete-item');  // this is the class (all items)
// delItem.addEventListener('click', deleteItem); // this only sets the listener on the FIRST item

// To add event listener to ALL ITEMS, set it to a parent element:
document.querySelector('ul').addEventListener('click', deleteItem)

function deleteItem(e) {
    //console.log(e.target);

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove() 
        // this goes up to the <a> parent, and then to the <li> class items.
    }
}
export default  function getElement(selection) {
    const element = document.querySelector(selection)
    if (element) {
        return element
    }
    else{
        throw Error ('You did not select element')
    }

    
}
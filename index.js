$("#add").on('click', (e)=>{
    e.preventDefault()
    let count = Number($('#count').text())
    count ++
    $('#count').text(count)
})
$("#remove").on('click', (e)=>{
    e.preventDefault()
    let count = Number($('#count').text())
    if(count > 0){
        count --
    }
    $('#count').text(count)
})

$(document).on('ready', ()=>{
  $('#iform').submit((e) => {
    $('.file-info ul').html('');
    let data = new FormData($('#iform')[0]);
    $.ajax({
      type: 'POST',
      url: '/uploads',
      data: data,
      processData: false,
      contentType: false
    }).done(function(data){
      console.log(data)
      Object.keys(data).map(function(key){
        $('.file-info ul').append('<li>'+key+' : '+data[key]+'</li>')
      })
    }).fail(function(data){
      
    })
    e.preventDefault();
  })
  
})
$(function(){

    var $kereta = $('#kereta');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/kereta/',
        success : function(kereta){
            console.log('success',kereta.items);
            $.each(kereta.items, function(i,item){
                $kereta.append('<li> '+kereta.items[i]["nama kereta"]+', '+kereta.items[i]["jumlah gerbong"] +' gerbong</li>')
            })
        }
    });

});
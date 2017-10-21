var socket = io();
socket.emit('getPhonems', 'it feels like I know her, but sometimes my arms bend back.');

socket.on('phonemsReturn', function(data){
        console.log(data);
        $( ".translated" ).empty();
        $( ".translated" ).append( "<h1>"+esrever.reverse(data)+"</h1>" );
    });

$('form').submit(function(){
        socket.emit('getPhonems', $('#inputText').val());
        
        return false;
});

$('form').on('input',function(e){
    socket.emit('getPhonems', $('#inputText').val());
});

// var IO = {
    
//             init: function(){
//                 IO.socket = io.connect();
//                 io.emit('getPhonems');
//                 IO.bindEvents();
//             },
//             bindEvents: function(){
//                 IO.socket.on('phonemsReturn', function(){
//                     console.log(data);
//                 });
//             }
//         };

        

// IO.init();
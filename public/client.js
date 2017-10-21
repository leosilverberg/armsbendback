var socket = io();
socket.emit('getPhonems', 'it feels like I know her, but sometimes my arms bend back');
$( ".reversed" ).empty();
$( ".reversed" ).append( "<h1>"+esrever.reverse("it feels like I know her, but sometimes my arms bend back")+"</h1>" );

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
    $( ".reversed" ).empty();
    $( ".reversed" ).append( "<h1>"+esrever.reverse($('#inputText').val())+"</h1>" );
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
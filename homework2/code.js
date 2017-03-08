$('#touch').click(function() {
    $('#images').html("");
    var flickerTag = prompt("Please enter Tag");
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
        tags: flickerTag,
        tagmode: "any",
        format: "json"
    })
        .done(function( data ) {
            $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                if ( i === 3 ) {
                    return false;
                }
            });
        });
});
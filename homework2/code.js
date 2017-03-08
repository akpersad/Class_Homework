$('#touch').click(function() {
    $('#images').html("");
    var flickerTag = prompt("Please enter Tag");
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $('#header').html(flickerTag).css({
        "text-align": "center",
        "border": "1px solid black",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-bottom": "20px",
        "margin-top": "20px"
    });
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
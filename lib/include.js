(function(window){

    var cache = {};

    function customHtmlInclude(element, done){
        var src = $(element).data('src');

        if(cache[src]){
            $(element).html(cache[src].content);
            return;
        }
        $.get(src, function(data){
            $(element).html(data);
            cache[src] = {
                content: data
            };
        });
    }
    window.customHtmlInclude = customHtmlInclude;
})(window);
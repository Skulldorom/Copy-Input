$(document).ready(function(){
    //create copy input
    $('.copy-input').each(function(){
        create_copy($(this).find('.control'));
    })

    function create_copy(control){
      control.addClass('has-icons-right')
      control.html(control.html()+'<span class="icon is-right copyicon"><i class="fas fa-copy"></i></span>')
    }

    $('.copy-input').on('click',function(){
        if ($(this).find('.copy-value').attr("copytext")){
          value = $(this).find('.copy-value').attr("copytext")
        }
        else{
          value = $(this).find('.copy-value').html()
        }
        input = $(this).find('.copy-value')
        copy_text(value);
        icon = $(this).find('.copyicon')
        icon.finish()
        icon.animate({width:'toggle'},250,function(){
            icon.html('<span class="copytag" style="margin-right:10px;">Copied!</span><i class="fas fa-check"></i>')
            input.addClass("copyclick")
            icon.addClass('clicked')
            icon.animate({width:'toggle'},500,function(){
                icon.delay(500).animate({width:'toggle'},500,function(){
                    input.removeClass("copyclick")
                    icon.removeClass('clicked')
                    icon.html('<i class="fas fa-copy"></i>')
                    icon.animate({width:'toggle'},250)
                })
            })
        })
    });
});

function copy_text(text) {
    var textArea = document.createElement("textarea");
    var MainElement = $('body');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    MainElement.append(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    }
    catch (err) {
        alert("Failed to copy text " + err);
    }
    MainElement.remove(textArea)    
}

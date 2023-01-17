$(document).ready(function (){
  $(".check").click(function display()
  {
    if($("#enterList").val() != "")
    {
      $(".aff").append('<div class="list"><input class="check2" type="checkbox"></input><p>'
      + $("#enterList").val() +
      '</p><button class="remove">delete</button></div>')
      $("#enterList").val('')
    }
  })

  $('.aff').on('click','.remove', function(){
    $(this).parent().remove()
  })

  $('.aff').on('click','input[type=checkbox]', function(){
    console.log('dd');
    if($(this).is(':checked'))
      $(this).next().css("text-decoration","line-through")
    else
    $(this).next().css("text-decoration","none")
  })
})





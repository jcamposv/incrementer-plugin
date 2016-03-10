/* Jairo Campos Vargas Plugin 2016*/
$.fn.incrementer = function(options) {
  var object = this;

  this.each(function(index){
    var $element = $( this ),
    settings = $.extend({
      max:1000,
      min:0
    }, options);

    // Save count by object instance
    $element.data('count',0);

    var _buildControls = function _buildControls(){
      var ctas = '<div class="controls"><a href="#" class="plus control icon-plus"></a><a href="#" class="minus control icon-minus"></a></div>';
      return $(ctas);
    };

    var _appendToDom = function _appendToDom(controls){
      $element.append(controls);
    };

    //Reset count instance to 0
    object.reload = function reload(){
      $(this).data('count',0);
      $(this).find('input').val($(this).data('count'));
    };

    var _events = function _events(){
      var count = 0;
      $element.find('.control').on('click',function(e){
        // Get data acount by object
        count = $element.data('count');
        e.preventDefault();
        if($(this).hasClass('plus')){
          if(count <= settings.max){
            count++;
          }
        }else{
          if(count > 0){
            count--;
          }
        }

        // Set new value for count instance
        $element.data('count',count);

        $element.find('input').val(count);
      });
    };

    //Build controls
    var controls = _buildControls();
    _appendToDom(controls);
    //Load events
    _events();

  });

  return object;
};

/**
 * @name        jQuery Auto TabIndex Plugin
 * @author      VTwo Group
 * @version     0.1
 * @url         http://vtwo.org/jquery/autotabindex/
 * @license     MIT License
 */
(function($) {
   $.fn.autotabindex = function(options) { 
       
       var settings = $.extend({
            list: '',
            classname: ''
       }, options);
         
       var counter = 1;
       var el = $('*'); 
       var kids = el.children();
       kids.removeAttr('tabindex');
       
       if(settings.list!='')  
          {
             var array = settings.list.split(','); 
             var tmp = '';
             for(var i=0; i<array.length; i++)
                {
                   kids.filter(array[i]).attr('tabindex', counter); 
                   tmp = kids.filter(array[i]).css('background');
                   kids.filter(array[i]).focusin(function(){
                      $(this).addClass(settings.classname);
                   });
                  
                   kids.focusout(array[i]).blur(function(){
                      $(this).removeClass(settings.classname);
                   });
                     
                  counter++;
               }
         }
};
}(jQuery)); 

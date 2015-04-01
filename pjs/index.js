$('#open-popup').magnificPopup({
  type:'inline',
  callbacks: {
    open: function() {
      
      
     // this part overrides "close" method in MagnificPopup object
      $.magnificPopup.instance.close = function () {

      
           // "proto" variable holds MagnificPopup class prototype
           // The above change that we did to instance is not applied to the prototype, 
           // which allows us to call parent method:
           $.magnificPopup.proto.close.call(this);
      }; 
      // you may override any method like so, just note that it's applied globally
      
    }
  }
});


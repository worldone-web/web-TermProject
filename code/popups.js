function openPop() {
   
    var newWin = window.open("popup.html", "", "width=400,height=400");
    var currentScreenX = window.screenX;
    var currentScreenY = window.screenY;
  
    window.localStorage.setItem('screenX', currentScreenX);
    window.localStorage.setItem('screenY', currentScreenY);
    
    if (newWin == null) {
      alert('팝업이 차단');
    } else {
      
      var storedScreenX = window.localStorage.getItem('screenX');
      var storedScreenY = window.localStorage.getItem('screenY');
  
      
      newWin.moveTo(storedScreenX, storedScreenY);
    }
  }
  
  window.onload = openPop;
  
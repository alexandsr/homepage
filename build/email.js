function copyEmail() {
    const text = document.getElementById("copiedText")
    const overlay = document.getElementById("whiteOverlay")
    const email = "i@alexander.systems";
    navigator.clipboard.writeText(email);
  
    overlay.style.opacity = "1";
    text.style.position = "relative";
    text.style.left = "0";
    text.style.opacity = "1";
    setTimeout(function() {
        overlay.style.opacity = "0";
        text.style.position = "absolute";
        text.style.left = "-50vw";
        text.style.opacity = "0";
      }, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que se envíe el formulario y la página se recargue
      
      var num1 = parseInt(document.getElementById('num1').value);
      var num2 = parseInt(document.getElementById('num2').value);
      
      if (num1 > num2) {
        document.getElementById('resultado').textContent = "El primer número es mayor que el segundo.";
      } else if (num1 < num2) {
        document.getElementById('resultado').textContent = "El primer número es menor que el segundo.";
      } else {
        document.getElementById('resultado').textContent = "Los dos números son iguales.";
      }
    });
  });






  
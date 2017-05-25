<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
      <link rel="stylesheet" href="css/estilo.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

      <!-- Optional theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

      <!-- Latest compiled and minified JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

      <script src="js/script.js">

      </script>
  </head>
  <body>
    <div class="jumbotron">
        <h3>Calculadora de Prestamos</h3>
        <h4> Roniel Polanco </h4>
        <h5> <code>Mat: 2015-2834</code><h5>
    </div>

    <div class="col-md-6 col-md-offset-3">
      <div class="col-md-7 col-md-offset-2" >
        <div class="text-center" style="margin:auto; ">
          <h4>Valores a Calcular</h4>
        </div>
        <form class="" action="" method="">
          <div class="form-group">
            <label for="Monto Prestamo">Monto Prestamo:</label>
            <input class="form-control" id="inputMonto" type="number" >
          </div>
          <div class="form-group">
            <label for="interes">Tasa de Interes(% anual):</label>
            <input class="form-control" type="number" id="inputTasa" placeholder="Ejemplo: 5%">
          </div>
          <div class="form-group">
            <label for="Plazo">Plazo (meses)</label>
            <input class="form-control" type="number" id="inputPlazo" placeholder="Ejemplo: 12 ">
          </div>

          <div class="form-group">
            <button id="btnCalcular" class="btn btn-success" type="button" onclick="getDatos()">Calcular</button>
            <button id="btnCalcular" class="btn btn-danger" type="button" onclick="LimpiaCampos()" >Limpiar</button>
          </div>
        </form>
      </div>
    </div>

    <div class="col-md-12" style=" margin-top:15px;">
      <div class="col-md-10 col-md-offset-1">
        <div class="text-center">
          <h4>Tabla de Amortizacion</h4>
        </div>
        <div class="responsive-table " >
          <table  class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Capital</th>
                <th>Intereses</th>
                <th>Cuotas</th>
                <th>Balance</th>
                <th>Total Interes</th>
                <th>Monto Prestado + Interes</th>
              </tr>
            </thead>
            <tbody id="bodyTable">

            </tbody>

          </table>

        </div>
      </div>
    </div>

  </body>
</html>

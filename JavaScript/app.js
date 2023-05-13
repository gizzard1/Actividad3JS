function cambiarFormato(){
    opcion=document.getElementById("opc").value;
    opc=parseInt(opcion);
    const formatoUno = document.querySelectorAll(".customers");
    const formatoDos = document.querySelectorAll(".customers td, .customers th");
    const formatoTres = document.querySelectorAll(".customers tr:nth-child(even)");
    const formatoCuatro = document.querySelectorAll(".customers th");
    const formatoCinco = document.querySelectorAll(".customers tr:hover");
    switch(opc){
        case 0:
            for(i=0;i < formatoUno.length;i++) {
                formatoUno[i].style.cssText = 
                "font-family: Arial, Helvetica, sans-serif;border-collapse: collapse;width:100%;margin:0 auto";
            }

            for(i=0;i < formatoDos.length;i++) {
                formatoDos[i].style.cssText =
                "border: 1px solid #ddd;padding: 8px;";
            }

            for(i=0;i < formatoTres.length;i++){
                formatoTres[i].style.cssText =
                "background-color: rgba(92, 230, 12, 0.76)"
            }

            for(i=0;i<formatoCuatro.length;i++){
                formatoCuatro[i].style.cssText =
                "padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: red;color: white;";
            }
            for(i=0;i<formatoCinco.length;i++){
                formatoCinco[i].style.cssText =
                "background-color: red;"
            }
            
        break;

        case 1:
            for(i=0;i < formatoUno.length;i++) {
                formatoUno[i].style.cssText = 
                "font-family: 'Times New Roman', Times, serif;width:70%;margin:0 auto";
            }

            for(i=0;i < formatoDos.length;i++) {
                formatoDos[i].style.cssText =
                "border: 3px dashed;padding: 12px;";
            }
            for(i=0;i < formatoTres.length;i++){
                formatoTres[i].style.cssText =
                "background-color: green";
            }
            for(i=0;i<formatoCuatro.length;i++){
                formatoCuatro[i].style.cssText =
                "border: 3px dashed;padding-top: 14px;padding-bottom: 14px;text-align: center;background-color: #f7d53e;color: blue;";
            } 
        break;

        case 2: 
            for(i=0;i < formatoUno.length;i++) {
                formatoUno[i].style.cssText = 
                "font-family: consolas;width:50%;margin:0 auto";
            }

            for(i=0;i < formatoDos.length;i++) {
                formatoDos[i].style.cssText =
                "border: 5px solid #ddd;padding: 2px;";
            }

            for(i=0;i < formatoTres.length;i++){
                formatoTres[i].style.cssText =
                "background-color: white;"
            }

            for(i=0;i<formatoCuatro.length;i++){
                formatoCuatro[i].style.cssText =
                "border: 5px solid #ddd;padding-top: 1px;padding-bottom: 12px;text-align: left;background-color: #04AA6D;color: white;";
            }
        break;
        case 3:
            for(i=0;i < formatoUno.length;i++) {
                formatoUno[i].style.cssText = 
                "background-color:#3ef791;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;width:30%;height:30%;margin:20px;";
            }

            for(i=0;i < formatoDos.length;i++) {
                formatoDos[i].style.cssText =
                "border: 1px solid #ddd;padding: 8px;border-style: groove;";
            }

            for(i=0;i < formatoTres.length;i++){
                formatoTres[i].style.cssText =
                "background-color: white;"
            }

            for(i=0;i<formatoCuatro.length;i++){
                formatoCuatro[i].style.cssText =
                "height:80px;padding-top: 12px;padding-bottom: 12px;text-align: center;background-color: #d113c8;color: white;border-radius:5px;";
            }
        break;
        case 4:
            for(i=0;i < formatoUno.length;i++) {
                formatoUno[i].style.cssText = 
                "text-align:center;font-weight:lighter;font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;width:60%;border-style: ridge;margin-left:70px;";
            }

            for(i=0;i < formatoDos.length;i++) {
                formatoDos[i].style.cssText =
                "border: 1px solid #ddd;padding: 8px;";
            }

            for(i=0;i < formatoTres.length;i++){
                formatoTres[i].style.cssText =
                "background-color: #f2f2f2; "
            }

            for(i=0;i<formatoCuatro.length;i++){
                formatoCuatro[i].style.cssText =
                "font-weight:lighter;font-size:larger;padding-top: 12px;padding-bottom: 30px;text-align:center;background-color: #04AA6D;color: white;";
            }
        break;
    }
}
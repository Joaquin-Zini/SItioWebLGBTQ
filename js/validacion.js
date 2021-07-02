function validacion()
{
    var total=8;
    var correctas=0;
    var formulario = document.forms["cuestionario"];
    var respuestas = ["b", "c", "a", "b", "b"];

    for(var i =1; i<=total; i++)
    {
        if(formulario["p" + i].value === null || formulario["p" + i].value ==="")
        {
            alert('Responde la pregunta ' + i );
            return false;
        }
        else
        {
            if(formulario["p" + i].value === respuestas[i-1])
            {
                correctas++;
            }
        }
    }
    var resultado= document.getElementById('resultado');
    resultado.innerHTML = '<h3> Respondiste bien <span>'+ correctas +' </span> de <span>' + total + ' preguntas. </span></h3>';


    var porcentaje;
    porcentaje= (correctas*100)/total;

    alert('Tu porcentaje de aciertos fue de ' + porcentaje+' %');

    return false;
}


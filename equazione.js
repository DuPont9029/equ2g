var a, b, c, Delta, x1, x2;

function inviailform()
{
    a = parseFloat(document.getElementById("input1").value); // la variabile a è il risultato parsato a intero del risultato del form input1
    b = parseFloat(document.getElementById("input2").value);
    c = parseFloat(document.getElementById("input3").value); // dichiarazione di variabili
    Delta = b*b-4*a*c; // calcolo
    if (Delta < 0)
    {
        Delta = "soluzione impossibile";
        x1 = "soluzione impossibile";
        x2 = "soluzione impossibile";
    }
    else if (Delta === 0)
    {
        x1 = -b / (2*a);
        Delta = x1;
        x2 = x1;
    }
    else 
    {
        Delta = Math.sqrt(Delta);
        x1 = (-b + Delta)/(2*a);
        x2 = (-b - Delta)/(2*a);
    }


    if (Number.isNaN(x1) == true && Number.isNaN(x2) == true)
    {
        var ba = "ba";
        var aa = "a";
        var banana = ba + x1 + aa;
        x1 = banana;
        x2 = banana;
    }


    document.getElementById("x1").textContent = x1; //stampa 
    document.getElementById("x2").textContent = x2; // stampa

    console.log(Delta);



    console.log(x1);
    console.log(x2);

    


    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500; 
    canvas.height = 500; 
    ctx.beginPath(); 
    ctx.moveTo(0, canvas.height / 2); 
    ctx.lineTo(canvas.width, canvas.height / 2); 
    ctx.moveTo(canvas.width / 2, 0); 
    ctx.lineTo(canvas.width / 2, canvas.height); 
    ctx.strokeStyle = 'black'; 
    ctx.stroke(); 
    
    x1g = x1*10;  
    x2g = x2*10; 
    const canvasX1 = x1g + canvas.width / 2; 
    const canvasX2 = x2g + canvas.width / 2; 
    const canvasY = canvas.height / 2; ctx.fillStyle = 'red'; 
    ctx.fillRect(canvasX1 - 2.5, canvasY - 2.5, 5, 5); 
    ctx.fillRect(canvasX2 - 2.5, canvasY - 2.5, 5, 5);


    


}





//copy

function copytextx1() {

     // Copy the text inside the text field
    navigator.clipboard.writeText(x1);
  
    // Alert the copied text
    alert("Hai copiato il risultato 1: " + x1);
}

function copytextx2() {

     // Copy the text inside the text field
    navigator.clipboard.writeText(x2);
  
    // Alert the copied text
    alert("Hai copiato il risultato 2: " + x2);
}
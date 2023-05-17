var a, b, c, Delta, x1, x2, res, arres = [];

function equationsolver(a, b, c)
{

    Delta = b*b-4*a*c; // calcolo
    if (Delta < 0)
    {
        Delta = "soluzione impossibile";
        x1 = "soluzione impossibile";
        x2 = "soluzione impossibile";
        arres = [x1, x2];
    }
    else if (Delta === 0)
    {
        x1 = -b / (2*a);
        Delta = x1;
        x2 = x1;
        arres = [x1, x2];
    }
    else 
    {
        Delta = Math.sqrt(Delta);
        x1 = (-b + Delta)/(2*a);
        x2 = (-b - Delta)/(2*a);
        arres = [x1, x2];
    }


    if (Number.isNaN(x1) == true && Number.isNaN(x2) == true)
    {
        var ba = "ba";
        var aa = "a";
        var banana = ba + x1 + aa;
        x1 = banana;
        x2 = banana;
        arres = [x1, x2];
    }

    console.log(x1);
    console.log(x2);

    return arres;

}
/*
equationsolver(1, 2, 1);
console.log(arres);
console.log(x1);
console.log(x2);
*/

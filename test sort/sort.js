function sort(a)
{
    var swapp;
    var counter = 0;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {      
                counter++;
               console.log(counter + '. [' + x[i+1] + ',' + x[i] + '] -> ' + x)
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(sort([4, 9, 7, 5, 8, 9, 3]));
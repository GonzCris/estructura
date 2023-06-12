function sentenceIF(anioActual,AnioPersona){
    // guardo en una variable el resultado de la resta 
        const resultado = anioActual - AnioPersona;
    //verificacion.-
        if (resultado < 10) {
     // verificar mediante un IF si la persona es mayor de edad
            console.log("la persona es mayor de edad y tiene: más", resultado, "de años") ;
    // verifica el resultado en caso de que la condicion sea falsa 
    }   else if (resultado >=10 && resultado < 20){
        console.log("la persona es mayor de 10 años tiene:",resultado);
    } // como ultimo 
        else if (resultado >=20){
        console.log("la persona es muy vieja  de edad y no puede acceder tiene:",resultado);
    
     }
    }
    
    sentenceIF(2023,1850);
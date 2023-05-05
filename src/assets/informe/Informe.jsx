import React from "react";
import './informe.css'
import img2 from '../informe/img2.png'
import imgc1 from '../informe/imgc1.png'
import imgc2 from '../informe/imgc2.png'
import imgc3 from '../informe/imgc3.png'
import imgc4 from '../informe/imgc4.png'
import imgc5 from '../informe/imgc5.png'


function Informe(){
    return(
        <>
 <h1 className="titulo">La importancia de usar brackets</h1>

        <div className="container">

       
            <h2 className="subtitulo">¿Por que es importante usar brackets?</h2>
            <div className="image">
      <img src={img2} />
      </div>

            
         <p className="text">La ortodoncia no es una cuestión meramente estética dirigida a obtener una dentadura perfecta. Muy al contrario, es una de las claves fundamentales de una buena salud bucodental.La ortodoncia es una especialidad que se ocupa de diagnosticar, corregir e incluso prevenir las anomalías (maloclusiones) en la forma, posición, relación y función de los dientes y los maxilares, la cara y los trastornos funcionales de la masticación. Entre tales anomalías figuran:
La mala alineación o apiñamiento de los dientes.
La posición adelanta o retrasada de las piezas dentales en relación a los maxilares.
Desplazamiento de uno de los dos maxilares, etc.</p>
</div>

   {/* CONTAINER1 */}

<div className="container1">

       
<h2 className="subtitulo1">Dientes torcidos</h2>
<div className="image1">
<img src={imgc1} />
</div>


<p className="text1">Los dientes desalineados, los dientes torcidos o los dientes apiñados se ven comúnmente en personas de todas las edades. Cuando los dientes erupcionan y crecen de manera que se superponen, se retuercen, se inclinan o giran, se apiñan, se tuercen o se desalinean. Por supuesto, esto dificulta la limpieza de los dientes y los daña.</p>
</div>


{/* CONTAINER2 */}


<div className="container2">

       
<h2 className="subtitulo2">Exceso de espacio entre los dientes</h2>
<div className="image2">
<img src={imgc2} />
</div>


<p className="text2">El exceso de espacio entre los dientes, conocido como diastema, es en realidad una de las razones más comunes para usar frenillos. El espaciado (lo opuesto al apiñamiento) es un exceso de espacio para los dientes que da como resultado espacios muy pronunciados entre los dientes. Esto generalmente ocurre cuando los dientes son más pequeños que el espacio disponible. El espaciamiento también puede ser causado por dientes protrusivos, dientes faltantes, dientes impactados o adherencias anormales de tejido a las encías. Los espacios entre los dientes también pueden ser causados por dientes que no crecen adecuadamente, por el tamaño de la mandíbula e incluso por reflejos incorrectos al tragar. Una causa común de diastema entre los dos dientes frontales es causada por un crecimiento excesivo del tejido de las encías que bordea estos dientes. Los frenillos cambian su sonrisa para cerrar los espacios entre los dientes.</p>
</div>


{/* CONTAINER3 */}

<div className="container3">

       
<h2 className="subtitulo3">obremordida</h2>
<div className="image3">
<img src={imgc3} />
</div>


<p className="text3">Una sobremordida es cuando la mandíbula superior se superpone a la mandíbula inferior. Es común que algunos pacientes tengan una sobremordida leve de solo uno o dos milímetros, pero algunos tienen problemas de mordida más graves. Una maloclusión es una sobremordida profunda donde la superposición es más pronunciada. Puede provocar dolores de cabeza y dolor en la ATM, ya que tienden a apretar la mandíbula y rechinar mucho los dientes. La genética a menudo se asocia con una sobremordida, pero la succión crónica del dedo (chupar el dedo) también puede contribuir.

Las sobremordidas pueden afectar el habla. Cuando tiene una sobremordida, tiende a hablar más con la lengua, lo que puede afectar la claridad de sus palabras e incluso cecear (Pronunciar la S con sonido de Z).</p>
</div>



{/* CONTAINER4 */}


<div className="container4">

       
<h2 className="subtitulo4">Submordida</h2>
<div className="image4">
<img src={imgc4} />
</div>


<p className="text4">Si sus dientes inferiores están demasiado hacia adelante o los dientes superiores están demasiado hacia atrás, es probable que sufra una mordida inferior. Una submordida es cuando cierra la boca y sus dientes frontales inferiores están frente a sus dientes superiores. En muchos casos, esto es en realidad un problema con la mandíbula inferior demasiado adelantada. Una mordida puede causar una apariencia facial desequilibrada y acelerar el envejecimiento. Los frenillos mueven los dientes superiores o inferiores, o tanto los dientes superiores como los inferiores, para corregir la mordida inferior. En casos severos, puede ser necesaria una cirugía de mandíbula junto con aparatos de ortodoncia para corregir la mordida inferior.</p>
</div>


{/* CONTAINER5 */}


<div className="container5">

       
<h2 className="subtitulo5">Mordida cruzada</h2>
<div className="image5">
<img src={imgc5} />
</div>


<p className="text5">Una mordida cruzada ocurre cuando solo algunos de sus dientes superiores no bajan sobre los dientes inferiores al morder. Cuando cierra la boca y algunos de sus dientes superiores se asientan dentro de sus dientes inferiores, en lugar de afuera, como lo haría normalmente, su ortodoncista llama a esto una mordida cruzada.

Cuando no se trata, una mordida cruzada conduce a fracturas dentales, encías retraídas y crecimiento asimétrico de la mandíbula en los niños. Dependiendo del alcance de la mordida cruzada, el tratamiento puede implicar el uso de un expansor palatino, un aparato de ortodoncia fijo o removible que se usa para ensanchar la mandíbula superior. Esto se usaría junto con un aparato diseñado para mover los dientes, como aparatos de ortodoncia o alineadores transparentes.</p>
</div>

{/* CONTAINER6 */}

<div className="container6">

       
<h2 className="subtitulo6">Mandíbula desalineada</h2>
<div className="image6">
<img src={img2} />
</div>


<p className="text6">Una mandíbula desalineada es una maloclusión, la mejor descripción es decir que es cuando los dientes superiores e inferiores no se unen cómodamente. Debe acudir a chequeo si tiene dificultades para usar la mandíbula. Además, si tiene un chasquido, chasquido o chirrido en la mandíbula. Otro síntoma es el dolor al abrir y cerrar la boca, o dolores de cabeza crónicos o migrañas.

La presión de una mordida anormal puede desgastar el esmalte de los dientes, lo que puede provocar el adelgazamiento y el astillado de las superficies del esmalte. Los frenillos pueden mover la mandíbula superior hacia adelante o hacia atrás para ayudar a que los dientes se unan. En casos graves, es posible que se requiera una cirugía de mandíbula según la recomendación de su ortodoncista.</p>
</div>




 </>

    )
}

export default Informe
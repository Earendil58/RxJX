import { fromEvent, map, tap } from 'rxjs';


const texto =  document.createElement('div');
texto.innerHTML = 
`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu odio at nisi pharetra porta. Maecenas id ultricies massa, nec ultrices risus. Donec orci urna, laoreet eget dictum at, bibendum ut libero. Phasellus dictum et nisi ut consectetur. Vestibulum turpis magna, venenatis et malesuada at, iaculis non sem. Nunc posuere hendrerit justo, a laoreet augue interdum id. Sed scelerisque urna odio, et porttitor lacus pellentesque ac.
<br/><br/>
Pellentesque sed placerat lectus. Nullam scelerisque pretium ullamcorper. Curabitur ullamcorper laoreet sem, nec dapibus nisl congue sit amet. Morbi pulvinar bibendum lorem, vitae interdum eros dictum sit amet. In pretium nibh id feugiat feugiat. Vivamus non magna a erat tincidunt scelerisque. Proin tincidunt non enim vel fringilla. Cras lacinia, metus a consequat vestibulum, nibh justo lobortis eros, sollicitudin pellentesque ligula leo non massa.
<br/><br/>
Etiam vitae fringilla lorem, vitae sodales dolor. Nulla id enim consectetur, pellentesque nunc vitae, maximus enim. Phasellus vel arcu eu risus luctus rhoncus non eget magna. Suspendisse sem felis, eleifend et iaculis eu, sollicitudin non lacus. Proin non nisi mattis, facilisis turpis a, vestibulum quam. Morbi cursus lobortis tincidunt. Etiam ultrices lorem non arcu euismod, ac venenatis diam dictum. Quisque volutpat, est in condimentum molestie, orci orci vulputate mi, eget pulvinar velit sapien ut arcu. In vulputate diam et massa posuere, ut facilisis velit finibus. Nam eleifend a tortor luctus porttitor. Suspendisse eu felis a arcu tristique dignissim vitae ut massa. Nullam ultrices felis et turpis bibendum auctor. Cras rutrum rhoncus laoreet. Suspendisse sit amet odio et eros laoreet mattis in quis sapien. Suspendisse eu sem tincidunt, eleifend dui quis, elementum quam. Donec blandit arcu eget leo fringilla congue.
<br/><br/>
Integer eget tempus augue, non mattis risus. Suspendisse potenti. In vitae neque vel orci pretium ultricies. Etiam bibendum malesuada facilisis. Sed et diam congue, interdum orci sit amet, egestas quam. Sed mollis dignissim molestie. Integer porta nunc eu pulvinar convallis. Vestibulum justo leo, sollicitudin sed lobortis ac, tempus non enim. Integer dapibus pharetra enim vel faucibus. Sed laoreet a nisl eu ultricies. Sed cursus, turpis quis finibus vestibulum, felis augue malesuada lectus, sed posuere elit quam sed turpis.
<br/><br/>
Curabitur id elementum ligula. Integer auctor nisl urna, id imperdiet ipsum gravida ac. Curabitur facilisis et sapien quis venenatis. Quisque tempus et odio non porta. In at porta nisl. Sed vehicula et turpis id pulvinar. Nullam ut ante mauris. Maecenas ornare tempus volutpat. Praesent vitae urna pellentesque justo pulvinar ultrices. Vestibulum interdum ullamcorper maximus.
<br/><br/>
Pellentesque sed placerat lectus. Nullam scelerisque pretium ullamcorper. Curabitur ullamcorper laoreet sem, nec dapibus nisl congue sit amet. Morbi pulvinar bibendum lorem, vitae interdum eros dictum sit amet. In pretium nibh id feugiat feugiat. Vivamus non magna a erat tincidunt scelerisque. Proin tincidunt non enim vel fringilla. Cras lacinia, metus a consequat vestibulum, nibh justo lobortis eros, sollicitudin pellentesque ligula leo non massa.
<br/><br/>
Etiam vitae fringilla lorem, vitae sodales dolor. Nulla id enim consectetur, pellentesque nunc vitae, maximus enim. Phasellus vel arcu eu risus luctus rhoncus non eget magna. Suspendisse sem felis, eleifend et iaculis eu, sollicitudin non lacus. Proin non nisi mattis, facilisis turpis a, vestibulum quam. Morbi cursus lobortis tincidunt. Etiam ultrices lorem non arcu euismod, ac venenatis diam dictum. Quisque volutpat, est in condimentum molestie, orci orci vulputate mi, eget pulvinar velit sapien ut arcu. In vulputate diam et massa posuere, ut facilisis velit finibus. Nam eleifend a tortor luctus porttitor. Suspendisse eu felis a arcu tristique dignissim vitae ut massa. Nullam ultrices felis et turpis bibendum auctor. Cras rutrum rhoncus laoreet. Suspendisse sit amet odio et eros laoreet mattis in quis sapien. Suspendisse eu sem tincidunt, eleifend dui quis, elementum quam. Donec blandit arcu eget leo fringilla congue.
<br/><br/>
Integer eget tempus augue, non mattis risus. Suspendisse potenti. In vitae neque vel orci pretium ultricies. Etiam bibendum malesuada facilisis. Sed et diam congue, interdum orci sit amet, egestas quam. Sed mollis dignissim molestie. Integer porta nunc eu pulvinar convallis. Vestibulum justo leo, sollicitudin sed lobortis ac, tempus non enim. Integer dapibus pharetra enim vel faucibus. Sed laoreet a nisl eu ultricies. Sed cursus, turpis quis finibus vestibulum, felis augue malesuada lectus, sed posuere elit quam sed turpis.
<br/><br/>
Curabitur id elementum ligula. Integer auctor nisl urna, id imperdiet ipsum gravida ac. Curabitur facilisis et sapien quis venenatis. Quisque tempus et odio non porta. In at porta nisl. Sed vehicula et turpis id pulvinar. Nullam ut ante mauris. Maecenas ornare tempus volutpat. Praesent vitae urna pellentesque justo pulvinar ultrices. Vestibulum interdum ullamcorper maximus.
<br/><br/>
Pellentesque sed placerat lectus. Nullam scelerisque pretium ullamcorper. Curabitur ullamcorper laoreet sem, nec dapibus nisl congue sit amet. Morbi pulvinar bibendum lorem, vitae interdum eros dictum sit amet. In pretium nibh id feugiat feugiat. Vivamus non magna a erat tincidunt scelerisque. Proin tincidunt non enim vel fringilla. Cras lacinia, metus a consequat vestibulum, nibh justo lobortis eros, sollicitudin pellentesque ligula leo non massa.
<br/><br/>
Etiam vitae fringilla lorem, vitae sodales dolor. Nulla id enim consectetur, pellentesque nunc vitae, maximus enim. Phasellus vel arcu eu risus luctus rhoncus non eget magna. Suspendisse sem felis, eleifend et iaculis eu, sollicitudin non lacus. Proin non nisi mattis, facilisis turpis a, vestibulum quam. Morbi cursus lobortis tincidunt. Etiam ultrices lorem non arcu euismod, ac venenatis diam dictum. Quisque volutpat, est in condimentum molestie, orci orci vulputate mi, eget pulvinar velit sapien ut arcu. In vulputate diam et massa posuere, ut facilisis velit finibus. Nam eleifend a tortor luctus porttitor. Suspendisse eu felis a arcu tristique dignissim vitae ut massa. Nullam ultrices felis et turpis bibendum auctor. Cras rutrum rhoncus laoreet. Suspendisse sit amet odio et eros laoreet mattis in quis sapien. Suspendisse eu sem tincidunt, eleifend dui quis, elementum quam. Donec blandit arcu eget leo fringilla congue.
<br/><br/>
Integer eget tempus augue, non mattis risus. Suspendisse potenti. In vitae neque vel orci pretium ultricies. Etiam bibendum malesuada facilisis. Sed et diam congue, interdum orci sit amet, egestas quam. Sed mollis dignissim molestie. Integer porta nunc eu pulvinar convallis. Vestibulum justo leo, sollicitudin sed lobortis ac, tempus non enim. Integer dapibus pharetra enim vel faucibus. Sed laoreet a nisl eu ultricies. Sed cursus, turpis quis finibus vestibulum, felis augue malesuada lectus, sed posuere elit quam sed turpis.
Pellentesque sed placerat lectus. Nullam scelerisque pretium ullamcorper. Curabitur ullamcorper laoreet sem, nec dapibus nisl congue sit amet. Morbi pulvinar bibendum lorem, vitae interdum eros dictum sit amet. In pretium nibh id feugiat feugiat. Vivamus non magna a erat tincidunt scelerisque. Proin tincidunt non enim vel fringilla. Cras lacinia, metus a consequat vestibulum, nibh justo lobortis eros, sollicitudin pellentesque ligula leo non massa.
<br/><br/>
Etiam vitae fringilla lorem, vitae sodales dolor. Nulla id enim consectetur, pellentesque nunc vitae, maximus enim. Phasellus vel arcu eu risus luctus rhoncus non eget magna. Suspendisse sem felis, eleifend et iaculis eu, sollicitudin non lacus. Proin non nisi mattis, facilisis turpis a, vestibulum quam. Morbi cursus lobortis tincidunt. Etiam ultrices lorem non arcu euismod, ac venenatis diam dictum. Quisque volutpat, est in condimentum molestie, orci orci vulputate mi, eget pulvinar velit sapien ut arcu. In vulputate diam et massa posuere, ut facilisis velit finibus. Nam eleifend a tortor luctus porttitor. Suspendisse eu felis a arcu tristique dignissim vitae ut massa. Nullam ultrices felis et turpis bibendum auctor. Cras rutrum rhoncus laoreet. Suspendisse sit amet odio et eros laoreet mattis in quis sapien. Suspendisse eu sem tincidunt, eleifend dui quis, elementum quam. Donec blandit arcu eget leo fringilla congue.
<br/><br/>
Integer eget tempus augue, non mattis risus. Suspendisse potenti. In vitae neque vel orci pretium ultricies. Etiam bibendum malesuada facilisis. Sed et diam congue, interdum orci sit amet, egestas quam. Sed mollis dignissim molestie. Integer porta nunc eu pulvinar convallis. Vestibulum justo leo, sollicitudin sed lobortis ac, tempus non enim. Integer dapibus pharetra enim vel faucibus. Sed laoreet a nisl eu ultricies. Sed cursus, turpis quis finibus vestibulum, felis augue malesuada lectus, sed posuere elit quam sed turpis.
Pellentesque sed placerat lectus. Nullam scelerisque pretium ullamcorper. Curabitur ullamcorper laoreet sem, nec dapibus nisl congue sit amet. Morbi pulvinar bibendum lorem, vitae interdum eros dictum sit amet. In pretium nibh id feugiat feugiat. Vivamus non magna a erat tincidunt scelerisque. Proin tincidunt non enim vel fringilla. Cras lacinia, metus a consequat vestibulum, nibh justo lobortis eros, sollicitudin pellentesque ligula leo non massa.
<br/><br/>
Etiam vitae fringilla lorem, vitae sodales dolor. Nulla id enim consectetur, pellentesque nunc vitae, maximus enim. Phasellus vel arcu eu risus luctus rhoncus non eget magna. Suspendisse sem felis, eleifend et iaculis eu, sollicitudin non lacus. Proin non nisi mattis, facilisis turpis a, vestibulum quam. Morbi cursus lobortis tincidunt. Etiam ultrices lorem non arcu euismod, ac venenatis diam dictum. Quisque volutpat, est in condimentum molestie, orci orci vulputate mi, eget pulvinar velit sapien ut arcu. In vulputate diam et massa posuere, ut facilisis velit finibus. Nam eleifend a tortor luctus porttitor. Suspendisse eu felis a arcu tristique dignissim vitae ut massa. Nullam ultrices felis et turpis bibendum auctor. Cras rutrum rhoncus laoreet. Suspendisse sit amet odio et eros laoreet mattis in quis sapien. Suspendisse eu sem tincidunt, eleifend dui quis, elementum quam. Donec blandit arcu eget leo fringilla congue.
<br/><br/>
Integer eget tempus augue, non mattis risus. Suspendisse potenti. In vitae neque vel orci pretium ultricies. Etiam bibendum malesuada facilisis. Sed et diam congue, interdum orci sit amet, egestas quam. Sed mollis dignissim molestie. Integer porta nunc eu pulvinar convallis. Vestibulum justo leo, sollicitudin sed lobortis ac, tempus non enim. Integer dapibus pharetra enim vel faucibus. Sed laoreet a nisl eu ultricies. Sed cursus, turpis quis finibus vestibulum, felis augue malesuada lectus, sed posuere elit quam sed turpis.

`;

const body =  document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


//!funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;


    return ( scrollTop / (scrollHeight - clientHeight)) * 100;

}

//!STREAMS
const scroll$ = fromEvent(document, 'scroll')
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll(event)),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})



$(document).ready(function () {

  $("h1").css( 'color' , "white").next().css( 'color' , "white");
  
  // $("body , html").attr( 'overflow' , "inherit" );

  $(".opening").click(function () {

    $(this).css( 'left' , '15%');
    $(".navgetor").css( 'left' , "0%" );
    
  });

  $(".closing").click(function () {

    $(".opening").css( 'left' , '2%');
    $(".navgetor").css( 'left' , "-100%" );
    
  });

  // the Sec two of carsoul 
  const singerName = [ ["One" , ``  ] , ["Two" , `none` ]  , ["Three" , `none` ] , ["Four" , `none` ] ]
  var Singer = "" ;

  singerName.forEach(name => {
    Singer +=`
      <div>
        <div class="bg-blue-600 w-75 p-2 mx-auto clickable"> 
          <h4>Singer ${name[0]}</h4>
        </div>
        <div style="display: ${name[1]};" class="bg-gray-600 w-75 p-3 mx-auto">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere ex officiis quibusdam debitis ratione atque obcaecati asperiores excepturi magni. Harum, labore? Ipsam quia, culpa laudantium incidunt sequi dolor in voluptas ea officia iste nemo totam autem voluptatum rem odio exercitationem aliquid illum voluptates dolorum, expedita nulla placeat! Libero, fuga. </p>
        </div>
      </div>`
  });

  $(".singerdata").html(Singer);

  $(".clickable").click(function () {
    $(this).next().slideToggle();
  });

  // the time blocks
  let startTime = parseInt(localStorage.getItem("startTime")) || new Date().getTime();

  // no ref localStorage
  localStorage.setItem("startTime", startTime.toString());

  setInterval(updateStopwatch, 1000);

  function updateStopwatch() {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

      const date = [ [ days , "days" ] , [ hours , "hours" ]  ,[ minutes , "minutes" ]  , [ seconds , "seconds" ] ]

      var Dates = "" ;
  
      date.forEach(name => {
        Dates +=`
        <div class="col-md-3 p-2 h-50">
          <div class="border-5 h-100 p-5" > ${name[0]} ${name[1]} </div>
        </div>
              `
      }); 
      $(".stopwatch").html(Dates);

  }

  // textarea char
  const textArea = $("#textArea");
  const charCount = $("#charCount");

  textArea.on("input" , function () {

    const text = textArea.val();
    const textLength = text.length;

    const reChars = 100 - textLength ;

    charCount.text(`Characters left : ${reChars}`);

    if (reChars < 0) {
      textArea.val(text.slice(0,100));
      charCount.text("You have reached the charcter limit. ");
    };
  });

    // the Sec two of contact icons 
    const icons = [ "twitter" , "facebook" , "instagram" , "google" , "whatsapp" ]
    var icon = "" ;
  
    icons.forEach(name => {
      icon +=`
      <div>
        <i class="bi bi-${name}"></i>
      </div>
            `
    });
  
    $(".contactus").html(icon);



});


  
  

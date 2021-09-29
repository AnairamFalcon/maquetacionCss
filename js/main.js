$(document).ready(function () {
  if(window.location.href.indexOf("index")>-1){
    $(function () {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
        pager: false,
        keyboardEnabled: true,
      });
    });
  }

  if(window.location.href.indexOf("index")>-1){
  //Posts
  var posts = [
    {
      title: "Título 1",
      date: "Publicado el día " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum vulputate feugiat. In facilisis eleifend lorem rutrum vehicula. Quisque posuere ultricies mauris. Phasellus ut feugiat nisl, at iaculis erat. Morbi maximus nibh in efficitur vestibulum. Sed vitae diam sed mauris aliquam porta. Mauris mauris ipsum, sagittis at justo nec, tempus gravida sem. Sed odio ipsum, convallis vitae ipsum id, commodo elementum urna. Nam eget dignissim sapien. Aliquam enim magna, commodo quis nisl eget, gravida tristique quam. Pellentesque luctus lorem quis dui condimentum, nec convallis libero scelerisque. Aliquam ultricies, quam rutrum ultricies tempus, lacus metus ornare mi, ut cursus velit est eget nulla. Fusce ultrices sagittis justo mattis posuere.",
      button: "https://bajio.delasalle.edu.mx/",
    },
    {
      title: "Título 2",
      date: "Publicado el día " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum vulputate feugiat. In facilisis eleifend lorem rutrum vehicula. Quisque posuere ultricies mauris. Phasellus ut feugiat nisl, at iaculis erat. Morbi maximus nibh in efficitur vestibulum. Sed vitae diam sed mauris aliquam porta. Mauris mauris ipsum, sagittis at justo nec, tempus gravida sem. Sed odio ipsum, convallis vitae ipsum id, commodo elementum urna. Nam eget dignissim sapien. Aliquam enim magna, commodo quis nisl eget, gravida tristique quam. Pellentesque luctus lorem quis dui condimentum, nec convallis libero scelerisque. Aliquam ultricies, quam rutrum ultricies tempus, lacus metus ornare mi, ut cursus velit est eget nulla. Fusce ultrices sagittis justo mattis posuere.",
      button:"https://www.lipsum.com/feed/html",
    },
  ];
  console.log(posts);
  
  //Recorer el JSON para enviar al html
  posts.forEach((item)=>{
    var post= `<article class="post">
                <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                  <p>
                    ${item.content}
                  </p>
                <a href=${item.button} class="button-more">Artículo completo</a>
              </article>`;
     $("#posts").append(post);
  })
  }

  //Selector de tema
  var theme=$("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
    alert("La página ha cambiado de tema");
  })
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
    alert("La página ha cambiado de tema");
  })
  $("#to-neutral").click(function () {
    theme.attr("href", "css/neutral.css");
    alert("La página ha cambiado de tema");
  })

  //Login local storage
  $("#login form").submit(function () {
    let form_name=$("#form_name").val();//Validar que es el nombre, el nombre es igual que el id del index
    localStorage.setItem("form_name",form_name);
  });

  var form_name=localStorage.getItem("form_name");
  if(form_name!=null && form_name!=undefined){
    //Si el nombre existe
    let parrafo=$("#about p");
    $("#about p").html("Bienvenida(o) " + form_name);
    parrafo.append("<br><a href='#' id='logout'> Cerrar sesión </a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    })
  }else{
    //Si no eiste
    //alert("Ingrese con su nombre");
  }
  
});




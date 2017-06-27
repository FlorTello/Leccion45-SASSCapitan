const MostrarCoders = (coders) =>{
  const div = $('<div class="coder"></div>');
  const name = $('<li> '+coders.name+'  <input type="checkbox"> </li>');
  const squad = $('<p>'+coders.squad.name+'</p>');
  div.append(name,squad);
  return div;
}
const render = (array,container) => {
  $.each(array, function( i, e ) {
    container.append(MostrarCoders(e));
  });
}
const state = {
  coders:null
}
$( _ => {
    $.get('http://laboratoria.cuadra.co:9339/api/v1/students/',(response,error)=>{
      console.log(response);
      state.coders = response;
      render(state.coders,$('.coders'));
    });
});

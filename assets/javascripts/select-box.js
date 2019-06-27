/**
 * Select box interaction
 *
 */
rrfss.SelectBox = function(selectbox, list){
  this.selectbox = selectbox;
  this.list = list;
  this.setEvents();
};
rrfss.SelectBox.prototype.setEvents = function(){
  this.selectbox.addEventListener('keydown', this.onChange.bind(this));
};
rrfss.SelectBox.prototype.onChange = function(evt){
  var item = evt.target.value;
  var key = evt.key;
  console.log("Switch changed by " + key + "to " + item);
  console.log(evt);
  /*switch(key){
    case "Enter":
      window.location.hash = item;
      this.hideSelect();
    break;
    default:
      return; // Do nothing if another key is pressed
  }*/
};

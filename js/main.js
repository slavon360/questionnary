function TreeModel(node){
  this.getFirstQuestion=function(){
    return node[0];
  };
  this.getNewQuestion=function(answer){
   var reslt=node.filter(function(item){
     return item.id==answer;
   })
   return reslt[0];
}
}
function Renderer(){
  var root=document.createElement('div');
  root.className='questionnaire';
  this.CreateButton=function(button){
    var Button=document.createElement('button');
    Button.innerHTML=button.userPick;
    Button.className='option';
    Button.setAttribute("data-move-to", button.moveTo);
    return Button;
  }
  this.CreateViewModel=function(smth){
    var buttonOptions=smth.options;
    root.innerHTML='<h3>'+smth.questions+'<h3>';
    for (var i=0;i<buttonOptions.length;i++){
      root.appendChild(this.CreateButton(buttonOptions[i]));
    }
    return root;
  }
  this.createResultView = function (resultObj) {
		root.innerHTML = '<h3> Без вагань купуйте ' + resultObj.result + ' та тримайте у себе в квартирі</h3>';
		return root;

	};
}
function Handler(tree,render){
  var appendTo=document.getElementById('require-questionnaire');
  var createContent=render.CreateViewModel(tree.getFirstQuestion());
  appendTo.appendChild(createContent);
  
  this.onOptionClick=function (event){
    if(event.target!==null && event.target.classList.contains('option')){
      var answerId=parseInt(event.target.dataset.moveTo);
      createContent=tree.getNewQuestion(answerId);
      if(createContent.result){
        var newView=render.createResultView(createContent);
      }else {
        var newView=render.CreateViewModel(createContent);
      }
    appendTo.removeChild(appendTo.firstChild);
		appendTo.appendChild(newView);
    }
  }
  
appendTo.addEventListener("click", this.onOptionClick);
}

var treeModel=new TreeModel(data);
var renderer=new Renderer();
var handlerOfEvent=Handler(treeModel,renderer);
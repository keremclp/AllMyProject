const project = document.getElementsByClassName('project');

for(i=0; i<project.length; i++){
    project[i].addEventListener('click', function(){
        this.classList.toggle('clicked');
    })
}
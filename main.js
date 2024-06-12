const shareBtn = document.getElementById('share')
const link = document.getElementsByClassName('links')[0]

shareBtn.addEventListener('click', function(){
  if(link.classList.contains('hidden')){
    link.classList.remove('hidden')
  } else{
    link.classList.add('hidden')
  }
  
})
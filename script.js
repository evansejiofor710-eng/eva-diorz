const menuToggle=document.querySelector('.menu-toggle');const mainNav=document.querySelector('#mainNav');if(menuToggle&&mainNav){menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation')}))}document.querySelector('#year').textContent=new Date().getFullYear();
async function loadArtistContent(){
  try{
    const response=await fetch('/data/site.json',{cache:'no-store'});
    if(!response.ok)return;
    const content=await response.json();
    document.querySelectorAll('[data-content]').forEach(node=>{
      const key=node.dataset.content;
      if(content[key]!==undefined)node.textContent=content[key];
    });
    document.querySelectorAll('[data-content-href]').forEach(node=>{
      const key=node.dataset.contentHref;
      if(content[key])node.href=content[key];
    });
    document.querySelectorAll('[data-content-src]').forEach(node=>{
      const key=node.dataset.contentSrc;
      if(content[key])node.src=content[key];
    });
  }catch(error){console.warn('Artist content could not be loaded.',error)}
}
loadArtistContent();

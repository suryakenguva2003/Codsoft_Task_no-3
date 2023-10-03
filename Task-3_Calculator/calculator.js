let c=localStorage.getItem('total');
if(!c)
{
    c='';
}
document.querySelector('.p').innerHTML=c;
function update(a)
{
    c+=a;
    document.querySelector('.p').innerHTML=c;
    localStorage.setItem('total',c);
}

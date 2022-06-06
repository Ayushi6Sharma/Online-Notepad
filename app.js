let flag=document.getElementById("feature-flag");
let textarea=document.getElementById("textarea");
flag.addEventListener("click",checkfn)
function checkfn()
{
    if(flag.checked==true)
    {   let textareaValue=textarea.value;
        localStorage.setItem("autosave-data",textareaValue)
    }
}
textarea.value=localStorage.getItem("autosave-data");
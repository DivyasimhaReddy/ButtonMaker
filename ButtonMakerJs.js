let bgColorInputValue=document.getElementById("bgColorInput");
let fontColorInputValue=document.getElementById("fontColorInput");
let fontSizeInputValue=document.getElementById("fontSizeInput");
let fontWeightInputValue=document.getElementById("fontWeightInput");
let paddingInpuValue=document.getElementById("paddingInput");
let borderRadiusInputValue=document.getElementById("borderRadiusInput");
let customButtonValue=document.getElementById("customButton");
function applyButton()
{
    let bgcolorvaluek=bgColorInputValue.value;
     customButtonValue.style.backgroundColor=bgcolorvaluek;
    let fontColork=fontColorInputValue.value;
    customButtonValue.style.color=fontColork;
    let fontSizek=fontSizeInputValue.value;
    customButtonValue.style.fontSize= fontSizek;
    let fontWeightk=fontWeightInputValue.value;
    customButtonValue.style.fontWeight=fontWeightk;
    let paddingk=paddingInpuValue.value;
    customButtonValue.style.padding=paddingk;
    let borderk=borderRadiusInputValue.value;
    customButtonValue.style.borderRadius=borderk;
}
const body = document.body;
function resizeEventListener() {
    const innerWidth = window.innerWidth;
    const gold = "windowGold";
    const deepskyblue = "windowDeepskyblue";
    const blueviolet = "windowBlueviolet";
    if(innerWidth > 1000) {
        body.classList.add(gold);
        body.classList.remove(deepskyblue);
        body.classList.remove(blueviolet);
    }//폭이 제일 넓을 때
    else if(innerWidth < 600){
        body.classList.add(deepskyblue);
        body.classList.remove(gold);        
        body.classList.remove(blueviolet);
    }//폭이 제일 좁을 때 
    else{
        body.classList.add(blueviolet);
        body.classList.remove(deepskyblue);
        body.classList.remove(gold);
    }//중간 폭을 가질 때
}

window.addEventListener("resize", resizeEventListener);


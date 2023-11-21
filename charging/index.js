const batteryLiquid = document.querySelector(".battery_liquid");
const batteryStatus = document.querySelector(".battery_status");
const batteryPercentage = document.querySelector(".battery_percent");


initBattery()



function initBattery(){
    navigator.getBattery().then((batt) =>{
        updateBattery =() =>{
            let level = Math.floor(batt.level * 100);
            batteryPercentage.innerHTML = level + "%";

            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`

            if(level == 100){
                batteryStatus.innerHTML = `Full battery icon `;
                batteryLiquid.style.height = `103% `
            }
            else if(level <= 20 &! batt.charging){
                batteryStatus.innerHTML = `Low battery icon .animated red`
            }else if(batt.charging){
                batteryStatus.innerHTML  = `Charging ....  flshlight icon .animated green`
            }else{
                batteryStatus.innerHTML = ""
            }

            if(level <= 20){
                batteryLiquid.classList.add("gradient-color-red");
                batteryLiquid.classList.remove("")
            }
            else if(level <= 40){
                batteryLiquid.classList.add("gradient-color-orange");
                batteryLiquid.classList.remove("")
            }
            else if(level <= 80){
                batteryLiquid.classList.add("gradient-color-yellow");
                batteryLiquid.classList.remove("")
            }
            else{
                batteryLiquid.classList.add("gradient-color-green");
                batteryLiquid.classList.remove("")
            }
        }
        updateBattery()

        batt.addEventListener("chargingchange", () =>{updateBattery()})
        batt.addEventListener("levelchange", () =>{updateBattery()})
    })
}
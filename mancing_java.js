const uid = localStorage.getItem("uid")
let data = JSON.parse(window.localStorage.getItem("data"));
//System
let coin = data["coin"]
let rodEquip = data["rodEquip"]
let mapNow = data["mapNow"]
let catching = false

//Trash
let trash = {
    "trash1" : {"trashStock"  : data["trash"]["trash1"]["trashStock"],
                "trashUnlock" : data["trash"]["trash1"]["trashUnlock"],
                "trashImg"    : "Reward/trash1.png"},
    "trash2" : {"trashStock"  : data["trash"]["trash2"]["trashStock"],
                "trashUnlock" :  data["trash"]["trash2"]["trashUnlock"],
                "trashImg"    : "Reward/trash2.png"},
    "trash3" : {"trashStock"  : data["trash"]["trash3"]["trashStock"],
                "trashUnlock" : data["trash"]["trash3"]["trashUnlock"],
                "trashImg"    : "Reward/trash3.png"}
}

//Bait
let bait = {"worm" :    {"baitName" : "CACING",
                         "baitImage" : "Bait/worm.png", 
                         "baitStock" : data["bait"]["worm"],
                         "baitPrice" : 1},
            "cricket" : {"baitName" : "JANGKRIK",
                         "baitImage" : "Bait/cricket.png", 
                         "baitStock" : data["bait"]["cricket"],
                         "baitPrice" : 2},
            "frog"    : {"baitName" : "KATAK",
                         "baitImage" : "Bait/frog.png", 
                         "baitStock" : data["bait"]["frog"],
                         "baitPrice" : 4},
            "moss"    : {"baitName" : "LUMUT",
                         "baitImage" : "Bait/moss.png", 
                         "baitStock" : data["bait"]["moss"],
                         "baitPrice" : 1},
            "mini"    : {"baitName" : "IKAN",
                         "baitImage" : "Bait/miniFish.png", 
                         "baitStock" : data["bait"]["mini"],
                         "baitPrice" : 2}}


//Rod
let rod = {"pemula" : {"nameRod"    : "Pancingan Pemula",
                       "powerRod"   : 1,
                       "priceRod"   : 0,
                       "imgPlayRod" : "Rod/pemulaPlay.png",
                       "imgRod"     : "Rod/pemula.png",
                       "unlockRod"  : data["rod"]["pemula"]},
           "zaki"   : {"nameRod"    : "Pancingan Amang Zaki",
                       "powerRod"   : 1.2,
                       "priceRod"   : 0,
                       "imgPlayRod" : "Rod/zakiPlay.png",
                       "imgRod"     : "Rod/zaki.png",
                       "unlockRod"  : data["rod"]["zaki"]},
           "sakti"  : {"nameRo"     : "Pancingan Sakti",
                       "powerRod"   : 1.4,
                       "priceRod"   : 120,
                       "imgPlayRod" : "Rod/saktiPlay.png",
                       "imgRod"     : "Rod/sakti.png",
                       "unlockRod"  : data["rod"]["sakti"]},
           "murah"  : {"nameRod"    : "Pancingan Murah",
                       "powerRod"   : 1.6,
                       "priceRod"   : 75,
                       "imgPlayRod" : "Rod/murahPlay.png",
                       "imgRod"     : "Rod/murah.png",
                       "unlockRod"  : data["rod"]["murah"]},
           "master" : {"nameRod"    : "Pancingan Master",
                       "powerRod"   : 1.8,
                       "priceRod"   : 190,
                       "imgPlayRod" : "Rod/masterPlay.png",
                       "imgRod"     : "Rod/master.png",
                       "unlockRod"  : data["rod"]["master"]},
           "dewa"   : {"nameRod"    : "Pancingan Dewa",
                       "powerRod"   : 2,
                       "priceRod"   : 300,
                       "imgPlayRod" : "Rod/dewaPlay.png",
                       "imgRod"     : "Rod/dewa.png",
                       "unlockRod"  : data["rod"]["dewa"]}
           }

//Map
let maps =
{"jingah" :  {"mapName"       : "Sungai Jingah",
              "mapImg"        : "Map/mapJingah.png",
              "mapImgDisplay" : "Map/displayMapJingah.png",
              "fishMap"       : ["patin","lais","haruan","toman"],
              "mapPrice"      : 0,
              "mapUnlock"     : data["map"]["jingah"]
             },
 "barito" :  {"mapName"       : "Sungai Barito",
              "mapImg"        : "Map/mapBarito.png",
              "mapImgDisplay" : "Map/displayMapBarito.png",
              "fishMap"       : ["kelabau","sapatSiam","baung","jelawat"],
              "mapPrice"      : 50,
              "mapUnlock"     : data["map"]["barito"]
             },
 "kapuas" :  {"mapName"       : "Sungai Kapuas",
              "mapImg"        : "Map/mapKapuas.png",
              "mapImgDisplay" : "Map/displayMapKapuas.png",
              "fishMap"       : ["jelawat","biawan","patin","kakapPutih"],
              "mapPrice"      : 90,
              "mapUnlock"     : data["map"]["kapuas"]
             },
 "kelayan" : {"mapName"       : "Sungai Kelayan",
              "mapImg"        : "Map/mapKelayan.png",
              "mapImgDisplay" : "Map/displayMapKelayan.png",
              "fishMap"       : ["kakapPutih","baung","kelabau","sapatSiam"],
              "mapPrice"      : 130,
              "mapUnlock"     : data["map"]["kelayan"]
             },
 "kuin"    : {"mapName"       : "Sungai Kuin",
              "mapImg"        : "Map/mapKuin.png",
              "mapImgDisplay" : "Map/displayMapKuin.png",
              "fishMap"       : ["biawan","haruan","papuyu","bawal"],
              "mapPrice"      : 170,
              "mapUnlock"     : data["map"]["kuin"]
             },
 "martapura":{"mapName"       : "Sungai Martapura",
              "mapImg"        : "Map/mapMartapura.png",
              "mapImgDisplay" : "Map/displayMapMartapura.png",
              "fishMap"       : ["bawal","lais","toman","papuyu"],
              "mapPrice"      : 200,
              "mapUnlock"     : data["map"]["martapura"]
             }
            }

//Fish
let fishs = 
    {"bawal"    : {"fishName"   : "Bawal",
                   "fishhealth" : random(700,2000),
                   "fishPower"  : randomFloat(1.0,1.4,2),
                   "fishImg"    : "Fish/bawal.png",
                   "fishStock"  : data["fish"]["bawal"]["fishStock"],
                   "fishPrice"  : 4,
                   "fishHabitat": ["kuin","martapura"],
                   "fishBait"   : ["worm","cricket"],
                   "fishUnlock" : data["fish"]["bawal"]["fishUnlock"],

                   "fishDescription" : `
                   Ikan Bawal dapat ditemukan di perairan air
                   tawar di seluruh Indonesia, terutama di 
                   perairan dangkal yang bersih dan kaya 
                   oksigen, dan juga sering dibudidayakan 
                   di kolam atau tambak.
                   <br>
                   <br>
                   Ikan Bawal memiliki ciri fisik unik dengan 
                   tubuh oval dan pipih, serta sisik halus. 
                   Warna tubuhnya umumnya keperakan atau perak. 
                   Habitat ideal bagi ikan Bawal adalah perairan 
                   air tawar yang bersih dan kaya oksigen.`
                },

    "jelawat"   : {"fishName"   : "Jelawat",
                   "fishhealth" : random(1000,4000),
                   "fishPower"  : randomFloat(1.3,1.7,2),
                   "fishImg"    : "Fish/jelawat.png",
                   "fishStock"  : data["fish"]["jelawat"]["fishStock"],
                   "fishPrice"  : 5,
                   "fishHabitat": ["barito", "kapuas"],
                   "fishBait"   : ["worm","cricket"],
                   "fishUnlock" : data["fish"]["jelawat"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan Jelawat aktif pada pagi dan sore hari, 
                   sering beristirahat di bawah tumbuhan air 
                   atau di antara bebatuan. Mereka hidup di 
                   perairan tawar seperti sungai, danau, rawa, 
                   dan kanal, serta memiliki kebiasaan 
                   bermigrasi
                   <br>
                   <br>
                   Ikan ini memiliki tubuh memanjang, berlendir, 
                   dan berwarna hijau kebiruan hingga keperakan. 
                   Ikan Jelawat memakan ikan kecil, udang, serangga 
                   air, dan tumbuhan air seperti rumput air dan ganggang.`
                },


    "kakapPutih": {"fishName"   : "Kakap Putih",
                   "fishhealth" : random(700,3000),
                   "fishPower"  : randomFloat(1.1,1.4,2),
                   "fishImg"    : "Fish/kakapPutih.png",
                   "fishStock"  : data["fish"]["kakapPutih"]["fishStock"],
                   "fishPrice"  : 4,
                   "fishHabitat"  : ["kelayan","kapuas"],
                   "fishBait"   : ["mini","moss"],
                   "fishUnlock" : data["fish"]["kakapPutih"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan Kakap Putih hidup di perairan payau atau 
                   air tawar yang dekat dengan laut. Mereka 
                   adalah ikan omnivora yang memakan makanan 
                   dari tumbuhan maupun hewan kecil.
                   <br>
                   <br>
                   Ikan ini memiliki ciri fisik yang mudah dikenali, 
                   seperti warna kulit keabu-abuan atau silver di 
                   bagian atas dan putih di bagian bawah. Tubuhnya 
                   ramping dengan kepala besar, mulut lebar, serta 
                   sirip punggung dan ekor yang panjang.`
                
                },

    "kelabau"   : {"fishName"   : "Kelabau",
                   "fishhealth" : random(700,2000),
                   "fishPower"  : randomFloat(1.0,1.2,2),
                   "fishImg"    : "Fish/kelabau.png",
                   "fishStock"  : data["fish"]["kelabau"]["fishStock"],
                   "fishPrice"  : 3,
                   "fishHabitat": ["barito","kelayan"],
                   "fishBait"   : ["worm","mini"],
                   "fishUnlock" : data["fish"]["kelabau"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan kelabau, juga dikenal sebagai ikan kel, 
                   memiliki sirip panjang bercabang, sisik kasar, 
                   kepala besar dengan mulut lebar dan gigi tajam. 
                   Panjang ikan kelabau dapat mencapai 1 meter.
                   <br>
                   <br>
                   Ikan kelabau adalah ikan omnivora yang memakan 
                   ikan kecil, udang, cacing, dan tumbuhan air. 
                   Mereka biasanya hidup di perairan tenang seperti
                   sungai, danau, atau rawa-rawa.`
                },

    "papuyu"    : {"fishName"   : "Papuyu",
                   "fishhealth" : random(700,6000),
                   "fishPower"  : randomFloat(1.5,2,2),
                   "fishImg"    : "Fish/papuyu.png",
                   "fishStock"  : data["fish"]["papuyu"]["fishStock"],
                   "fishPrice"  : 7,
                   "fishHabitat": ["kuin","martapura"],
                   "fishBait"   : ["mini","moss"],
                   "fishUnlock" : data["fish"]["papuyu"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan papuyu, juga dikenal sebagai ikan gabus. 
                   Warna tubuhnya cenderung kecokelatan atau hijau 
                   keabu-abuan dengan corak belang-belang khas. 
                   <br>
                   <br>
                   Habitat ikan papuyu bervariasi, mulai dari perairan 
                   jernih dan bebas polusi hingga perairan yang tercemar. 
                   Tumbuhan air seperti eceng gondok dan enceng kucing 
                   sering tumbuh di habitat ikan papuyu`
                },

    "patin"     : {"fishName"   : "Patin",
                   "fishhealth" : random(1000,6000),
                   "fishPower"  : randomFloat(1.6,2,2),
                   "fishImg"    : "Fish/patin.png",
                   "fishStock"  : data["fish"]["patin"]["fishStock"],
                   "fishPrice"  : 6,
                   "fishHabitat": ["kapuas","jingah"],
                   "fishBait"   : ["worm","mini"],
                   "fishUnlock" : data["fish"]["patin"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan patin memiliki tubuh memanjang dan pipih dengan 
                   warna kulit dominan coklat atau keabu-abuan. Mereka 
                   memiliki sirip dada yang besar dan lebar, serta mulut 
                   yang besar dengan gigi kecil yang tajam.
                   <br>
                   <br>
                   Habitat ikan patin tersebar di berbagai perairan air 
                   tawar, seperti sungai, danau, dan rawa-rawa. Mereka 
                   cenderung hidup di bagian-bagian perairan yang tenang 
                   dan memiliki dasar lumpur atau pasir.`
                },

    "toman"     : {"fishName"   : "toman",
                   "fishhealth" : random(1000,8000),
                   "fishPower"  : randomFloat(1.7,2,2),
                   "fishImg"    : "Fish/toman.png",
                   "fishStock"  : data["fish"]["toman"]["fishStock"],
                   "fishPrice"  : 12,
                   "fishHabitat": ["jingah","martapura"],
                   "fishBait"   : ["mini","frog"],
                   "fishUnlock" : data["fish"]["toman"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan toman, juga dikenal sebagai ikan gabus besar 
                   atau ikan haruan besar, Ikan ini memiliki tubuh 
                   panjang dan ramping, kepala besar dengan mulut 
                   yang lebar, sisik tajam di sisi tubuh, dan 
                   gigi yang kuat.
                   <br>
                   <br>
                   Ikan toman cenderung hidup sendirian atau dalam 
                   kelompok kecil, Mereka biasanya hidup di air dangkal 
                   dan sering bersembunyi di antara rumpun rumput atau
                   di balik batu di dasar sungai.`
                },

    "baung"     : {"fishName"   : "Baung",
                   "fishhealth" : random(700,5000),
                   "fishPower"  : randomFloat(1.2,1.6,2),
                   "fishImg"    : "Fish/baung.png",
                   "fishStock"  : data["fish"]["baung"]["fishStock"],
                   "fishPrice"  : 8,
                   "fishHabitat": ["barito","kelayan"],
                   "fishBait"   : ["worm","mini"],
                   "fishUnlock" : data["fish"]["baung"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan baung memiliki ciri-ciri seperti ukuran panjang 
                   sekitar 30-60 cm, warna tubuh keabu-abuan atau 
                   kekuningan dengan corak belang-belang hitam, 
                   dan tiga pasang sungut di mulutnya yang sangat 
                   sensitif dalam mencari makanan.
                   <br>
                   <br>
                   Habitat ikan baung umumnya berada di perairan tawar 
                   seperti sungai, danau, rawa-rawa, dan genangan air 
                   di dataran rendah. `
                },
    
    "biawan"    : {"fishName"   : "Biawan",
                   "fishhealth" : random(700,2000),
                   "fishPower"  : randomFloat(1.0,1.3,2),
                   "fishImg"    : "Fish/biawan.png",
                   "fishStock"  : data["fish"]["biawan"]["fishStock"],
                   "fishPrice"  : 4,
                   "fishHabitat"  : ["kapuas","kuin"],
                   "fishBait"   : ["mini","moss"],
                   "fishUnlock" : data["fish"]["biawan"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan Biawan biasanya hidup berkelompok dan sering 
                   ditemukan dalam jumlah yang cukup besar. Ikan Biawan 
                   memiliki gigi tajam yang kuat dan merupakan pemakan daging.
                   <br>
                   <br>
                   Ikan Biawan hidup di perairan tawar, terutama di sungai 
                   dan danau yang memiliki air jernih. Sirip ekor ikan Biawan 
                   juga panjang dan indah, menjadikannya pilihan populer sebagai 
                   ikan hias. `
                },

    "haruan"    : {"fishName"   : "Haruan",
                   "fishhealth" : random(700,7000),
                   "fishPower"  : randomFloat(1.7,2,2),
                   "fishImg"    : "Fish/haruan.png",
                   "fishStock"  : data["fish"]["haruan"]["fishStock"],
                   "fishPrice"  : 5,
                   "fishHabitat": ["kuin","jingah"],
                   "fishBait"   : ["worm","mini"],
                   "fishUnlock" : data["fish"]["haruan"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan Haruan memiliki bentuk tubuh yang mirip dengan ular, 
                   dengan kulit bersisik dan perut berwarna putih. Warna 
                   tubuhnya bervariasi dari coklat ke hijau zaitun dengan 
                   belang-belang hitam dan putih di bagian belakang.
                   <br>
                   <br>
                   Ikan Haruan hidup di perairan tawar seperti sungai, danau, 
                   dan rawa-rawa dengan suhu air sekitar 20-30 derajat Celsius. 
                   Mereka cenderung hidup sendirian dan aktif pada pagi dan 
                   sore hari.`
                },

    "sapatSiam" : {"fishName"   : "Sapat Siam",
                   "fishhealth" : random(700,3000),
                   "fishPower"  : randomFloat(1.1,1.5,2),
                   "fishImg"    : "Fish/sapatSiam.png",
                   "fishStock"  : data["fish"]["sapatSiam"]["fishStock"],
                   "fishPrice"  : 6,
                   "fishHabitat": ["barito","kelayan"],
                   "fishBait"   : ["mini","moss"],
                   "fishUnlock" : data["fish"]["sapatSiam"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan ini memiliki tubuh panjang dan ramping dengan warna 
                   punggung abu-abu kehitaman dan perut putih. Siripnya 
                   panjang dan meruncing, serupa dengan warna punggungnya.
                   <br>
                   <br>
                   Habitatnya terutama di perairan air tawar yang tenang 
                   seperti sungai, danau, dan rawa-rawa. Ikan ini dapat hidup 
                   di perairan yang kurang oksigen dan tercemar. `
                },

    "lais"      : {"fishName"   : "Lais",
                   "fishhealth" : random(700,5000),
                   "fishPower"  : randomFloat(1.4,1.7,2),
                   "fishImg"    : "Fish/lais.png",
                   "fishStock"  : data["fish"]["lais"]["fishStock"],
                   "fishPrice"  : 5,
                   "fishHabitat": ["jingah","martapura"],
                   "fishBait"   : ["worm","mini"],
                   "fishUnlock" : data["fish"]["lais"]["fishUnlock"],
                   "fishDescription" : `
                   Ikan Lais adalah spesies ikan air tawar.  Ikan ini memiliki 
                   tubuh ramping dan pipih dengan warna coklat keabu-abuan dan 
                   garis-garis vertikal di sisi tubuhnya. Ikan Lais memiliki 
                   sirip punggung, sirip perut, dan sirip ekor yang panjang.
                   <br>
                   <br>
                   Mereka hidup di perairan tenang seperti sungai, danau, dan
                   rawa, seringkali dalam kelompok kecil atau secara soliter
                   dan mereka biasanya aktif pada malam hari.`
                }}

document.querySelector(".mapDisplay").src = maps[mapNow]["mapImg"];
document.querySelector(".rodPlay").src = rod[rodEquip]["imgPlayRod"];
document.querySelector(".mapPicture").src = maps[mapNow]["mapImgDisplay"]
document.querySelector(".displayMap > p").innerHTML = maps[mapNow]["mapName"]


for(let j in rod){
    if(j == "zaki" || j == "pemula"){
        continue
    }
    
    if(rod[j]["unlockRod"] == true){
        
        document.querySelector(`.${j}`).style.backgroundImage = "url('Shop/sold.png')"
        document.querySelector(`.${j}`).style.pointerEvents = "none"
        document.querySelector(`.${j}`).style.height = "60"
        document.querySelector(`.${j}`).style.top = "10"
        document.querySelector(`.${j} > p`).innerHTML = ""
    }
}


//Click
let questReq = {"quest1" : 0, "quest2" : 0, "quest3" :0}
let questClick = 1
function openQuest(){
    if (questClick%2 == 0){
        document.querySelector(".questDisplay").style.width = "0";
        document.querySelector(".navigation").style.top = 30;
        document.querySelector(".quests").style.opacity = 0;
        
        setTimeout(function(){
            document.querySelector(".quests").style.display = "none";
            
            for(let i = 1; i <= 3; i++){
                document.querySelector(`.quest${i}`).style.opacity = 0;
            }
        },300)
        questClick += 1;

    }
    else{
        document.querySelector(".navigation").style.top = 142;
        document.querySelector(".questDisplay").style.width = "300";
        document.querySelector(".questDisplay").style.visibility = "visible";
        document.querySelector(".quests").style.display = "flex";
        setTimeout(function(){
            document.querySelector(".quests").style.opacity = 1;
            for(let i = 1; i <= 3; i++){
                document.querySelector(`.quest${i}`).style.opacity = 1;
            }
        },700)
        questClick += 1
    }
}

/////////////////////////////////
////                         ////
////          BAIT           ////
////                         ////
/////////////////////////////////

let baitClick = 0
function baitHidden(){
    if (baitClick%2 == 0){
        document.querySelector(".baitSelect").style.opacity = "0.2";
        baitClick += 1
    }
    else{
        document.querySelector(".baitSelect").style.opacity = "1";
        baitClick += 1
    }
}

let baitUsing = "worm"
let baitIndex = []
let numberBait = 0
for (let key in bait){
    baitIndex.push(key)
}


onclick="checkRod(this.getAttribute('class'))"

document.querySelector(".baitStock").innerHTML = bait[baitIndex[numberBait]]["baitStock"]
document.querySelector(".baitName").innerHTML = bait[baitIndex[numberBait]]["baitName"]

function baitLeft(){
    numberBait -= 1
    if (numberBait == -1){
        numberBait = baitIndex.length-1
    }
    baitUsing = baitIndex[numberBait]
    document.querySelector(".baitName").innerHTML = document.querySelector(".baitName").innerHTML = bait[baitIndex[numberBait]]["baitName"]
    document.querySelector(".bait img").src = bait[baitIndex[numberBait]]["baitImage"]
    document.querySelector(".baitStock").innerHTML = bait[baitIndex[numberBait]]["baitStock"]
    checkBait(bait[baitIndex[numberBait]]["baitStock"])
    
}

function baitRight(){
    numberBait += 1
    if (numberBait == baitIndex.length){
        numberBait = 0
    }
    baitUsing = baitIndex[numberBait]
    document.querySelector(".baitName").innerHTML = document.querySelector(".baitName").innerHTML = bait[baitIndex[numberBait]]["baitName"]
    document.querySelector(".bait img").src = bait[baitIndex[numberBait]]["baitImage"]
    document.querySelector(".baitStock").innerHTML = bait[baitIndex[numberBait]]["baitStock"]
    checkBait(bait[baitIndex[numberBait]]["baitStock"])
}

/////////////////////////////////
////                         ////
////       MECHANISME        ////
////                         ////
/////////////////////////////////
let power_rod = 1
let easy = random(1000,3000)
let normal = random(3000,6000)
let hard = random(6000,1000)

function backFishing(){
    
    for(i in fishs){
        if(fishs[i]["fishStock"] > 0){
            fishs[i]["fishUnlock"] = true
        }
    }

    for(j in trash){
        if(trash[j]["trashStock"] > 0){
            trash[j]["trashUnlock"] = true
        }
    }
    
    document.querySelector(".main").style.pointerEvents = "auto"
    document.querySelector(".baitFishing").style.transition = "1s"
    document.querySelector(".catchBagButton").style.display = "none"
    document.querySelector(".catchButton").style.display = "none"
    document.querySelector(".fishingButton").style.display = "block"
    document.querySelector(".fishingButton").innerHTML = "LEMPAR<br>UMPAN";
    document.querySelector(".fishingButton").style.background = "#04AA6D";
    document.querySelector(".baitFishing").style.left = "120px";
    document.querySelector(".baitFishing").style.top = "0px";
    document.querySelector(".baitFishing img").style.height = "43px";
    document.querySelector(".baitSelect").style.opacity = "1";
    document.querySelector(".baitSelect").style.visibility = "visible";
    document.querySelector(".reward").style.opacity = "0"
    document.querySelector(".catch > p").style.opacity = "0"
    document.querySelector(".baitFishing").style.opacity = "1"
    setTimeout(function(){
        document.querySelector(".fishingButton").disabled = false
    },300)
    checkBait(bait[baitUsing]["baitStock"])
    
}


function checkBait(baitStock){
    if(baitStock == 0){
        a.removeEventListener("mousedown", up);
        a.removeEventListener("mouseup", down);
        document.querySelector(".fishingButton").innerHTML = "UMPAN<br>HABIS"
        document.querySelector(".fishingButton").style.backgroundColor = "#9BABB8"
        
    }
    else{
        a.removeEventListener("mousedown", up);
        a.removeEventListener("mouseup", down);
        a.addEventListener("mousedown", up);
        a.addEventListener("mouseup", down);
        document.querySelector(".fishingButton").innerHTML = "LEMPAR<br>UMPAN"
        document.querySelector(".fishingButton").style.backgroundColor = "#04AA6D"
        
    }
}

const a = document.querySelector(".fishingButton");
a.addEventListener("mousedown", up);
a.addEventListener("mouseup", down);

for(let i in bait){
    if(bait[i]["baitStock"] == 0){
        baitRight()
    }
}

function up(){
    bait[baitUsing]["baitStock"] -= 1
    document.querySelector(".baitStock").innerHTML = bait[baitUsing]["baitStock"]
    document.querySelector(".arrow").style.transition = "3s";
    document.querySelector(".baitSelect").style.opacity = "0";
    document.querySelector(".baitSelect").style.visibility = "hidden";
    document.querySelector(".bar").style.visibility = "visible";
    document.querySelector(".arrow").style.visibility = "visible";
    document.querySelector(".arrow").style.right = 48;
    document.querySelector(".rod img").style.transform = "skew(15deg)"
    start = new Date();
}

function down(){
    document.querySelector(".main").style.pointerEvents = "none"
    document.querySelector(".arrow").style.transition = 0;
    document.querySelector(".bar").style.visibility = "hidden";
    document.querySelector(".arrow").style.visibility = "hidden";
    document.querySelector(".arrow").style.right = 186;
    document.querySelector(".rod img").style.transform = "skew(0deg)"
    document.querySelector(".fishingThrow").play()
    end = new Date();
    power = end - start;

    let left = 0
    let top = 0
    let height = 0

    if (power < 600){
        setTimeout(function(){
            document.querySelector(".baitFishing").style.visibility = "visible";
        }, 100);
        left = random(-70,420);
        top = random(-150,-100);
        height = random(55,60);
        
    }
    else if(power < 1200){
        setTimeout(function(){
            document.querySelector(".baitFishing").style.visibility = "visible";
        }, 100);
        left = random(180,420);
        top = random(-210,-150);
        height = random(50,55);
        
    }
    
    else{
        setTimeout(function(){
            document.querySelector(".baitFishing").style.visibility = "visible";
        }, 100);
        left = random(280,420);
        top = random(-250,-210);
        height = random(43,48);
        document.querySelector(".baitFishing img").style.opacity = randomFloat(0.55,0.6,1);

    }


    document.querySelector(".baitFishing").style.left = left;
    document.querySelector(".baitFishing").style.top = top;
    document.querySelector(".baitFishing img").style.height = height;

    document.querySelector(".fishingButton").style.background = "#FD8A8A";
    document.querySelector(".fishingButton").innerHTML = "Shhh.....";
    document.querySelector(".fishingButton").disabled = true
    document.querySelector(".catchButton").style.disabled = true;
    

    setTimeout(function(){
        document.querySelector(".fishingGet").play()
        document.querySelector(".fishingButton").style.display = "none";
        document.querySelector(".fishingButton").style.background = "#95BDFF";
        document.querySelector(".catchButton").style.display = "block";
        document.querySelector(".catchButton").style.opacity = "0.8";
        document.querySelector(".catchButton").style.disabled = false;
        document.querySelector(".health").style.opacity = 1;
        
        let catchPotential = random(1,100);
        let catchFish = [];
        
        let catchs = "";
        for(let i = 1; i < 41 ; i++){
            catchFish.push(i)
        }
        let catchTrash = []
        for(let i = 41; i < 81 ; i++){
            catchTrash.push(i)
        }
        let catchTreasure = []
        for(let i = 81; i < 101 ; i++){
            catchTreasure.push(i)
        }

        catching = true

        if (catchFish.includes(catchPotential)){
            catchingFishIndex = random(0,((maps[mapNow]["fishMap"].length)-1))
            catchingFish = maps[mapNow]["fishMap"][catchingFishIndex]
            catchs = "fish"
            
            if(catching == true){
                let health = fishs[catchingFish]["fishhealth"]
                document.querySelector(".health").innerHTML = health
                let timers = setInterval(healthPlus,10)
        
                function healthPlus(){
                    health += 1
                    document.querySelector(".health").innerHTML = health
                }

                const da = document.querySelector(".catchButton");
                da.addEventListener("mousedown", pull);
                da.addEventListener("mouseup", off);

                function pull(){
                    start = new Date();   
                    document.querySelector(".fishingPull").play()
                }

                function off(){
                    document.querySelector(".fishingPull").pause()
                    end = new Date();
                    power = end - start;
                    health -= power
                    if (health < 0){
                        fishs[catchingFish]["fishStock"] += 1
                        da.removeEventListener("mousedown", pull);
                        da.removeEventListener("mouseup", off);
                        document.querySelector(".catch > p").style.opacity = "1"
                        document.querySelector(".catch > p").style.visibility = "visible"
                        document.querySelector(".reward").style.opacity = "1"
                        document.querySelector(".rewardImg").src = fishs[catchingFish]["fishImg"]
                        document.querySelector(".rewardName").innerHTML = fishs[catchingFish]["fishName"]
                        catching = false
                        clearInterval(timers)
                        document.querySelector(".health").innerHTML = ""
                        document.querySelector(".baitFishing").style.visibility = "hidden"
                        document.querySelector(".baitFishing").style.opacity = "0"
                        document.querySelector(".catchButton").style.display = "none"
                        document.querySelector(".catchBagButton").style.display = "block"
                        document.querySelector(".catchBagButton").innerHTML = "Masukkan ke dalam tas"
                        const pa = document.querySelector(".catchBagButton");
                        setTimeout(function(){
                            pa.addEventListener("mousedown", openTrash);
                        },1000)
                        let treasureClick = 0

                        function openTrash(){
                            if(treasureClick%2 == 0){
                                document.querySelector(".catchBagButton").innerHTML = "Sedang Memasukkan<br>ke Bag"
                                document.querySelector(".catchBagButton").disabled = true
                                document.querySelector(".catchBagButton").style.background = "#9BABB8"
                                questReq["quest1"] += 1
                                document.querySelector(".quest1").innerHTML = `(${questReq["quest1"]}/5) Tangkap 5 sembarang ikan`
                                setTimeout(function(){
                                    document.querySelector(".catchBagButton").innerHTML = "Kembali Memancing"
                                    document.querySelector(".catchBagButton").disabled = false
                                    document.querySelector(".catchBagButton").style.background = "#04AA6D"
                                }, 5000);
                                treasureClick += 1
                        }
                            else{
                                setTimeout(function(){
                                    pa.removeEventListener("mousedown", openTrash);
                                    backFishing()
                                }, 100);
                                treasureClick += 1  
                            }
                        }
                        
                        }
                    }
                }
                
            }
        else if ((catchTrash.includes(catchPotential))){
            catchs = "trash"
            let catchTrashIndex = random(1,3)

            if(catching == true){
                let health = random(1000,5000)
                document.querySelector(".health").innerHTML = health
                let timers = setInterval(healthPlus,10)
                    
                function healthPlus(){
                    health += 1
                    document.querySelector(".health").innerHTML = health
                }
                    
                const da = document.querySelector(".catchButton");
                da.addEventListener("mousedown", pull);
                da.addEventListener("mouseup", off);

                function pull(){
                    start = new Date();
                    document.querySelector(".fishingPull").play()
                }
    
                function off(){
                    end = new Date();
                    document.querySelector(".fishingPull").pause()
                    power = end - start;
                    health -= power
                    if (health < 0){
                        trash[`trash${catchTrashIndex}`]["trashStock"] += 1
                        da.removeEventListener("mousedown", pull);
                        da.removeEventListener("mouseup", off);
                        document.querySelector(".catch > p").style.opacity = "1"
                        document.querySelector(".catch > p").style.visibility = "visible"
                        document.querySelector(".reward").style.opacity = "1"
                        document.querySelector(".rewardImg").src = `Reward/trash${catchTrashIndex}.png`
                        document.querySelector(".rewardName").innerHTML = "Sampah"
                        catching = false
                        clearInterval(timers)
                        document.querySelector(".health").innerHTML = ""
                        document.querySelector(".baitFishing").style.visibility = "hidden"
                        document.querySelector(".baitFishing").style.opacity = "0"
                        document.querySelector(".catchButton").style.display = "none"
                        document.querySelector(".catchBagButton").style.display = "block"
                        document.querySelector(".catchBagButton").innerHTML = "Masukkan ke dalam tas"
                        const pa = document.querySelector(".catchBagButton");
                        setTimeout(function(){
                            pa.addEventListener("mousedown", openTrash);
                        },1000)
                        let treasureClick = 0

                        function openTrash(){
                            if(treasureClick%2 == 0){
                                document.querySelector(".catchBagButton").innerHTML = "Sedang Memasukkan<br>ke Bag"
                                document.querySelector(".catchBagButton").disabled = true
                                document.querySelector(".catchBagButton").style.background = "#9BABB8"
                                setTimeout(function(){
                                    document.querySelector(".catchBagButton").innerHTML = "Kembali Memancing"
                                    document.querySelector(".catchBagButton").disabled = false
                                    document.querySelector(".catchBagButton").style.background = "#04AA6D"
                                }, 5000);
                                treasureClick += 1
                        }
                            else{
                                setTimeout(function(){
                                    pa.removeEventListener("mousedown", openTrash);
                                    backFishing()
                                }, 100);
                                treasureClick += 1  
                            }
                        }
                        
                        }
                }
            }
            }
            
        else if ((catchTreasure.includes(catchPotential))){
            
            catchs = "treasure"
            if(catching == true){
                let power = 0
                let health = random(1000,5000)
                document.querySelector(".health").innerHTML = health
                let timers = setInterval(healthPlus,10)

                function healthPlus(){
                    health += 1
                    document.querySelector(".health").innerHTML = health

                }
                    
                const da = document.querySelector(".catchButton");
                da.addEventListener("mousedown", pull);
                da.addEventListener("mouseup", off);

                function pull(){
                    start = new Date();   
                    document.querySelector(".fishingPull").play()
                }
    
                function off(){
                    document.querySelector(".fishingPull").pause()
                    end = new Date();
                    power = end - start;
                    health -= power

                    if (health < 0){
                        clearInterval(timers)
                        da.removeEventListener("mousedown", pull);
                        da.removeEventListener("mouseup", off);
                        document.querySelector(".health").innerHTML = ""
                        document.querySelector(".baitFishing").style.transition = "0s"
                        catching = false
                        document.querySelector(".baitFishing").style.visibility = "hidden"
                        document.querySelector(".catch > p").style.visibility = "visible"
                        document.querySelector(".reward").style.transition = "3"
                        document.querySelector(".reward").style.opacity = "1"
                        document.querySelector(".gettingFish").style.opacity = "1"
                        document.querySelector(".rewardImg").src = `Reward/reward.png`
                        document.querySelector(".rewardName").innerHTML = "Harta Karun"
                        document.querySelector(".catchButton").style.display = "none"
                        document.querySelector(".catchBagButton").style.display = "block"
                        document.querySelector(".catchBagButton").innerHTML = "Buka peti"
                        const pa = document.querySelector(".catchBagButton");
                        setTimeout(function(){
                            pa.addEventListener("mousedown", openTreasure);
                        },1000)
                        let treasureClick = 0
                        function openTreasure(){
                            if(treasureClick%2 == 0){
                                let potentialTreasure = random(1,100)
                                let emptyTreasure = [];
                                for(let i = 0; i < 41 ; i++){
                                    emptyTreasure.push(i)
                                }
                                let coinTreasure = []
                                for(let i = 41; i < 95 ; i++){
                                    coinTreasure.push(i)
                                }
                                let rodTreasure = []
                                for(let i = 95; i < 101 ; i++){
                                    rodTreasure.push(i)
                                }

                                if(emptyTreasure.includes(potentialTreasure)){
                                    document.querySelector(".rewardImg").style.opacity = "0"
                                    document.querySelector(".rewardName").style.opacity = "0"
                                    setTimeout(function(){
                                        document.querySelector(".rewardImg").src = "Reward/reward1.png"
                                        document.querySelector(".rewardName").innerHTML = "Kurang beruntung"
                                        document.querySelector(".rewardImg").style.opacity = "1"
                                        document.querySelector(".rewardName").style.opacity = "1"
                                    },800)

                                }

                                else if(coinTreasure.includes(potentialTreasure)){
                                    document.querySelector(".rewardImg").style.opacity = "0"
                                    document.querySelector(".rewardName").style.opacity = "0"
                                    setTimeout(function(){
                                        let coinTreasureGet = random(5,30)
                                        coin += coinTreasureGet
                                        document.querySelector(".rewardImg").src = "Reward/reward2.png"
                                        document.querySelector(".rewardName").innerHTML = `${coinTreasureGet} Coin`
                                        document.querySelector(".rewardImg").style.opacity = "1"
                                        document.querySelector(".rewardName").style.opacity = "1"
                                    },800)
                                }

                                else if(rodTreasure.includes(potentialTreasure)){
                                    document.querySelector(".rewardImg").style.opacity = "0"
                                    document.querySelector(".rewardName").style.opacity = "0"
                                    setTimeout(function(){
                                        document.querySelector(".rewardImg").src = "Reward/reward3.png"
                                        document.querySelector(".rewardName").innerHTML = "Pancingan Baru"
                                        document.querySelector(".rewardImg").style.opacity = "1"
                                        document.querySelector(".rewardName").style.opacity = "1"
                                    },800)
                                }

                                document.querySelector(".catchBagButton").innerHTML = "Sedang Memasukkan<br>ke Bag"
                                document.querySelector(".catchBagButton").disabled = true
                                document.querySelector(".catchBagButton").style.background = "#9BABB8"
                                setTimeout(function(){
                                    document.querySelector(".catchBagButton").innerHTML = "Kembali Memancing"
                                    document.querySelector(".catchBagButton").disabled = false
                                    document.querySelector(".catchBagButton").style.background = "#04AA6D"
                                }, 5000);
                                treasureClick += 1

                            }
                            else{
                                setTimeout(function(){

                                    pa.removeEventListener("mousedown", openTreasure);
                                    backFishing()
                                }, 100);
                                treasureClick += 1  
                                
                            }

                        }

                        }

                }               
            }

        }
        
    }, random(3000,7000));

}

/////////////////////////////////
////                         ////
////           BAG           ////
////                         ////
/////////////////////////////////

let bagAll = []
function openBag(){
    document.querySelector(".main").style.pointerEvents = "none"
    document.querySelector(".fishing").style.opacity = "0"
    document.querySelector(".rod").style.opacity = "0"
    document.querySelector(".baitSelect").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".fishing").style.display = "none"
        document.querySelector(".rod").style.display = "none"
        document.querySelector(".baitSelect").style.display = "none"
        document.querySelector(".bags").style.display = "flex"
        setTimeout(function(){
            document.querySelector(".bags").style.opacity = "1"
        },50)
    },500)
    let index = 1
    for(let i in fishs){
        if(fishs[i]["fishUnlock"] == true){
        }
        index += 1
    }

    
    let bagFish = []
    for(let i in fishs){
        if(fishs[i]["fishUnlock"] == true){
            bagFish.push(i)
            bagAll.push(i)
        }
    }
    let indexFish = 0
    for(let itemActive in bagFish){
        indexFish += 1
        let bagClass = document.querySelector(`.bag${indexFish}`)
        let item = document.createElement("img");
        item.setAttribute("class", "itemFish")
        item.setAttribute("src", fishs[bagFish[itemActive]]["fishImg"]);
        item.setAttribute("height", "35");
        item.setAttribute("width", "35");
        item.setAttribute("alt", "Ikan");
        bagClass.appendChild(item);

        let stock = document.createElement("p")
        let text  = document.createTextNode(fishs[bagFish[itemActive]]["fishStock"])
        stock.setAttribute("class","bagStockFish")
        stock.appendChild(text)
        bagClass.appendChild(stock)

        
    }

    let bagTrash = []
    for(let j in trash){
        if(trash[j]["trashUnlock"] == true){
            bagTrash.push(j)
            bagAll.push(j)
        }
    }

    let indexTrash = 0 + indexFish
    for(let itemActive in bagTrash){
        indexTrash += 1
        let bagClass = document.querySelector(`.bag${indexTrash}`)
        let item = document.createElement("img");
        item.setAttribute("class", "itemTrash")
        item.setAttribute("src", trash[bagTrash[itemActive]]["trashImg"]);
        item.setAttribute("height", "23");
        item.setAttribute("width", "23");
        item.setAttribute("alt", "Sampah");
        bagClass.appendChild(item);        
        
        let stock = document.createElement("p")
        let text  = document.createTextNode(trash[bagTrash[itemActive]]["trashStock"])
        stock.setAttribute("class","bagStockTrash")
        stock.appendChild(text)
        bagClass.appendChild(stock)
    
    }
    for(let i = bagAll.length+1; i <= 15; i++){
        document.querySelector(`.bag${i}`).style.pointerEvents = "none"
    }
}

//Bag
let bagIndex = 0
function checkBagIndex(classBag){
    bagIndex = classBag
    bagIndex = bagIndex.replace(/\D/g,'')
    if(bagAll.length >= bagIndex){
        openItem(bagIndex)
    }

}

function openItem(bagIndex){
    document.querySelector(".bagsItem").style.display = "flex"

    let itemDisplay = bagAll[bagIndex-1]
    if(itemDisplay in trash){
        document.querySelector(".imgItem").src = trash[itemDisplay]["trashImg"]
        document.querySelector(".nameItems").innerHTML = "SAMPAH"
        if(trash[itemDisplay]["trashStock"] == 0){
            document.querySelector(".priceItemOne").innerHTML = 0
        }
        else{
            document.querySelector(".priceItemOne").innerHTML = 1
        }
        document.querySelector(".priceItemAll").innerHTML = trash[itemDisplay]["trashStock"]
        document.querySelector(".nameStock").innerHTML = trash[itemDisplay]["trashStock"]
    }
    else if(itemDisplay in fishs){
        document.querySelector(".imgItem").src = fishs[itemDisplay]["fishImg"]
        document.querySelector(".nameItems").innerHTML = fishs[itemDisplay]["fishName"].toUpperCase()
        document.querySelector(".nameStock").innerHTML = fishs[itemDisplay]["fishStock"]
        if(fishs[itemDisplay]["fishStock"] == 0){
            document.querySelector(".priceItemOne").innerHTML = 0
            
        }
        else{
            document.querySelector(".priceItemOne").innerHTML = fishs[itemDisplay]["fishPrice"]
            
        }
            document.querySelector(".priceItemAll").innerHTML = (fishs[itemDisplay]["fishPrice"]) * fishs[itemDisplay]["fishStock"]
    }
    document.querySelector(".bagsDisplay").style.backgroundImage = "url('Bag/bagsDisplayOpen.png')"
    let bagContentLong = document.querySelector(".bagsContent").children.length
    let bagDivLong = document.querySelector(".contentItem").children.length
    let bagLong = bagDivLong * bagContentLong
    for(let i = 0; i < bagLong; i++){
        document.querySelector(`.bag${i+1}`).style.mixBlendMode = "color-burn"
    }
    document.querySelector(".bagsSelect").style.mixBlendMode = "color-burn"
    document.querySelector(".bagsLeftImg").style.mixBlendMode = "color-burn"
    document.querySelector(".bagsRightImg").style.mixBlendMode = "color-burn"
    setTimeout(function(){
        document.querySelector(".bagsItem").style.opacity = 1
    },1)
    
}


function closeBag(){
    for(let i = bagAll.length+1; i <= 15; i++){
        document.querySelector(`.bag${i}`).style.pointerEvents = "auto"
    }
    bagAll.length = 0
    document.querySelector(".bags").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".bagsDisplay").style.backgroundImage = "url('Bag/bagsDisplay.png')"
        let bagContentLong = document.querySelector(".bagsContent").children.length
        let bagDivLong = document.querySelector(".contentItem").children.length
        let bagLong = bagDivLong * bagContentLong
        for(let i = 0; i < bagLong; i++){
            document.querySelector(`.bag${i+1}`).style.mixBlendMode = "normal"
        }
        document.querySelector(".bagsSelect").style.mixBlendMode = "normal"
        document.querySelector(".bagsLeftImg").style.mixBlendMode = "normal"
        document.querySelector(".bagsRightImg").style.mixBlendMode = "normal"
        document.querySelector(".main").style.pointerEvents = "auto"
        document.querySelector(".bags").style.display = "none"
        document.querySelector(".bagsItem").style.display = "none"
        document.querySelector(".fishing").style.display = "flex"
        document.querySelector(".rod").style.display = "flex"
        document.querySelector(".baitSelect").style.display = "flex"
        
        document.querySelectorAll(".itemFish").forEach(el => el.remove());
        document.querySelectorAll(".bagStockFish").forEach(el => el.remove());
        document.querySelectorAll(".itemTrash").forEach(el => el.remove());
        document.querySelectorAll(".bagStockTrash").forEach(el => el.remove());
        
        setTimeout(function(){
            document.querySelector(".fishing").style.opacity = "1"
            document.querySelector(".rod").style.opacity = "1"
            document.querySelector(".baitSelect").style.opacity = "1"

        },50)
    },500)
}

let rodIndex = 0

function changeBag(){
    if(rodIndex == 1){
        document.querySelector(".bagsSelect > P").innerHTML = "PANCINGAN"
        document.querySelector(".bagsContent").style.opacity = "0"
        document.querySelector(".bagsRod").style.display = "flex"
        setTimeout(function(){
        document.querySelector(".bagsContent").style.display = "none"
        document.querySelector(".bagsRod").style.opacity = "1"
        setTimeout(function(){

        },50)
    },500)
        let indexRod = 1
        for(let i in rod){
            
            if(rod[i]["unlockRod"] == true){
                document.querySelector(`.rod${indexRod} > img`).src = rod[i]["imgRod"]
                document.querySelector(`.rod${indexRod}`).style.pointerEvents = "auto"
            }
            else{
                document.querySelector(`.rod${indexRod}`).style.pointerEvents = "none"
                document.querySelector(`.rod${indexRod} > img`).src = `Locked${rod[i]["imgRod"]}`
            }
            indexRod += 1
            rodAll.push(i)
        }

        

    }
    else if(rodIndex == 0){
        
        document.querySelector(".bagsSelect > P").innerHTML = "TANGKAPAN"
        document.querySelector(".bagsRod").style.opacity = "0"
        setTimeout(function(){
            document.querySelector(".bagsContent").style.display = "block"
            document.querySelector(".bagsRod").style.display = "none"
        setTimeout(function(){
            document.querySelector(".bagsContent").style.opacity = "1"
        },50)
    },500)
    }
}

function backBag(){
    document.querySelector(".bagsItem").style.opacity = 0
    document.querySelector(".bagsDisplay").style.backgroundImage = "url('Bag/bagsDisplay.png')"
    let bagContentLong = document.querySelector(".bagsContent").children.length
    let bagDivLong = document.querySelector(".contentItem").children.length
    let bagLong = bagDivLong * bagContentLong
    for(let i = 0; i < bagLong; i++){
        document.querySelector(`.bag${i+1}`).style.mixBlendMode = "normal"
    }
    document.querySelector(".bagsSelect").style.mixBlendMode = "normal"
    document.querySelector(".bagsLeftImg").style.mixBlendMode = "normal"
    document.querySelector(".bagsRightImg").style.mixBlendMode = "normal"

    setTimeout(function(){
        document.querySelector(".bagsItem").style.display = "none"

    setTimeout(function(){
        
    },50)
},500)
}

function sellFishOne(){
    let itemDisplay = bagAll[bagIndex-1]
    if(itemDisplay in fishs){
        if(fishs[itemDisplay]["fishStock"] > 0){
            fishs[itemDisplay]["fishStock"] -= 1;
            coin += fishs[itemDisplay]["fishPrice"]
            document.querySelector(".priceItemAll").innerHTML = fishs[itemDisplay]["fishPrice"] * fishs[itemDisplay]["fishStock"]
            
        }
        document.querySelector(".nameStock").innerHTML = fishs[itemDisplay]["fishStock"]
        document.querySelector(`.bag${bagIndex} > p`).innerHTML = fishs[itemDisplay]["fishStock"]
        if(fishs[itemDisplay]["fishStock"] == 0){
            document.querySelector(".priceItemOne").innerHTML = 0
            document.querySelector(".priceItemAll").innerHTML = 0
    }
        }

    else if(itemDisplay in trash){
        if(trash[itemDisplay]["trashStock"] > 0){
            trash[itemDisplay]["trashStock"] -= 1;
            coin += 1
            document.querySelector(".priceItemAll").innerHTML = trash[itemDisplay]["trashStock"]
        }
        document.querySelector(".nameStock").innerHTML = trash[itemDisplay]["trashStock"]
        document.querySelector(`.bag${bagIndex} > p`).innerHTML = trash[itemDisplay]["trashStock"]

        if(trash[itemDisplay]["trashStock"] == 0){
            document.querySelector(".priceItemOne").innerHTML = 0
            document.querySelector(".priceItemAll").innerHTML = 0

    
}
}openItem(bagIndex)
}

function sellFishAll(){
    let itemDisplay = bagAll[bagIndex-1]
    if(itemDisplay in fishs){
        if(fishs[itemDisplay]["fishStock"] > 0){
            coin += (fishs[itemDisplay]["fishPrice"]) * fishs[itemDisplay]["fishStock"];
            fishs[itemDisplay]["fishStock"] = 0;
        }
        document.querySelector(".nameStock").innerHTML = 0
        document.querySelector(".priceItemOne").innerHTML = 0
        document.querySelector(".priceItemAll").innerHTML = 0
        document.querySelector(`.bag${bagIndex} > p`).innerHTML = fishs[itemDisplay]["fishStock"]
    }
    else if(itemDisplay in trash){
        if(trash[itemDisplay]["trashStock"] > 0){
            coin += trash[itemDisplay]["trashStock"];
            trash[itemDisplay]["trashStock"] = 0;
        }
        document.querySelector(".nameStock").innerHTML = 0
        document.querySelector(".priceItemOne").innerHTML = 0
        document.querySelector(".priceItemAll").innerHTML = 0
        document.querySelector(`.bag${bagIndex} > p`).innerHTML = trash[itemDisplay]["trashStock"]
    openItem(bagIndex)
    }
}

let rodAll = []
for(let i in rod){
    rodAll.push(i)
}


function checkRod(classRod){
    let rodIndexs = classRod
    rodIndexs = rodIndexs.replace(/\D/g,'')
    rodEquip = rodAll[rodIndexs-1]
    document.querySelector(".rodPlay").src = rod[rodEquip]["imgPlayRod"]
    closeBag()
}


function bagLeft(){
    rodIndex -= 1
    if(rodIndex < 0){
        rodIndex = 1
    }
    changeBag()

}

function bagRight(){
    rodIndex += 1
    if(rodIndex > 1){
        rodIndex = 0
    }
    changeBag()
}

/////////////////////////////////
////                         ////
////          ALBUM          ////
////                         ////
/////////////////////////////////


let fishAlbum = []

for(let i in fishs){
    fishAlbum.push(i)
}

let albumDisplayIndex = 0
function openAlbum(){
    document.querySelector(".main").style.pointerEvents = "none"
    document.querySelector(".fishing").style.opacity = "0"
    document.querySelector(".rod").style.opacity = "0"
    document.querySelector(".baitSelect").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".fishing").style.display = "none"
        document.querySelector(".rod").style.display = "none"
        document.querySelector(".baitSelect").style.display = "none"
        document.querySelector(".albums").style.display = "flex"
        
        setTimeout(function(){
            document.querySelector(".albums").style.opacity = "1"
            
        },100)
    },500)


    let indexFishAlbum = 1
    for(let i = 0+albumDisplayIndex; i < 4+albumDisplayIndex; i++){

        if(fishs[fishAlbum[i]]["fishUnlock"] == true){
            document.querySelector(`.fish${indexFishAlbum}`).style.pointerEvents = "auto"
            document.querySelector(`.fish${indexFishAlbum} > img`).src = fishs[fishAlbum[i]]["fishImg"]
            document.querySelector(`.fish${indexFishAlbum} > p`).innerHTML = (fishs[fishAlbum[i]]["fishName"]).toUpperCase()
        }
        else{
            document.querySelector(`.fish${indexFishAlbum}`).style.pointerEvents = "none"
            document.querySelector(`.fish${indexFishAlbum} > img`).src = `Locked${fishs[fishAlbum[i]]["fishImg"]}`
            document.querySelector(`.fish${indexFishAlbum} > p`).innerHTML = "?"
        }

        indexFishAlbum += 1

    }

}

function checkAlbumSelect(){
    if (albumDisplayIndex == 0){
        document.querySelector(".albumSelect > img").src = "Album/select1.png"
    }
    else if (albumDisplayIndex == 4){
        document.querySelector(".albumSelect > img").src = "Album/select2.png"
}
    else if (albumDisplayIndex == 8){
        document.querySelector(".albumSelect > img").src = "Album/select3.png"
    }
    openAlbum()
}

function albumLeft(){
    albumDisplayIndex -= 4
    if(albumDisplayIndex < 0){
        albumDisplayIndex = 8
    }
    checkAlbumSelect()
}

function albumRight(){
    albumDisplayIndex += 4
    if(albumDisplayIndex > 8){
        albumDisplayIndex = 0
    }
    checkAlbumSelect()
}

let albumIndex = 0
function checkAlbumIndex(classAlbum){
    albumIndex = classAlbum
    albumIndex = albumIndex.replace(/\D/g,'')
    albumIndex = (albumDisplayIndex + Number(albumIndex))-1
    openAlbumFish(albumIndex)


}

function openAlbumFish(albumIndex){
    document.querySelector(".albumContent").style.opacity = "0"
    document.querySelector(".albumNavigation").style.opacity = "0"
    document.querySelector(".albumSelect").style.opacity = "0"
    document.querySelector(".albumClose").style.opacity = "0"
    document.querySelector(".albumFish").style.display = "flex"
    setTimeout(function(){
        document.querySelector(".albumContent").style.display = "none"
        document.querySelector(".albumNavigation").style.display = "none"
        document.querySelector(".albumSelect").style.display = "none"
        document.querySelector(".albumClose").style.display = "none"
        document.querySelector(".albumFish").style.opacity = "1"
        
        setTimeout(function(){
            document.querySelector(".albums").style.opacity = "1"
            
        },50)
    },500)
    let fishAlbumSelected = fishAlbum[albumIndex]
    let bait1 = fishs[fishAlbumSelected]["fishBait"][0]
    let bait2 = fishs[fishAlbumSelected]["fishBait"][1]
    let map1 = fishs[fishAlbumSelected]["fishHabitat"][0]
    let map2 = fishs[fishAlbumSelected]["fishHabitat"][1]
    document.querySelector(".infoPriceText").innerHTML = fishs[fishAlbumSelected]["fishPrice"]
    document.querySelector(".infoFishText").innerHTML = (fishs[fishAlbumSelected]["fishName"]).toUpperCase()
    document.querySelector(".infoFishImg").src = fishs[fishAlbumSelected]["fishImg"]
    document.querySelector(".fishBaitAlbum1").src = bait[bait1]["baitImage"]
    document.querySelector(".fishBaitAlbum2").src = bait[bait2]["baitImage"]
    document.querySelector(".infoHabitatImg1").src = maps[map1]["mapImgDisplay"]
    document.querySelector(".infoHabitatImg2").src = maps[map2]["mapImgDisplay"]
    document.querySelector(".infoHabitatImgText1").innerHTML = maps[map1]["mapName"]
    document.querySelector(".infoHabitatImgText2").innerHTML = maps[map2]["mapName"]
    document.querySelector(".textDescription").innerHTML = fishs[fishAlbumSelected]["fishDescription"]
}

function closeAlbumInfo(){
    document.querySelector(".albumFish").style.opacity = "0"

    

    setTimeout(function(){
        document.querySelector(".albumContent").style.display = "block"
        document.querySelector(".albumNavigation").style.display = "flex"
        document.querySelector(".albumSelect").style.display = "flex"
        document.querySelector(".albumClose").style.display = "flex"

        document.querySelector(".albumFish").style.display = "none"
        
        setTimeout(function(){
            document.querySelector(".albums").style.opacity = "1"
            document.querySelector(".albumContent").style.opacity = "1"
            document.querySelector(".albumNavigation").style.opacity = "1"
            document.querySelector(".albumSelect").style.opacity = "1"
            document.querySelector(".albumClose").style.opacity = "1"
            
        },50)
    },500)
}

function closeAlbum(){
    albumDisplayIndex = 0
    document.querySelector(".main").style.pointerEvents = "auto"
    document.querySelector(".albums").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".albums").style.display = "none"
        document.querySelector(".fishing").style.display = "flex"
        document.querySelector(".rod").style.display = "flex"
        document.querySelector(".baitSelect").style.display = "flex"
        
        setTimeout(function(){
            document.querySelector(".fishing").style.opacity = "1"
            document.querySelector(".rod").style.opacity = "1"
            document.querySelector(".baitSelect").style.opacity = "1"

        },50)
    },500)
}

/////////////////////////////////
////                         ////
////           MAP           ////
////                         ////
/////////////////////////////////

let mapsAll = []
for(let i in maps){
    mapsAll.push(i)
}
let mapsIndex = 0

function openMap(){
    document.querySelector(".coin").innerHTML = coin
    mapsIndex = mapsAll.indexOf(mapNow)
    document.querySelector(".mapsName > p").innerHTML = maps[mapNow]["mapName"]
    document.querySelector(".mapsSelected").style.backgroundImage = `url(${maps[mapsAll[mapsIndex]]["mapImg"]})`
    document.querySelector(".main").style.pointerEvents = "none"
    document.querySelector(".fishing").style.opacity = "0"
    document.querySelector(".rod").style.opacity = "0"
    document.querySelector(".baitSelect").style.opacity = "0"
    
    
    setTimeout(function(){
        document.querySelector(".fishing").style.display = "none"
        document.querySelector(".rod").style.display = "none"
        document.querySelector(".baitSelect").style.display = "none"
        document.querySelector(".maps").style.display = "flex"
        
        setTimeout(function(){
            document.querySelector(".maps").style.opacity = "1"
            
        },50)
    },500)
}


function changeMap(){
    let mapSelected = mapsAll[mapsIndex]
    document.querySelector(".mapsSelected").style.backgroundImage = `url(${maps[mapSelected]["mapImg"]})`
    document.querySelector(".mapsName > p").innerHTML = maps[mapSelected]["mapName"]
    if(maps[mapSelected]["mapUnlock"] == false){
        document.querySelector(".mapsSelected").style.filter = "grayscale(100%)"
        document.querySelector(".mapsLock").style.display = "block"
        document.querySelector(".mapsSelected").style.pointerEvents = "none"
        document.querySelector(".mapsPrice > p").innerHTML = maps[mapSelected]["mapPrice"]
    }
    else{
        document.querySelector(".mapsSelected").style.filter = "none"
        document.querySelector(".mapsLock").style.display = "none"
        document.querySelector(".mapsSelected").style.pointerEvents = "auto"
    }
}

function buyMap(){
    let mapSelected = mapsAll[mapsIndex]
    if(coin >= maps[mapSelected]["mapPrice"]){
        maps[mapSelected]["mapUnlock"] = true
        coin -= maps[mapSelected]["mapPrice"]
        document.querySelector(".coin").innerHTML = coin
        changeMap()
        
    }

}

function closeMap(){
    document.querySelector(".main").style.pointerEvents = "auto"
    document.querySelector(".maps").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".maps").style.display = "none"
        document.querySelector(".fishing").style.display = "flex"
        document.querySelector(".rod").style.display = "flex"
        document.querySelector(".baitSelect").style.display = "flex"
        
        setTimeout(function(){
            document.querySelector(".fishing").style.opacity = "1"
            document.querySelector(".rod").style.opacity = "1"
            document.querySelector(".baitSelect").style.opacity = "1"

        },50)
    },500)
}

function selectMap(){
    let mapSelected = mapsAll[mapsIndex]
    mapNow = mapSelected
    document.querySelector(".mapDisplay").src = maps[mapSelected]["mapImg"]
    document.querySelector(".mapPicture").src = maps[mapSelected]["mapImgDisplay"]
    document.querySelector(".displayMap > p").innerHTML = maps[mapSelected]["mapName"]
    closeMap()
}


function mapsLeft(){
    mapsIndex -= 1
    if(mapsIndex < 0){
        mapsIndex = 5
    }
    changeMap()
}

function mapsRight(){
    mapsIndex += 1
    if(mapsIndex > 5){
        mapsIndex = 0
    }
    changeMap()
}

/////////////////////////////////
////                         ////
////           SHOP          ////
////                         ////
/////////////////////////////////

function openShop(){
    document.querySelector(".coins").innerHTML = coin
    document.querySelector(".main").style.pointerEvents = "none"
    document.querySelector(".fishing").style.opacity = "0"
    document.querySelector(".rod").style.opacity = "0"
    document.querySelector(".baitSelect").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".fishing").style.display = "none"
        document.querySelector(".rod").style.display = "none"
        document.querySelector(".baitSelect").style.display = "none"
        document.querySelector(".shops").style.display = "flex"
        
        setTimeout(function(){
            document.querySelector(".shops").style.opacity = "1"
            
        },50)
    },500)
}

function shopRod(){
    document.querySelector(".shopsItemBait").style.opacity = 0
    setTimeout(function(){
        document.querySelector(".shopsItemRod").style.display = "block"
        document.querySelector(".shopsItemBait").style.display = "none"
        setTimeout(function(){
            document.querySelector(".shopsItemRod").style.opacity = 1
            
        },50)
    },500)
}

function shopBait(){
    
    document.querySelector(".shopsItemRod").style.opacity = 0
    setTimeout(function(){
        document.querySelector(".shopsItemRod").style.display = "none"
        document.querySelector(".shopsItemBait").style.display = "block"
        setTimeout(function(){
            document.querySelector(".shopsItemBait").style.opacity = 1
            
        },50)
    },500)
}

function buyMurah(){
    let priceMurah = rod["murah"]["priceRod"]
    if(coin >= priceMurah){
        document.querySelector(".murah").style.pointerEvents = "none"
        document.querySelector(".murah").style.backgroundImage = "url('Shop/sold.png')"
        document.querySelector(".murah").style.height = "60"
        document.querySelector(".murah").style.top = "10"
        document.querySelector(".murah > p").innerHTML = ""
        rod["murah"]["unlockRod"] = true
        coin -= priceMurah
        document.querySelector(".coins").innerHTML = coin
    }
}

function buySakti(){
    let priceSakti = rod["sakti"]["priceRod"]
    if(coin >= priceSakti){
        document.querySelector(".sakti").style.pointerEvents = "none"
        document.querySelector(".sakti").style.backgroundImage = "url('Shop/sold.png')"
        document.querySelector(".sakti").style.height = "60"
        document.querySelector(".sakti").style.top = "10"
        document.querySelector(".sakti > p").innerHTML = ""
        rod["sakti"]["unlockRod"] = true
        coin -= priceSakti
        document.querySelector(".coins").innerHTML = coin
        
    }
}

function buyMaster(){
    let priceMaster = rod["master"]["priceRod"]
    if(coin >= priceMaster){
        document.querySelector(".master").style.pointerEvents = "none"
        document.querySelector(".master").style.backgroundImage = "url('Shop/sold.png')"
        document.querySelector(".master").style.height = "60"
        document.querySelector(".master").style.top = "10"
        document.querySelector(".master > p").innerHTML = ""
        rod["master"]["unlockRod"] = true
        coin -= priceMaster
        document.querySelector(".coins").innerHTML = coin
        
    }
}

function buyDewa(){
    let priceDewa = rod["dewa"]["priceRod"]
    if(coin >= priceDewa){
        document.querySelector(".dewa").style.pointerEvents = "none"
        document.querySelector(".dewa").style.backgroundImage = "url('Shop/sold.png')"
        document.querySelector(".dewa").style.height = "60"
        document.querySelector(".dewa").style.top = "10"
        document.querySelector(".dewa > p").innerHTML = ""
        rod["dewa"]["unlockRod"] = true
        coin -= priceDewa
        document.querySelector(".coins").innerHTML = coin
        
    }
}


let totalWorm = 0
let totalFrog = 0
let totalCricket = 0
let totalMoss = 0
let totalMini = 0
let priceWorm = bait["worm"]["baitPrice"]
let priceFrog = bait["frog"]["baitPrice"]
let priceCricket = bait["cricket"]["baitPrice"]
let priceMoss = bait["moss"]["baitPrice"]
let priceMini = bait["mini"]["baitPrice"]
function minusCountWorm(){
    if(totalWorm != 0){
        totalWorm -=1
    }
    document.querySelector(".countWorm").innerHTML  = totalWorm
    document.querySelector(".priceWorm").innerHTML  = totalWorm * priceWorm
}

function plusCountWorm(){
    totalWorm +=1
    document.querySelector(".countWorm").innerHTML  = totalWorm
    document.querySelector(".priceWorm").innerHTML  = totalWorm * priceWorm
}

function minusCountFrog(){
    if(totalFrog != 0){
        totalFrog -=1
    }
    document.querySelector(".countFrog").innerHTML  = totalFrog
    document.querySelector(".priceFrog").innerHTML  = totalFrog * priceFrog
}

function plusCountFrog(){
    totalFrog +=1
    document.querySelector(".countFrog").innerHTML  = totalFrog
    document.querySelector(".priceFrog").innerHTML  = totalFrog * priceFrog
}

function minusCountCricket(){
    if(totalCricket != 0){
        totalCricket -=1
    }
    document.querySelector(".countCricket").innerHTML  = totalCricket
    document.querySelector(".priceCricket").innerHTML  = totalCricket * priceCricket
}

function plusCountCricket(){
    totalCricket +=1
    document.querySelector(".countCricket").innerHTML  = totalCricket
    document.querySelector(".priceCricket").innerHTML  = totalCricket * priceCricket
}

function minusCountMoss(){
    if(totalMoss != 0){
        totalMoss -=1
    }
    document.querySelector(".countMoss").innerHTML  = totalMoss
    document.querySelector(".priceMoss").innerHTML  = totalMoss * priceMoss
}

function plusCountMoss(){
    totalMoss +=1
    document.querySelector(".countMoss").innerHTML  = totalMoss
    document.querySelector(".priceMoss").innerHTML  = totalMoss * priceMoss
}

function minusCountMini(){
    if(totalMini != 0){
        totalMini -=1
    }
    document.querySelector(".countMini").innerHTML  = totalMini
    document.querySelector(".priceMini").innerHTML  = totalMini * priceMini
}

function plusCountMini(){
    totalMini +=1
    document.querySelector(".countMini").innerHTML  = totalMini
    document.querySelector(".priceMini").innerHTML  = totalMini * priceMini
}

function buyWorm(){
    if(coin >= (totalWorm * priceWorm)){
        bait["worm"]["baitStock"] += totalWorm
        coin -= totalWorm * priceWorm
        totalWorm = 0
        document.querySelector(".countWorm").innerHTML  = 0
        document.querySelector(".priceWorm").innerHTML  = 0
        document.querySelector(".baitStock").innerHTML = bait["worm"]["baitStock"]
        document.querySelector(".coins").innerHTML = coin
        checkBait(bait["worm"]["baitStock"])
        
    }
}

function buyFrog(){
    
    if(coin >= (totalFrog * priceFrog)){
        bait["frog"]["baitStock"] += totalFrog
        coin -= totalFrog * priceFrog
        totalFrog = 0
        document.querySelector(".countFrog").innerHTML  = 0
        document.querySelector(".priceFrog").innerHTML  = 0
        document.querySelector(".baitStock").innerHTML = bait["frog"]["baitStock"]
        document.querySelector(".coins").innerHTML = coin
        checkBait(bait["frog"]["baitStock"])
    }
}

function buyCricket(){
    if(coin >= (totalCricket * priceCricket)){
        bait["cricket"]["baitStock"] += totalCricket
        coin -= totalCricket * priceCricket
        totalCricket = 0
        document.querySelector(".countCricket").innerHTML  = 0
        document.querySelector(".priceCricket").innerHTML  = 0
        document.querySelector(".baitStock").innerHTML = bait["cricket"]["baitStock"]
        document.querySelector(".coins").innerHTML = coin
        checkBait(bait["cricket"]["baitStock"])
    }
}

function buyMoss(){
    if(coin >= (totalMoss * priceMoss)){
        bait["moss"]["baitStock"] += totalMoss
        coin -= totalMoss * priceMoss
        totalMoss = 0
        document.querySelector(".countMoss").innerHTML  = 0
        document.querySelector(".priceMoss").innerHTML  = 0
        document.querySelector(".baitStock").innerHTML = bait["moss"]["baitStock"]
        document.querySelector(".coins").innerHTML = coin
        checkBait(bait["moss"]["baitStock"])
    }
}

function buyMini(){
    if(coin >= (totalMini * priceMini)){
        bait["mini"]["baitStock"] += totalMini
        coin -= totalMini * priceMini
        totalMini = 0
        document.querySelector(".countMini").innerHTML  = 0
        document.querySelector(".priceMini").innerHTML  = 0
        document.querySelector(".baitStock").innerHTML = bait["mini"]["baitStock"]
        document.querySelector(".coins").innerHTML = coin
        checkBait(bait["mini"]["baitStock"])
    }
}

function closeShop(){
    document.querySelector(".main").style.pointerEvents = "auto"
    document.querySelector(".shops").style.opacity = "0"
    
    setTimeout(function(){
        document.querySelector(".shops").style.display = "none"
        document.querySelector(".fishing").style.display = "flex"
        document.querySelector(".rod").style.display = "flex"
        document.querySelector(".baitSelect").style.display = "flex"
        
        setTimeout(function(){
            document.querySelector(".fishing").style.opacity = "1"
            document.querySelector(".rod").style.opacity = "1"
            document.querySelector(".baitSelect").style.opacity = "1"

        },50)
    },500)
}

function openQuestAll(){
    
}
















function start(){
    document.querySelector(".backsoundMap").play()
    
}








/////////////////////////////////
////                         ////
////         FUNCTION        ////
////                         ////
/////////////////////////////////
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

function randomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);}




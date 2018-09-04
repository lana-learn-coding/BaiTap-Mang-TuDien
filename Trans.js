let ifnew = 1;
let wordindex = 0;
let bigdata = [["apple", "hi"], ["quả táo", "chào"], ["pomme", "salut"], ["apfel", "hallo"]];
let inputword = "";


//scan big data
function scan() {
    inputword = document.getElementById("input").value;
    for (let li = 0; li < bigdata.length; li++) {
        for (let wi = 0; wi < bigdata[li].length; wi++) {
            if (inputword !== bigdata[li][wi]) {
                ifnew = 1;
            } else {
                ifnew = 0;
                wordindex = wi;
                break;
            }
        }
        if (ifnew === 0) {
            break;
        }
    }
}

//refresh
function refresh() {
    ifnew = 1;
    wordindex = 0;
    inputword = "";
}


// Tudien.html
function Trans() {
    let languageindex = document.getElementById("selection").selectedIndex;//về language index: 0 là tiếng anh, 1 là tiếng việt, 2 là pháp, 3 là đức.
    scan();
    if (ifnew === 0) {
        document.getElementById("out").innerHTML = bigdata[languageindex][wordindex];
    } else {
        document.getElementById("out").innerText = "chưa có dữ liệu";
    }
    refresh();
}

//add.html
function superscan() {
    let worldneedtocheck;
    for (let input = 0; input < 4; input++) {
        input = input + "";
        worldneedtocheck = document.getElementById(input).value;


        for (let li = 0; li < bigdata.length; li++) {
            for (let wi = 0; wi < bigdata[li].length; wi++) {
                if (worldneedtocheck !== bigdata[li][wi]) {
                    ifnew = 1;
                } else {
                    ifnew = 0;
                    wordindex = wi;
                    break;
                }
            }
            if (ifnew === 0) {
                break;
            }
        }


        if (ifnew === 1){

        } else {

        }
    }
}




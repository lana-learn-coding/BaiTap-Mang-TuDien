let ifnew;
let wordindex;
let bigdata = [["apple"], ["quả táo"], ["pomme"], ["apfel"]];
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


// Tudien.html
function Trans() {
    let languageindex = document.getElementById("selection").selectedIndex;//về language index: 0 là tiếng anh, 1 là tiếng việt, 2 là pháp, 3 là đức.
    scan();
    if (ifnew === 0) {
        document.getElementById("out").innerHTML = bigdata[languageindex][wordindex];
    } else {
        document.getElementById("out").innerText = "chưa có dữ liệu";
    }
}


//Input.html
let ifcheck = 0;

//nút check
function check() {
    ifcheck = 1;
    scan();
    if (ifnew === 0) {
        let prinout = "";
        for (let li = 0; li < bigdata.length; li++) {
            prinout = prinout + li + " " + bigdata[li][wordindex] + "<br>";
        }
        document.getElementById("checkoutput").innerHTML = prinout;
    } else {
        wordindex = wordindex + 1;
        document.getElementById("checkoutput").innerText = "Đây là 1 từ mới";
    }
}

//nút Submit
function submitdata() {
    if (ifcheck === 0) {
        alert("chưa check kìa");
    }
    else {
        if (ifnew === 1) {
            for (let i = 0; i < bigdata.length; i++) {
                i = i + "";console.log(i);
                if (document.getElementById(i).value === "") {
                    bigdata.push("chưa có dữ liệu");
                }
                else {
                    bigdata.push(document.getElementById(i).value);
                }
                i = parseInt(i);
            }
        }
    }
}


//nút xóa tất cả
function removeall() {
    ifnew = 1;
    ifcheck = 0;
    wordindex = 0;
    inputword = "";
    bigdata = [["apple"], ["quả táo"], ["pomme"], ["apfel"]];
}
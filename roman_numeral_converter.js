function convertToRoman() {
    var num = document.getElementById("input").value;
    if (isNaN(num)) {
        var answer = "Try again and this time, input a valid number!"
        document.getElementById('output').innerHTML = answer;
    } else {
        var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman_num = "",
        i = 3;
        while (i--)
            roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
        var answer2 = Array(+digits.join("") + 1).join("M") + roman_num;
        document.getElementById('output').innerHTML = "Roman number: " + answer2;
    }
}


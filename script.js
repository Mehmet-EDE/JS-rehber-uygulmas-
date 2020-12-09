var tbl = document.getElementById("mytable")


function kaydet(e) {
    var btn = document.createElement("button");
    btn.setAttribute("onclick", "düzenle(this)");
    btn.innerHTML = "Düzenle"
    ad = document.getElementById("ad").value;
    soyad = document.getElementById("soyad").value;
    telefon = document.getElementById("telefon").value;
    var table_len = (tbl.rows.length) - 1;
    var row = tbl.insertRow(table_len).outerHTML = "<tr id='row" +
        table_len + "'><td id='name_row" +
        table_len + "'>" +
        ad + "</td><td id='surname_row" +
        table_len + "'>" +
        soyad + "</td><td id='phone_row" +
        table_len + "'>" +
        telefon + "</td><td><input type='button' id='editbtn" +
        table_len + "' value='Düzenle' class='edit' onclick='düzenle(" +
        table_len + ")'> <input type='button' id='savebtn" +
        table_len + "' value='Save' class='save' onclick='ekle(" +
        table_len + ")'> <input type='button' value='Sil' onclick='delete_row(" +
        table_len + ")'></td></tr>";

}

function düzenle(e) {
    document.getElementById("editbtn" + e).style.display = "none";
    document.getElementById("savebtn" + e).style.display = "block";
    var ad_ = document.getElementById("namerow" + e);
    var soyad_ = document.getElementById("surnamerow" + e);
    var phone_ = document.getElementById("phonerow" + e);
    var adgir = ad.innerHTML;
    var soyadgir = ad.innerHTML;
    var telefongir = ad.innerHTML;
    ad_.innerHTML = "<input type='text' id='ad'value='" + adgir + "'>";
    soyad_.innerHTML = "<input type='text' id='ad'value='" + soyadgir + "'>";
    telefon_.innerHTML = "<input type='text' id='ad'value='" + telefongir + "'>";

}

function sil(e) {
    document.getElementById()
}
function checkgoods() {
    const goods = document.getElementById("g1").value

    if (goods === 'ring' || goods === 'Ring') {
        alert("Ring is available")
        document.getElementById("result").innerHTML = ("Ring is available")
    }
    else if (goods === `Watch` || goods === `watch`) {
        alert("Watch is available")
        document.getElementById("result").innerHTML = ("Watch is available")
    }

        else if  (goods === `Tshirts` || goods === `tshirts`) {
            alert("T-shirts is available")
            document.getElementById("result").innerHTML = ("T-hirts is available")
    }
    else {
        document.getElementById("result").innerHTML = ("Product is not available")
    }

}
function syncValue(id, value) {
    document.getElementById(id).value = value;
    updateValues();
}

function updateValues() {
    const contrastTotal = parseFloat(document.getElementById('contrastTotal').value);
    const injectionRate = parseFloat(document.getElementById('injectionRate').value);
    const scanTime = parseFloat(document.getElementById('scanTime').value);

    const enhancementPercent = 60; // 顯影百分比固定為60%
    const ptd1 = (contrastTotal / injectionRate - scanTime * (enhancementPercent / 100)).toFixed(2);
    const ptd2 = (parseFloat(ptd1) + scanTime + 4).toFixed(2);
    const ptd3 = (parseFloat(ptd2) + scanTime + 4).toFixed(2);

    document.getElementById('ptd1').textContent = ptd1;
    document.getElementById('ptd2').textContent = ptd2;
    document.getElementById('ptd3').textContent = ptd3;
}

// 初始更新
updateValues();

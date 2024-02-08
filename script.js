function syncValue(id, value) {
    document.getElementById(id).value = value;
    updateValues();
}

function updateValues() {
    const contrastTotal = parseFloat(document.getElementById('contrastTotal').value);
    const injectionRate = parseFloat(document.getElementById('injectionRate').value);
    const scanTime = parseFloat(document.getElementById('scanTime').value);
    const enhancementPercent = parseFloat(document.getElementById('enhancementPercent').value); // 更新
 
    document.getElementById('enhancementPercentDisplay').textContent = enhancementPercent + '%';
    const ptd1 = ((contrastTotal / injectionRate) - scanTime ）* (enhancementPercent / 100)).toFixed(1);
    const ptd2 = (parseFloat(ptd1) + scanTime + 4).toFixed(1);
    const ptd3 = (parseFloat(ptd2) + scanTime + 4).toFixed(1);

    document.getElementById('ptd1').textContent = ptd1;
    document.getElementById('ptd2').textContent = ptd2;
    document.getElementById('ptd3').textContent = ptd3;
}

function resetDefaults() {
    document.getElementById('contrastTotal').value = 60;
    document.getElementById('injectionRate').value = 4.0;
    document.getElementById('scanTime').value = 4.0;
    document.getElementById('enhancementPercent').value = 60; // 新增

    // 更新滑塊位置
    document.getElementById('contrastTotalSlider').value = 60;
    document.getElementById('injectionRateSlider').value = 4.0;
    document.getElementById('scanTimeSlider').value = 4.0;
    document.getElementById('enhancementPercentSlider').value = 60; // 新增

    updateValues();
}

// 初始更新
updateValues();

// 固定的Post Threshold Ratio為60%
const ENHANCEMENT_PERCENT = 60;

function adjustValue(id, delta) {
    const input = document.getElementById(id);
    let currentValue = parseFloat(input.value) || 0;
    let newValue = currentValue + delta;
    
    // 設定範圍限制
    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || Infinity;
    
    // 確保在範圍內
    newValue = Math.max(min, Math.min(max, newValue));
    
    // 根據不同欄位設定小數位數
    if (id === 'contrastTotal') {
        newValue = Math.round(newValue);
    } else {
        newValue = Math.round(newValue * 10) / 10; // 保留一位小數
    }
    
    input.value = newValue;
    updateValues();
}

function updateValues() {
    const contrastTotal = parseFloat(document.getElementById('contrastTotal').value);
    const injectionRate = parseFloat(document.getElementById('injectionRate').value);
    const scanTime = parseFloat(document.getElementById('scanTime').value);
    
    // 使用固定的60%顯影百分比
    const ptd1 = (((contrastTotal / injectionRate) - scanTime) * (ENHANCEMENT_PERCENT / 100)).toFixed(1);
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
    updateValues();
}

// 初始更新
updateValues();

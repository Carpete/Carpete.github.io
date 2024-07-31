function toggleDiv(targetId) {
    const target1 = document.getElementById('Target1');
    const target2 = document.getElementById('Target2');

    if (targetId === 1) {
        if (target1.style.display === 'none' || target1.style.display === '') {
            target1.style.display = 'block';
            target2.style.display = 'none';
        } else {
            target1.style.display = 'none';
        }
    } else if (targetId === 2) {
        if (target2.style.display === 'none' || target2.style.display === '') {
            target2.style.display = 'block';
            target1.style.display = 'none';
        } else {
            target2.style.display = 'none';
        }
    }
}

document.getElementById('Target1').style.display = 'none';
document.getElementById('Target2').style.display = 'none';
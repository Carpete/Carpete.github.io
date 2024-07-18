const targetE1 = document.querySelector('.target');

const loadChoice = number => {
    fetch(`./choice-${number}.html`)
        .then(res => {
            if(res.ok) {
                return res.text()
            }
        })
        .then(htmlChoice => {
            targetE1.innerHTML = htmlChoice;
        });
};

const unloadChoice = () => {
    targetE1.innerHTML = '';
};

const toggleChoice = number => {
    if(targetE1.innerHTML == htmlChoice)
        then(targetE1.innerHTML = '');
};
const mainBranchCheckbox = document.getElementById('mainBranch');
const otherBranchesCheckbox = document.getElementById('otherBranches');
const mainBranchElement = document.querySelector('.mainBranch');
const otherBranchElement = document.querySelectorAll('.branch:not(.mainBranch)');

mainBranchCheckbox.addEventListener('change', function() {
    if (this.checked) {
    mainBranchElement.style.color = 'rgb(151, 11, 11)';
    mainBranchElement.style.backgroundColor = 'darkgray';
} else {
    mainBranchElement.style.color = '';
    mainBranchElement.style.backgroundColor = '';
}
});

otherBranchesCheckbox.addEventListener('change', function() {
    otherBranchElement.forEach(branch => {
        if (this.checked) {
            branch.style.color = 'rgb(151, 11, 11)';
            branch.style.backgroundColor = 'darkgray';
        } else {
            branch.style.color = '';
            branch.style.backgroundColor = '';
        }
    });

});

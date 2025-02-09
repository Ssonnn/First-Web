// JS here
// เลือก hamburger เกิด event โดยการ click โดยมี function เลือก .menu เลือก classlist method toggle โดยให้ show แสดงเมนูออกมา
document.querySelector('.hamburger').addEventListener('click', function () {
   document.querySelector('.menu').classList.toggle('show');
});
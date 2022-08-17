/*===================================
File Name    : notification.js
Description  : Notifications JS.
===================================*/
var listCountries = ['Brazil', 'USA', 'Germany', 'France', 'Italy', 'India', 'Australia', 'China', 'Canada', 'Argentina', 'Saudi Arabia', 'Mexico', 'Indonesia', 'Egypt', 'Venezuela', 'Madagascar', 'Sweden', 'Philippines', 'Finland', 'Italy', 'Ecuador', 'United Kingdom', 'Belarus', 'Greece', 'Cuba', 'Hungary', 'Portugal', 'Austria', 'Iceland', 'Panama', 'Croatia', 'Denmark', 'Netherlands', 'Switzerland', 'Belgium', 'Israel', 'Cyprus'];
var listPlans = ['Basic','Silver','Gold','Conservative','Vip'];
var times = [3120, 44421, 52241, 75101, 8636, 160021, 172221];
var countries = ['eng','us','eng_flage','fn','rus_flage','chn_flage','frn_flage'];
var themeInterval = setInterval('notification()', time());

function time() {
    return   times[parseInt(Math.random()*7)] + 8000;
}
function notification() {
    spop({

        template: '<div class="sale_notification d-flex align-items-center"> <div class="notification_inner">  Someone from <b style="color:#00cae3">' + listCountries[Math.floor(Math.random() * listCountries.length)] + '</b> just ordered for <b style="color:#00cae3">' + listPlans[Math.floor(Math.random() * listPlans.length)] + '</b> plan</div></div>',
        group: 'submit-satus',
		style     : 'nav-fixed',// error or success
        position  : 'bottom-left',
        autoclose: 5000,
        icon: false
    });
    clearInterval(themeInterval);
    themeInterval = setInterval('notification()', time());
}
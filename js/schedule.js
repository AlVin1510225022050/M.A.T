// import Cookies from '/js/js.cookie.mjs';

const cover = document.querySelector('.cover');
const newScheduleBtn = document.querySelector('.new-schedule');
const scheduleForm = document.querySelector('.schedule-form');

scheduleForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(scheduleForm);
    const scheduleData = {
        doctor: formData.get('doctor-email'),
        details: formData.get('details'),
        time: formData.get('time'),
    };
    // await fetch('/dashboard/schedule/new', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'text/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ ...scheduleData, csrfToken: Cookies.get('csrfToken') }),
    // }).then(async (res) => {
    //     console.log(res.status,res.statusText);
    //     if (Math.floor(res.status/100) === 4) {
    //         alert(JSON.parse(await res.text()).message)
    //     }
    // });
    cover.classList.add('hidden');
    scheduleForm.classList.add('hidden');
});

newScheduleBtn.addEventListener('click', (e) => {
    cover.classList.remove('hidden');
    scheduleForm.classList.remove('hidden');
});

cover.addEventListener('click', (e) => {
    e.preventDefault();
    cover.classList.add('hidden');
    scheduleForm.classList.add('hidden');
});

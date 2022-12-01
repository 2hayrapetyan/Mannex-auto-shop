


const user = JSON.parse(localStorage.getItem('user')) ?? []
const userInfo = document.querySelector('.my_info_main_div2_div')
userInfo.innerHTML = `<p class="mimd2_2p">Вариант регистрации<br>ID пользователя<br>
E-mail<br><br>Фамилия<br>Имя<br>Отчество<br><br>Группы пользователя</p>
<p class="mimd2_2p">Физическое лицо<br>${user.id}<br>${user.email}<br><br>
${user.lastName}<br>${user.firstName}<br>${user.midleName}<br><br>Розница</p>`


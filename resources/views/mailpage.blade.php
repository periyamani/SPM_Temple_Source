<!DOCTYPE html>
<html lang="en">
<head>
   
    <title>Document</title>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* font-family: 'Poppins', sans-serif;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEC;
  min-height: 100vh; */
}
img {
  max-width: 100%;
  display: block;
}
ul {
  list-style: none;
}

/* Utilities */
.card::after,
.card img {
  border-radius: 50%;
}
body,
.card,
.stats {
  display: flex;
}

.card {
  padding: 2.5rem 2rem;
  left:29% !important;
  margin:54px 0 0px 325px;
  border-radius: 10px;
  background-color: #FDFEFF;
  max-width: 500px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .15);
  margin: 1rem;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
  color:black;
  
}
.card::before,
.card::after {
  content: '';
  position: absolute;
  z-index: -1;
}
.card::before {
  width: 100%;
  height: 100%;
  border: 1px solid #FFF;
  border-radius: 10px;
  top: -.7rem;
  left: -.7rem;
}
.card::after {
  height: 15rem;
  width: 15rem;
  background-color: #4172f5aa;
  top: -8rem;
  right: -8rem;
  box-shadow: 2rem 6rem 0 -3rem #FFF
}

.card img {
  width: 8rem;
  min-width: 80px;
  box-shadow: 0 0 0 5px #FFF;
}

.infos {
  margin-left: 1.5rem;
}

.name {
  margin-bottom: 1rem;
}
.name h2 {
  font-size: 1.3rem;
}
.name h4 {
  font-size: .8rem;
  color: #333
}

.text {
  font-size: .9rem;
  margin-bottom: 1rem;
}

.stats {
  margin-bottom: 1rem;
}
.stats li {
  min-width: 5rem;
}
.stats li h3 {
  font-size: .99rem;
}
.stats li h4 {
  font-size: .75rem;
}

.links button {
  font-family: 'Poppins', sans-serif;
  min-width: 120px;
  padding: .5rem;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
}
.links .follow,
.links .view:hover {
  background-color: #222;
  color: #FFF;
}
.links .view,
.links .follow:hover{
  background-color: transparent;
  color: #222;
}

@media screen and (max-width: 450px) {
  .card {
    display: block;
  }
  .infos {
    margin-left: 0;
    margin-top: 1.5rem;
  }
  .links button {
    min-width: 100px;
  }
}
.user_color{
    color:#9b9895;
}
.mr-20{
    margin-right:20px;
}
.bg_color{
    /* background:#EEEEEC; */
    font-family: 'Poppins', sans-serif;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEC;
  width:100%;
  min-height: 100vh;
  position: absolute;
}
</style>



</head>
<body>
 <div class='bg_color'>
 <div style="margin:40px 50px;">
<div class="card">
    <div class="infos">
      <div class="name">
        <h2>
        <!-- புது மாரியம்மன் கோவில்  -->
        Puthumariamman kovil
        </h2>
      </div>
      <p class="text">
        I'm a Front End Developer, follow me to be the first 
        who see my new work.
      </p>
      <ul class="stats">
        <li>
          <h3 class="user_color">Name</h3>
        </li>
        <li>
          <h3>srikanth</h3>
        </li>
      </ul>
      <ul class="stats">
        <li>
          <h3 class="user_color">Email</h3>
        </li>
        <li>
          <h3>srikanth240620@gmail.com</h3>
        </li>
      </ul>
      <ul class="stats">
        <li>
          <h3 class="user_color">Role</h3>
        </li>
        <li>
          <h3>Poosari</h3>
        </li>
      </ul>
      <div class="links">
        <button class="follow mr-20">Accept</button>
        <a href="http://127.0.0.1:8000/api/checking" class="view">Reject</button>
        
      </div>
    </div>
    </div>
  </div>
  </div>

</body>

</html>
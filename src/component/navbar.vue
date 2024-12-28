<template>
    <div class="Navbar">
        <a href="/" class="logo-container">
          <el-image src="assets/monstercat-logo.webp" class="logo-img">
        </el-image>
        <h1>TEARDROP</h1>
        </a>
    </div>
</template>
<style scoped>
*{
  font-family: 'teardrop', sans-serif;
  color: rgb(255, 255, 255);
}
.Navbar{
width: 100%;
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #0f0d13;
border-bottom: 1px solid #bcbcbccc;
}
.logo-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}
.logo-img{
width: 40px;
height: 40px;
object-fit: cover;
margin-right: 0.5rem;
}
@media (max-width: 768px){
    .logo-container h1{
        display: none;
    }
}
</style>
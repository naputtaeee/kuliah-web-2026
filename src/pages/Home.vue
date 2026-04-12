<script setup>
function klikProject(nama) {
  alert("Ini project: " + nama)
}
</script>

<template>
  <div class="container">

    <!-- HERO -->
    <section class="hero">
      <img src="/poto.jpg" alt="foto" class="profile" />
      <h1>Nabila Putri Ramadhani</h1>
      <p class="subtitle">Mahasiswa Teknik Informatika UIN Suska Riau</p>
      <p class="desc">
        Memiliki ketertarikan dalam pengembangan teknologi, desain antarmuka, serta pemecahan masalah. Aktif mempelajari berbagai bidang seperti pemrograman, pengolahan data, dan pengembangan aplikasi untuk meningkatkan kemampuan dan pengalaman.
      </p>
    </section>

    <!-- DATA DIRI -->
    <section>
      <h2>📌 Data Diri</h2>
      <ul>
        <li><b>Program Studi:</b> Teknik Informatika</li>
        <li><b>Fakultas:</b> Sains dan Teknologi</li>
        <li><b>Universitas:</b> UIN Suska Riau</li>
        <li><b>TTL:</b> Pekanbaru, 15 Oktober 2005</li>
        <li><b>Email:</b> nabilaputripku1@gmail.com</li>
      </ul>
    </section>

    <!-- KEAHLIAN -->
    <section>
      <h2>💻 Keahlian</h2>
      <ul>
        <li>Java, Python (Dasar)</li>
        <li>VS Code, IntelliJ, NetBeans, Figma</li>
        <li>Frontend Development & UI/UX Design</li>
      </ul>
    </section>

    <!-- PROJECT -->
    <section>
      <h2>🚀 Project</h2>

      <div class="card" @click="klikProject('Prototipe Sistem')">
        <h3>Prototipe Sistem Manajemen Informasi</h3>
        <p>Desain sistem pendidikan menggunakan Figma</p>
      </div>

      <div class="card" @click="klikProject('LogiGrade')">
        <h3>Aplikasi LogiGrade</h3>
        <p>Aplikasi Java Swing untuk pengelolaan nilai</p>
      </div>

      <div class="card" @click="klikProject('Graf')">
        <h3>Aplikasi Pengolahan Graf</h3>
        <p>Implementasi DFS, BFS, MST, Topological Sort</p>
      </div>

      <div class="card" @click="klikProject('Website Profil')">
        <h3>Website Profil Diri</h3>
        <p>Website sederhana HTML & CSS</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact">
      <h2>📞 Contact</h2>
      <p>Email: nabilaputripku1@gmail.com</p>
      <p>Instagram: @nabiilaaputriiii</p>
    </section>

  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 30px;
  font-family: 'Poppins', sans-serif;
  background: #f5f1eb;
}

/* HERO */
.hero {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 18px;
  background: #fffaf5;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.profile {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #b08968;
  margin-bottom: 15px;
  transition: 0.3s;
}

.profile:hover {
  transform: scale(1.05);
}

/* TEXT */
h1 {
  margin: 10px 0;
  color: #5c4433;
  font-size: 28px;
}

.subtitle {
  color: #8b6f47;
  font-weight: 500;
}

.desc {
  color: #7a6a5a;
  margin-top: 10px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* SECTION */
section {
  background: #fffaf5;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  border: 1px solid #eee3d6;
}

h2 {
  margin-bottom: 10px;
  color: #8b6f47;
}

/* LIST */
ul {
  padding-left: 20px;
}

li {
  margin: 6px 0;
  color: #5c4433;
}

/* CARD PROJECT */
.card {
  background: #f3e9dc;
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 12px;
  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px) scale(1.01);
  background: #e6d5c3;
}

/* CONTACT */
.contact {
  text-align: center;
}
</style>
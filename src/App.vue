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
      <p>Mahasiswa Teknik Informatika UIN Suska Riau</p>
      <p class="desc">
        Saya adalah mahasiswa Teknik Informatika yang sedang mempelajari dasar-dasar pemrograman dan pengembangan aplikasi.
      </p>
    </section>

    <!-- DATA DIRI -->
    <section>
      <h2>Data Diri</h2>
      <ul>
        <li>Program Studi: Teknik Informatika</li>
        <li>Fakultas: Sains dan Teknologi</li>
        <li>Universitas: UIN Suska Riau</li>
        <li>TTL: Pekanbaru, 15 Oktober 2005</li>
        <li>Email: nabilaputripku1@gmail.com</li>
      </ul>
    </section>

    <!-- KEAHLIAN -->
    <section>
      <h2>Keahlian</h2>
      <ul>
        <li>Java, Python (Dasar)</li>
        <li>IntelliJ IDEA, NetBeans, VS Code, Figma</li>
        <li>Software Development & UI/UX Design</li>
      </ul>
    </section>

    <!-- PROJECT -->
    <section>
      <h2>Project</h2>

      <div class="card" @click="klikProject('Prototipe Sistem')">
        <h3>Prototipe Sistem Manajemen Informasi</h3>
        <p>
          Merancang prototipe sistem manajemen informasi untuk lembaga pendidikan menggunakan Figma.
        </p>
      </div>

      <div class="card" @click="klikProject('LogiGrade')">
        <h3>Aplikasi LogiGrade</h3>
        <p>
          Aplikasi desktop sederhana menggunakan Java Swing untuk membantu pengelolaan nilai mahasiswa.
        </p>
      </div>

      <div class="card" @click="klikProject('Graf')">
        <h3>Aplikasi Pengolahan Graf</h3>
        <p>
          Implementasi DFS, BFS, MST, dan Topological Sort berbasis database.
        </p>
      </div>

      <div class="card" @click="klikProject('Website Profil')">
        <h3>Website Profil Diri</h3>
        <p>
          Website sederhana menggunakan HTML dan CSS.
        </p>
      </div>
    </section>

    <!-- CONTACT -->
    <section>
      <h2>Contact</h2>
      <p>Email: nabilaputripku1@gmail.com</p>
      <p>Instagram: @nabiilaaputriiii</p>
    </section>

  </div>
</template>

<style scoped>
.container {
  max-width: 850px;
  margin: auto;
  padding: 25px;
  font-family: 'Poppins', sans-serif;
  background: #f5f1eb;
}

/* HERO */
.hero {
  text-align: center;
  margin-bottom: 40px;
  padding: 25px;
  border-radius: 16px;
  background: #fffaf5;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.profile {
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #b08968;
  margin-bottom: 15px;
}

h1 {
  margin: 10px 0;
  color: #5c4433;
}

.desc {
  color: #7a6a5a;
}

/* SECTION */
section {
  background: #fffaf5;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
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
  transition: all 0.3s ease;
  background: #f3e9dc;
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px) scale(1.01);
  background: #e6d5c3;
}

/* CONTACT */
section {
  border: 1px solid #eee3d6;
}
</style>
// Fungsi untuk menampilkan menu bakso
function tampilkanMenu() {
    const menu = document.getElementById('menu');
    const menuList = menu.querySelector('ul');
    const menuItems = menuList.querySelectorAll('li');
  
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        const menuItemText = menuItem.textContent;
        alert(`Anda memilih menu ${menuItemText}`);
      });
    });
  }
  
  // Fungsi untuk menampilkan lokasi bakso
  function tampilkanLokasi() {
    const lokasi = document.getElementById('lokasi');
    const iframe = lokasi.querySelector('iframe');
  
    iframe.addEventListener('load', () => {
      console.log('Iframe telah dimuat');
    });
  }
  
  // Fungsi untuk menampilkan kontak bakso
  function tampilkanKontak() {
    const kontak = document.getElementById('kontak');
    const telepon = kontak.querySelector('p:nth-child(1)');
    const email = kontak.querySelector('p:nth-child(2)');
  
    telepon.addEventListener('click', () => {
      alert('Telepon: 08123456789');
    });
  
    email.addEventListener('click', () => {
      alert('Email: bakso.ronggolawe@gmail.com');
    });
  }
  
  // Fungsi untuk menampilkan gambar bakso
  function tampilkanGambar() {
    const gambar = document.querySelectorAll('img');
  
    gambar.forEach((gambarItem) => {
      gambarItem.addEventListener('click', () => {
        const gambarSrc = gambarItem.src;
        alert(`Gambar bakso: ${gambarSrc}`);
      });
    });
  }
  
  // Fungsi untuk menampilkan semua fungsi
  function tampilkanSemua() {
    tampilkanMenu();
    tampilkanLokasi();
    tampilkanKontak();
    tampilkanGambar();
  }
  
  // Jalankan fungsi tampilkanSemua saat halaman dimuat
  document.addEventListener('DOMContentLoaded', tampilkanSemua);
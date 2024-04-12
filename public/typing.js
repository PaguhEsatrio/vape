var i = 0;
var txt = 'Follow Media Sosial Kami Untuk Selalu Update Produk Terbaru Kami';
var speed = 120;
var delayAfterTyping = 5000; // Delay setelah tulisan muncul (dalam milidetik)

function typeWriter() {
  var typingElement = document.getElementById("typing");
  if (i < txt.length) {
    typingElement.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Jika sudah mencapai akhir teks, tambahkan delay sebelum menghapus
    setTimeout(function() {
      // Hapus satu per satu huruf
      var deleteInterval = setInterval(function() {
        var currentText = typingElement.innerHTML;
        if (currentText.length > 0) {
          typingElement.innerHTML = currentText.slice(0, -1);
        } else {
          // Setelah menghapus semua huruf, mulai kembali dari awal
          clearInterval(deleteInterval);
          i = 0;
          setTimeout(typeWriter, speed);
        }
      }, speed);
    }, delayAfterTyping);
  }
}

// Memanggil fungsi untuk pertama kali
typeWriter();

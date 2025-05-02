<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Tangkap data dari form
    $nama = $_POST['nama'] ?? '';
    $email = $_POST['email'] ?? '';
    $no_telepon = $_POST['telepon'] ?? '';
    $jenis_desain = $_POST['jenis'] ?? '';
    $pesan = $_POST['pesan'] ?? '';

    // Validasi awal
    if (empty($nama) || empty($email) || empty($no_telepon) || empty($jenis_desain) || empty($pesan)) {
        echo "⚠️ Harap isi semua field.";
        exit;
    }

    // Query simpan
    $sql = "INSERT INTO kontak (nama, email, no_telepon, jenis_desain, pesan)
            VALUES ('$nama', '$email', '$no_telepon', '$jenis_desain', '$pesan')";

    if (mysqli_query($conn, $sql)) {
        echo "✅ Data berhasil disimpan ke database!";
    } else {
        echo "❌ Gagal menyimpan data: " . mysqli_error($conn);
    }

    mysqli_close($conn);
} else {
    echo "🚫 Metode akses tidak diizinkan.";
}
?>

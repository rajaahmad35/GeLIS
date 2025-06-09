window.landData = [
    { id: 1, nib: "12345", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Budi", luas: "200 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2918517, lng: 110.7510066 },
    { id: 2, nib: "67890", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Ani", luas: "500 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2908517, lng: 110.7520066 },
    { id: 3, nib: "11122", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Cahyo", luas: "300 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2928517, lng: 110.7500066 },
    { id: 4, nib: "22233", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Dina", luas: "600 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2913517, lng: 110.7515066 },
    { id: 5, nib: "33344", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Eko", luas: "150 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2923517, lng: 110.7505066 },
    { id: 6, nib: "44455", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Fani", luas: "400 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2903517, lng: 110.7515066 },
    { id: 7, nib: "55566", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Gita", luas: "700 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2918517, lng: 110.7495066 },
    { id: 8, nib: "66677", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Hadi", luas: "100 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2933517, lng: 110.7515066 },
    { id: 9, nib: "77788", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Indah", luas: "450 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2908517, lng: 110.7505066 },
    { id: 10, nib: "88899", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Joko", luas: "550 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2923517, lng: 110.7525066 },
    { id: 11, nib: "99900", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Kiki", luas: "250 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2913517, lng: 110.7490066 },
    { id: 12, nib: "10111", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Lina", luas: "350 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2938517, lng: 110.7510066 },
    { id: 13, nib: "11222", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Mira", luas: "650 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2903517, lng: 110.7495066 },
    { id: 14, nib: "12333", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Nanda", luas: "200 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2928517, lng: 110.7520066 },
    { id: 15, nib: "13444", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Oki", luas: "400 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2918517, lng: 110.7500066 },
    { id: 16, nib: "14555", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Puji", luas: "600 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2908517, lng: 110.7515066 },
    { id: 17, nib: "15666", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Rina", luas: "150 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2923517, lng: 110.7495066 },
    { id: 18, nib: "16777", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Sari", luas: "500 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2913517, lng: 110.7525066 },
    { id: 19, nib: "17888", harga: "Rp 100-200 Ribu/M2", status: "Tersedia", pemilik: "Tono", luas: "700 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2938517, lng: 110.7505066 },
    { id: 20, nib: "18999", harga: "Rp 100-200 Ribu/M2", status: "Dijual", pemilik: "Umi", luas: "300 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2903517, lng: 110.7510066 }
];

function displayLandData() {
    const tbody = document.getElementById('land-data-body');
    if (!tbody) {
        console.error('Land data table body not found');
        return;
    }
    tbody.innerHTML = '';
    window.landData.forEach(data => {
        const row = `
            <tr>
                <td>${data.id}</td>
                <td>${data.nib}</td>
                <td>${data.harga}</td>
                <td>${data.status}</td>
                <td>${data.pemilik}</td>
                <td>${data.luas}</td>
                <td>${data.penggunaan}</td>
                <td>${data.desa}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}
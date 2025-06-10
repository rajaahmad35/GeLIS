let landData = [
    { id: 1, nib: "12344", harga: "Rp 500 jt", status: "Tersedia", pemilik: "Budi", luas: "200 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2918517, lng: 110.7510066 },
    { id: 2, nib: "67890", harga: "Rp 1 M", status: "Dijual", pemilik: "Ani", luas: "500 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2908517, lng: 110.7520066 },
    { id: 3, nib: "11122", harga: "Rp 750 jt", status: "Tersedia", pemilik: "Cahyo", luas: "300 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2928517, lng: 110.7500066 },
    { id: 4, nib: "25233", harga: "Rp 1.2 M", status: "Dijual", pemilik: "Dina", luas: "600 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2913517, lng: 110.7515066 },
    { id: 5, nib: "33344", harga: "Rp 400 jt", status: "Tersedia", pemilik: "Eko", luas: "150 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2923517, lng: 110.7505066 },
    { id: 6, nib: "44455", harga: "Rp 800 jt", status: "Dijual", pemilik: "Fani", luas: "400 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2903517, lng: 110.7515066 },
    { id: 7, nib: "55566", harga: "Rp 1.5 M", status: "Tersedia", pemilik: "Gita", luas: "700 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2918517, lng: 110.7495066 },
    { id: 8, nib: "66677", harga: "Rp 300 jt", status: "Dijual", pemilik: "Hadi", luas: "100 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2933517, lng: 110.7515066 },
    { id: 9, nib: "77788", harga: "Rp 900 jt", status: "Tersedia", pemilik: "Indah", luas: "450 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2908517, lng: 110.7505066 },
    { id: 10, nib: "68899", harga: "Rp 1.1 M", status: "Dijual", pemilik: "Joko", luas: "550 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2923517, lng: 110.7525066 },
    { id: 11, nib: "96900", harga: "Rp 600 jt", status: "Tersedia", pemilik: "Kiki", luas: "250 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2913517, lng: 110.7490066 },
    { id: 12, nib: "10111", harga: "Rp 700 jt", status: "Dijual", pemilik: "Lina", luas: "350 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2938517, lng: 110.7510066 },
    { id: 13, nib: "11222", harga: "Rp 1.3 M", status: "Tersedia", pemilik: "Mira", luas: "650 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2903517, lng: 110.7495066 },
    { id: 14, nib: "12333", harga: "Rp 450 jt", status: "Dijual", pemilik: "Nanda", luas: "200 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2928517, lng: 110.7520066 },
    { id: 15, nib: "13444", harga: "Rp 850 jt", status: "Tersedia", pemilik: "Oki", luas: "400 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2918517, lng: 110.7500066 },
    { id: 16, nib: "14555", harga: "Rp 1.4 M", status: "Dijual", pemilik: "Puji", luas: "600 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2908517, lng: 110.7515066 },
    { id: 17, nib: "15666", harga: "Rp 350 jt", status: "Tersedia", pemilik: "Rina", luas: "150 m²", penggunaan: "Pertanian", desa: "Genengsari", lat: -7.2923517, lng: 110.7495066 },
    { id: 18, nib: "16777", harga: "Rp 950 jt", status: "Dijual", pemilik: "Sari", luas: "500 m²", penggunaan: "Perumahan", desa: "Genengsari", lat: -7.2913517, lng: 110.7525066 },
    { id: 19, nib: "17888", harga: "Rp 1.6 M", status: "Tersedia", pemilik: "Tono", luas: "700 m²", penggunaan: "Komersial", desa: "Genengsari", lat: -7.2938517, lng: 110.7505066 },
    { id: 20, nib: "18999", harga: "Rp 550 jt", status: "Dijual", pemilik: "Umi", luas: "300 m²", penggunaan: "Industri", desa: "Genengsari", lat: -7.2903517, lng: 110.7510066 }
];

let editingId = null;

function displayLandData() {
    const tbody = document.getElementById('land-data-body');
    tbody.innerHTML = '';
    landData.forEach(data => {
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

function displayAdminData() {
    const tbody = document.getElementById('admin-data-body');
    tbody.innerHTML = '';
    landData.forEach(data => {
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
                <td>
                    ${userRole === 'admin' ? `<button onclick="editData(${data.id})" class="text-blue-600 hover:underline">Edit</button>
                    <button onclick="deleteData(${data.id})" class="text-red-600 hover:underline ml-2">Delete</button>` : ''}
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function refreshData() {
    alert('Data refreshed! (Simulated)');
    displayAdminData();
}

function editData(id) {
    if (userRole !== 'admin') return;
    editingId = id;
    const data = landData.find(d => d.id === id);
    document.getElementById('editId').value = data.id;
    document.getElementById('editNIB').value = data.nib;
    document.getElementById('editHarga').value = data.harga;
    document.getElementById('editStatus').value = data.status;
    document.getElementById('editPemilik').value = data.pemilik;
    document.getElementById('editLuas').value = data.luas;
    document.getElementById('editPenggunaan').value = data.penggunaan;
    document.getElementById('editDesa').value = data.desa;
    document.getElementById('editLat').value = data.lat;
    document.getElementById('editLng').value = data.lng;
    document.getElementById('editModal').style.display = 'flex';
}

function saveEdit() {
    if (userRole !== 'admin') return;
    const id = parseInt(document.getElementById('editId').value);
    const data = landData.find(d => d.id === id);
    if (data) {
        data.nib = document.getElementById('editNIB').value;
        data.harga = document.getElementById('editHarga').value;
        data.status = document.getElementById('editStatus').value;
        data.pemilik = document.getElementById('editPemilik').value;
        data.luas = document.getElementById('editLuas').value;
        data.penggunaan = document.getElementById('editPenggunaan').value;
        data.desa = document.getElementById('editDesa').value;
        data.lat = parseFloat(document.getElementById('editLat').value) || data.lat;
        data.lng = parseFloat(document.getElementById('editLng').value) || data.lng;
        displayAdminData();
        displayLandData();
        const iframe = document.getElementById('webgis-iframe');
        iframe.contentWindow.postMessage({
            action: 'update',
            data: data
        }, 'https://rajaahmad35.github.io');
        closeModal();
    }
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
    editingId = null;
}

function deleteData(id) {
    if (userRole !== 'admin') return;
    landData = landData.filter(data => data.id !== id);
    displayAdminData();
    displayLandData();
    const iframe = document.getElementById('webgis-iframe');
    iframe.contentWindow.postMessage({
        action: 'delete',
        id: id
    }, 'https://rajaahmad35.github.io');
}
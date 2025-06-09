let editingId = null;

function displayAdminData() {
    const tbody = document.getElementById('admin-data-body');
    if (!tbody) {
        console.error('Admin data table body not found');
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
                <td>
                    ${window.userRole === 'admin' ? `<button onclick="editData(${data.id})" class="text-blue-600 hover:underline">Edit</button>
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
    displayLandData();
}

function editData(id) {
    if (window.userRole !== 'admin') return;
    editingId = id;
    const data = window.landData.find(d => d.id === id);
    if (!data) return;
    
    const editModal = document.getElementById('editModal');
    if (!editModal) return;
    
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
    editModal.style.display = 'flex';
}

function saveEdit() {
    if (window.userRole !== 'admin') return;
    const id = parseInt(document.getElementById('editId')?.value);
    const data = window.landData.find(d => d.id === id);
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
        
        if (window.map) {
            window.map.eachLayer(layer => {
                if (layer instanceof L.Marker && layer.options.icon?.options.className !== 'highlight-marker') {
                    window.map.removeLayer(layer);
                }
            });
            window.landData.forEach(d => {
                L.marker([d.lat, d.lng]).addTo(window.map)
                    .bindPopup(`NIB: ${d.nib}<br>Harga: ${d.harga}<br>Status: ${d.status}`)
                    .on('click', () => highlightLand(d.nib));
            });
        }
        displayAdminData();
        displayLandData();
        closeModal();
    }
}

function deleteData(id) {
    if (window.userRole !== 'admin') return;
    window.landData = window.landData.filter(data => data.id !== id);
    displayAdminData();
    displayLandData();
    if (window.map) {
        window.map.eachLayer(layer => {
            if (layer instanceof L.Marker && layer.options.icon?.options.className !== 'highlight-marker') {
                window.map.removeLayer(layer);
            }
        });
        window.landData.forEach(data => {
            L.marker([data.lat, data.lng]).addTo(window.map)
                .bindPopup(`NIB: ${data.nib}<br>Harga: ${data.harga}<br>Status: ${data.status}`)
                .on('click', () => highlightLand(data.nib));
        });
    }
}

function closeModal() {
    const editModal = document.getElementById('editModal');
    if (editModal) editModal.style.display = 'none';
    editingId = null;
}
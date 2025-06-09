function initializeMap() {
    if (!document.getElementById('map')) {
        console.error('Map container not found');
        alert('Map container not found. Please check the HTML structure.');
        return;
    }
    window.map = L.map('map').setView([-7.2918517, 110.7510066], 15);
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(window.map);

    const layers = {
        'Bidang Tanah': L.geoJSON(null, { style: { color: 'blue', fillOpacity: 0.5 } }),
        'Zona Nilai Tanah': L.geoJSON(null, { style: { color: 'purple', fillOpacity: 0.5 } }),
        'Admin Genengsari': L.geoJSON(null, { style: { color: 'green', fillOpacity: 0.3 } }),
        'Jaringan Jalan': L.geoJSON(null, { style: { color: 'black', weight: 3 } }),
        'Sungai': L.geoJSON(null, { style: { color: 'cyan', weight: 2 } }),
        'Harga Tanah': L.geoJSON(null, { style: { color: 'red', fillOpacity: 0.4 } })
    };

    // Load GeoJSON files
    const geoJsonUrls = {
        'Bidang Tanah': 'bidang_tanah.geojson',
        'Admin Genengsari': 'admin_genengsari.geojson',
        'Jaringan Jalan': 'jaringan_jalan.geojson',
        'Sungai': 'sungai.geojson',
        'Harga Tanah': 'harga_tanah.geojson'
    };

    Object.keys(geoJsonUrls).forEach(layerName => {
        fetch(geoJsonUrls[layerName])
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${layerName} GeoJSON`);
                return response.json();
            })
            .then(data => {
                layers[layerName].addData(data).addTo(window.map);
            })
            .catch(error => {
                console.error(`Error loading ${layerName} GeoJSON:`, error);
                alert(`Failed to load layer: ${layerName}. Check the GeoJSON file.`);
            });
    });

    window.landData.forEach(data => {
        L.marker([data.lat, data.lng]).addTo(window.map)
            .bindPopup(`NIB: ${data.nib}<br>Harga: ${data.harga}<br>Status: ${data.status}`)
            .on('click', () => highlightLand(data.nib));
    });

    const baseLayers = {
        "OpenStreetMap": osm
    };
    const overlays = {
        "Bidang Tanah": layers['Bidang Tanah'],
        "Admin Genengsari": layers['Admin Genengsari'],
        "Jaringan Jalan": layers['Jaringan Jalan'],
        "Sungai": layers['Sungai'],
        "Harga Tanah": layers['Harga Tanah']
    };

    L.control.layers(baseLayers, overlays, { position: 'topright' }).addTo(window.map);

    L.control.scale().addTo(window.map);
    L.marker([-7.2918517, 110.7510066]).addTo(window.map)
        .bindPopup('Genengsari<br>Lat: -7.2918517, Long: 110.7510066')
        .openPopup();
}

function searchLocation() {
    const query = document.getElementById('search')?.value.trim();
    const resultDiv = document.getElementById('search-result');
    if (!query || !resultDiv) {
        console.error('Search input or result div not found');
        return;
    }

    const matchedData = window.landData.find(data => data.nib === query);
    if (matchedData) {
        resultDiv.innerHTML = `Ditemukan: NIB ${matchedData.nib}, Pemilik: ${matchedData.pemilik}, Harga: ${matchedData.harga}`;
        window.map.setView([matchedData.lat, matchedData.lng], 15);
        highlightLand(matchedData.nib);
    } else {
        resultDiv.innerHTML = 'NIB tidak ditemukan.';
    }
}

function highlightLand(nib) {
    const matchedData = window.landData.find(data => data.nib === nib);
    if (matchedData && window.map) {
        if (window.map.highlightedMarker) {
            window.map.removeLayer(window.map.highlightedMarker);
        }
        window.map.highlightedMarker = L.marker([matchedData.lat, data.lng], {
            icon: L.divIcon({ className: 'highlight-marker', html: '▲' })
        }).addTo(window.map)
            .bindPopup(`NIB: ${matchedData.nib}<br>Harga: ${matchedData.harga}<br>Status: ${matchedData.status}`)
            .openPopup();
    } else {
        console.error('No matching data or map not initialized for NIB:', nib);
    }
}

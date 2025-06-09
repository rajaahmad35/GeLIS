function initializeMap() {
    if (!document.getElementById('map')) {
        console.error('Map container not found');
        return;
    }
    window.map = L.map('map').setView([-7.2918517, 110.7510066], 15);
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(window.map);
    
    const layers = {
        'Bidang Tanah': L.geoJSON(null, { style: { color: 'blue', fillOpacity: 0.5 } }),
        'Zona Nilai Tanah': L.geoJSON(null, { style: { color: 'purple', fillOpacity: 0.5 } })
    };
    
    // Only add WMS layers if GeoServer is available (commented out for local testing)
    /*
    layers['WMS Bidang Tanah'] = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
        layers: "Bidang Tanah",
        format: "image/png",
        transparent: true,
        attribution: "GeoServer WMS"
    });
    layers['WMS Admin Genengsari'] = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
        layers: "admin_genengsari",
        format: "image/png",
        transparent: true,
        attribution: "GeoServer WMS"
    });
    layers['WMS Jaringan Jalan'] = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
        layers: "Jaringan Jalan",
        format: "image/png",
        transparent: true,
        attribution: "GeoServer WMS"
    });
    layers['WMS Sungai'] = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
        layers: "Sungai",
        format: "image/png",
        transparent: true,
        attribution: "GeoServer WMS"
    });
    layers['WMS Harga Tanah'] = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
        layers: "Harga Tanah",
        format: "image/png",
        transparent: true,
        attribution: "GeoServer WMS"
    });
    */
    
    window.landData.forEach(data => {
        L.marker([data.lat, data.lng]).addTo(window.map)
            .bindPopup(`NIB: ${data.nib}<br>Harga: ${data.harga}<br>Status: ${data.status}`)
            .on('click', () => highlightLand(data.nib));
    });
    
    const baseLayers = { "OpenStreetMap": osm };
    const overlays = {
        "Bidang Tanah": layers['Bidang Tanah'],
        "Zona Nilai Tanah": layers['Zona Nilai Tanah']
        // Add WMS layers to overlays if enabled
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
    if (!query || !resultDiv) return;
    
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
        window.map.highlightedMarker = L.marker([matchedData.lat, matchedData.lng], {
            icon: L.divIcon({ className: 'highlight-marker', html: '▲' })
        }).addTo(window.map)
            .bindPopup(`NIB: ${matchedData.nib}<br>Harga: ${matchedData.harga}<br>Status: ${matchedData.status}`)
            .openPopup();
    }
}
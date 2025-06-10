function searchLocation() {
    const query = document.getElementById('search').value.trim();
    const resultDiv = document.getElementById('search-result');
    const matchedData = landData.find(data => data.nib === query);
    const iframe = document.getElementById('webgis-iframe');
    if (matchedData) {
        resultDiv.innerHTML = `Ditemukan: NIB ${matchedData.nib}, Pemilik: ${matchedData.pemilik}, Harga: ${matchedData.harga}`;
        iframe.contentWindow.postMessage({
            action: 'highlight',
            nib: matchedData.nib,
            lat: matchedData.lat,
            lng: matchedData.lng,
            popup: `NIB: ${matchedData.nib}<br>Harga: ${matchedData.harga}<br>Status: ${matchedData.status}`
        }, 'https://rajaahmad35.github.io');
    } else {
        resultDiv.innerHTML = 'NIB tidak ditemukan.';
    }
}
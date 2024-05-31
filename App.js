document.addEventListener('DOMContentLoaded', () => {
    const listTypeSelect = document.getElementById('listTypeSelect');
    const listContainer = document.getElementById('listContainer');

    // Function to fetch and display data
    function fetchDataAndDisplay(type) {
        fetch(`https://swapi.dev/api/${type}/`)
            .then(response => response.json())
            .then(data => {
                listContainer.innerHTML = ''; // Clear previous data
                data.results.forEach(item => {
                    const listItem = document.createElement('div');
                    listItem.className = 'item';
                    listItem.innerHTML = `
                        <h3>${item.name}</h3>
                        <p><strong>Gender:</strong> ${item.gender || 'Unknown'}</p>
                        <p><strong>Height:</strong> ${item.height || 'Unknown'} cm</p>
                        <p><strong>Mass:</strong> ${item.mass || 'Unknown'} kg</p>
                        <img src="${item.image ? item.image : 'https://via.placeholder.com/150'}" alt="${item.name}">
                    `;
                    listContainer.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Default selection
    fetchDataAndDisplay(listTypeSelect.value);

    // Event listener for changes in the select box
    listTypeSelect.addEventListener('change', () => {
        fetchDataAndDisplay(listTypeSelect.value);
    });
});

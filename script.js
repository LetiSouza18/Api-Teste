
async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('uf').value = data.uf;
    } catch(error) {
        alert("Erro ao buscar endereço. Verifique se o CEP está correto e tente novamente.");
    }
}

async function getTemperature(){
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('temperatura').value = `${data.current.temperature_2m}°C`;
    } catch(error) {
        alert("Erro ao buscar temperatura. Verifique se a latitude e longitude estão corretas e tente novamente.");
    }
}

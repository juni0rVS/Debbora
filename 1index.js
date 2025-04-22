const carros = [
    { marca: 'Toyota', modelo: 'Corolla', ano: 2020, preco: 90000, imagem: 'https://source.unsplash.com/400x300/?car,toyota' },
    { marca: 'Honda', modelo: 'Civic', ano: 2019, preco: 85000, imagem: 'https://source.unsplash.com/400x300/?car,honda' },
    { marca: 'BMW', modelo: '320i', ano: 2021, preco: 150000, imagem: 'https://source.unsplash.com/400x300/?car,bmw' },
  ];
  
  function exibirCarros(lista) {
    const container = document.getElementById('listaCarros');
    container.innerHTML = '';
    lista.forEach(carro => {
      const div = document.createElement('div');
      div.classList.add('carro');
      div.innerHTML = `
        <img src="${carro.imagem}" alt="${carro.modelo}" />
        <h3>${carro.marca} ${carro.modelo}</h3>
        <p>Ano: ${carro.ano}</p>
        <p>Preço: R$ ${carro.preco.toLocaleString('pt-BR')}</p>
      `;
      container.appendChild(div);
    });
  }
  
  function filtrarCarros() {
    const marca = document.getElementById('filtroMarca').value.toLowerCase();
    const ano = document.getElementById('filtroAno').value;
    const preco = document.getElementById('filtroPreco').value;
  
    const filtrados = carros.filter(carro => {
      return (
        (!marca || carro.marca.toLowerCase().includes(marca)) &&
        (!ano || carro.ano == ano) &&
        (!preco || carro.preco <= preco)
      );
    });
  
    exibirCarros(filtrados);
  }
  
  // Ao carregar a página
  window.addEventListener('load', () => {
    document.getElementById('preloader').classList.add('hidden');
    exibirCarros(carros);
  });
  
  // Efeito ao rolar a página
  window.addEventListener('scroll', () => {
    const header = document.getElementById('topo');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
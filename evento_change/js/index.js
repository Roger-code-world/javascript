class get_json{
	json = async (valor) =>{
		try {
			let response = await fetch('../json/index.json');
			let data = await response.json();
			this.show_data(data,valor);
		} catch (error) {
			
		}
	}

	show_data = (data,valor) =>{
		let div_sow = document.querySelector("#showdata");
		div_sow.innerHTML = "";
		if (valor == "Todos") {
			let result = data;
			for (const res in result) {
				let nodo = result[res];
				nodo.forEach(element => {
					div_sow.innerHTML +=`
					<div class="col">
					<div class="card h-100">
					<img src="${element.image}" class="rounded mx-auto d-block" alt="..." width="150" height="150">
					<div class="card-body">
					<h5 class="card-title">${element.name}</h5>
					<p class="card-text">${element.description}</p>
					<button class="btn btn-primary">Aceptar</button>
					</div>
					</div>
					</div>	
					
					`;
				});
			}
		}else{
			let result = data[valor];
			result.forEach(element =>{
				div_sow.innerHTML +=`
					<div class="col">
					<div class="card h-100">
					<img src="${element.image}" class="rounded mx-auto d-block" alt="..." width="150" height="150">
					<div class="card-body">
					<h5 class="card-title">${element.name}</h5>
					<p class="card-text">${element.description}</p>
					<button class="btn btn-primary">Aceptar</button>
					</div>
					</div>
					</div>
				
				`	
			})
		}

	}
}


const select = document.querySelector("#myselect");
select.addEventListener("change", (e) =>{
	e.preventDefault();
	let valor = select.value;
	if (valor == "") {
		let div_sow = document.querySelector("#showdata");
		div_sow.innerHTML = "";
		div_sow.innerHTML =`
			<div class="container">
			<div class="alert alert-danger" role="alert">
			Error. No has seleccionado ninguna opcion. Por favor selecciona alguna opcion.
			</div>
			</div>
		`;
	}else{
		let getdata = new get_json();
		getdata.json(valor);
	}
})
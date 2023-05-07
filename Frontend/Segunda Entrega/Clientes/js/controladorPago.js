//funcion del input number
jQuery('<div class="quantity-nav"><div><button class="botonInput  quantity-button quantity-up">+</button></div><div><button class=" botonInput  quantity-button quantity-down">-</button></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
    var Indicador = jQuery(this),
        input = Indicador.find('input[type="number"]'),
        btnUp = Indicador.find('.quantity-up'),
        btnDown = Indicador.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var ValorViejo = parseFloat(input.val());
        if (ValorViejo >= max) {
        var ValorNuevo = ValorViejo;
        } else {
        var ValorNuevo = ValorViejo + 1;
        }
        Indicador.find("input").val(ValorNuevo);
        Indicador.find("input").trigger("change");
    });

    btnDown.click(function() {
        var ValorViejo = parseFloat(input.val());
        if (ValorViejo <= min) {
        var ValorNuevo = ValorViejo;
        } else {
        var ValorNuevo = ValorViejo - 1;
        }
        Indicador.find("input").val(ValorNuevo);
        Indicador.find("input").trigger("change");
    });
    });

    //funcion para enviar un pedido 
    const enviarPedido = ( cantidad, precio) =>{

        const pedidoInfo={
            id:"4",
            nombre: "Luces Led",
            cantidad:cantidad,
            portada:"./multimedia/Lamina.jpg",
            precio:precio
        };
        
        fetch('http://localhost:3002/pedidos', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(pedidoInfo)
    }).then(res => res.json())
    .then(pedidoInfo => {
        console.log(pedidoInfo);
    }).catch(error=>{
        console.error(error);
    });
    };


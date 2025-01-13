console.log(products)

//Gå igjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

//En variabel som kan holde på HTML-en for produktene
let productHTML = ""

products.map((product, index) => productHTML += `            <article class="product-card">
            <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
            <a href="#KATEGORSISIDE">Ninjago</a>
            <h3>${product.title}</h3>
            <p> Kr. ${product.price},-</p>
            <button>Legg i handlekurv</button>
        </article>`)

//Finn #productlist, og fyll den med veriene i variabeen productHTML
document.getElementById("productlist").innerHTML = productHTML
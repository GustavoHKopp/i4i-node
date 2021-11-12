import { ItemDTO } from "../../interfaces/ItemItenterface";

export default class Products {
    productList: ItemDTO[] = [{
        name: 'ps4',
        img_url: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
        price: 2700,
        id: "1",
        description: 'Play Station 4 Pro'
      },
      {
        name: 'Celular',
        img_url: 'https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-a-12-64gb-dual-sm-a125mzkszto/gazin/9533/60618eea0b5e19dd24dcafdd59b82f32.jpg',
        price: 1500,
        id: "2",
        description: 'Celular Sansung Galaxy a-12'
      },
      {
        name: 'Monitor',
        img_url: 'https://www.lg.com/br/images/monitores/md06183578/2_Gallery/DM_01.jpg',
        price: 1000,
        id: "3",
        description:'Monitor LG 27" 144hz'
      },
      {
        name: 'Mouse',
        img_url: 'https://images.kabum.com.br/produtos/fotos/49841/49841_1507735187_index_g.jpg',
        price: 750,
        id: "4",
        description: 'Mouse Gamer Razer Deathadder'
      },
      {
        name: 'Headset',
        img_url: 'https://http2.mlstatic.com/D_NQ_NP_803092-MLA44502114496_012021-O.jpg',
        price: 500,
        id: "5",
        description: 'Headset Redragon Zeus'
      },
      {
        name: 'Tecaldo',
        img_url: 'https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_SY450_.jpg',
        price: 2000,
        id: "6",
        description: 'Teclado Gamer Razer Cynosa Chroma'
      },
      {
        name: 'Mousepad',
        img_url: 'https://m.media-amazon.com/images/I/31AVfnlYKYL._AC_.jpg',
        price: 80,
        id: "7",
        description: 'Mousepad Fortrek Speed'
      },
      {
        name: 'Microfone',
        img_url: 'https://www.miranda.com.br/lojas/2057/img/interno/prd_251329_i_42817.png',
        price: 1040,
        id: "8",
        description: 'Microfone Hiperx Quadcast'
      },
      {
        name: 'Mouse Bungee',
        img_url: 'https://images.kabum.com.br/produtos/fotos/133042/mouse-bungee-gamer-razer-v3-chroma-rc21-01520100-r3u1_1607087335_gg.jpg',
        price: 980,
        id: "9",
        description: 'Mouse Bungee Razer v3 Chroma'
      },
      {
        name: 'Cadeira',
        img_url: 'https://www.dt3sports.com.br/wp-content/uploads/2020/09/Cadeira-Gamer-DT3sports-Elise-Fabric-red-1.jpg',
        price: 1700,
        id: "10",
        description: 'Cadeira Gamer Dt3sports'
      },
    ]

    getProduct(): ItemDTO[] {
        return this.productList
    }
    addProduct(item: ItemDTO): void {
        this.productList.push(item)
    }
    getById(id: string): ItemDTO[] {
        let product = this.productList.filter((item) => item.id === id)
        return product
    }
    removeByID(id: string): void {
        this.productList = this.productList.filter((item) => item.id !== id)
    }
}

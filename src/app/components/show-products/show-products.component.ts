import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

    @ViewChild('userNoLoggedDialog') userNoLoggedDialogRef!: TemplateRef<any>;
  
    resultsArray: any[];
    isLoading = false;
    textoBusqueda = "Laptop 16 Gb Ram"  

    constructor(private dialog: MatDialog, private router: Router){
        this.resultsArray = []
    }

    ngOnInit(): void {
        this.isLoading = true;
        setTimeout(()=>{
            this.resultsArray = this.loadResults()
            this.isLoading = false;
        }, 3000)
    }

    goToCreateAccount(){
        try {
            this.dialog.closeAll()
            this.router.navigate(['/create-account']);
        } catch (error) {
            console.log(error)
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(this.userNoLoggedDialogRef, {
            width: '400px',
            height: '310px'
        });
    }

    loadResults() {
        return [
            {
                name: 'Laptop HP 245 G7 negra 14", AMD 3020E 8GB de RAM 1TB HDD, AMD Radeon RX Vega 3 1366x768px Windows 10 Home'.slice(0,100),
                urlImage:"https://http2.mlstatic.com/D_NQ_NP_600265-MLA48808603714_012022-V.webp",
                price: "1.131.000",
                calification: 4.6,
                store: "Mercado Libre CO",
                link: "https://www.mercadolibre.com.co/laptop-hp-245-g7-negra-14-amd-3020e-8gb-de-ram-1tb-hdd-amd-radeon-rx-vega-3-1366x768px-windows-10-home/p/MCO18619200?pdp_filters=category:MCO1652#searchVariation=MCO18619200&position=3&search_layout=stack&type=product&tracking_id=4bb0bbf8-62b3-4aa5-822c-9e34a0ff6265"
            },
            {
                name: '2021 Newest HP Premium 14-inch HD Laptop, Intel Dual-Core Processor Up to 2.8GHz, 16GB RAM, 64GB eMMC Storage, Webcam, Bluetooth, HDMI, Wi-Fi, Gold, Windows 10'.slice(0,100),
                urlImage:"https://m.media-amazon.com/images/I/71AwAdVLOLS._AC_UY218_.jpg",
                price: "1.654.877",
                calification: 4.2,
                store: "Amazon.com",
                link: "https://www.amazon.com/HP-Premium-Dual-Core-Processor-Bluetooth/dp/B096D36ZSX/ref=sr_1_6?crid=11BC8JZ3FQD96&keywords=Laptop+16+gb+ram&qid=1658011788&sprefix=laptop+16+gb+r%2Caps%2C978&sr=8-6"
            },
            {
                name: 'Laptop Dell Inspiron 3501 plata 15.55", Intel Core i3 1115G4 8GB de RAM 256GB SSD, Intel UHD Graphics Xe G4 48EUs 60 Hz 1366x768px'.slice(0,100),
                urlImage:"https://http2.mlstatic.com/D_NQ_NP_674319-MLA49693591678_042022-O.webp",
                price: "1.714.900",
                calification: 4.6,
                store: "Mercado Libre CO",
                link: "https://www.mercadolibre.com.co/laptop-dell-inspiron-3501-plata-1555-intel-core-i3-1115g4-8gb-de-ram-256gb-ssd-intel-uhd-graphics-xe-g4-48eus-60-hz-1366x768px-windows-10-home/p/MCO17396382?pdp_filters=category:MCO1652#searchVariation=MCO17396382&position=2&search_layout=stack&type=product&tracking_id=4bb0bbf8-62b3-4aa5-822c-9e34a0ff6265"
            },
            {
                name: 'Laptop Dell Inspiron 3505 gris 15.6", AMD Ryzen 5 3450U 16GB de RAM 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 60 Hz'.slice(0,100),
                urlImage:"https://http2.mlstatic.com/D_NQ_NP_904967-MLA47215230827_082021-V.webp",
                price: "2.100.000",
                calification: 4.7,
                store: "Mercado Libre CO",
                link: "https://www.mercadolibre.com.co/laptop-dell-inspiron-3505-gris-156-amd-ryzen-5-3450u-16gb-de-ram-256gb-ssd-amd-radeon-rx-vega-8-ryzen-20003000-60-hz-1366x768px-windows-10-home/p/MCO16999018?pdp_filters=category:MCO1652#searchVariation=MCO16999018&position=5&search_layout=stack&type=product&tracking_id=4bb0bbf8-62b3-4aa5-822c-9e34a0ff6265"
            },
            {
                name: 'Laptop Dell Inspiron 3505 negra 15.6", AMD Ryzen 5 3450U 12GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000'.slice(0,100),
                urlImage:"https://http2.mlstatic.com/D_NQ_NP_912142-MLA49041547588_022022-V.webp",
                price: "2.117.000",
                calification: 4.7,
                store: "Mercado Libre CO",
                link: "https://www.mercadolibre.com.co/laptop-dell-inspiron-3505-negra-156-amd-ryzen-5-3450u-12gb-de-ram-1tb-hdd-256gb-ssd-amd-radeon-rx-vega-8-ryzen-20003000-60-hz-1920x1080px-windows-10-home/p/MCO16999016?pdp_filters=category:MCO1652#searchVariation=MCO16999016&position=4&search_layout=stack&type=product&tracking_id=4bb0bbf8-62b3-4aa5-822c-9e34a0ff6265"
            },
            {
                name: 'Laptop Dell Inspiron 3505 gris 15.6", AMD Ryzen 5 3450U 16GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 60'.slice(0,100),
                urlImage:"https://http2.mlstatic.com/D_NQ_NP_674319-MLA49693591678_042022-O.webp",
                price: "2.170.000",
                calification: 4.6,
                store: "Mercado Libre CO",
                link: "https://www.mercadolibre.com.co/laptop-dell-inspiron-3501-plata-1555-intel-core-i3-1115g4-8gb-de-ram-256gb-ssd-intel-uhd-graphics-xe-g4-48eus-60-hz-1366x768px-windows-10-home/p/MCO17396382?pdp_filters=category:MCO1652#searchVariation=MCO17396382&position=2&search_layout=stack&type=product&tracking_id=4bb0bbf8-62b3-4aa5-822c-9e34a0ff6265"
            },
            {
                name: 'HP Pavilion Laptop (2022 Model), 15.6" HD Display, Intel Celeron Quad-Core Processor, 16GB DDR4 RAM, 1TB SSD, Online Conferencing, Webcam, HDMI, WiFi, Bluetooth,'.slice(0,100),
                urlImage:"https://m.media-amazon.com/images/I/71iVR5MO0ZL._AC_SX569_.jpg",
                price: "2.237.897",
                calification: 4.3,
                store: "Amazon.com",
                link: "https://www.amazon.com/HP-Pavilion-Quad-Core-Processor-Conferencing/dp/B09XZ93TXL/ref=sr_1_3?crid=11BC8JZ3FQD96&keywords=Laptop+16+gb+ram&qid=1658011788&sprefix=laptop+16+gb+r%2Caps%2C978&sr=8-3"
            },
            {
                name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home'.slice(0,100),
                urlImage:"https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_UY218_.jpg",
                price: "2.780.553",
                calification: 4.5,
                store: "Amazon.com",
                link: "https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_7?crid=11BC8JZ3FQD96&keywords=Laptop+16+gb+ram&qid=1658011788&sprefix=laptop+16+gb+r%2Caps%2C978&sr=8-7"
            },
            {
                name: 'Newest 2022 HP 15.6in FHD Business Laptop, AMD Ryzen 5 5500U 6 core CPU (Beat i7-1160G7, up to 4GHz), 16GB RAM, 512GB PCIe NVMe SSD, AMD Radeon Graphics, WiFi,'.slice(0,100),
                urlImage:"https://m.media-amazon.com/images/I/71CeaGJHH+L._AC_UY218_.jpg",
                price: "2.865.764",
                calification: 4.3,
                store: "Amazon.com",
                link: "https://www.amazon.com/HP-Micro-Edge-i7-1160G7-Graphics-Accessories/dp/B09MLPK4XX/ref=sr_1_5?crid=11BC8JZ3FQD96&keywords=Laptop+16+gb+ram&qid=1658011788&sprefix=laptop+16+gb+r%2Caps%2C978&sr=8-5"
            },
            {
                name: 'ASUS VivoBook S15 S533 Thin and Light Laptop, 15.6” FHD Display, Intel Core i7-1165G7 CPU, 16GB DDR4 RAM, 512GB PCIe SSD, Fingerprint Reader, Wi-Fi 6, Windows,'.slice(0,100),
                urlImage:"https://m.media-amazon.com/images/I/71oRxpP3T0L._AC_UY218_.jpg",
                price: "3.973.500",
                calification: 4.3,
                store: "Amazon.com",
                link: "https://www.amazon.com/ASUS-VivoBook-i7-1165G7-Fingerprint-S533EA-DH74-WH/dp/B08KH4RVBM/ref=sr_1_4?crid=11BC8JZ3FQD96&keywords=Laptop+16+gb+ram&qid=1658011788&sprefix=laptop+16+gb+r%2Caps%2C978&sr=8-4"
            }
        ]
    }
}
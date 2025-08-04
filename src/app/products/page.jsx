import Link from "next/link"

const ProductsPage = () => {
    const allProducts = [
        {
            "id": 1,
            "name": "Quantum X Smartphone",
            "brand": "NexTech",
            "price": 899.99,
            "category": "Smartphones",
            "inStock": true,
            "specs": {
                "storage": "256GB",
                "ram": "8GB",
                "screenSize": "6.5 inches",
                "battery": "4500mAh"
            }
        },
        {
            "id": 2,
            "name": "ThunderSound Pro Headphones",
            "brand": "AudioWave",
            "price": 249.99,
            "category": "Audio",
            "inStock": true,
            "specs": {
                "type": "Wireless Over-Ear",
                "batteryLife": "30 hours",
                "noiseCancellation": true
            }
        },
        {
            "id": 3,
            "name": "UltraView 4K TV",
            "brand": "VisionPlus",
            "price": 1299.99,
            "category": "Televisions",
            "inStock": false,
            "specs": {
                "screenSize": "65 inches",
                "resolution": "3840x2160",
                "refreshRate": "120Hz"
            }
        },
        {
            "id": 4,
            "name": "SwiftBook Laptop",
            "brand": "TechGen",
            "price": 1099.99,
            "category": "Laptops",
            "inStock": true,
            "specs": {
                "processor": "Intel Core i7",
                "ram": "16GB",
                "storage": "512GB SSD",
                "os": "Windows 11"
            }
        },
        {
            "id": 5,
            "name": "PowerShot DSLR Camera",
            "brand": "FotoMaster",
            "price": 749.99,
            "category": "Cameras",
            "inStock": true,
            "specs": {
                "sensor": "24.2MP",
                "lensMount": "EF-S",
                "videoResolution": "4K"
            }
        },
        {
            "id": 6,
            "name": "EcoSmart Air Purifier",
            "brand": "PureAir",
            "price": 199.99,
            "category": "Home Appliances",
            "inStock": true,
            "specs": {
                "coverage": "500 sq ft",
                "filterType": "HEPA + Carbon",
                "noiseLevel": "25dB"
            }
        },
        {
            "id": 7,
            "name": "GameMaster Pro Console",
            "brand": "PlaySphere",
            "price": 499.99,
            "category": "Gaming",
            "inStock": false,
            "specs": {
                "storage": "1TB SSD",
                "resolution": "8K HDR",
                "controllerIncluded": true
            }
        },
        {
            "id": 8,
            "name": "FlexFit Smartwatch",
            "brand": "GadgetLife",
            "price": 179.99,
            "category": "Wearables",
            "inStock": true,
            "specs": {
                "display": "AMOLED",
                "batteryLife": "7 days",
                "waterResistant": "5ATM"
            }
        },
        {
            "id": 9,
            "name": "Blaze SSD 1TB",
            "brand": "SpeedDisk",
            "price": 129.99,
            "category": "Storage",
            "inStock": true,
            "specs": {
                "interface": "NVMe PCIe 3.0",
                "readSpeed": "3500MB/s",
                "writeSpeed": "3000MB/s"
            }
        },
        {
            "id": 10,
            "name": "NanoPod Wireless Earbuds",
            "brand": "SoundBite",
            "price": 89.99,
            "category": "Audio",
            "inStock": true,
            "specs": {
                "batteryLife": "6 hours",
                "chargingCase": true,
                "bluetoothVersion": "5.2"
            }
        }
    ]

    return (
        <div className="bg-red-200 grid grid-cols-5 px-10 gap-4 py-4">
            {
                allProducts.map((product) => <div key={product.id} className="max-w-[350px] space-y-4 rounded-lg p-6 shadow-lg md:w-[350px] bg-[#18181B]">
                    <img
                        width={400}
                        height={400}
                        className="h-[275px] w-[350px] rounded-lg object-cover"
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                        alt="card navigate ui"
                    />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold">{product.name}</h1>
                        <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
                        <div className="text-lg font-semibold">${product.price}</div>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">Add to Cart</button>
                        <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">
                            <Link href={`/products/${product?.name}`}>View Details</Link>
                        </button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ProductsPage